<?php

namespace Mrapps\BackendBundle\EventListener;

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Mapping\OneToOne;
use Mrapps\BackendBundle\Entity\Draft;
use Doctrine\ORM\EntityManager;
use Mrapps\BackendBundle\Model\DraftInterface;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\UnitOfWork;

class DraftListener
{
    private $em;
    private $draftClass = 'Mrapps\\BackendBundle\\Entity\\Draft';
    private $oneToOneClass = 'Doctrine\\ORM\\Mapping\\OneToOne';
    private $manyToOneClass = 'Doctrine\\ORM\\Mapping\\ManyToOne';
    private $oneToManyClass = 'Doctrine\\ORM\\Mapping\\OneToMany';


    private function getDraft(Draft $entity = null) {
        return $this->getOther($entity, false);
    }

    private function getPublished(Draft $entity = null) {
        return $this->getOther($entity, true);
    }

    private function getOther(Draft $entity = null, $forcePublished = null) {

        if($entity !== null) {

            if($forcePublished !== null) {
                $published = $forcePublished;
            }else {
                $published = !$entity->getPublished();
            }

            if($forcePublished !== null && $entity->getPublished() == $published) {
                return $entity;
            }

            $id = $entity->getId();

            if($id != null) {

                $class = get_class($entity);

                $params = array(
                    'id' => $id,
                    'other' => $entity,
                    'published' => $published,
                );
                $result = $this->em->createQuery("
                    SELECT a
                    FROM {$class} a
                    WHERE a.id != :id
                    AND a.other = :other
                    AND a.published = :published
                ")->setMaxResults(1)->setParameters($params)->execute();

                return (count($result) > 0) ? $result[0] : null;
            }
        }

        return null;
    }

    private function setRelazioni(UnitOfWork $uow = null, $bozza = null, $pubblicata = null) {

        /** @var $bozza Draft */
        /** @var $pubblicata Draft */
        if($uow !== null && $bozza !== null && $pubblicata !== null) {

            $reader = new AnnotationReader();

            /*
             * Procedura 1: ciclo le property di $pubblicata
             *
             * Per ogni OneToOne o ManyToOne (escluso "other"):
             * - se l'entity dall'altra parte è di tipo Draft e published=0, modifico la relazione verso l'entity published=1 (se esiste già)
             *
             */
            $objPubblicata = new \ReflectionObject($pubblicata);
            $propsPubblicata = $objPubblicata->getProperties();

            foreach($propsPubblicata as $p) {

                //Considera le property OneToOne o ManyToOne (esclusa "other")
                $annOneToOne    = $reader->getPropertyAnnotation($p, $this->oneToOneClass);
                $annotManyToOne = $reader->getPropertyAnnotation($p, $this->manyToOneClass);


                if($p->name != 'other' && ($annOneToOne != null || $annotManyToOne != null)) {

                    //Lettura entity relazionata
                    $p->setAccessible(true);
                    $relazione = $p->getValue($pubblicata);
                    if($relazione == null) {
                        $relazione = $p->getValue($bozza);
                    }

                    //Estrae la relativa entity "pubblicata" (se esiste)
                    $relazionePubblicata = $this->getPublished($relazione);

                    //Se la trova, punta alla nuova entity
                    if($relazionePubblicata !== null) {

                        $p->setValue($pubblicata, $relazionePubblicata);
                        $p->setAccessible(false);

                        $this->em->persist($pubblicata);
                        $this->em->flush($pubblicata);
                        $this->computeChangeSet($uow, $pubblicata);
                    }
                }
            }

            /*
             * Procedura 2: ciclo le property di $bozza
             *
             * Per ogni OneToMany ciclo l'array dei "figli"
             * - per ogni entity: se è di tipo Draft e published=1, modifico la relazione inversa verso $pubblicata
             *
             */
            $objBozza = new \ReflectionObject($bozza);
            $propsBozza = $objBozza->getProperties();

            foreach($propsBozza as $p) {

                $annot = $reader->getPropertyAnnotation($p, $this->oneToManyClass);

                if($p->name != 'other' && $annot !== null) {

                    $mappedBy = property_exists($annot, 'mappedBy') ? trim($annot->mappedBy) : '';
                    if(strlen($mappedBy) > 0) {

                        //Lettura entity relazionata
                        $p->setAccessible(true);
                        $array = $p->getValue($bozza);

                        if($array !== null && is_array($array) && count($array) > 0) {
                            foreach($array as $relazione) {

                                $relazioneClass = get_class($relazione);
                                if(is_subclass_of($relazioneClass, $this->draftClass) && $relazione->getPublished() == true) {

                                    $objRelazione = new \ReflectionObject($relazione);
                                    $propRelazione = $objRelazione->getProperty($mappedBy);

                                    if($propRelazione !== null) {
                                        $propRelazione->setAccessible(true);
                                        $propRelazione->setValue($relazione, $pubblicata);
                                        $propRelazione->setAccessible(false);

                                        $this->em->persist($relazione);
                                        $this->em->flush($relazione);
                                        $this->computeChangeSet($uow, $relazione);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return true;
        }

        return false;
    }
    
    
    public function onFlush(OnFlushEventArgs $args) {
        
        $this->em = $args->getEntityManager();
        
        //Rimuovo l'evento onFlush per evitare di finire in un ciclo infinito con i flush() dentro questo evento
        $eventManager = $this->em->getEventManager();
        $eventManager->removeEventListener('onFlush', $this);
        
        $uow = $this->em->getUnitOfWork();
        $entities = array();
        
        foreach ($uow->getScheduledEntityUpdates() as $entity) {
            $entities[] = $entity;
        }
        
        foreach ($uow->getScheduledEntityInsertions() as $entity) {
            $entities[] = $entity;
        }
        
        foreach ($entities as $bozza) {
            
            /** @var $bozza Draft */
            $class = ($bozza !== null && is_object($bozza)) ? get_class($bozza) : '';

            //Considera solo le entity Draft
            if (strlen($class) > 0 && is_subclass_of($class, $this->draftClass)) {

                $pubblicata = $bozza->getOther();

                //Nuova Entity bozza?
                if($pubblicata == null) {

                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                    /** @var $pubblicata Draft */
                    $pubblicata = clone($bozza);
                    $this->em->detach($pubblicata);

                    $pubblicata->resetId();
                    $pubblicata->setPublished(1);
                    $pubblicata->setVisible(0); //pubblicata ma non ancora visibile (l'utente non ha ancora cliccato su "pubblica")
                    $pubblicata->setOther($bozza);

                    $this->em->persist($pubblicata);
                    $this->em->flush($pubblicata);
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                    $bozza->setPublished(0);
                    $bozza->setVisible(1);
                    $bozza->setOther($pubblicata);
                    $this->em->persist($bozza);
                    $this->em->flush($bozza);
                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
                
                $this->computeChangeSet($uow, $pubblicata);
                $this->computeChangeSet($uow, $bozza);

                //Set relazioni corrette
                $this->setRelazioni($uow, $bozza, $pubblicata);
            }
        }
        
        //Riaggiungo l'evento onFlush
        $eventManager->addEventListener('onFlush', $this);
    }
    
    public function computeChangeSet($uow = null, $entity = null) {
        
        if($uow !== null && $entity !== null) {
            
            $meta = $this->em->getClassMetadata(get_class($entity));
            $uow->computeChangeSet($meta, $entity);
            $uow->recomputeSingleEntityChangeSet($meta, $entity);
            
            return true;
        }
        
        return false;
    }
            
}