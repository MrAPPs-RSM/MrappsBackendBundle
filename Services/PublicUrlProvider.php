<?php

namespace Mrapps\BackendBundle\Services;

use Mrapps\BackendBundle\Entity\File;
use Symfony\Component\HttpFoundation\RequestStack;

class PublicUrlProvider
    implements PublicUrlProviderInterface
{
    private $file;

    private $requestStack;

    public function __construct(
        RequestStack $requestStack
    )
    {
        $this->requestStack = $requestStack;
    }

    public function setFileEntity(File $file)
    {
        $this->file = $file;

        return $this;
    }

    public function getUri()
    {
        if (!$this->file) {
            throw new \RuntimeException();
        }

        $request = $this->requestStack->getCurrentRequest();
        $baseUrl = $request->getSchemeAndHttpHost();

        return $baseUrl . '/'
        . $this->file->getOriginalName();
    }

    public function ensureFileEntityExists($file)
    {
        if (null == $file) {
            throw new \RuntimeException(
                'Entity not found!'
            );
        }
    }

    public function getRealPathFromFileEntity($file)
    {
        $this->ensureFileEntityExists($file);

        $fileName = $file->getOriginalName();
        $filePath = __DIR__
            . '/../../../web/'
            . $fileName;
        $realPath = realpath($filePath);

        if (false === $realPath) {
            throw new \RuntimeException(
                'File ' . $filePath . ' not found!'
            );
        }

        return $realPath;
    }
}
