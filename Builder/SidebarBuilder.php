<?php

namespace Mrapps\BackendBundle\Builder;

use Doctrine\Common\Annotations\Reader;
use Symfony\Component\DependencyInjection\Container;
use Doctrine\ORM\EntityManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Mrapps\BackendBundle\Annotation\Sidebar;
use Mrapps\BackendBundle\Controller\BaseBackendController;

class SidebarBuilder
{
    private $reader;
    private $container;
    private $annotationClass = 'Mrapps\\BackendBundle\\Annotation\\Sidebar';
    private $baseControllerClass = 'Mrapps\\BackendBundle\\Controller\\BaseBackendController';

    public function __construct(Reader $reader, Container $container)
    {
        $this->reader = $reader;
        $this->container = $container;
    }

    private function sortSidebar($a, $b) {

        //Ordina per weight, a parità di weight ordina alfabeticamente per label
        if ($a['weight'] == $b['weight']) {
            return ($a['label'] > $b['label']) ? -1 : 1;
        }
        return ($a['weight'] > $b['weight']) ? -1 : 1;
    }

    private function getStructure($annotation, $extra = array()) {

        if(!is_array($extra)) $extra = array();
        if($annotation !== null) {

            $code = $annotation->getCode();
            $label = $annotation->getLabel();
            $icon = $annotation->getIcon();
            $minRole = $annotation->getMinRole();
            $visible = $annotation->getVisible();
            $parent = $annotation->getParent();
            $weight = $annotation->getWeight();
            $route = (isset($extra['route'])) ? $extra['route'] : '';
            $controller = (isset($extra['controller'])) ? $extra['controller'] : '';
            $action = (isset($extra['action'])) ? $extra['action'] : '';

            return array(
                'code' => $code,
                'label' => $label,
                'icon' => $icon,
                'min_role' => $minRole,
                'visible' => $visible,
                'parent' => $parent,
                'weight' => $weight,
                'route' => $route,
                'controller' => $controller,
                'action' => $action,
                'children' => array(),
            );
        }

        return null;
    }
    
    private function getControllerActionFullName(\ReflectionMethod $method) {
        
        $controller = $method->class;
        $action = $method->name;
        
        return trim($controller, '\\').'::'.$action;
    }
    
    private function getRoutesArray() {
        
        $arrayRoutes = array();
        
        $routes = $this->container->get('router')->getRouteCollection();
        foreach ($routes as $route) {
            $controller = $route->getDefault('_controller');
            $path = $route->getPath();
            $arrayRoutes[$controller] = $path;
        }
        
        return $arrayRoutes;
    }

    public function build()
    {
        $sidebar = array();
        $subMenus = array();
        
        //Tutte le rotte
        $routes = $this->getRoutesArray();
        
        //Inizializzazione Controller
        $kernel = $this->container->get('kernel');
        $bundles = $kernel->getBundles();
        foreach ($bundles as $value) {
            $path = $value->getPath();
            if(strpos($path, '/vendor/') === false) {
                $controllerPattern = $path.'/Controller/*Controller.php';
                foreach (glob($controllerPattern) as $fileName) {
                    include_once $fileName;
                }
            }
        }
        //---
        
        //Controller che estendono BaseBackendController
        $declaredClasses = get_declared_classes();
        foreach($declaredClasses as $class) {
            
            if(is_subclass_of($class, $this->baseControllerClass)) {
                
                $ctrl = new $class;
                $reflectionObject = new \ReflectionObject($ctrl);

                //Metodi del Controller
                foreach ($reflectionObject->getMethods() as $reflectionMethod) {
                    
                    $controllerFullName = $this->getControllerActionFullName($reflectionMethod);
                    $routePath = (isset($routes[$controllerFullName])) ? $routes[$controllerFullName] : '';
                    $routeName = '';
                    
                    if(strlen($routePath) > 0) {
                        try {
                            $router = $this->container->get('router');
                            $routeParams = $router->match($routePath);
                        }catch(\Exception $e) {
                            $routeParams = array();
                        }
                        $routeName = (isset($routeParams['_route'])) ? trim($routeParams['_route']) : '';
                    }

                    // Lettura Annotation
                    $annotation = $this->reader->getMethodAnnotation($reflectionMethod, $this->annotationClass);
                    if (null !== $annotation) {

                        $structure = $this->getStructure($annotation, array(
                            'route' => $routeName,
                            'controller' => $reflectionMethod->class,
                            'action' => $reflectionMethod->name,
                        ));
                        if(null !== $structure) {

                            $code = $structure['code'];
                            $parent = $structure['parent'];

                            if($parent == null) {

                                //Primo livello
                                $sidebar[$code] = $structure;

                            }else {

                                if(isset($sidebar[$parent])) {

                                    //Secondo livello: parent già elaborato
                                    $sidebar[$parent]['children'][$code] = $structure;
                                }else {
                                    //Secondo livello: parent ancora da elaborare
                                    $subMenus[$code] = $structure;
                                }
                            }
                        }
                    }
                }
            }
        }

        //Aggiunta subarray secondo livello
        foreach($subMenus as $code => $structure) {

            $parent = $structure['parent'];

            if(isset($sidebar[$parent])) {
                $sidebar[$parent]['children'][$code] = $structure;
            }
        }

        //Ordina le voci di menu
        foreach($sidebar as $s) {
            usort($s['children'], array('Mrapps\BackendBundle\Builder\SidebarBuilder','sortSidebar'));
        }
        usort($sidebar, array('Mrapps\BackendBundle\Builder\SidebarBuilder','sortSidebar'));

        //Popolamento database
        $em = $this->container->get('doctrine.orm.entity_manager');
        $repository = $em->getRepository('MrappsBackendBundle:SidebarEntry');
        $repository->clearSidebar();
        foreach($sidebar as $primoLivello) {

            $repository->addSidebarEntry($primoLivello);
            foreach($primoLivello['children'] as $secondoLivello) {
                $repository->addSidebarEntry($secondoLivello);
            }
        }

        return $sidebar;
    }
}