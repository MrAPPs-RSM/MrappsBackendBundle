<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Mrapps\BackendBundle\Repository\LanguageRepository")
 * @ORM\Table(name="mrapps_backend_language")
 */
class Language extends Base
{
    /**
     * @ORM\Column(name="name", type="string", length=254, nullable=false)
     * @Assert\Length(max=254)
     */
    protected $name;

    /**
     * @ORM\Column(name="iso_code", type="string", length=2, nullable=false)
     * @Assert\Length(max=2)
     */
    protected $isoCode;

    /**
     * @ORM\Column(name="language_code", type="string", length=10, nullable=true)
     * @Assert\Length(max=10)
     */
    protected $languageCode;

    /**
     * @ORM\Column(name="date_format", type="string", length=32, nullable=true)
     * @Assert\Length(max=32)
     */
    protected $dateFormat;

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Language
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set isoCode
     *
     * @param string $isoCode
     *
     * @return Language
     */
    public function setIsoCode($isoCode)
    {
        $this->isoCode = $isoCode;

        return $this;
    }

    /**
     * Get isoCode
     *
     * @return string
     */
    public function getIsoCode()
    {
        return $this->isoCode;
    }

    /**
     * Set languageCode
     *
     * @param string $languageCode
     *
     * @return Language
     */
    public function setLanguageCode($languageCode)
    {
        $this->languageCode = $languageCode;

        return $this;
    }

    /**
     * Get languageCode
     *
     * @return string
     */
    public function getLanguageCode()
    {
        return $this->languageCode;
    }

    /**
     * Set dateFormat
     *
     * @param string $dateFormat
     *
     * @return Language
     */
    public function setDateFormat($dateFormat)
    {
        $this->dateFormat = $dateFormat;

        return $this;
    }

    /**
     * Get dateFormat
     *
     * @return string
     */
    public function getDateFormat()
    {
        return $this->dateFormat;
    }
}
