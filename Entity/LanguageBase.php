<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks
 */
class LanguageBase {

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="Language")
     * @ORM\JoinColumn(name="id_lang", referencedColumnName="id")
     */
    private $lang;

    /**
     * @var boolean
     *
     * @ORM\Column(name="tradotto", type="boolean")
     */
    protected $tradotto;
    
    /**
     * Get id
     *
     * @return integer
     */
    public function getId() {
        return $this->id;
    }

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

    /**
     * @return boolean
     */
    public function isTradotto()
    {
        return $this->tradotto;
    }

    /**
     * @param boolean $tradotto
     */
    public function setTradotto($tradotto)
    {
        $this->tradotto = $tradotto;
    }
}
