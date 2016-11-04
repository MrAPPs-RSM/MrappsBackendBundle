<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mrapps\BackendBundle\Interfaces\FileInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Mrapps\BackendBundle\Repository\ImmagineRepository")
 * @ORM\Table(name="mrapps_backend_images")
 */
class Immagine extends Base
    implements \JsonSerializable, FileInterface
{
    /**
     * @ORM\Column(name="url", type="string", length=254, nullable=false)
     * @Assert\Length(max=254)
     */
    protected $url;

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

    public function jsonSerialize()
    {
        return [
            'url' => $this->getUrl()
        ];
    }

    public function getRelativePath()
    {
        return $this->getUrl();
    }
}
