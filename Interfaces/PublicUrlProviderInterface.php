<?php

namespace Mrapps\BackendBundle\Interfaces;

use Mrapps\BackendBundle\Interfaces\FileInterface;

interface PublicUrlProviderInterface
{
    public function setFileEntity(FileInterface $file);

    public function getUri();
}
