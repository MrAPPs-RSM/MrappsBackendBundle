<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mrapps\BackendBundle\Interfaces\FileInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Mrapps\BackendBundle\Repository\FileRepository")
 * @ORM\Table(name="mrapps_backend_files")
 */
class File extends Base implements FileInterface
{
    /**
     * @ORM\Column(name="s3_key", type="string", length=1000)
     * @Assert\Length(max=1000)
     */
    protected $s3Key;


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
     * @ORM\Column(name="mime_type", type="string", length=50, nullable=true)
     * @Assert\Length(max=50)
     */
    protected $mimeType;


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

    /**
     * Set mimeType
     *
     * @param string $mimeType
     *
     * @return File
     */
    public function setMimeType($mimeType)
    {
        $this->mimeType = $mimeType;

        return $this;
    }

    /**
     * Get mimeType
     *
     * @return string
     */
    public function getMimeType()
    {
        return $this->mimeType;
    }

    /**
     * Set s3Key
     *
     * @param string $s3Key
     *
     * @return File
     */
    public function setS3Key($s3Key)
    {
        $this->s3Key = $s3Key;

        return $this;
    }

    /**
     * Get s3Key
     *
     * @return string
     */
    public function getS3Key()
    {
        return $this->s3Key;
    }

    public function getRelativePath()
    {
        return $this->getS3Key();
    }

    public function getAmazonS3Key()
    {
        return $this->getS3Key();
    }
}
