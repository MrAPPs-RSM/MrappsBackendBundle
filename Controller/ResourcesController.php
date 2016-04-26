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

        //CSS aggiuntivi specificati nel config
        $customCSSs = $this->container->hasParameter('mrapps_backend.custom_css') ? $this->container->getParameter('mrapps_backend.custom_css') : null;
        if(!is_array($customCSSs)) $customCSSs = array();

        $webDir = realpath($this->container->get('kernel')->getRootDir().'/../web');
        $extraCss = '';
        foreach ($customCSSs as $css) {
            $fullPath = str_replace('////', '//', $webDir.'/'.$css);
            if(file_exists($fullPath)) {
                $content = trim(file_get_contents($fullPath));
                if(strlen($content) > 0) $extraCss .= $content;
            }
        }

        return $this->render('MrappsBackendBundle:Resources:backend-custom-css.html.twig', array(
            'primary_color' => $primary_color,
            'text_on_primary_color' => $text_on_primary_color,
            'text_hover_on_primary_color' => $text_hover_on_primary_color,
            'secondary_color' => $secondary_color,
            'text_on_secondary_color' => $text_on_secondary_color,
            'text_hover_on_secondary_color' => $text_hover_on_secondary_color,
            'extra_css' => $extraCss,
        ));
    }
}
