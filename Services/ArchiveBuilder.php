<?php

namespace Mrapps\BackendBundle\Services;

use Doctrine\ORM\EntityManager;
use Mrapps\BackendBundle\Interfaces\FileInterface;
use Mrapps\BackendBundle\Interfaces\PublicUrlProviderInterface;
use Mrapps\AmazonBundle\Handler\S3Handler;

class ArchiveBuilder
{
    private $manager;

    private $zipArchive;

    private $archiveName;

    private $isArchiveCreated = false;

    private $urlProvider;

    private $kernel;

    public function __construct(
        EntityManager $manager,
        PublicUrlProviderInterface $urlProvider,
        \AppKernel $kernel,
        S3Handler $amazon
    ) {
        $this->manager = $manager;
        $this->urlProvider = $urlProvider;
        $this->zipArchive = new \ZipArchive();
        $this->kernel = $kernel;
        $this->amazon = $amazon;
    }

    public function setArchiveName($archiveName)
    {
        $this->archiveName = $archiveName;
    }

    private function ensureArchiveNameIsDefined()
    {
        if (!$this->archiveName) {
            throw new \RuntimeException(
                'Archive name is not yet defined!'
            );
        }
    }

    private function createArchive()
    {
        $this->isArchiveCreated = $this->zipArchive
            ->open(
                $this->archiveName,
                \ZipArchive::CREATE
            );
    }

    public function isArchiveCreated()
    {
        return $this->isArchiveCreated;
    }

    public function create()
    {
        $this->ensureArchiveNameIsDefined();
        $this->createArchive();
    }

    public function getArchive()
    {
        return $this->zipArchive;
    }

    public function addFromFileEntity(FileInterface $file)
    {
        $this->ensureArchiveNameIsDefined();

        $this->urlProvider->setFileEntity($file);

        $amazonProtectedUrl = $this->amazon->getObjectUrlWithExpire(
            $file->getAmazonS3Key(),
            '+10 minutes'
        );

        $amazonContent = @file_get_contents(
            $amazonProtectedUrl
        );

        if (!$amazonContent) {
            $localContent = @file_get_contents(
                $this->kernel->getRootDir()
                . '/../web/uploads/'
                . $this->urlProvider->getRelativeUri()
            );
        }

        $this->zipArchive->addFromString(
            $this->urlProvider->getRelativeUri(),
            null != $amazonContent ? $amazonContent : $localContent
        );
    }

    public function addFromString($fileName, $content)
    {
        $this->zipArchive->addFromString($fileName, $content);
    }

    public function close()
    {
        $this->zipArchive->close();
    }
}
