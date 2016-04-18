<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Mrapps\BackendBundle\Classes\Utils;

class BaseBackendController extends Controller
{
    public function generateThumbnailsList($url, $thumbnails = array())
    {
        Utils::generateThumbnailsList($this->container, $url, $thumbnails);
    }

}
