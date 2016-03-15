<?php

namespace Mrapps\BackendBundle\Builder;

use Doctrine\Common\Annotations\Reader;
use Doctrine\ORM\EntityManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Mrapps\BackendBundle\Annotation\Sidebar;
use Mrapps\BackendBundle\Controller\BaseBackendController;

class SidebarBuilder
{
    private $reader;
    private $em;
    private $router;
    private $annotationClass = 'Mrapps\\BackendBundle\\Annotation\\Sidebar';
    private $baseControllerClass = 'Mrapps\\BackendBundle\\Controller\\BaseBackendController';
    private $routeClass = 'Sensio\\Bundle\\FrameworkExtraBundle\\Configuration\\Route';

    public function __construct(Reader $reader, EntityManager $em, Router $router)
    {
        $this->reader = $reader;
        $this->em = $em;
        $this->router = $router;
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
            $minRole = $annotation->getMinRole();
            $visible = $annotation->getVisible();
            $parent = $annotation->getParent();
            $weight = $annotation->getWeight();
            $route = (isset($extra['route'])) ? $extra['route'] : '';

            return array(
                'code' => $code,
                'label' => $label,
                'min_role' => $minRole,
                'visible' => $visible,
                'parent' => $parent,
                'weight' => $weight,
                'route' => $route,
                'children' => array(),
            );
        }

        return null;
    }


    public function build()
    {
        $sidebar = array();
        $subMenus = array();

        //Controller che estendono BaseBackendController
        $declaredClasses = get_declared_classes();
        foreach($declaredClasses as $class) {
            if(is_subclass_of($class, $this->baseControllerClass)) {

                $ctrl = new $class;
                $reflectionObject = new \ReflectionObject($ctrl);

                //Metodi del Controller
                foreach ($reflectionObject->getMethods() as $reflectionMethod) {

                    $routeName = '';
                    $route = $this->reader->getMethodAnnotation($reflectionMethod, $this->routeClass);
                    $routePath = ($route !== null) ? trim($route->getPath()) : '';
                    if(strlen($routePath) > 0) {
                        $routeParams = $this->router->match($routePath);
                        $routeName = (isset($routeParams['_route'])) ? trim($routeParams['_route']) : '';
                    }

                    // Lettura Annotation
                    $annotation = $this->reader->getMethodAnnotation($reflectionMethod, $this->annotationClass);
                    if (null !== $annotation) {

                        $structure = $this->getStructure($annotation, array(
                            'route' => $routeName,
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
        $repository = $this->em->getRepository('MrappsBackendBundle:SidebarEntry');
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