<?php

namespace Mrapps\EventListener\DraftListener;

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Mapping\OneToOne;
use Mrapps\BackendBundle\Entity\Draft;
use Doctrine\ORM\EntityManager;
use Mrapps\BackendBundle\Model\DraftInterface;

class DraftListener
{
    private $em;
    private $draftClass = 'Mrapps\\BackendBundle\\Entity\\Draft';
    private $oneToOneClass = 'Doctrine\\ORM\\Mapping\\OneToOne';
    private $manyToOneClass = 'Doctrine\\ORM\\Mapping\\ManyToOne';
    private $oneToManyClass = 'Doctrine\\ORM\\Mapping\\OneToMany';

    public function __construct(EntityManager $em) {
        $this->em = $em;
    }

    private function getDraft(Draft $entity) {
        return $this->getOther($entity, false);
    }

    private function getPublished(Draft $entity) {
        return $this->getOther($entity, true);
    }

    private function getOther(Draft $entity, $forcePublished = null) {

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
            $draftId = $entity->getDraftId();

            if($id != null && $draftId != null) {

                $class = get_class($entity);

                $params = array(
                    'id' => $id,
                    'draftId' => $draftId,
                    'published' => $published,
                );
                $result = $this->em->createQuery("
                    SELECT a
                    FROM {$class} a
                    WHERE a.id != :id
                    AND a.draftId = :draftId
                    AND a.published = :published
                ")->setMaxResults(1)->setParameters($params)->execute();

                return (count($result) > 0) ? $result[0] : null;
            }
        }

        return null;
    }

    private function setRelazioni($bozza = null, $pubblicata = null) {

        /** @var $bozza Draft */
        /** @var $pubblicata Draft */
        if($bozza !== null && $pubblicata !== null) {

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

                $propertyName = $p->name;

                //Considera le property OneToOne o ManyToOne (esclusa "other")
                $annOneToOne    = $reader->getPropertyAnnotation($p, $this->oneToOneClass);
                $annotManyToOne = $reader->getPropertyAnnotation($p, $this->manyToOneClass);


                if($propertyName != 'other' && ($annOneToOne != null || $annotManyToOne != null)) {

                    //Lettura entity relazionata
                    $p->setAccessible(true);
                    $relazione = $p->getValue($pubblicata);

                    //Estrae la relativa entity "pubblicata" (se esiste)
                    $relazionePubblicata = $this->getPublished($relazione);

                    //Se la trova, punta alla nuova entity
                    if($relazionePubblicata !== null) {

                        $p->setValue($pubblicata, $relazionePubblicata);
                        $p->setAccessible(false);

                        $this->em->persist($pubblicata);
                        $this->em->flush($pubblicata);
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

                $annot = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\OneToMany');

                if($p->name != 'other' && $annot !== null) {

                    $mappedBy = property_exists($annot, 'mappedBy') ? trim($annot->mappedBy) : '';
                    if(strlen($mappedBy) > 0) {

                        //Lettura entity relazionata
                        $p->setAccessible(true);
                        $array = $p->getValue($bozza);

                        if($array !== null && count($array) > 0) {
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


    public function postUpdate(LifecycleEventArgs $args)
    {
        /** @var $bozza Draft */
        $bozza = $args->getEntity();
        $class = ($bozza !== null && is_object($bozza)) ? get_class($bozza) : '';

        //Considera solo le entity Draft
        if (strlen($class) > 0 && is_subclass_of($class, $this->draftClass)) {

            //Nuova Entity bozza?
            if($bozza->getOther() == null) {

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                /** @var $pubblicata Draft */
                $pubblicata = clone($bozza);
                $this->em->detach($pubblicata);

                $pubblicata->setId(null);
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

                //Set relazioni corrette
                $this->setRelazioni($bozza, $pubblicata);
            }
        }
    }
}