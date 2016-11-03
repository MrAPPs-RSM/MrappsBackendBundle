<?php

namespace Mrapps\BackendBundle\Services;

use Mrapps\BackendBundle\Entity\File;

interface PublicUrlProviderInterface
{
    public function setFileEntity(File $file);

    public function getUri();
}
