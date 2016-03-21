<?php

namespace Mrapps\BackendBundle\Classes;

use Doctrine\Common\Annotations\AnnotationReader;
use Mrapps\BackendBundle\Entity\LanguageBase;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\UserBundle\Model\UserInterface;

class Utils
{
    public static function getControllerCompactName($controllerFullName = '') {

        $compactName = $controllerFullName;
        $pos = strpos($compactName, '::');
        if($pos !== false) {
            $compactName = substr($compactName, 0, $pos);
        }

        if(strlen($compactName) > 0) {
            $compactName = str_replace('\\\\', ':', str_replace('Controller', '', $compactName));
        }

        return $compactName;
    }

    public static function getRoutesArray($container = null) {

        $arrayRoutes = array();

        if($container !== null) {
            $routes = $container->get('router')->getRouteCollection();
            foreach ($routes as $route) {
                $controller = $route->getDefault('_controller');
                $path = $route->getPath();
                $arrayRoutes[$controller] = $path;
            }
        }

        return $arrayRoutes;
    }

    public static function getControllerActionFullName(\ReflectionMethod $method) {

        $controller = $method->class;
        $action = $method->name;

        return trim($controller, '\\').'::'.$action;
    }

    public static function getAllRoles($container = null) {

        $output = array();

        if($container !== null) {

            $roles = array_reverse($container->getParameter('security.role_hierarchy.roles'));
            foreach($roles as $main => $children) {
                if(!isset($output[$main])) $output[$main] = $main;
                foreach($children as $child) {
                    if(!isset($output[$child])) $output[$child] = $child;
                }
            }
        }

        return array_reverse($output);
    }

    public static function bundleExists($container = null, $bundleName = '')
    {

        if ($container !== null && strlen($bundleName) > 0) {
            $bundles = $container->getParameter('kernel.bundles');
            return array_key_exists($bundleName, $bundles);
        }

        return false;
    }

    public static function bundleMrappsAmazonExists($container = null)
    {
        return Utils::bundleExists($container, 'MrappsAmazonBundle');
    }

    public static function bundleLiipExists($container = null)
    {
        return Utils::bundleExists($container, 'LiipImagineBundle');
    }


    public static function setRelazioneTexarea($texarea, $item, $nomerelazione, $imagesUrl, $em)
    {

        $risultato = null;
        preg_match_all('(src="' . $imagesUrl . '(.*?)")', $texarea, $risultato);

        $oggetti = $em->getRepository("MrappsBackendBundle:$nomerelazione")->findBy(array("item" => $item));
        foreach ($oggetti as $oggetto) {
            $em->remove($oggetto);
        }

        $nomerelazione = "MrappsBackendBundle\\Entity\\" . $nomerelazione;
        if (isset($risultato[1]) && is_array($risultato[1])) {
            foreach ($risultato[1] as $value) {
                $immagine = $em->getRepository('MrappsBackendBundle:Immagine')->findOneBy(array("url" => $value));
                $relazione = new $nomerelazione();
                $relazione->setImmagine($immagine);
                $relazione->setItem($item);
                $em->persist($relazione);
            }
            $em->flush();
        }
    }


    static public function slugify($text)
    {

        // replace non letter or digits by -
        $text = preg_replace('~[^\\pL\d]+~u', '-', $text);

        // trim
        $text = trim($text, '-');

        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

        // lowercase
        $text = strtolower($text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);

        if (empty($text)) {
            return null;
        }

        return $text;
    }

    /**
     *
     * @param bool $stato
     * @param String $messaggio
     * @param array $valori
     * @return type
     */
    public static function generateResponse($stato, $messaggio = null, $valori = null, $errorCode = null)
    {

        //Gestione errori multipli
        if (is_array($messaggio)) {
            $valori['errors'] = $messaggio;
            $messaggio = '';
        }

        $data = array('success' => $stato, 'message' => $messaggio, 'data' => $valori);
        if ($errorCode !== null) $data['error_code'] = $errorCode;

        $json = new JsonResponse();
        $json->setData($data);

        return $json;
    }

    public static function getHttpResponse($url, $content = null)
    {

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

        if ($content !== null) {

            $data_string = json_encode($content);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($data_string))
            );
        } else {
            curl_setopt($ch, CURLOPT_HEADER, FALSE);
        }


        $body = curl_exec($ch);
        curl_close($ch);

        return $body;
    }

    public static function getDateStringForUniqueFiles()
    {

        $micro_date = microtime();
        $date_array = explode(" ", $micro_date);
        $date = date("Y_m_d_H_i_s", $date_array[1]);
        $millis = explode(".", $date_array[0]);
        return $date . '_' . ($millis[1]) . '_' . mt_rand(1, 999999);
    }

    public static function getAcceptedTypes($container = null, $type = '')
    {

        $acceptedTypes = array();

        $type = strtolower(trim($type));
        if ($container !== null && strlen($type) > 0) {
            $parameterName = 'mrapps_backend.file_accepted_types.' . $type;
            $exploded = explode(',', $container->hasParameter($parameterName) ? $container->getParameter($parameterName) : '');
            foreach ($exploded as $t) {
                $t = trim($t);
                if (strlen($t) > 0) $acceptedTypes[] = $t;
            }
        }

        return $acceptedTypes;
    }

    public static function isValidFile($container = null, $type = '', UploadedFile $file = null)
    {

        $type = strtolower(trim($type));
        if ($container !== null && $file !== null) {

            $acceptedTypes = Utils::getAcceptedTypes($container, $type);

            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = strtolower(trim(finfo_file($finfo, $file->getPathname())));
            finfo_close($finfo);

            return in_array($mime, $acceptedTypes);
        }

        return false;
    }

    public static function getListResults($em = null, $entity = '', $count = 0, $page = 1, $filters = array(), $sorting = array())
    {

        if ($em !== null && strlen($entity) > 0) {

            $count = intval($count);
            $page = intval($page);

            //Fix parametri
            if ($count < 0) $count = 0;
            if ($page < 1) $page = 1;
            if (!is_array($filters)) $filters = array();
            if (!is_array($sorting)) $sorting = array('createdAt' => 'desc');    //Sorting di default
            //--------------------------------------------------------------------------------------------

            //Filtri
            $params = array();
            $where = '';
            if (count($filters) > 0) {
                $tmp = array();
                foreach ($filters as $campo => $valore) {
                    $tmp[] = sprintf(" a.%s LIKE :%s ", $campo, $campo);
                    $params[$campo] = '%' . $valore . '%';
                }
                $where = 'WHERE ' . implode('AND', $tmp);
            }

            //Stringa order by
            $orderBy = '';
            foreach ($sorting as $campo => $ord) {
                $orderBy .= sprintf("a.%s %s,", $campo, $ord);
            }

            $query = "SELECT a FROM {$entity} a";
            if (strlen($where) > 0) $query .= ' ' . $where;
            if (strlen($orderBy) > 0) {
                $orderBy = substr($orderBy, 0, strlen($orderBy) - 1);    //Elimina l'ultima virgola
                $query .= ' ORDER BY ' . $orderBy;
            }

            $tmp = $em->createQuery($query);    //->setMaxResults($count)->setFirstResult(($page-1)*$count)

            if (count($params) > 0) {
                $tmp->setParameters($params);
            }

            return $tmp->execute();
        }

        return array();
    }

    public static function replaceQuote($string = '')
    {

        if (strlen(trim($string)) > 0) {
            return str_replace("'", "\'", $string);
        }

        return $string;
    }

    public static function check_in_range($start_date, $end_date, $date)
    {
        // Convert to timestamp
        $start_ts = strtotime($start_date->format('Y-m-d H:i:s'));
        $end_ts = strtotime($end_date->format('Y-m-d H:i:s'));
        $ts = strtotime($date);

        // Check that user date is between start & end
        return (($ts >= $start_ts) && ($ts <= $end_ts));
    }

    public static function check_youtube($container, $url)
    {

        $data = [];

        if (strlen($url) > 0) {

            $videoId = Utils::getYouTubeIdFromUrl($url);
            $googleServerKey = ($container->hasParameter('google_server_key')) ? $container->getParameter('google_server_key') : '';

            if (strlen($videoId) > 0 && strlen($googleServerKey) > 0) {

                $apisUrl = sprintf("https://www.googleapis.com/youtube/v3/videos?id=%s&key=%s&part=snippet&fields=items(snippet(title,thumbnails))", $videoId, $googleServerKey);
                $info = json_decode(Utils::getHttpResponse($apisUrl), true);

                if ($info !== null && is_array($info)) {

                    //Navigazione nella struttura del risultato
                    if (isset($info['items']) &&
                        is_array($info['items']) &&
                        isset($info['items'][0]) &&
                        is_array($info['items'][0]) &&
                        isset($info['items'][0]['snippet']) &&
                        is_array($info['items'][0]['snippet'])
                    ) {

                        $snippet = $info['items'][0]['snippet'];

                        //Titolo
                        $title = (isset($snippet['title'])) ? trim($snippet['title']) : '';

                        //Thumbnail
                        $thumbnail = '';
                        if (isset($snippet['thumbnails']) && is_array($snippet['thumbnails'])) {
                            foreach ($snippet['thumbnails'] as $t) {

                                if (isset($t['url']) && strlen($t['url']) > 0) {
                                    $thumbnail = $t['url'];
                                    break;
                                }
                            }
                        }

                        $data['exists'] = true;
                        $data['title'] = $title;
                        $data['url'] = $url;
                        if (strlen($thumbnail) > 0) $data['thumb'] = $thumbnail;
                    }
                }
            }
        }

        return $data;
    }


    public static function getYouTubeIdFromUrl($text)
    {
        return preg_replace('~https?://(?:[0-9A-Z-]+\.)?(?:youtu\.be/| youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:[\'"][^<>]*>| </a>))[?=&+%\w.-]*~ix', '$1', $text);
    }

    public static function getArrayLang($entity, $method = 'getTraduzioni', $fields = null, $options = array()) {

        if(!is_array($fields) || count($fields) == 0) $fields = null;

        if(!is_array($options)) $options = array();
        if(!isset($options['key_isocodes'])) $options['key_isocodes'] = false;

        $array = [];
        $reader = new AnnotationReader();
        foreach ($entity->$method() as $item){

            $objUser = new \ReflectionObject($item);
            $properties = $objUser->getProperties();
            foreach($properties as $p) {

                if($fields == null || in_array($p->name, $fields)) {

                    $annOneToOne = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\OneToOne');
                    $annManyToOne = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\ManyToOne');
                    $annOneToMany = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\OneToMany');

                    if($annOneToOne == null && $annManyToOne == null && $annOneToMany == null) {

                        $method = 'get'.Utils::snakeToCamelCase($p->name);

                        $lang = $item->getLang();
                        $key = ($lang !== null) ? (($options['key_isocodes']) ? $lang->getIsoCode() : $lang->getId()) : null;
                        if($key != null) {
                            $array[$p->name][$key] = $item->$method();
                        }
                    }
                }
            }
        }

        return $array;
    }

    public static function snakeToCamelCase($snakeCase) {
        return str_replace(' ', '', ucwords(str_replace('_', ' ', strtolower($snakeCase))));
    }
}