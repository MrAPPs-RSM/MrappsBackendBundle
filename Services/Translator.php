<?php

namespace Mrapps\BackendBundle\Services;

use Doctrine\ORM\EntityManager;
use Mrapps\BackendBundle\Entity\TranslatedEntity;
use Mrapps\BackendBundle\Exception\TranslationNotFoundException;

class Translator
{
    private $locale;

    private $manager;

    public function __construct(
        EntityManager $manager
    )
    {
        $this->manager = $manager;
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;

        $this->language = $this->manager
            ->getRepository('MrappsBackendBundle:Language')
            ->findOneBy([
                'isoCode' => $this->locale,
            ]);
    }

    public function getManager()
    {
        return $this->manager;
    }

    public function getTranslation(TranslatedEntity $entity)
    {
        if (!isset($this->locale)) {
            throw new \RuntimeException(
                'Undefined locale'
            );
        }

        if (!$entity->hasTranslations()) {
            throw new \RuntimeException(
                'Missing translations'
            );
        }

        $className = get_class($entity);

        if (strpos($className, 'Proxies') !== false) {
            $proxyClassName = get_class($entity);
            $className = $this->manager->getClassMetadata($proxyClassName)->rootEntityName;
        }

        $parts = explode('_', str_replace('\\', '_', $className));
        $unifiedEntityIdentifier = "$parts[0]:$parts[2]";

        $translatedEntity = $this->manager
            ->getRepository($unifiedEntityIdentifier . 'Lang')
            ->findOneBy([
                'padre' => $entity,
                'lang' => $this->language,
            ]);

        if (!$translatedEntity) {
            throw new TranslationNotFoundException(
                'Translation not found for '
                . get_class($entity) . ' entity '
                . ' with id ' . $entity->getId()
                . ' in language ' . ($this->language !== null ? $this->language->getIsoCode() : '')
            );
        }

        return $translatedEntity;
    }
}
