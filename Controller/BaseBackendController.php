<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BaseBackendController extends Controller
{

    public function generateThumbnailsList($url, $thumbnails = array())
    {
        foreach ($thumbnails as $item) {
            $this->get('liip_imagine.cache.manager')->filter($url, $item);
        }
    }

}
