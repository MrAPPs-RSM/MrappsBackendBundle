<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="BackendBundle\Entity\FileRepository")
 * @ORM\Table(name="mrapps_backend_files")
 */
class File extends Base
{
    /**
     * @ORM\Column(name="key", type="string", length=1000)
     * @Assert\Length(max=1000)
     */
    protected $key;


    /**
     * @ORM\Column(name="bucket", type="string", length=1000, nullable=true)
     * @Assert\Length(max=1000)
     */
    protected $bucket;


    /**
     * @ORM\Column(name="original_name", type="string", length=1000, nullable=true)
     * @Assert\Length(max=1000)
     */
    protected $originalName;



    /**
     * Set key
     *
     * @param string $key
     *
     * @return File
     */
    public function setKey($key)
    {
        $this->key = $key;

        return $this;
    }

    /**
     * Get key
     *
     * @return string
     */
    public function getKey()
    {
        return $this->key;
    }

    /**
     * Set originalName
     *
     * @param string $originalName
     *
     * @return File
     */
    public function setOriginalName($originalName)
    {
        $this->originalName = $originalName;

        return $this;
    }

    /**
     * Get originalName
     *
     * @return string
     */
    public function getOriginalName()
    {
        return $this->originalName;
    }

    /**
     * Set bucket
     *
     * @param string $bucket
     *
     * @return File
     */
    public function setBucket($bucket)
    {
        $this->bucket = $bucket;

        return $this;
    }

    /**
     * Get bucket
     *
     * @return string
     */
    public function getBucket()
    {
        return $this->bucket;
    }
}
