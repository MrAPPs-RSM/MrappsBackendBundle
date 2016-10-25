<?php
namespace Mrapps\BackendBundle\Twig;

use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Router;

class LocalizedPath extends \Twig_Extension
{
    private $requestStack;
    private $router;

    public function __construct(RequestStack $requestStack, Router $router)
    {
        $this->requestStack = $requestStack;
        $this->router = $router;
    }

    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('localized_path', [$this, 'getLocalizedPath']),
            new \Twig_SimpleFunction('localized_url', [$this, 'getLocalizedUrl']),
            new \Twig_SimpleFunction('is_path', [$this, 'isLocalizedPath']),
        ];
    }

    public function getLocalizedPath($routeName, $locale = null, array $parameters = [], $relative = false)
    {
        $this->setRouteAndParameters($routeName, $locale, $parameters);

        return $this->router->generate(
            $routeName,
            $parameters,
            $relative
                ? Router::RELATIVE_PATH
                : Router::ABSOLUTE_PATH
        );
    }

    public function getLocalizedUrl($routeName, $locale = null, array $parameters = [], $schemeRelative = false)
    {
        $this->setRouteAndParameters($routeName, $locale, $parameters);

        return $this->router->generate(
            $routeName,
            $parameters,
            $schemeRelative
                ? Router::NETWORK_PATH
                : Router::ABSOLUTE_URL
        );

    }

    public function isLocalizedPath($routeName)
    {
        $request = $this->requestStack->getCurrentRequest();
        $currentRoute = $request->attributes->get('_route');

        return (($routeName === $currentRoute)
            || ($routeName . '_lang' === $currentRoute)
            || ($routeName === $currentRoute . '_lang'));
    }

    public function getName()
    {
        return 'localized_path';
    }

    private function setRouteAndParameters(&$routeName, $locale, array &$parameters)
    {
        $request = $this->requestStack->getCurrentRequest();
        $isValidRoute = false;

        if ($locale === null) {
            $locale = $request->getLocale();
        }


        if ($routeName === '__current__') {
            $routeName = $request->get('_route');

            if (empty($parameters)) {
                $parameters = $request->attributes->get('_route_params');
            }
        }

        if ($this->checkRoute($routeName)) {
            $isValidRoute = true;
        } elseif ($this->checkRoute($routeName . '_lang')) {
            $routeName .= '_lang';
            $isValidRoute = true;
        }

        if ($isValidRoute) {
            $parameters['_locale'] = $locale;
        }
    }

    private function checkRoute($routeName)
    {
        $route = $this->router->getRouteCollection()->get($routeName);

        // The route should already be compiled by this point so the call to compile() should be just a getter.
        return (($route !== null) && in_array('_locale', $route->compile()->getVariables()));
    }
}