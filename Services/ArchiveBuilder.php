<?php

namespace Mrapps\BackendBundle\Services;

use Doctrine\ORM\EntityManager;

class ArchiveBuilder
{
    private $manager;

    private $zipArchive;

    private $archiveName;

    private $isArchiveCreated = false;

    public function __construct(EntityManager $manager)
    {
        $this->manager = $manager;
        $this->zipArchive = new \ZipArchive();
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

    public function addFromString($fileName, $content)
    {
        $this->zipArchive->addFromString($fileName, $content);
    }

    public function close()
    {
        $this->zipArchive->close();
    }
}
