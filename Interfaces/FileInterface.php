<?php

namespace Mrapps\BackendBundle\Interfaces;

interface FileInterface
{
    public function getRelativePath();

    public function getAmazonS3Key();
}
