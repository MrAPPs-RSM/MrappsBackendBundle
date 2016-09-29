<?php

namespace Mrapps\BackendBundle\Services;

class EntityMerger
{
    private $row;

    private $translator;

    public function __construct(
        Translator $translator
    ) {
        $this->translator = $translator;
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

        $entity = $this->translator->getTranslation($entity);
        foreach ($transFields as $attribute => $accessor) {
            $this->row[$index][$attribute] = $entity->$accessor();
        }
    }

    public function getRow()
    {
        return $this->row;
    }
}
