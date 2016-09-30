<?php

namespace Mrapps\BackendBundle\Services;

use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class EntityMerger
{
    private $row;

    private $translator;

    private $tokenStorage;

    public function __construct(
        Translator $translator,
        TokenStorage $tokenStorage
    ) {
        $this->translator = $translator;
        $this->tokenStorage = $tokenStorage;
    }

    public function setLocale($locale)
    {
        $this->translator->setLocale($locale);
    }

    public function initRow()
    {
        $this->row = [];
    }

    public function merge($entity, $normalFields, $transFields)
    {
        $index = count($this->row);

        foreach ($normalFields as $attribute => $accessor) {
            $this->row[$index][$attribute] = $entity->$accessor();
        }

        $translatedEntity = $this->translator->getTranslation($entity);

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
                $this->row[$index][$attribute] = $translatedEntity->$accessor();
            } else {
                $roles = $this->tokenStorage->getToken()->getRoles();

                $grantedAccessorFound = false;
                foreach ($roles as $role) {
                    if (isset($accessor[$role->getRole()])) {
                        $grantedAccessor = $accessor[$role->getRole()];
                        $this->row[$index][$attribute] = $translatedEntity->$grantedAccessor();
                        $grantedAccessorFound = true;
                    }
                }

                if ($grantedAccessorFound == false) {
                    if (isset($accessor['*'])) {
                        $grantedAccessor = $accessor['*'];
                        $this->row[$index][$attribute] = $translatedEntity->$grantedAccessor();
                    }
                }
            }

        }
    }

    public function getRow()
    {
        return $this->row;
    }
}
