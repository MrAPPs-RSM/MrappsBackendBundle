<?php

namespace Mrapps\BackendBundle\Services;

use Mrapps\BackendBundle\Exception\TranslationNotFoundException;
use Mrapps\BackendBundle\Interfaces\FileInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\ORM\EntityManager;

class EntityMerger
{
    private $row;

    private $translator;

    private $tokenStorage;

    private $requestStack;

    private $manager;

    private $publicUrlProvider;

    private $defaultLocale;

    private $areAllLanguagesRequested;

    public function __construct(
        Translator $translator,
        TokenStorage $tokenStorage,
        RequestStack $requestStack,
        PublicUrlProvider $publicUrlProvider
    )
    {
        $this->translator = $translator;
        $this->tokenStorage = $tokenStorage;
        $this->requestStack = $requestStack;
        $this->manager = $this->translator->getManager();
        $this->publicUrlProvider = $publicUrlProvider;

        $this->defaultLocale = null;
        $this->areAllLanguagesRequested = false;
    }

    public function enableRequestAllLanguages()
    {
        $this->areAllLanguagesRequested = true;
    }

    public function disableRequestAllLanguages()
    {
        $this->areAllLanguagesRequested = false;
    }


    public function setDefaultLocale($locale)
    {
        $this->defaultLocale = $locale;
        $this->setLocale($locale);
    }

    public function setLocale($locale)
    {

        if (null === $this->defaultLocale)
            $this->setDefaultLocale($locale);
        else
            $this->translator->setLocale($locale);
    }

    public function resetLocale()
    {
        $this->setLocale($this->defaultLocale);
    }

    public function initRow()
    {
        $this->row = [];
    }

    public function merge($entity, $normalFields, $transFields)
    {

        $index = count($this->row);

        $this->mergeNormalFields($entity, $index, $normalFields);

        $this->mergeTransFields($entity, $index, $transFields);

        $this->mergeAllLanguagesFields($entity, $index, $transFields);
    }

    private function mergeNormalFields($entity, $index, $normalFields)
    {
        foreach ($normalFields as $attribute => $accessor) {

            $value = $entity->$accessor();

            if ($value instanceof FileInterface) {
                $this->row[$index][$attribute] = isset($value) ?
                    $this->publicUrlProvider->setFileEntity($value)
                        ->getUri()
                    : null;
            } else {
                $this->row[$index][$attribute] = $value;
            }
        }
    }

    private function mergeTransFields($entity, $index, $transFields, $overrideLocale = null)
    {

        $locale = (null === $overrideLocale) ? $this->defaultLocale : $overrideLocale;

        $this->setLocale($locale);

        try {
            $translatedEntity = $this->translator->getTranslation($entity);
        } catch (TranslationNotFoundException $exception) {
            return;
        }

        if (!$translatedEntity) {
            throw new \RuntimeException(
                'Translation not found for entity '
                . get_class($entity)
                . ' with id '
                . $entity->getId()
            );
        }

        foreach ($transFields as $attribute => $accessor) {
            if (is_string($accessor)) {
                if (null !== $overrideLocale) {
                    $this->row[$index]['_languages'][$locale][$attribute] = $translatedEntity->$accessor();
                } else {
                    $this->row[$index][$attribute] = $translatedEntity->$accessor();
                }

            } else {
                $roles = $this->tokenStorage->getToken()->getRoles();

                $grantedAccessorFound = false;
                foreach ($roles as $role) {
                    if (isset($accessor[$role->getRole()])) {
                        $grantedAccessor = $accessor[$role->getRole()];
                        if (null !== $overrideLocale) {
                            $this->row[$index]['_languages'][$locale][$attribute] = $translatedEntity->$grantedAccessor();
                        } else {
                            $this->row[$index][$attribute] = $translatedEntity->$grantedAccessor();
                        }
                        $grantedAccessorFound = true;
                    }
                }

                if ($grantedAccessorFound == false) {
                    if (isset($accessor['*'])) {
                        $grantedAccessor = $accessor['*'];
                        if (null !== $overrideLocale) {
                            $this->row[$index]['_languages'][$locale][$attribute] = $translatedEntity->$grantedAccessor();
                        } else {
                            $this->row[$index][$attribute] = $translatedEntity->$grantedAccessor();
                        }
                    }
                }
            }
        }
    }

    private function mergeAllLanguagesFields($entity, $index, $transFields)
    {

        if ($this->areAllLanguagesRequested) {
            $availableLanguages = $this->manager->getRepository('MrappsBackendBundle:Language')->getAvailableLanguages();
            foreach ($availableLanguages as $lang) {
                $this->mergeTransFields($entity, $index, $transFields, $lang->getIsoCode());
            }
        }
    }

    public function getRow()
    {
        return $this->row;
    }

    private function getMergedEntityAsArray(TranslatedEntity $entity)
    {
        $locale = $this->get('request_stack')
            ->getCurrentRequest()
            ->getLocale();

        $merger = $this->get('mrapps.backend.merger');
        $merger->setLocale($locale);
        $merger->initRow();
        $merger->merge(
            $entity,
            $baseFields = [
                'id' => 'getId',
            ],
            $translatedFields = [
                'name' => 'getName',
                'logo' => 'getLogo',
            ]
        );

        return $merger->getRow();
    }
}
