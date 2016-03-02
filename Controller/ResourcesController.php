<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class ResourcesController extends Controller
{
    public function __backendCustomCssAction(Request $request)
    {
        return $this->render('MrappsBackendBundle:Resources:backend-custom-css.html.twig', array(
            'navbar_color' => 'red',
            'navbar_text_color' => 'blue',
        ));
    }
}
