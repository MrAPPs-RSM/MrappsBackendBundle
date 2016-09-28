<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

abstract class TranslatedEntity
{
    // /**
    //  * @ORM\OneToMany(targetEntity="ENTITY_LANG", mappedBy="padre")
    //  */
    protected $traduzioni;

    public function hasTranslations()
    {
        return count($this->traduzioni) > 0;
    }
}

