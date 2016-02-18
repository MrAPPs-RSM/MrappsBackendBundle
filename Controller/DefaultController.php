<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Mrapps\BackendBundle\Classes\Utils;
use Mrapps\BackendBundle\Entity\Immagine;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/panel")
 */
class DefaultController extends Controller
{

    public function __navigationAction()
    {

        return $this->render('MrappsBackendBundle:Default:navigation.html.twig', array());
    }

    public function __footerAction()
    {

        return $this->render('MrappsBackendBundle:Default:footer.html.twig', array());
    }

    public function __topNavBarAction()
    {

        return $this->render('MrappsBackendBundle:Default:top-navbar.html.twig', array());
    }

    public function __sideBarAction()
    {
        $menu = array();
        $sidebar = ($this->container->hasParameter('mrapps_backend.sidebar_menu')) ? $this->container->getParameter('mrapps_backend.sidebar_menu') : '';
        if(strlen($sidebar) > 0) {
            
            foreach ($sidebar as $firstLevel) {
                
                $hasSubmenu = (isset($firstLevel['has_submenu'])) ? (bool)$firstLevel['has_submenu'] : false;
                $minRole = (isset($firstLevel['min_role'])) ? trim($firstLevel['min_role']) : '';
                $icon = (isset($firstLevel['icon'])) ? trim($firstLevel['icon']) : '';
                $routeName = (isset($firstLevel['route_name'])) ? trim($firstLevel['route_name']) : '';
                $title = (isset($firstLevel['title'])) ? trim($firstLevel['title']) : '';
                
                if($hasSubmenu) {
                    
                    $submenu = array();
                    $sub = (isset($firstLevel['submenu']) && is_array($firstLevel['submenu'])) ? $firstLevel['submenu'] : array();
                    foreach ($sub as $secondLevel) {
                        
                        $subTitle = (isset($secondLevel['title'])) ? trim($secondLevel['title']) : '';
                        $subRouteName = (isset($secondLevel['route_name'])) ? trim($secondLevel['route_name']) : '';
                        $subUrl = (strlen($subRouteName) > 0) ? $this->generateUrl($subRouteName) : '';
                        
                        $submenu[] = array('title' => $subTitle, 'url' => $subUrl);
                    }
                    
                    $url = $submenu;
                    
                }else {
                    $url = (strlen($routeName) > 0) ? $this->generateUrl($routeName) : '';
                }
                
                $menu[] = array(
                    'has_submenu' => $hasSubmenu,
                    'title' => $title,
                    'icon' => $icon,
                    'url' => $url,
                    'min_role' => $minRole,
                );
            }
        }

        return $this->render('MrappsBackendBundle:Default:sidebar.html.twig', array(
            'menu' => $menu,
        ));
    }

    public function __offSideBarAction()
    {
        return $this->render('MrappsBackendBundle:Default:offsidebar.html.twig', array());
    }

    /**
     * @Route("/")
     * @Method({"GET"})
     */
    public function indexAction()
    {
        return new RedirectResponse($this->generateUrl("mrapps_backend_slides_list"));
    }

    public function __listAction($title, $tableColumns, $defaultSorting, $defaultFilter, $linkData, $linkNew = null, $linkEdit = null, $linkDelete = null, $linkOrder = null, $linkBreadcrumb = null, $linkCustom = null)
    {

        return $this->render('MrappsBackendBundle:Default:table.html.twig', array(
            'title' => $title,
            'tableColumns' => $tableColumns,
            'defaultSorting' => json_encode($defaultSorting),
            'defaultFilter' => json_encode($defaultFilter),
            'linkData' => $linkData,
            'linkNew' => $linkNew,
            'linkEdit' => $linkEdit,
            'linkDelete' => $linkDelete,
            'linkOrder' => $linkOrder,
            'linkBreadcrumb' => $linkBreadcrumb,
            'linkCustom' => $linkCustom,    //Ogni elemento ha url, class, icon
            'angular' => '"ngTable","ngResource","ui.sortable"',
        ));
    }

    public function __newAction($title, $fields, $linkSave = null, $linkEdit = null, $linkBreadcrumb = null, $create, $edit)
    {
        return $this->render('MrappsBackendBundle:Default:new.html.twig', array(
            'title' => $title,
            'fields' => $fields,
            'linkSave' => $linkSave,
            'linkEdit' => $linkEdit,
            'create' => $create,
            'edit' => $edit,
            'linkBreadcrumb' => $linkBreadcrumb,
            'cdn' => $this->container->getParameter('cdn_marlu'),
            'angular' => '"localytics.directives","angularFileUpload","ui.tinymce","ui.sortable","ui.bootstrap","ngJsTree"',
        ));
    }

    /**
     * @Route("/upload/immagine")
     * @Method({"POST"})
     */
    public function uploadImmagineAction(Request $request)
    {
        $responseLocation = '';
        $responseId = 0;
        $responseUrl = '';
        $responseError = '';
        
        $tmpImg = $request->files->all();

        if (isset($tmpImg['file']) && !$tmpImg['file']->getError()) {
            
            if(Utils::bundleMrappsAmazonExists($this->container)) {
                
                /* @var $s3 \Mrapps\AmazonBundle\Handler\S3Handler */
                $s3 = $this->container->get('mrapps.amazon.s3');
                
                $file = $tmpImg['file'];

                if(!Utils::isValidFile($this->container, 'image', $file)) {
                    return new JsonResponse(array('location' => '', 'id' => 0, 'error' => 'Immagine non valida.'));
                }

                $em = $this->getDoctrine()->getManager();
                
                $filePath = $file->getPathname();
                $sha1 = sha1(file_get_contents($filePath));
                $s3Key = 'mrapps_backend_images/'.$sha1;
                
                //Upload immagine su s3
                if(!$s3->objectExists($s3Key)) $s3->uploadObject($s3Key, $filePath);
                
                //Entity
                $immagine = $em->getRepository('MrappsBackendBundle:Immagine')->findOneBy(array('url' => $s3Key));
                if ($immagine == null) {
                    $immagine = new Immagine();
                }
                $immagine->setUrl($s3Key);
                $em->persist($immagine);
                $em->flush();
                
                $responseLocation = $immagine->getUrl();
                $responseId = $immagine->getId();
                $responseUrl = $this->container->get('liip_imagine.controller')->filterAction($request, $immagine->getUrl(), 'mrapps_backend_thumbnail')->getTargetUrl();
                $responseError = '';
                
                if (intval($request->get('texarea')) > 0) {
                    if (intval(getimagesize($file)[0]) > 1000) {
                        $url = $this->container->get('liip_imagine.controller')->filterAction($request, $immagine->getUrl(), 'textarea')->getTargetUrl();
                    } else {
                        $s3->uploadObject('mrapps_backend_images/textarea/'.$sha1, $filePath);
                    }
                    //problema con permessi senza jpg
                    $url = $this->container->get('liip_imagine.controller')->filterAction($request, $immagine->getUrl(), 'jpg')->getTargetUrl();
                }

            }else {
                $responseError = "Bundle MrappsAmazonBundle non installato.";
            }
            
        } else {
            $responseError = 'Immagine non trovata.';
        }
        
        $data = array(
            'location' => $responseLocation,       //location viene usato da tinymce
            'id' => $responseId,
            'url' => $responseUrl,
            'error' => $responseError,
        );

        return new Response($data);
    }

    /**
     * @Route("/upload/pdf")
     * @Method({"POST"})
     */
    public function uploadPdfAction(Request $request)
    {
        if(Utils::bundleMrappsAmazonExists($this->container)) {
                
            /* @var $s3 \Mrapps\AmazonBundle\Handler\S3Handler */
            $s3 = $this->container->get('mrapps.amazon.s3');
            
            $pdf = $request->files->all();
            $array = [];

            $webFolder = realpath($this->container->get('kernel')->getRootDir() . '/../web').'/';
            $tempRelativeFolder = $this->container->get('mrapps_backend.temp_folder').'/';
            $tempFolder = $webFolder.$tempRelativeFolder;

            $success = false;
            $message = '';

            if (isset($pdf['file']) && !$pdf['file']->getError()) {

                $file = $pdf['file'];
                if(Utils::isValidFile($this->container, 'pdf', $file)) {

                    $em = $this->getDoctrine()->getManager();
                    $filePath = $file->getPathname();

                    $images = new \Imagick();
                    $images->setResolution(300,300);
                    $images->readImage($filePath);

                    foreach($images as $image) {

                        //$relativePath parte da "web" (dentro il progetto)
                        //$absolutePath parte da /
                        $tempName = sprintf("pdf_page_%s.jpg", Utils::getDateStringForUniqueFiles());
                        $relativePath = $tempRelativeFolder.$tempName;
                        $absolutePath = $tempFolder.$tempName;

                        $image->writeImage($relativePath);
                        $s3Key = 'mrapps_backend_images/'.sha1(file_get_contents($absolutePath));

                        //Entity
                        $immagine = $em->getRepository('MrappsBackendBundle:Immagine')->findOneBy(array('url' => $s3Key));
                        if ($immagine == null) {
                            $immagine = new Immagine();
                        }

                        $immagine->setUrl($s3Key);
                        $em->persist($immagine);
                        $em->flush($immagine);

                        //Caricamento file su s3
                        if(!$s3->objectExists($s3Key)) {
                            $s3->uploadObject($s3Key, $absolutePath);
                        }

                        $array[] = $immagine->getId();
                    }

                    $success = true;
                    $message = 'Pdf Caricato.';

                }else {
                    $success = false;
                    $message = 'Pdf non valido.';
                }

            }else {
                $success = false;
                $message = 'Si è verificato un problema durante il caricamento del pdf; Riprovare più tardi.';
            }
                
        }else {
            $success = false;
            $message = 'Bundle MrappsAmazonBundle non installato.';
        }

        return Utils::generateResponse($success, $message, $array);
    }

    /**
     * @Route("/password")
     */
    public function passwordAction()
    {
        $url = null;
        if ($this->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $url = $this->generateUrl('mrapps_backend_slides_list');
        }

        return $this->render('MrappsBackendBundle:Default:password.html.twig', [
            'title' => 'Cambia Password',
            'redirect' => $url,
        ]);

    }
}

