<?php

namespace Mrapps\BackendBundle\Controller;

use Mrapps\BackendBundle\Entity\SidebarEntry;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\File\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Mrapps\BackendBundle\Classes\Utils;
use Mrapps\BackendBundle\Entity\Immagine;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * @Route("/panel")
 */
class DefaultController extends Controller
{
    public function security(Request $request, $action) {

        $canProceed = false;

        $compact = Utils::getControllerCompactName($request->attributes->get('_controller'));

        $user = $this->getUser();
        if($user !== null && is_object($user)) {

            $canProceed = ($user->hasRole('ROLE_SUPER_ADMIN'));

            if(!$canProceed) {

                //Ruoli che possono accedere all'oggetto
                $em = $this->getDoctrine()->getManager();
                $roles = $em->getRepository('MrappsBackendBundle:Permission')->getActiveRoles($compact, $action);

                //Ruoli dell'utente
                $userRoles = $user->getRoles();
                foreach($userRoles as $r) {

                    //L'utente ha almeno un ruolo valido?
                    if(isset($roles[$r])) {
                        $canProceed = true;
                        break;
                    }
                }
            }
        }

        if(!$canProceed) {
            throw new AccessDeniedHttpException("Accesso non autorizzato!");
        }

        return $canProceed;
    }

    public function __navigationAction()
    {

        return $this->render('MrappsBackendBundle:Default:navigation.html.twig', array());
    }

    public function __footerAction()
    {

        return $this->render('MrappsBackendBundle:Default:footer.html.twig', array());
    }

    public function getLocalUploadDir($dir = 'mrapps_backend_files')
    {
        return $this->container->getParameter('kernel.root_dir') . '/../web/uploads/' . $dir;
    }

    public function getLocalUrlDir($dir = 'mrapps_backend_files')
    {
        return $this->getRequest()->getSchemeAndHttpHost() . '/uploads/' . $dir;
    }

    public function __topNavBarAction(Request $request)
    {
        $defaultRouteName = $this->getDefaultRouteForUser();
        //$defaultRouteName = $this->container->getParameter('mrapps_backend.default_route_name');
        $url = $this->container->get('request')->get('_route');

        return $this->render('MrappsBackendBundle:Default:top-navbar.html.twig',
            array("logo_path" => $this->container->hasParameter('mrapps_backend.logo_path') ? $this->container->getParameter('mrapps_backend.logo_path') : null,
                "default_route_name" => $defaultRouteName,
                "request" => $request,
                "languages" => Utils::getLanguages()
            )
        );
    }

    private function _checkRoleSidebar($sidebar = null) {

        if($sidebar !== null) {

            $type = trim($sidebar->getType());
            if(strlen($type) == 0) $type = 'view';

            //Primo livello con figli => sempre visibile
            $sidebarRoute = trim($sidebar->getRoute());
            if(strlen($sidebarRoute) == 0 && $sidebar->getParent() == null) {
                return true;
            }

            //Negli altri casi controllo i permessi e la lista ruoli

            $controllerCompact = Utils::getControllerCompactName($sidebar->getController());

            $user = $this->getUser();

            if($user !== null) {

                $em = $this->getDoctrine()->getManager();
                $perm = $em->getRepository('MrappsBackendBundle:Permission')->getPermissions($controllerCompact, $user);

                //Controllo permesso del tipo sidebar (view, edit, ...)
                $canProceedType = (isset($perm[$type])) ? (bool)$perm[$type] : false;

                //Controllo lista ruoli che possono accedere alla rotta
                $allowedRolesStr = trim($sidebar->getRoles());
                if(strlen($allowedRolesStr) > 0) {
                    $allowedRoles = explode(',', $sidebar->getRoles());

                    $canProceedRoles = false;

                    foreach ($allowedRoles as $r) {
                        $r = strtoupper(trim($r));
                        if(strlen($r) > 0 && $user->hasRole($r)) {
                            $canProceedRoles = true;
                            break;
                        }
                    }

                }else {
                    $canProceedRoles = true;
                }

                return ($canProceedType && $canProceedRoles);
            }
        }

        return false;
    }

    private function __getSidebarLabel(SidebarEntry $sidebar = null) {

        if($sidebar !== null) {

            $label = trim($sidebar->getLabel());
            $labelCanon = strtolower($label);

            if(substr($labelCanon, 0, 5) == 'fnc::') {

                $fnc = substr($label, 5);
                $controller = $sidebar->getController();

                $label = '';
                if(strlen($controller) > 0) {

                    try {
                        $obj = new $controller;
                    } catch (\Exception $ex) {
                        $obj = null;
                    }

                    if($obj !== null) {
                        try {
                            $label = $obj->$fnc($this->container);
                        } catch (\Exception $ex) {
                            $label = '';
                        }
                    }
                }
            }

            return $label;
        }

        return '';
    }

    public function __sideBarAction()
    {
        $menu = array();

        $em = $this->getDoctrine()->getManager();

        //Voci di menu al primo livello, ordinate per peso
        $primoLivello = $em->createQuery("
                SELECT s
                FROM MrappsBackendBundle:SidebarEntry s
                WHERE s.parent IS NULL
                AND s.visible = :visible
                ORDER BY s.weight ASC
        ")->setParameters(array('visible' => 1))->execute();

        //Voci di menu al secondo livello, raggruppate per parent ID e ordinate per peso
        $secondoLivello = $em->createQuery("
                SELECT s,p
                FROM MrappsBackendBundle:SidebarEntry s
                JOIN s.parent p
                WHERE s.parent IS NOT NULL
                AND s.visible = :visible
                AND s.route != :route
                AND s.route IS NOT NULL
                ORDER BY p.id ASC, s.weight ASC
        ")->setParameters(array('visible' => 1, 'route' => ''))->execute();

        //Organizzazione voci di menu secondo livello
        $secondoLivelloParents = array();
        foreach($secondoLivello as $sidebar) {

            //Check ruolo
            if($this->isGranted('ROLE_SUPER_ADMIN') || $this->_checkRoleSidebar($sidebar)) {

                $parentId = ($sidebar->getParent() !== null) ? $sidebar->getParent()->getId() : 0;
                if(!isset($secondoLivelloParents[$parentId])) {
                    $secondoLivelloParents[$parentId] = array();
                }
                $secondoLivelloParents[$parentId][] = $sidebar;
            }
        }

        //Gestione sidebar primo livello
        foreach($primoLivello as $sidebar) {

            //Check ruolo
            if($this->isGranted('ROLE_SUPER_ADMIN') || $this->_checkRoleSidebar($sidebar)) {

                $thisId = $sidebar->getId();
                if(isset($secondoLivelloParents[$thisId]) && count($secondoLivelloParents[$thisId]) > 0) {

                    $hasSubmenu = true;

                    $url = array();

                    foreach($secondoLivelloParents[$thisId] as $subSidebar) {

                        //Rotta submenu
                        $route = $subSidebar->getRoute();
                        try {
                            $subUrl = (strlen($route) > 0) ? $this->generateUrl($route) : '';
                        }catch(\Exception $e) {
                            $subUrl = '';
                        }

                        $url[] = array(
                            'title' => $this->__getSidebarLabel($subSidebar),
                            'url' => $subUrl,
                            'route_name' => $route,
                        );
                    }

                }else {

                    $hasSubmenu = false;

                    //No voci di secondo livello: generazione rotta
                    $route = $sidebar->getRoute();
                    try {
                        $url = (strlen($route) > 0) ? $this->generateUrl($route) : '';
                    }catch(\Exception $e) {
                        $url = '';
                    }
                }

                if ( $url != null && !empty($url) ) {
                    $menu[] = array(
                        'has_submenu' => $hasSubmenu,
                        'title' => $this->__getSidebarLabel($sidebar),
                        'icon' => $sidebar->getIcon(),
                        'url' => $url,
                        'route_name' => $route,
                    );
                }
            }
        }

        $urlArray = explode('?', preg_replace('/\/app_dev.php/', '', $_SERVER['REQUEST_URI']));

        $actual_link = $urlArray[0];

        if (empty($actual_link)) {
            $route = '';
        } else {
            $route = $this->get('router')->match($actual_link)['_route'];
        }

        return $this->render('MrappsBackendBundle:Default:sidebar.html.twig', array(
            'menu' => $menu,
            'active_page' => $route,
        ));
    }

    private function getDefaultRouteForUser() {

        return Utils::getDefaultRouteForUser($this->container, $this->getUser());
    }

    /**
     * @Route("/", name="mrapps_backend_index")
     * @Method({"GET"})
     */
    public function indexAction()
    {
        $defaultRouteForUser = $this->getDefaultRouteForUser();

        return new RedirectResponse($this->generateUrl($defaultRouteForUser));
    }

    public function __customAction(Request $request, $params = array()) {

        //Tipologia di permesso (es. view)
        if(!is_array($params)) $params = array();
        $permissionsType = '';
        if(isset($params['__permissions_type'])) {
            $permissionsType = strtolower(trim($params['__permissions_type']));
            unset($params['__permissions_type']);
        }
        if(strlen($permissionsType) == 0) $permissionsType = 'view';

        //Check permessi
        $this->security($request, $permissionsType);

        //Template
        $template = '';
        if(isset($params['__template'])) {
            $template = trim($params['__template']);
            unset($params['__template']);
        }

        if(strlen($template) > 0) {

            $em = $this->getDoctrine()->getManager();
            $currentObject = Utils::getControllerCompactName($request->attributes->get('_controller'));

            //Permessi per questo oggetto
            $permissions = $em->getRepository('MrappsBackendBundle:Permission')->getPermissions($currentObject, $this->getUser());
            $params['permissions'] = $permissions;

            return $this->render($template, $params);

        }else {
            throw new \InvalidArgumentException("Parametro __template mancante. Specificare un template valido nella forma AppBundle:Default:test.");
        }
    }

    public function __listAction(Request $request, $title, $tableColumns, $defaultSorting, $defaultFilter, $linkData, $linkNew = null, $linkEdit = null, $linkDelete = null, $linkOrder = null, $linkBreadcrumb = null, $linkCustom = null, $linkAction = null, $deleteMessages = array())
    {
        $this->security($request, 'view');

        $em = $this->getDoctrine()->getManager();
        $currentObject = Utils::getControllerCompactName($request->attributes->get('_controller'));

        //Permessi per questo oggetto
        $permissions = $em->getRepository('MrappsBackendBundle:Permission')->getPermissions($currentObject, $this->getUser());

        //Messaggi schermata eliminazione
        if (!is_array($deleteMessages)) $deleteMessages = array();
        if (!isset($deleteMessages['question'])) $deleteMessages['question'] = "Procedere con l'eliminazione?";
        if (!isset($deleteMessages['success'])) $deleteMessages['success'] = 'Procedura completata con successo.';
        if (!isset($deleteMessages['error'])) $deleteMessages['error'] = 'Si è verificato un problema durante la procedura di eliminazione; si prega di riprovare più tardi.';
        if (!isset($deleteMessages['cancel'])) $deleteMessages['cancel'] = 'Operazione annullata.';

        //Setta i nomi a tutte le action
        $laCount = 1;
        if(is_array($linkAction)) {
            foreach ($linkAction as $k => $la) {
                if(!isset($la['name'])) {
                    $linkAction[$k]['name'] = '__action_'.$laCount;
                }
                $laCount++;
            }
        }


        return $this->render('MrappsBackendBundle:Default:table.html.twig', array(
            'current_object' => $currentObject,
            'current_route' => $request->get('_route'),
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
            'linkCustom' => $linkCustom,
            'linkAction' => $linkAction,
            'angular' => '"ngTable","ngResource","ui.sortable"',
            'deleteMessages' => $deleteMessages,
            'permissions' => $permissions,
        ));
    }

    public function __newAction(Request $request, $title, $fields, $linkSave = null, $linkEdit = null, $linkPublish = null, $linkBreadcrumb = null, $create, $edit, $confirmSave = false, $linkNew = null, $confirmMessages = null, $linkAction = null)
    {
        $trans = $this->get('translator');

        $this->security($request, ($edit) ? 'edit' : 'create');

        if ($confirmSave == null) $confirmSave = false;

        if (!is_array($confirmMessages)) $confirmMessages = array();
        if (!isset($confirmMessages['question'])) $confirmMessages['question'] = $trans->trans(($edit) ? 'form.elemento.salvare_modifiche' : 'form.elemento.nuovo_elemento', array(), 'MrappsBackendBundle');
        if (!isset($confirmMessages['success'])) $confirmMessages['success'] = $trans->trans('form.elemento.elemento_modificato', array(), 'MrappsBackendBundle');
        $imagesUrl = '';
        if (Utils::bundleMrappsAmazonExists($this->container)) {
            $imagesUrl = ($this->container->hasParameter('mrapps_backend.images_url')) ? $this->container->getParameter('mrapps_backend.images_url') : '';
        } else {
            $imagesUrl = $this->getLocalUrlDir('');
        }

        $em = $this->getDoctrine()->getManager();
        $languages = $em->getRepository('MrappsBackendBundle:Language')->findBy(["visible" => true]);

        $locale = $request->getLocale();

        $gmapsApiKey = ($this->container->hasParameter('gmaps_api_key')) ? $this->container->getParameter('gmaps_api_key') : '';

        $panels = array();

        //Elimina gli array non validi prima di sistemare i dati
        $riallineaChiavi = false;
        foreach ($fields as $k => $f) {
            if(!isset($f['type'])) {
                unset($fields[$k]);
                $riallineaChiavi = true;
            }
        }
        if($riallineaChiavi) {
            $fields = array_values($fields);    //Riallineamento chiavi per far funzionare il raggruppamento in pannelli
        }

        //Allineamento campi
        foreach ($fields as $k => $f) {

            //Opening Time
            if($f['type'] == 'openingtime') {

                //Generale
                if(!isset($f['step'])) {
                    $fields[$k]['step'] = 1;
                }
                if(!isset($f['value']['closed'])) {
                    $fields[$k]['value']['closed'] = false;
                }

                //Valori di default
                if(!isset($f['value']['morning']['start'])) $fields[$k]['value']['morning']['start'] = '';
                if(!isset($f['value']['morning']['end'])) $fields[$k]['value']['morning']['end'] = '';
                if(!isset($f['value']['afternoon']['start'])) $fields[$k]['value']['afternoon']['start'] = '';
                if(!isset($f['value']['afternoon']['end'])) $fields[$k]['value']['afternoon']['end'] = '';
            }

            //DateTime Range
            if($f['type'] == 'datarange') {

                //Converte i value da timestamp a ISO 8601 date
                $startValue = Utils::convertTimestampToIso8601((isset($f['start']['value'])) ? $f['start']['value'] : null);
                $startMin = Utils::convertTimestampToIso8601((isset($f['start']['min'])) ? $f['start']['min'] : null);
                $startMax = Utils::convertTimestampToIso8601((isset($f['start']['max'])) ? $f['start']['max'] : null);

                $endValue = Utils::convertTimestampToIso8601((isset($f['end']['value'])) ? $f['end']['value'] : null);
                $endMin = Utils::convertTimestampToIso8601((isset($f['end']['min'])) ? $f['end']['min'] : null);
                $endMax = Utils::convertTimestampToIso8601((isset($f['end']['max'])) ? $f['end']['max'] : null);


                $fields[$k]['start']['value'] = $startValue;
                $fields[$k]['start']['min'] = $startMin;
                $fields[$k]['start']['max'] = $startMax;

                $fields[$k]['end']['value'] = $endValue;
                $fields[$k]['end']['min'] = $endMin;
                $fields[$k]['end']['max'] = $endMax;


//                //Default
//                $actualTime = time();
//                if($startValue == null) $startValue = $actualTime;
//                if($endValue == null) $endValue = $actualTime;
//
//                //Start
//                $newStartDate = date('Y-m-d', $startValue).'T00:00:00.000Z';
//                $newStartHours = intval(date('H', $startValue));
//                $newStartMinutes = intval(date('i', $startValue));
//
//
//                //End
//                $newEndDate = date('Y-m-d', $endValue).'T00:00:00.000Z';
//                $newEndHours = intval(date('H', $endValue));
//                $newEndMinutes = intval(date('i', $endValue));
//
//
//                $fields[$k]['start']['value'] = array(
//                    'date' => $newStartDate,
//                    'hours' => $newStartHours,
//                    'minutes' => $newStartMinutes,
//                );
//                $fields[$k]['end']['value'] = array(
//                    'date' => $newEndDate,
//                    'hours' => $newEndHours,
//                    'minutes' => $newEndMinutes,
//                );
            }

            //Mappa
            if($f['type'] == 'latlng') {

                //Numero random, necessario per il marker (tipo mappa)
                $rnd = mt_rand(1, 999999);
                $fields[$k]['random_number'] = $rnd;

                //Api Key Google Maps
                $fields[$k]['gmaps_api_key'] = $gmapsApiKey;
            }

            //Pannello
            if($f['type'] == 'panel') {
                $panels[] = array(
                    'index' => $k,
                    'label' => (isset($f['label'])) ? $f['label'] : '',
                );
            }

            //Campo multilingua
            if(isset($f['lang']) && $f['lang'] == true) {

                $enFound = false;
                $defaultLanguage = null;
                $languagesAllowed = array();

                //Limite alle lingue disponibili per questo campo (lista isocode)
                if(isset($f['lang_allow_only']) && is_array($f['lang_allow_only']) && count($f['lang_allow_only']) > 0) {

                    foreach ($languages as $l) {
                        if(in_array($l->getIsoCode(), $f['lang_allow_only'])) {
                            $languagesAllowed[] = $l;

                            //Lingua default -> la lingua letta dalla request
                            if($l->getIsoCode() == $locale) {
                                $defaultLanguage = $l;
                            }

                            if($l->getIsoCode() == 'en') {
                                $enFound = true;
                            }
                        }
                    }

                    //Rimuovo il campo per non fare confusione
                    unset($fields[$k]['lang_allow_only']);

                }else {
                    $languagesAllowed = $languages;
                }

                //Se non è stata settata la lingua di default, controlla se può impostare "en"
                if($defaultLanguage == null && $enFound) {
                    $defaultLanguage = $em->getRepository('MrappsBackendBundle:Language')->findByIso("en");
                }

                //Se ancora non è stata settata la lingua di default, prende la prima lingua dell'array
                if($defaultLanguage == null) {
                    $defaultLanguage = $languagesAllowed[0];
                }

                $fields[$k]['languages_allowed'] = $languagesAllowed;
                $fields[$k]['default_language'] = $defaultLanguage;
            }
        }

        //Indice da cui partire a leggere i fields
        $prevPanelIndex = 0;

        //Raggruppamento in pannelli
        if(count($panels) == 0) {
            $panels[] = array('index' => 0, 'label' => '');
            $prevPanelIndex = -1;
        }

        //Se il primo elemento non è un pannello ne creo uno fittizio
        if($panels[0]['index'] != 0) {
            $panels = array_merge(array(array('index' => 0, 'label' => '')), $panels);
            $prevPanelIndex = -1;
        }

        foreach ($panels as $k => $p) {

            //Scorre i campi a partire dall'indice successivo a quello del pannello precedente
            for($i = $prevPanelIndex+1; $i < count($fields); $i++) {

                if(!isset($panels[$k]['fields'])) $panels[$k]['fields'] = array();

                //Aggiunge i campi al pannello
                if($fields[$i]['type'] != 'panel') {
                    $panels[$k]['fields'][] = $fields[$i];
                }else {
                    //Quando trova un altro pannello si ferma
                    $prevPanelIndex = $i;
                    break;
                }
            }
        }


        return $this->render('MrappsBackendBundle:Default:new.html.twig', array(
            'current_route' => $request->get('_route'),
            'title' => $title,
            'panels' => $panels,
            'linkSave' => $linkSave,
            'linkEdit' => $linkEdit,
            'linkPublish' => $linkPublish,
            'create' => $create,
            'edit' => $edit,
            'linkNew' => $linkNew,
            'linkBreadcrumb' => $linkBreadcrumb,
            'linkAction' => $linkAction,
            'confirmSave' => $confirmSave,
            'images_url' => $imagesUrl,
            'languages' => $languages,
            'confirmMessages' => $confirmMessages,
            'angular' => '"angularFileUpload","ui.tinymce","ui.sortable","ui.bootstrap","ngJsTree","ui.validate","minicolors","ui.select","uiGmapgoogle-maps","ui.utils.masks"',
        ));
    }

    public function __showAction(Request $request, $title, $fields, $linkEdit = null, $linkBreadcrumb = null, $linkNew = null)
    {
        $trans = $this->get('translator');

        $em = $this->getDoctrine()->getManager();
        $languages = $em->getRepository('MrappsBackendBundle:Language')->findBy(["visible" => true]);

        $locale = $request->getLocale();

        $panels = array();

        //Elimina gli array non validi prima di sistemare i dati
        $riallineaChiavi = false;
        foreach ($fields as $k => $f) {
            if(!isset($f['type'])) {
                unset($fields[$k]);
                $riallineaChiavi = true;
            }
        }
        if($riallineaChiavi) {
            $fields = array_values($fields);    //Riallineamento chiavi per far funzionare il raggruppamento in pannelli
        }

        //Allineamento campi
        foreach ($fields as $k => $f) {

            //Pannello
            if($f['type'] == 'panel') {
                $panels[] = array(
                    'index' => $k,
                    'label' => (isset($f['label'])) ? $f['label'] : '',
                );
            }
        }

        //Indice da cui partire a leggere i fields
        $prevPanelIndex = 0;

        //Raggruppamento in pannelli
        if(count($panels) == 0) {
            $panels[] = array('index' => 0, 'label' => '');
            $prevPanelIndex = -1;
        }

        //Se il primo elemento non è un pannello ne creo uno fittizio
        if($panels[0]['index'] != 0) {
            $panels = array_merge(array(array('index' => 0, 'label' => '')), $panels);
            $prevPanelIndex = -1;
        }

        foreach ($panels as $k => $p) {

            //Scorre i campi a partire dall'indice successivo a quello del pannello precedente
            for($i = $prevPanelIndex+1; $i < count($fields); $i++) {

                if(!isset($panels[$k]['fields'])) $panels[$k]['fields'] = array();

                //Aggiunge i campi al pannello
                if($fields[$i]['type'] != 'panel') {
                    $panels[$k]['fields'][] = $fields[$i];
                }else {
                    //Quando trova un altro pannello si ferma
                    $prevPanelIndex = $i;
                    break;
                }
            }
        }


        return $this->render('MrappsBackendBundle:Default:show.html.twig', array(
            'current_route' => $request->get('_route'),
            'title' => $title,
            'panels' => $panels,
            'linkEdit' => $linkEdit,
            'linkNew' => $linkNew,
            'linkBreadcrumb' => $linkBreadcrumb,
            'languages' => $languages,
            'angular' => '',
        ));
    }

    private function getThumbnailUrl($imageUrl = null)
    {
        if (Utils::bundleLiipExists($this->container)) {

            return $this->get('liip_imagine.cache.manager')->getBrowserPath($imageUrl, 'backend_thumbnail');

        } else {
            return $imageUrl;
        }
    }

    /**
     * @Route("/upload/immagine", name="mrapps_backend_uploadimmagine")
     * @Method({"POST"})
     */
    public function uploadImmagineAction(Request $request)
    {
        $responseLocation = '';
        $responseId = 0;
        $responseUrl = '';
        $responseError = '';
        $success = false;

        $tmpImg = $request->files->all();

        if (isset($tmpImg['file']) && !$tmpImg['file']->getError()) {

            $file = $tmpImg['file'];

            if (!Utils::isValidFile($this->container, 'image', $file)) {
                return new JsonResponse(array('location' => '', 'id' => 0, 'error' => 'Immagine non valida.'));
            }

            $em = $this->getDoctrine()->getManager();

            $filePath = $file->getPathname();
            $sha1 = sha1(file_get_contents($filePath));

            $localDir = $this->getLocalUploadDir('mrapps_backend_images');

            if (Utils::bundleMrappsAmazonExists($this->container)) {

                /* @var $s3 \Mrapps\AmazonBundle\Handler\S3Handler */
                $s3 = $this->container->get('mrapps.amazon.s3');

                $s3Key = 'mrapps_backend_images/' . $sha1;

                $position = strrpos($file->getClientOriginalName(), ".");
                $s3Path = $s3Key . substr($file->getClientOriginalName(), $position);

                //Upload immagine su s3
                if (!$s3->objectExists($s3Path)) $s3->uploadObject($s3Path, $filePath);

                //Entity
                $immagine = $em->getRepository('MrappsBackendBundle:Immagine')->findOneBy(array('url' => $s3Path));
                if ($immagine == null) {
                    $immagine = new Immagine();
                }
                $immagine->setUrl($s3Path);
                $em->persist($immagine);
                $em->flush();

                $thumbnailUrl = $this->getThumbnailUrl($immagine->getUrl());

                $responseLocation = $thumbnailUrl;
                $responseId = $immagine->getId();
                $responseUrl = $thumbnailUrl;
                $responseError = '';
                $success = true;

            } else {

                $dirAvailable = false;


                if (!is_dir($localDir)) {

                    if (false === mkdir($localDir, 0755, true)) {
                        $dirAvailable = false;
                    } else {
                        $dirAvailable = true;
                    }

                } else {
                    $dirAvailable = true;
                }

                if ($dirAvailable) {

                    $s3Key = $sha1;
                    $position = strrpos($file->getClientOriginalName(), ".");
                    $fileName = $s3Key . substr($file->getClientOriginalName(), $position);

                    $file->move(
                        $localDir,
                        $fileName
                    );

                    $url = 'uploads/mrapps_backend_images/' . $fileName;

                    //Entity
                    $immagine = $em->getRepository('MrappsBackendBundle:Immagine')->findOneBy(array('url' => $url));
                    if ($immagine == null) {
                        $immagine = new Immagine();
                    }
                    $immagine->setUrl($url);
                    $em->persist($immagine);
                    $em->flush();

                    $thumbnailUrl = $this->getThumbnailUrl($url);

                    $responseLocation = $thumbnailUrl;
                    $responseId = $immagine->getId();
                    $responseUrl = $thumbnailUrl;
                    $responseError = '';

                    $success = true;
                } else {
                    $success = false;
                    $responseError = "Non è stato possibile salvare l'immagine";
                }

            }

        } else {
            $responseError = 'Immagine non trovata.';
        }

        $data = array(
            'location' => $responseLocation,       //location viene usato da tinymce
            'id' => $responseId,
            'url' => $responseUrl,
            'message' => $responseError,
            'success' => $success,
        );

        return new JsonResponse($data);
    }

    /**
     * @Route("/upload/file", name="mrapps_backend_uploadfile")
     * @Method({"POST"})
     */
    public function uploadFileAction(Request $request)
    {
        $success = false;
        $message = '';
        $data = array(
            'id' => null,
            'mime' => null,
            'file_name' => null,
            'normalized_type' => null,
        );

        $tmpFile = $request->files->all();
        if (isset($tmpFile['file']) && !$tmpFile['file']->getError()) {

            $file = $tmpFile['file'];

            $em = $this->getDoctrine()->getManager();

            $originalName = $file->getClientOriginalName();

            $filePath = $file->getPathname();
            $sha1 = sha1(file_get_contents($filePath));

            $localDir = $this->getLocalUploadDir('mrapps_backend_files');

            $mimeType = $em->getRepository('MrappsBackendBundle:File')->getMimeType($filePath);

            $url = null;

            if (Utils::bundleMrappsAmazonExists($this->container)) {

                $s3Key = 'mrapps_backend_files/' . $sha1;
                $position = strrpos($file->getClientOriginalName(), ".");
                $url = $s3Key . substr($file->getClientOriginalName(), $position);

                /* @var $s3 \Mrapps\AmazonBundle\Handler\S3Handler */
                $s3 = $this->container->get('mrapps.amazon.s3');

                $defaultBucket = $this->container->getParameter('mrapps_amazon.parameters.default_bucket');

                //Upload file su s3
                if (!$s3->objectExists($url)) $s3->uploadObject($url, $filePath);

                $success = true;

            } else {
                $defaultBucket = null;
                $localDir = $this->getLocalUploadDir();
                $s3Key = $sha1;

                $dirAvailable = false;


                if (!is_dir($localDir)) {

                    if (false === mkdir($localDir, 0755, true)) {
                        $dirAvailable = false;
                    } else {
                        $dirAvailable = true;
                    }

                } else {
                    $dirAvailable = true;
                }

                if ($dirAvailable) {
                    $s3Key = $sha1;
                    $position = strrpos($file->getClientOriginalName(), ".");
                    $fileName = $s3Key . substr($file->getClientOriginalName(), $position);

                    $url = 'uploads/mrapps_backend_files/' . $fileName;

                    $file->move(
                        $localDir,
                        $fileName
                    );

                    $success = true;
                } else {
                    $success = false;
                    $message = "Non è stato possibile salvare il file";
                }
            }

            //Entity
            $fileEntity = null;

            if ($success) {
                $fileEntity = $em->getRepository('MrappsBackendBundle:File')->createFile($url, $defaultBucket, $originalName, $mimeType);
            }

            if ($fileEntity !== null) {

                $data['id'] = $fileEntity->getId();
                $data['mime'] = $mimeType;
                $data['file_name'] = $originalName;
                $data['normalized_type'] = $em->getRepository('MrappsBackendBundle:File')->getNormalizedType($this->container, $mimeType);

                $success = true;
                $message = '';

            } else {
                $success = false;
                $message = "Si è verificato un problema imprevisto durante l'elaborazione del file. Riprovare tra qualche minuto.";
            }


        } else {
            $success = false;
            $message = 'File non trovato.';
        }

        return Utils::generateResponse($success, $message, $data);
    }

    /**
     * @Route("/upload/pdf", name="mrapps_backend_uploadpdf")
     * @Method({"POST"})
     */
    public function uploadPdfAction(Request $request)
    {
        /* @var $s3 \Mrapps\AmazonBundle\Handler\S3Handler */
        $s3 = $this->container->get('mrapps.amazon.s3');

        $pdf = $request->files->all();
        $array = [];

        $webFolder = realpath($this->container->get('kernel')->getRootDir() . '/../web') . '/';
        $tempRelativeFolder = $this->container->get('mrapps_backend.temp_folder') . '/';
        $tempFolder = $webFolder . $tempRelativeFolder;

        $success = false;
        $message = '';

        if (isset($pdf['file']) && !$pdf['file']->getError()) {

            $file = $pdf['file'];
            if (Utils::isValidFile($this->container, 'pdf', $file)) {

                $em = $this->getDoctrine()->getManager();
                $filePath = $file->getPathname();
                $localDir = $this->getLocalUploadDir('mrapps_backend_images');

                $images = new \Imagick();
                $images->setResolution(300, 300);
                $images->readImage($filePath);

                foreach ($images as $image) {
                    $imagePath = $image->getPathname();


                    $tempName = sprintf("pdf_page_%s.jpg", Utils::getDateStringForUniqueFiles());
                    $relativePath = $tempRelativeFolder . $tempName;
                    $absolutePath = $tempFolder . $tempName;

                    $image->writeImage($relativePath);

                    $sha1 = sha1(file_get_contents($absolutePath));
                    $fileName = $sha1 . '.jpg';

                    $url = null;

                    if (Utils::bundleMrappsAmazonExists($this->container)) {
                        $s3 = $this->container->get('mrapps.amazon.s3');
                        $s3Key = 'mrapps_backend_images/' . $fileName;


                        //Caricamento file su s3
                        if (!$s3->objectExists($s3Key)) {
                            $s3->uploadObject($s3Key, $absolutePath);
                        }

                        $url = $s3Key;

                        unlink($absolutePath);

                    } else {
                        $s3Key = $sha1;

                        if (!is_dir($localDir)) {

                            if (false === mkdir($localDir, 0755, true)) {
                                $dirAvailable = false;
                            } else {
                                $dirAvailable = true;
                            }

                        } else {
                            $dirAvailable = true;
                        }

                        if ($dirAvailable) {
                            copy($absolutePath, $localDir . $fileName);
                            unlink($absolutePath);

                            $url = 'uploads/mrapps_backend_images/' . $fileName;
                        } else {
                            unlink($absolutePath);

                            $success = false;
                            $message = 'Si è verificato un problema durante il caricamento del pdf; Riprovare più tardi.';
                            return Utils::generateResponse($success, $message, $array);;
                        }

                    }

                    //Entity
                    $immagine = $em->getRepository('MrappsBackendBundle:Immagine')->findOneBy(array('url' => $url));
                    if ($immagine == null) {
                        $immagine = new Immagine();
                    }

                    $immagine->setUrl($s3Key);
                    $em->persist($immagine);
                    $em->flush($immagine);

                    $array[] = $immagine->getId();
                }

                $success = true;
                $message = 'Pdf Caricato.';

            } else {
                $success = false;
                $message = 'Pdf non valido.';
            }

        } else {
            $success = false;
            $message = 'Si è verificato un problema durante il caricamento del pdf; Riprovare più tardi.';
        }

        return Utils::generateResponse($success, $message, $array);
    }

    /**
     * @Route("/permissions/{object}/{returnRoute}", name="mrapps_backend_permissions")
     * @Method({"GET"})
     */
    public function permissionsAction(Request $request, $object = '', $returnRoute = '')
    {
        //Security
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Accesso non autorizzato!');

        $object = trim($object);
        $returnRoute = trim($returnRoute);
        try {
            $routeUrl = (strlen($returnRoute) > 0) ? $this->generateUrl($returnRoute) : '';
        }catch(\Exception $e) {
            $routeUrl = '';
        }

        $em = $this->getDoctrine()->getManager();

        $permissions = $em->getRepository('MrappsBackendBundle:Permission')->findBy(array('object' => $object));

        return $this->render('MrappsBackendBundle:Default:permissions.html.twig', array(
            'title' => "Gestione permessi per l'oggetto '".$object."'",
            'angular' => '"ngTable","ngResource"',
            'permissions' => $permissions,
            'route_url' => $routeUrl,
            'object' => $object,
        ));
    }

    /**
     * @Route("/save_permissions", name="mrapps_backend_savepermissions")
     * @Method({"POST"})
     */
    public function savepermissionsAction(Request $request)
    {
        //Security
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN', null, 'Accesso non autorizzato!');

        $em = $this->getDoctrine()->getManager();
        $content = json_decode($request->getContent(), true);

        $object = (isset($content['object'])) ? trim($content['object']) : '';
        if(strlen($object) > 0 && isset($content['rows'])) {

            foreach($content['rows'] as $row) {

                $role = strtoupper(trim($row['role']));
                $canView = (bool)$row['can_view'];
                $canCreate = (bool)$row['can_create'];
                $canEdit = (bool)$row['can_edit'];
                $canDelete = (bool)$row['can_delete'];

                //SuperAdmin avrà sempre permessi massimi
                if($role == 'ROLE_SUPER_ADMIN') {
                    $canView = true;
                    $canCreate = true;
                    $canEdit = true;
                    $canDelete = true;
                }

                $em->getRepository('MrappsBackendBundle:Permission')->addPermission($object, $role, array(
                    'view' => $canView,
                    'create' => $canCreate,
                    'edit' => $canEdit,
                    'delete' => $canDelete,
                ), false, true);
            }

            $em->flush();

            $success = true;
            $message = '';

        }else {
            $success = false;
            $message = 'Parametri non validi.';
        }

        return Utils::generateResponse($success, $message);
    }

    /**
     * @Route("/validate_facebook", name="mrapps_backend_validatefacebook")
     * @Method({"GET"})
     */
    public function validatefacebookAction(Request $request)
    {
        $httpCode = 0;
        $valid = false;

        $url = strtolower(trim($request->get('url')));

        if(strlen($url) > 0) {

            $pos = strpos($url, 'facebook.com');

            if($pos !== false) {

                if(substr($url, 0, 4) != "http") {
                    $url = 'http://'.$url;
                }

                $channel = curl_init();
                curl_setopt($channel, CURLOPT_URL, $url);
                curl_setopt($channel, CURLOPT_CONNECTTIMEOUT, 10);
                curl_setopt($channel, CURLOPT_TIMEOUT, 10);
                curl_setopt($channel, CURLOPT_HEADER, true);
                curl_setopt($channel, CURLOPT_NOBODY, true);
                curl_setopt($channel, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($channel, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201');
                curl_setopt($channel, CURLOPT_FOLLOWLOCATION, true);
                curl_setopt($channel, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
                curl_setopt($channel, CURLOPT_SSL_VERIFYPEER, FALSE);
                curl_setopt($channel, CURLOPT_SSL_VERIFYHOST, FALSE);
                curl_exec($channel);
                $httpCode = curl_getinfo($channel, CURLINFO_HTTP_CODE );
                curl_close($channel);

                $valid = ($httpCode == 200);
            }
        }else {
            $valid = true;
        }

        return new JsonResponse(array('valid' => $valid, 'code' => $httpCode, 'url' => $url));
    }

    public function __calendarAction($title, $calendarAjax, $linkBreadcrumb = null, $calendarNew= null, $calendarDelete= null, $fields = null)
    {

        $em = $this->getDoctrine()->getManager();

        return $this->render('MrappsBackendBundle:Default:calendar.html.twig', array(
            'title' => $title,
            'calendarAjax' => $calendarAjax,
            'linkBreadcrumb' => $linkBreadcrumb,
            'calendarNew' => $calendarNew,
            'calendarDelete' => $calendarDelete,
            'fields' => $fields,
            'angular' => '"angularFileUpload","ui.tinymce","ui.sortable","ui.bootstrap","ngJsTree","ui.validate","minicolors","ui.select","uiGmapgoogle-maps"',
        ));
    }
}
