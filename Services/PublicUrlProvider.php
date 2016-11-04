<?php

namespace Mrapps\BackendBundle\Services;

use Mrapps\BackendBundle\Entity\File;
use Symfony\Component\HttpFoundation\RequestStack;

class PublicUrlProvider
    implements PublicUrlProviderInterface
{

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

                $this->baseUrl = "https://" . $parametersHandler->getParameter("mrapps_amazon.parameters.default_bucket") . ".s3.amazonaws.com/";
            }
        } else {
            $this->requestStack = $requestStack;

            $request = $requestStack->getCurrentRequest();
            $this->baseUrl = $request->getSchemeAndHttpHost() . "/";
        }
    }

    private function ensureFileEntityExists()
    {
        if (!isset($this->file)) {
            throw new \RuntimeException(
                'Entity not found!'
            );
        }
    }

    public function setFileEntity(File $file)
    {
        $this->file = $file;

        return $this;
    }

    public function getBaseUrl()
    {
        return $this->baseUrl;
    }

    public function getUri()
    {
        $this->ensureFileEntityExists();

        return $this->baseUrl . $this->file->getOriginalName();
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
