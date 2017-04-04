<?php

namespace Mrapps\BackendBundle\Services;

use Mrapps\BackendBundle\Interfaces\FileInterface;
use Mrapps\BackendBundle\Interfaces\PublicUrlProviderInterface;
use Symfony\Component\HttpFoundation\RequestStack;

use Gaufrette\Filesystem;
use Gaufrette\Adapter\Local as LocalAdapter;
use Gaufrette\Adapter\AwsS3 as AwsAdapter;

class PublicUrlProvider
    implements PublicUrlProviderInterface
{

    /**@var FileInterface $file */
    private $file;

    /**@var RequestStack $requestStack */
    private $requestStack;

    /**@var ParametersHandler $parametersHandler */
    private $parametersHandler;

    private $baseUrl;

    public function __construct(
        RequestStack $requestStack,
        ParametersHandler $parametersHandler
    )
    {
        $this->parametersHandler = $parametersHandler;
        if ($parametersHandler->bundleMrappsAmazonExists()) {
            if ($parametersHandler->getParameter("mrapps_amazon.cdn.enable")) {
                $this->baseUrl = $parametersHandler->getParameter("mrapps_amazon.cdn.url");
            } else {
                $this->baseUrl = "https://s3-" .
                    $parametersHandler->getParameter("mrapps_amazon.parameters.region") .
                    ".amazonaws.com/" .
                    $parametersHandler->getParameter("mrapps_amazon.parameters.default_bucket")
                    . "/";
            }
        } else {
            $this->requestStack = $requestStack;
            $request = $requestStack->getCurrentRequest();
            
            if ($request != null)
            $this->baseUrl = $request->getSchemeAndHttpHost() . "/";
        }
    }

    private function ensureFileEntityExists()
    {
        if (!isset($this->file)
            || !$this->file instanceof FileInterface
        ) {
            throw new \RuntimeException(
                'Entity not found or Invalid!'
            );
        }
    }

    public function setFileEntity(FileInterface $file)
    {
        $this->file = $file;

        return $this;
    }

    public function getBaseUrl()
    {
        return $this->baseUrl;
    }

    public function getRelativeUri()
    {
        if ($this->parametersHandler->bundleMrappsAmazonExists()) {
            return str_replace("uploads/", "", $this->file->getRelativePath());
        }

        return $this->file->getRelativePath();
    }

    public function getUri()
    {
        $this->ensureFileEntityExists();

        return $this->baseUrl . $this->getRelativeUri();
    }

    public function getRealPathFromFileEntity()
    {
        $this->ensureFileEntityExists();

        $fileName = $this->file->getOriginalName();
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
