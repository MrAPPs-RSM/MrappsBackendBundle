<?php

namespace Mrapps\BackendBundle\Services;

use Mrapps\BackendBundle\Exception\TranslationNotFoundException;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\HttpFoundation\RequestStack;

class EntityMerger
{
    private $row;

    private $translator;

    private $tokenStorage;

    private $requestStack;

    public function __construct(
        Translator $translator,
        TokenStorage $tokenStorage,
        RequestStack $requestStack
    ) {
        $this->translator = $translator;
        $this->tokenStorage = $tokenStorage;
        $this->requestStack = $requestStack;
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

        try {
            $translatedEntity = $this->translator->getTranslation($entity);
        } catch (TranslationNotFoundException $exception) {
            return;
        }

        foreach ($normalFields as $attribute => $accessor) {
            $this->row[$index][$attribute] = $entity->$accessor();
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
                'name'=>'getName',
                'logo'=>'getLogo',
            ]
        );

        return $merger->getRow();
    }
}
