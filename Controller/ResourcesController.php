<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class ResourcesController extends Controller
{
    public function __backendCustomCssAction(Request $request)
    {
        //Personalizzazione navbar
        $navbarColor = $this->container->hasParameter('mrapps_backend.customization.navbar_color') ? trim($this->container->getParameter('mrapps_backend.customization.navbar_color')) : '';
        $navbarTextColor = $this->container->hasParameter('mrapps_backend.customization.navbar_text_color') ? trim($this->container->getParameter('mrapps_backend.customization.navbar_text_color')) : '';

        return $this->render('MrappsBackendBundle:Resources:backend-custom-css.html.twig', array(
            'navbar_color' => (strlen($navbarColor) > 0) ? $navbarColor : null,
            'navbar_text_color' => (strlen($navbarTextColor) > 0) ? $navbarTextColor : null,
        ));
    }
}
