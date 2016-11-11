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

    private $amazon;

    public function __construct(
        EntityManager $manager,
        PublicUrlProviderInterface $urlProvider,
        \AppKernel $kerne
    ) {
        $this->manager = $manager;
        $this->urlProvider = $urlProvider;
        $this->zipArchive = new \ZipArchive();
        $this->kernel = $kernel;
    }

    public function setAmazonS3Service(S3Handler $amazon)
    {
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

        $this->zipArchive->addFromString(
            $this->urlProvider->getRelativeUri(),
            $this->getFileContent($file)
        );
    }

    private function getFileContent(FileInterface $file)
    {
        if ($this->amazon) {
            $amazonProtectedUrl = $this->amazon->getObjectUrlWithExpire(
                $file->getAmazonS3Key(),
                '+10 minutes'
            );

            $fileContent = @file_get_contents(
                $amazonProtectedUrl
            );
        } else {
            $fileContent = @file_get_contents(
                $this->kernel->getRootDir()
                . '/../web/uploads/'
                . $this->urlProvider->getRelativeUri()
            );
        }

        if (!$fileContent) {
            throw new \RuntimeException(
                'I cant get file content'
            );
        }

        return $fileContent;
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
