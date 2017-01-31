<?php
/**
 * Created by PhpStorm.
 * User: damiandominella
 * Date: 31/01/17
 * Time: 12:41
 */

namespace Mrapps\BackendBundle\Twig;


use Mrapps\BackendBundle\Interfaces\FileInterface;
use Mrapps\BackendBundle\Services\PublicUrlProvider;

class AbsoluteUrl extends \Twig_Extension
{
    private $urlProvider;

    public function __construct(
        PublicUrlProvider $urlProvider
    )
    {
        $this->urlProvider = $urlProvider;
    }

    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('absolute_url', [$this, 'getAbsoluteUrl']),
        ];
    }

    public function getName()
    {
        return 'absolute_url';
    }

    public function getAbsoluteUrl(FileInterface $file)
    {
        return $this->urlProvider->setFileEntity($file)->getUri();
    }
}