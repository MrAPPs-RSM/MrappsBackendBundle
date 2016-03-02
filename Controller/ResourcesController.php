<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class ResourcesController extends Controller
{
    public function __backendCustomCssAction(Request $request)
    {
        //Personalizzazione navbar
        $primary_color = $this->container->hasParameter('mrapps_backend.customization.primary_color') ? trim($this->container->getParameter('mrapps_backend.customization.primary_color')) : '';
        $text_on_primary_color = $this->container->hasParameter('mrapps_backend.customization.text_on_primary_color') ? trim($this->container->getParameter('mrapps_backend.customization.text_on_primary_color')) : '';
        $text_hover_on_primary_color = $this->container->hasParameter('mrapps_backend.customization.text_hover_on_primary_color') ? trim($this->container->getParameter('mrapps_backend.customization.text_hover_on_primary_color')) : '';
        $secondary_color = $this->container->hasParameter('mrapps_backend.customization.secondary_color') ? trim($this->container->getParameter('mrapps_backend.customization.secondary_color')) : '';
        $text_on_secondary_color = $this->container->hasParameter('mrapps_backend.customization.text_on_secondary_color') ? trim($this->container->getParameter('mrapps_backend.customization.text_on_secondary_color')) : '';
        $text_hover_on_secondary_color = $this->container->hasParameter('mrapps_backend.customization.text_hover_on_secondary_color') ? trim($this->container->getParameter('mrapps_backend.customization.text_hover_on_secondary_color')) : '';

        return $this->render('MrappsBackendBundle:Resources:backend-custom-css.html.twig', array(
            'primary_color' => (strlen($primary_color) > 0) ? $primary_color : null,
            'text_on_primary_color' => (strlen($text_on_primary_color) > 0) ? $text_on_primary_color : null,
            'text_hover_on_primary_color' => (strlen($text_hover_on_primary_color) > 0) ? $text_hover_on_primary_color : null,
            'secondary_color' => (strlen($secondary_color) > 0) ? $secondary_color : null,
            'text_on_secondary_color' => (strlen($text_on_secondary_color) > 0) ? $text_on_secondary_color : null,
            'text_hover_on_secondary_color' => (strlen($text_hover_on_secondary_color) > 0) ? $text_hover_on_secondary_color : null,
        ));
    }
}
