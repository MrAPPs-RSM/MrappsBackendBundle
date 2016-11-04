<?php

namespace Mrapps\BackendBundle\Services;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;


class ParametersHandler
{
    /**@var ParameterBagInterface $parameters */
    private $parameters;

    public function setParameters(ParameterBagInterface $params)
    {
        $this->parameters = $params;
    }

    public function getParameter($name)
    {
        return $this->parameters->get($name);
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
