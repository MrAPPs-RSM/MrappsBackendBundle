<?php

namespace Mrapps\BackendBundle\Handler;

//use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Mrapps\BackendBundle\Classes\Utils;

class LanguageHandler
{
    private $request;
    private $container;

    public function setRequest( ContainerInterface $container ) {

        $this->container = $container;
        try {
            $this->request = $container->get('request');
        }catch(\Exception $e) {
            $this->request = null;
        }

    }

    public function getTopNavBar()
    {
        $router = $this->container->get('router');
        $uri = ($this->request !== null) ? $this->request->getRequestURI() : '';

        $queryParams = array();
        $routeParams = array();
        if(strlen($uri) > 0) {

            //I parametri GET li gestisco a parte, altrimenti $router->match va in crisi
            $qmPos = strpos($uri, '?');
            if($qmPos !== false) {
                $query = substr($uri, $qmPos+1);
                parse_str($query, $queryParams);
                $uri = substr($uri, 0, $qmPos);
            }

            $routeParams = $router->match($uri);
        }

        $route = (isset($routeParams['_route'])) ? $routeParams['_route'] : '';

        //Elimino i parametri che non mi servono
        if(isset($routeParams['_route'])) unset($routeParams['_route']);
        if(isset($routeParams['_controller'])) unset($routeParams['_controller']);
        if(isset($routeParams['_locale'])) unset($routeParams['_locale']);

        //Aggiungo i parametri GET
        $routeParams = array_merge($routeParams, $queryParams);


        return $this->container->get('templating')->renderResponse('MrappsBackendBundle:Default:top-navbar.html.twig',
            array("logo_path" => $this->container->hasParameter('mrapps_backend.logo_path') ? $this->container->getParameter('mrapps_backend.logo_path') : null,
                "default_route_name" => ($this->request !== null) ? Utils::getDefaultRouteForUser($this->container, $this->request->getUser()) : '',
                "languages" => Utils::getLanguages(),
                "routeName" => $route,
                "routeParams" => $routeParams,
            ))->getContent();
    }
}