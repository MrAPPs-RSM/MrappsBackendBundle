<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mrapps\BackendBundle\Classes\Utils;

/**
 * @ORM\Entity(repositoryClass="BackendBundle\Entity\ImmagineRepository")
 * @ORM\Table(name="immagine")
 */
class Immagine extends Base
{
    /**
     * @ORM\Column(name="url", type="string", length=254, nullable=false)
     * @Assert\Length(max=254)
     */
    protected $url;

    /**
     * @Accessor(getter="getUrlCompleto")
     */
    protected $urlCompleto;

    /**
     * Set url
     *
     * @param string $url
     * @return Immagine
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string 
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Get urlCompleto
     *
     * @return string
     */
    public function getUrlCompleto()
    {
        return Utils::getCdnUrl().'/jpg/'.$this->url;
    }
}
