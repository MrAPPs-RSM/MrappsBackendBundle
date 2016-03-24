<?php

namespace Mrapps\BackendBundle\Handler;

use Symfony\Component\BrowserKit\Request;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Mrapps\BackendBundle\Classes\Utils;

class LanguageHandler
{
    private $request;
    private $container;

    public function setRequest( ContainerInterface $container ) {

        $this->container = $container;
        $this->request = $container->get('request');
    }

    public function getTopNavBar()
    {

        $router = $this->container->get('router');
        $route = $router->match($this->request->getRequestURI())['_route'];

        return $this->container->get('templating')->renderResponse('MrappsBackendBundle:Default:top-navbar.html.twig',
            array("logo_path" => $this->container->hasParameter('mrapps_backend.logo_path') ? $this->container->getParameter('mrapps_backend.logo_path') : null,
                "default_route_name" => Utils::getDefaultRouteForUser($this->container, $this->request->getUser()),
                "languages" => Utils::getLanguages(),
                "routeName" => $route
            ))->getContent();
    }
}