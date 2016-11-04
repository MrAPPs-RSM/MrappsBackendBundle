<?php

namespace Mrapps\BackendBundle\Services;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;


class ParametersHandler
{
    /**@var ParameterBagInterface $parameterBag */
    private $parameterBag;

    public function setParameterBag(ParameterBagInterface $params)
    {
        $this->parameterBag = $params;
    }

    public function getParameter($name)
    {
        return $this->parameterBag->get($name);
    }

    public function bundleExists($bundleName)
    {
        if (!empty($bundleName)) {
            $bundles = $this->getParameter('kernel.bundles');
            return array_key_exists($bundleName, $bundles);
        }

        return false;
    }

    public function bundleMrappsAmazonExists()
    {
        return $this->bundleExists('MrappsAmazonBundle');
    }
}
