<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks
 */
class LanguageBase extends Base {

    /**
     * @ORM\ManyToOne(targetEntity="Language")
     * @ORM\JoinColumn(name="id_lang", referencedColumnName="id")
     */
    private $lang;


    /**
     * Set lang
     *
     * @param \Mrapps\BackendBundle\Entity\Language $lang
     *
     * @return LanguageBase
     */
    public function setLang(\Mrapps\BackendBundle\Entity\Language $lang = null)
    {
        $this->lang = $lang;

        return $this;
    }

    /**
     * Get lang
     *
     * @return \Mrapps\BackendBundle\Entity\Language
     */
    public function getLang()
    {
        return $this->lang;
    }
}
