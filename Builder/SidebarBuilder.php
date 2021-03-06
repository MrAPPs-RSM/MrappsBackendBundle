<?php

namespace Mrapps\BackendBundle\Builder;

use Doctrine\Common\Annotations\Reader;
use Symfony\Component\DependencyInjection\Container;
use Doctrine\ORM\EntityManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Mrapps\BackendBundle\Annotation\Sidebar;
use Mrapps\BackendBundle\Controller\BaseBackendController;
use Mrapps\BackendBundle\Classes\Utils;

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
            $visible = $annotation->getVisible();
            $parent = $annotation->getParent();
            $weight = $annotation->getWeight();
            $type = $annotation->getType();
            $allowedRoles = $annotation->getAllowedRoles();
            $route = (isset($extra['route'])) ? $extra['route'] : '';
            $controller = (isset($extra['controller'])) ? $extra['controller'] : '';
            $action = (isset($extra['action'])) ? $extra['action'] : '';


            return array(
                'code' => $code,
                'label' => $label,
                'icon' => $icon,
                'visible' => $visible,
                'parent' => $parent,
                'weight' => $weight,
                'route' => $route,
                'controller' => $controller,
                'action' => $action,
                'type' => $type,
                'allowed_roles' => $allowedRoles,
                'children' => array(),
            );
        }

        return null;
    }


    public function build()
    {
        $sidebar = array();
        $subMenus = array();

        //Tutte le rotte
        $routes = Utils::getRoutesArray($this->container);

        $objRoutes = $this->container->get('router')->getRouteCollection()->all();

        //Controller che estendono BaseBackendBundle
        $controllers = array();

        foreach ($objRoutes as $r) {
        
        	if(!isset($r->getDefaults()['_controller'])) continue;
        
            $ctrl = $r->getDefaults()['_controller'];
            $pos = strpos($ctrl, '::');
            if($pos !== false) {
                $ctrl = substr($ctrl, 0, $pos);
            }
            if(strlen($ctrl) > 0 && is_subclass_of($ctrl, $this->baseControllerClass) && !in_array($ctrl, $controllers)) {
                $controllers[] = $ctrl;
            }
        }

        //Controller che estendono BaseBackendController
        foreach($controllers as $class) {

            $ctrl = new $class;
            $reflectionObject = new \ReflectionObject($ctrl);

            // Lettura Annotation(s) sul Controller
            $reflectionClass = new \ReflectionClass($class);
            $annotations = $this->reader->getClassAnnotations($reflectionClass);

            foreach ($annotations as $a) {

                //Considera solo le annotations Sidebar
                if(is_a($a, $this->annotationClass)) {

                    //Se l'annotation viene specificata a livello di Controller (e non di Action) ignoro la route
                    $structure = $this->getStructure($a, array(
                        'route' => null,
                        'controller' => $class,
                        'action' => null,
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

            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

            //Metodi del Controller
            foreach ($reflectionObject->getMethods() as $reflectionMethod) {

                $controllerFullName = Utils::getControllerActionFullName($reflectionMethod);
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

                // Lettura Annotation(s)
                //$annotation = $this->reader->getMethodAnnotation($reflectionMethod, $this->annotationClass);
                $annotations = $this->reader->getMethodAnnotations($reflectionMethod);
                foreach ($annotations as $a) {

                    //Considera solo le annotations Sidebar
                    if(is_a($a, $this->annotationClass)) {

                        $structure = $this->getStructure($a, array(
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
//                if (null !== $annotation) {
//
//                    $structure = $this->getStructure($annotation, array(
//                        'route' => $routeName,
//                        'controller' => $reflectionMethod->class,
//                        'action' => $reflectionMethod->name,
//                    ));
//                    if(null !== $structure) {
//
//                        $code = $structure['code'];
//                        $parent = $structure['parent'];
//
//                        if($parent == null) {
//
//                            //Primo livello
//                            $sidebar[$code] = $structure;
//
//                        }else {
//
//                            if(isset($sidebar[$parent])) {
//
//                                //Secondo livello: parent già elaborato
//                                $sidebar[$parent]['children'][$code] = $structure;
//                            }else {
//                                //Secondo livello: parent ancora da elaborare
//                                $subMenus[$code] = $structure;
//                            }
//                        }
//                    }
//                }
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