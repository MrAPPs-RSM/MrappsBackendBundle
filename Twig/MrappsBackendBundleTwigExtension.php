<?php

namespace Mrapps\BackendBundle\Twig;

use Twig_Extension;
use Mrapps\BackendBundle\Classes\Utils;

class MrappsBackendBundleTwigExtension extends Twig_Extension
{

    private $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    /**
     * Returns a list of functions to add to the existing list.
     *
     * @return array An array of functions
     */
    public function getFunctions()
    {
        return array();
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('quote', function ($string) {
                return Utils::replaceQuote($string);
            }),
            new \Twig_SimpleFilter('check_liip_exists', function () {

                return Utils::bundleLiipExists($this->container);
            }),
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'mrapps_backendbundle_twig_extension';
    }
}