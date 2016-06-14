<?php

namespace Mrapps\BackendBundle\Classes;

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Collections\Criteria;
use Mrapps\BackendBundle\Entity\LanguageBase;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\UserBundle\Model\UserInterface;
use Mrapps\BackendBundle\Model\DraftInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query as DoctrineQuery;
use Mrapps\BackendBundle\Entity\Base;
use FOS\UserBundle\Entity\User;

class Utils
{
    public static function getControllerCompactName($controllerFullName = '')
    {

        $compactName = $controllerFullName;
        $pos = strpos($compactName, '::');
        if ($pos !== false) {
            $compactName = substr($compactName, 0, $pos);
        }

        if (strlen($compactName) > 0) {
            $compactName = str_replace('\\', '', str_replace('\\\\', ':', str_replace('Controller', '', $compactName)));
        }

        return $compactName;
    }

    public static function getRoutesArray($container = null)
    {

        $arrayRoutes = array();

        if ($container !== null) {
            $routes = $container->get('router')->getRouteCollection();
            foreach ($routes as $route) {
                $controller = $route->getDefault('_controller');
                $path = $route->getPath();
                $arrayRoutes[$controller] = $path;
            }
        }

        return $arrayRoutes;
    }

    public static function getControllerActionFullName(\ReflectionMethod $method)
    {

        $controller = $method->class;
        $action = $method->name;

        return trim($controller, '\\') . '::' . $action;
    }

    public static function getAllRoles($container = null)
    {

        $output = array();

        if ($container !== null) {

            $roles = array_reverse($container->getParameter('security.role_hierarchy.roles'));
            foreach ($roles as $main => $children) {
                if (!isset($output[$main])) $output[$main] = $main;
                foreach ($children as $child) {
                    if (!isset($output[$child])) $output[$child] = $child;
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

    /**
     * Lista Risultati Entity filtrata ed ordinata in base ad i dati specificati.
     *
     * @param EntityManager $em entity manager
     * @param string $entity Percorso completo classe da cui reperire i risultati
     * @param int $count numero risultati
     * @param int $page numero di pagina
     * @param array $filters clausole in Where Condition (è possibile specificare anche una struttura ad array('operator'=>Operator:GreaterOrEqual,'value'=>valore))
     * @param array $sorting campi per il sorting
     *
     * @return array Ritorna il risultato della query
     *
     */
    public static function getListResults($em = null, $entity = '', $count = 0, $page = 1, $filters = array(), $sorting = array())
    {
        if ($em !== null && strlen($entity) > 0) {

            //Se l'entity è DRAFT attivo di default il filtro "published = FALSE"
            $isDraft = false;
            $exploded1 = explode(':', $entity);
            if (count($exploded1) > 1) {
                $exploded2 = preg_split('/(?=[A-Z])/', $exploded1[0], -1, PREG_SPLIT_NO_EMPTY);
                $expCount = count($exploded2);
                if ($expCount > 1 && strtolower($exploded2[$expCount - 1]) == 'bundle') {
                    $exploded2[$expCount - 2] = $exploded2[$expCount - 2] . $exploded2[$expCount - 1];
                    unset($exploded2[$expCount - 1]);
                }
                $fullEntity = implode('\\', $exploded2) . '\\Entity\\' . $exploded1[1];

                $isDraft = is_subclass_of($fullEntity, 'Mrapps\\BackendBundle\\Entity\\Draft');
            }

            $count = intval($count);
            $page = intval($page);

            //Fix parametri
            if ($count < 0) $count = 0;
            if ($page < 1) $page = 1;
            if (!is_array($filters)) $filters = array();
            if (!is_array($sorting)) $sorting = array('createdAt' => 'desc');    //Sorting di default
            if ($isDraft && !isset($filters['published'])) $filters['published'] = 0;
            //--------------------------------------------------------------------------------------------

            //Filtri
            $params = array();
            $where = '';
            $inCount = 1;
            if (count($filters) > 0) {
                $tmp = array();
                foreach ($filters as $campo => $valore) {
                    if (is_numeric($valore) || is_object($valore)) {
                        $tmp[] = sprintf(" a.%s " . Operator::Equal . " :%s ", $campo, $campo);
                        $params[$campo] = $valore;
                    } elseif (is_array($valore)) {

                        $operator = $valore["operator"];

                        if ($operator == Operator::GreaterOrEqual ||
                            $operator == Operator::Equal ||
                            $operator == Operator::Greater ||
                            $operator == Operator::Lower ||
                            $operator == Operator::LowerOrEqual
                        ) {

                            $tmp[] = sprintf(" a.%s " . $operator . " :%s ", $campo, $campo);
                            $params[$campo] = $valore["value"];
                        } elseif ($operator == Operator::IsNull ||
                            $operator == Operator::IsNotNull
                        ) {
                            $tmp[] = sprintf(" a.%s " . $operator, $campo);

                        } elseif ($operator == Operator::In) {
                            $tmp[] = sprintf(" a.%s %s (?%s) ", $campo, $operator, $inCount);
                            $params[$inCount] = $valore['value'];
                            $inCount++;
                        } elseif ($operator == Operator::InSubquery) {

                            $tmp[] = sprintf(" a.%s %s (%s) ", $campo, Operator::In, $valore['value']);
                            $inCount++;
                        }

                    } else {
                        $tmp[] = sprintf(" a.%s LIKE :%s ", $campo, $campo);
                        $params[$campo] = '%' . $valore . '%';
                    }

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

            $tmp = $em->createQuery($query); //->setMaxResults($count)->setFirstResult(($page - 1) * $count);   //NON SCOMMENTARE

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

    public static function getArrayLang($entity, $method = 'getTraduzioni', $fields = null, $options = array())
    {
        if (!is_array($fields) || count($fields) == 0) $fields = null;

        if (!is_array($options)) $options = array();
        if (!isset($options['key_isocodes'])) $options['key_isocodes'] = false;
        if (!isset($options['force_published_entity'])) $options['force_published_entity'] = false;

        //Forza l'entity pubblicata in caso di entity draft
        if ((bool)$options['force_published_entity'] == true) {
            $class = get_class($entity);
            if (is_subclass_of($class, 'Mrapps\\BackendBundle\\Entity\\Draft') && $entity->getPublished() == false && $entity->getOther() != null) {
                $entity = $entity->getOther();
            }
        }

        $array = [];
        $reader = new AnnotationReader();

        $traduzioni = $entity->$method();
        if (count($traduzioni) > 0) {
            foreach ($traduzioni as $item) {
                $objUser = new \ReflectionObject($item);
                $realClass = str_replace('Proxies\\__CG__\\', '', $objUser->name);
                $properties = $objUser->getProperties();
                foreach ($properties as $p) {

                    if ($p->class == $realClass && ($fields == null || in_array($p->name, $fields))) {

                        $annOneToOne = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\OneToOne');
                        $annManyToOne = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\ManyToOne');
                        $annOneToMany = $reader->getPropertyAnnotation($p, 'Doctrine\\ORM\\Mapping\\OneToMany');

                        if ($annOneToOne == null && $annManyToOne == null && $annOneToMany == null) {

                            $method = 'get' . Utils::snakeToCamelCase($p->name);

                            $lang = $item->getLang();
                            $key = ($lang !== null) ? (($options['key_isocodes']) ? $lang->getIsoCode() : $lang->getId()) : null;
                            if ($key != null) {
                                try {
                                    $array[$p->name][$key] = $item->$method();
                                } catch (\Exception $ex) {
                                }
                            }
                        }
                    }
                }
            }
        }

        return $array;
    }

    private static function findTraduzione($em = null, $entity = null, $language = null, $options = array())
    {
        if ($entity !== null && is_object($entity) && $language !== null) {

            $entityLangClass = get_class($entity) . 'Lang';
            if (is_subclass_of($entityLangClass, 'Mrapps\\BackendBundle\\Entity\\LanguageBase') ||
                is_subclass_of($entityLangClass, 'Mrapps\\BackendBundle\\Entity\\LanguageBaseDraft')
            ) {

                //Entity draft e entity lang non-draft? Punto all'entity pubblicata
                if (is_subclass_of($entityLangClass, 'Mrapps\\BackendBundle\\Entity\\LanguageBase') &&
                    is_subclass_of($entity, 'Mrapps\\BackendBundle\\Entity\\Draft') &&
                    !$entity->getPublished()
                ) {

                    $entity = $entity->getOther();
                }

                if ($entity !== null) {

                    $findRules = array('padre' => $entity, 'lang' => $language);

                    if ($options["find_rules"] !== false && is_array($options["find_rules"])) {
                        foreach ($options["find_rules"] as $rule) {
                            $findRules[$rule["rule_key"]] = $rule["rule_value"];
                        }
                    }

                    $entityLang = $em->getRepository($entityLangClass)->findOneBy($findRules);
                    if ($options['create_entity'] === true) {
                        if ($entityLang == null) {

                            $entityLang = new $entityLangClass();
                            $entityLang->setLang($language);
                            $entityLang->setPadre($entity);

                            $em->persist($entityLang);

                            if ($options['auto_flush'] === true) {
                                $em->flush($entityLang);
                            }
                        }
                    }

                    return $entityLang;
                }
            }
        }

        return null;
    }

    public static function getTraduzione($em = null, $entity = null, $language = null, $options = array())
    {
        if (!is_array($options)) $options = array();
        if (!isset($options['create_entity'])) $options['create_entity'] = false;
        if (!isset($options['auto_flush'])) $options['auto_flush'] = true;
        if (!isset($options['find_rules'])) $options['find_rules'] = false; //valore accettato $options['find_rules']=array(array("rule_key"=>"key","rule_value"=>"value"))
        if (!isset($options['field'])) $options['field'] = null;

        //Se l'opzione "field" è valorizzata il sistema non restituisce più l'entity,
        //ma il campo (o la lista di campi) nella prima lingua valida che trova
        $fieldsData = array();
        if ($options['field'] !== null) {
            if (!is_array($options['field'])) {
                $options['field'] = array($options['field']);
            }

            foreach ($options['field'] as $f) {
                $fieldsData[$f] = array(
                    'getter' => 'get' . Utils::snakeToCamelCase($f),
                    'value' => null,
                );
            }
        }

        $result = null;

        if (!is_array($language)) {
            $language = array($language);
        }

        foreach ($language as $item) {

            if (!is_object($item)) {
                $lang = $em->getRepository('MrappsBackendBundle:Language')->findByIso(strtolower(trim($item)));
            } else {
                $lang = $item;
            }

            $result = Utils::findTraduzione($em, $entity, $lang, $options);

            if ($options['field'] !== null) {

                if ($result !== null) {
                    foreach ($fieldsData as $fk => $fd) {

                        $fieldGetter = $fd['getter'];

                        //Tento la valorizzazione solo dei valori rimasti a null
                        if ($fieldsData[$fk]['value'] == null && method_exists($result, $fieldGetter)) {
                            $value = trim($result->$fieldGetter());
                            if (strlen($value) > 0) {
                                $fieldsData[$fk]['value'] = $value;
                            }
                        }
                    }
                }

                //Field specificato -> esce dal ciclo solo se tutti i field sono valorizzati
                $fieldFound = true;
                foreach ($fieldsData as $fd) {
                    if ($fd['value'] == null) {
                        $fieldFound = false;
                        break;
                    }
                }
                if ($fieldFound) break;

            } else {
                //Field non specificato -> al primo oggetto non null che trova esce dal ciclo
                if ($result !== null) break;
            }
        }

        if ($options['field'] !== null && count($fieldsData) > 0) {

            if (count($fieldsData) > 1) {

                //Più campi -> restituisco un array con la lista dei campi
                $result = array();
                foreach ($fieldsData as $fk => $fd) {
                    $result[$fk] = trim($fd['value']);
                }

                return $result;

            } else {

                //Un solo campo -> restituisco direttamente il valore
                foreach ($fieldsData as $fd) {
                    return trim($fd['value']);
                }
            }

        } else {
            return $result;
        }


        return $result;
    }

    public static function getFallbackLocales($container = null, $returnSingleLocale = true)
    {

        if ((bool)$returnSingleLocale) {
            $result = null;
        } else {
            $result = array();
        }

        if ($container !== null) {

            $trans = $container->get('translator');

            $canProceed = true;
            while ($canProceed) {

                if (get_class($trans) == 'Symfony\Bundle\FrameworkBundle\Translation\Translator') $canProceed = false;

                if ($canProceed) {

                    $refTrans = new \ReflectionObject($trans);
                    $propTrovata = false;
                    foreach ($refTrans->getProperties() as $p) {
                        if ($p->name == 'translator') {

                            $p->setAccessible(true);
                            $trans = $p->getValue($trans);
                            $p->setAccessible(false);

                            $propTrovata = true;
                            break;
                        }
                    }

                    if (!$propTrovata) {
                        $trans = null;
                        $canProceed = false;
                    }
                }
            }

            if ($trans !== null && get_class($trans) == 'Symfony\Bundle\FrameworkBundle\Translation\Translator') {
                $fallbackLocales = $trans->getFallbackLocales();
                if ((bool)$returnSingleLocale) {
                    $result = (count($fallbackLocales) > 0) ? $fallbackLocales[0] : null;
                } else {
                    $result = $fallbackLocales;
                }
            }

            return $result;
        }
    }

    public static function getListOfLocalesForTraduzioni($container = null, $currentLocale = 'en')
    {

        $listOfLocales = array();

        if ($container !== null) {

            //Locale dell'utente
            if (is_object($currentLocale) && in_array(get_class($currentLocale), array('Mrapps\BackendBundle\Entity\Language', 'Proxies\__CG__\Mrapps\BackendBundle\Entity\Language'))) {
                $currentLocale = $currentLocale->getIsoCode();
            }
            $currentLocale = strtolower(trim($currentLocale));

            //Locale(s) fallback
            $fallback = Utils::getFallbackLocales($container, false);

            //Lista ordinata di locale(s)
            $listOfLocales = array_merge(array($currentLocale), $fallback);
        }

        return array_unique($listOfLocales);
    }

    public static function snakeToCamelCase($snakeCase)
    {
        return str_replace(' ', '', ucwords(str_replace('_', ' ', strtolower($snakeCase))));
    }

    public static function getContent($content)
    {
        $content = json_decode($content);

        $array = array();

        foreach ($content as $key => $value) {
            $item = explode("_", $key);
            $lang = intval($item[count($item) - 1]);
            if ($lang > 0) {
                //CAMPO MULTILINGUA
                $array[substr($key, 0, -(strlen($lang) + 1))][$lang] = $value;
            } else {
                $array[$key] = $value;
            }
        }

        return $array;
    }

    public static function getLanguages()
    {
        return [
            "it" => "Italiano",
            "en" => "English"
        ];
    }

    public static function getDefaultRouteForUser($container, $user)
    {

        $defaultRoutes = $container->getParameter('mrapps_backend.default_routes');

        $roles = ($user !== null && is_object($user)) ? $user->getRoles() : array();
        $roles[] = 'DEFAULT';

        $defaultRouteForUser = '';
        $canProceed = true;
        foreach ($roles as $role) {
            if ($canProceed) {
                foreach ($defaultRoutes as $route) {
                    if ($route['role'] == $role) {
                        $defaultRouteForUser = $route['name'];
                        $canProceed = false;
                        break;
                    }
                }
            }
        }

        return $defaultRouteForUser;
    }

    public static function convertTimestampToIso8601($timestamp = null)
    {

        if ($timestamp !== null) {

            $timestamp = intval($timestamp);
            $date = date('Y-m-d', $timestamp);
            $time = date('H:i:s', $timestamp);
            return sprintf("%sT%s.000Z", $date, $time);

        }

        return null;
    }

    public static function convertIso8601ToDatetime($iso = "")
    {
        $iso = trim($iso);
        if (strlen($iso) > 0) {

            $timestamp = strtotime($iso);
            if ($timestamp !== false) {
                $output = new \DateTime();
                $output->setTimestamp($timestamp);
                return $output;
            }
        }

        return null;
    }

    public static function getEntityBozza(EntityManager $em = null, DraftInterface $entity = null)
    {

        if ($em !== null && $entity !== null) {
            $newEntity = ($entity->getPublished()) ? $entity->getOther() : $entity;
            return Utils::getFullEntityFromProxy($em, $newEntity);
        }

        return null;
    }

    public static function getEntityPublished(EntityManager $em = null, DraftInterface $entity = null)
    {

        if ($em !== null && $entity !== null) {
            $newEntity = (!$entity->getPublished()) ? $entity->getOther() : $entity;
            return Utils::getFullEntityFromProxy($em, $newEntity);
        }

        return null;
    }

    public static function getFullEntityFromProxy(EntityManager $em = null, Base $entity = null)
    {

        if ($entity !== null) {

            $proxyClass = 'Doctrine\\ORM\\Proxy\\Proxy';
            if (is_subclass_of(get_class($entity), $proxyClass)) {

                $realClass = str_replace('Proxies\\__CG__\\', '', get_class($entity));

                $query = "SELECT a FROM {$realClass} a WHERE a.id = :id";
                $params = array('id' => $entity->getId());
                $tmp = $em->createQuery($query)->setParameters($params)->getResult(DoctrineQuery::HYDRATE_OBJECT);
                if (count($tmp) > 0) $entity = $tmp[0];
            }
        }

        return $entity;
    }

    public static function pubblicaEntity(EntityManager $em = null, DraftInterface $entity = null, $excludeFields = array(), $lockEntities = true, $visibleValue = true)
    {

        //Entity bozza
        $bozza = Utils::getEntityBozza($em, $entity);

        //Entity pubblicata
        $pubblicata = Utils::getEntityPublished($em, $entity);

        $draftClass = 'Mrapps\\BackendBundle\\Entity\\Draft';

        if ($em !== null && $bozza !== null && $pubblicata !== null) {   // && $bozza->getLocked() != true

            $oneToOneClass = 'Doctrine\\ORM\\Mapping\\OneToOne';
            $manyToOneClass = 'Doctrine\\ORM\\Mapping\\ManyToOne';
            $oneToManyClass = 'Doctrine\\ORM\\Mapping\\OneToMany';

            $reader = new AnnotationReader();

            //Dalla procedura verranno escluse le relazioni OneToOne\ManyToOne, i campi specificati in questo array e i campi specificati come parametro
            if (!is_array($excludeFields)) $excludeFields = array($excludeFields);
            $excludedFields = array_merge(array('id', 'published', 'other', 'createdAt', 'updatedAt', 'visible', 'deleted'), $excludeFields);

            //Lista property da pubblicare a cascata
//            $cascadingProperties = array();

            $refBozza = new \ReflectionObject($bozza);
            $refPubblicata = new \ReflectionObject($pubblicata);

            //Cicla le property dell'entity Bozza
            foreach ($refBozza->getProperties() as $p) {

                $annOneToOne = $reader->getPropertyAnnotation($p, $oneToOneClass);
                $annManyToOne = $reader->getPropertyAnnotation($p, $manyToOneClass);
                $annOneToMany = $reader->getPropertyAnnotation($p, $oneToManyClass);

//                if($annOneToMany !== null) {
//
//                    //Aggiunge la property tra quelle da elaborare dopo
//                    $cascadingProperties[] = $p;
//
//                }else {

                $fieldName = $p->name;

                //Il campo non deve essere tra quelli da escludere e non deve essere una relazione oneToMany (array)
                if (!in_array($fieldName, $excludedFields) && /*$annOneToOne == null && $annManyToOne == null &&*/
                    $annOneToMany == null
                ) {

                    //Il campo non deve essere tra quelli da escludere
//                    if(!in_array($fieldName, $excludedFields)) {

                    try {

                        $canSetField = true;

                        //Valore campo corrente su entity Bozza
                        $p->setAccessible(true);
                        $value = $p->getValue($bozza);
                        $p->setAccessible(false);

                        //Se è una relazione o2o\m2o, la copio solo se l'entity dall'altra parte non è di tipo Draft
                        if ($annOneToOne !== null || $annManyToOne !== null) {
                            $canSetField = false;
                            if ($value !== null && is_object($value)) {
                                $canSetField = !is_subclass_of($value, $draftClass);
                            }
                        }

                        if ($canSetField) {
                            //Setto il valore su entity Pubblicata
                            $pPubbl = $refPubblicata->getProperty($fieldName);
                            $pPubbl->setAccessible(true);
                            $pPubbl->setValue($pubblicata, $value);
                            $pPubbl->setAccessible(false);
                        }


                    } catch (\Exception $ex) {
                    }
                }
//                }
            }

            //Lock entity
            if ((bool)$lockEntities && $bozza->getEnableLockingFeature() == 1) {
                Utils::lockEntity($em, $bozza, false);
                Utils::lockEntity($em, $pubblicata, false);
            }

            //Setta flag VISIBLE
            if ($visibleValue !== null) {
                $pubblicata->setVisible((bool)$visibleValue);
            }

            //Salvataggio entity Bozza e Pubblicata
            $em->persist($pubblicata);
            $em->flush();

            //Pubblicazione a cascata
//            foreach ($cascadingProperties as $p) {
//
//                //Lettura valore propertty
//                $p->setAccessible(true);
//                $array = $p->getValue($bozza);
//                $p->setAccessible(false);
//
//                //Iterabile?
//                if($array !== null && (is_array($array) || is_subclass_of($array, 'Doctrine\\Common\\Collections\\Collection'))) {
//                    foreach ($array as $r) {
//
//                        //Se è una draft pubblica l'entity
//                        if($r !== null && is_subclass_of($r, $draftClass)) {
//                            Utils::pubblicaEntity($em, $r);
//                        }
//                    }
//                }
//            }
        }

        return $pubblicata;
    }

    public static function lockEntity(EntityManager $em = null, $entity = null, $autoFlush = true)
    {

        $draftClass = 'Mrapps\\BackendBundle\\Entity\\Draft';

        if ($em !== null && $entity !== null && is_subclass_of($entity, $draftClass) && $entity->getEnableLockingFeature() == true) {

            $entity->setLocked(1);
            $entity->setLockedAt(new \DateTime());

            $em->persist($entity);
            if ($autoFlush) $em->flush();

            return true;
        }

        return false;
    }

    public static function unlockEntity(EntityManager $em = null, $entity = null, $autoFlush = true)
    {

        $draftClass = 'Mrapps\\BackendBundle\\Entity\\Draft';

        if ($em !== null && $entity !== null && is_subclass_of($entity, $draftClass)) {

            $entity->setLocked(0);
            $entity->setLockedAt(null);

            $em->persist($entity);
            if ($autoFlush) $em->flush();

            return true;
        }

        return false;
    }

    public static function generateThumbnailsList($container = null, $url = '', $thumbnails = array())
    {
        if ($container !== null && strlen($url) > 0) {
            $liip = $container->get('liip_imagine.cache.manager');
            foreach ($thumbnails as $item) {
                $liip->generateUrl($url, $item);
            }
        }
    }
}