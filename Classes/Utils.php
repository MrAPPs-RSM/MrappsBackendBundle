<?php

namespace Mrapps\BackendBundle\Classes;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;

class Utils {
    
    public static function bundleExists($container = null, $bundleName = '') {
        
        if($container !== null && strlen($bundleName) > 0) {
            $bundles = $this->container->getParameter('kernel.bundles');
            return array_key_exists($bundleName, $bundles);
        }
        
        return false;
    }
    
    public static function bundleMrappsAmazonExists($container = null) {
        return $this->bundleExists($container, 'MrappsAmazonBundle');
    }

    
    public static function setRelazioneTexarea($texarea, $item, $nomerelazione, $cdn, $em) {
        
        $risultato = null;
        preg_match_all('(src="'.$cdn.'(.*?)")', $texarea , $risultato);
        
        $oggetti = $em->getRepository("MrappsBackendBundle:$nomerelazione")->findBy(array("item" => $item));
        foreach ($oggetti as $oggetto) {
            $em->remove($oggetto);
        }
        
        $nomerelazione = "MrappsBackendBundle\\Entity\\".$nomerelazione;
        if(isset($risultato[1]) && is_array($risultato[1])) {
            foreach ($risultato[1] as $value) {
                $immagine = $em->getRepository('BackendBundle:Immagine')->findOneBy(array("url" => $value));
                $relazione = new $nomerelazione();
                $relazione->setImmagine($immagine);
                $relazione->setItem($item);
                $em->persist($relazione);
            }
            $em->flush();
        }
    }
    
    static public function slugify($text) {
        
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

        if(empty($text))
        {
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
    public static function generateResponse($stato, $messaggio = null, $valori = null, $errorCode = null) {
        
        //Gestione errori multipli
        if(is_array($messaggio)) {
            $valori['errors'] = $messaggio;
            $messaggio = '';
        }
        
        $data = array('success' => $stato, 'message' => $messaggio, 'data' => $valori);
        if($errorCode !== null) $data['error_code'] = $errorCode;
        
        $json = new JsonResponse();
        $json->setData();
        return $json;  
    }
    
    public static function getDateStringForUniqueFiles() {

        $micro_date = microtime();
        $date_array = explode(" ", $micro_date);
        $date = date("Y_m_d_H_i_s", $date_array[1]);
        $millis = explode(".", $date_array[0]);
        return $date . '_' . ($millis[1]) . '_' . mt_rand(1, 999999);
    }
    
    public static function isValidFile($container = null, $type = '', UploadedFile $file = null) {
        
        $type = strtolower(trim($type));
        if($container !== null && $file !== null) {
            
            $parameterName = 'mrapps_backend.file_accepted_types.'.$type;
            $exploded = explode(',', $container->hasParameter($parameterName) ? $container->getParameter($parameterName) : '');
            $acceptedTypes = array();
            foreach ($exploded as $t) {
                $t = trim($t);
                if(strlen($t) > 0) $acceptedTypes[] = $t;
            }
            
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = strtolower(trim(finfo_file($finfo, $file->getPathname())));
            finfo_close($finfo);

            return in_array($mime, $acceptedTypes);
        }
        
        return false;
    }
    
    public static function getListResults($em = null, $entity = '', $count = 0, $page = 1, $filters = array(), $sorting = array()) {
        
        if($em !== null && strlen($entity) > 0) {
            
            $count = intval($count);
            $page = intval($page);

            //Fix parametri
            if($count < 0) $count = 0;
            if($page < 1) $page = 1;
            if(!is_array($filters)) $filters = array();
            if(!is_array($sorting)) $sorting = array('createdAt' => 'desc');    //Sorting di default
            //--------------------------------------------------------------------------------------------

            //Filtri
            $params = array();
            $where = '';
            if(count($filters) > 0) {
                $tmp = array();
                foreach ($filters as $campo => $valore) {
                    $tmp[] = sprintf(" a.%s LIKE :%s ", $campo, $campo);
                    $params[$campo] = '%'.$valore.'%';
                }
                $where = 'WHERE '.implode('AND', $tmp);
            }

            //Stringa order by
            $orderBy = '';
            foreach ($sorting as $campo => $ord) {
                $orderBy .= sprintf("a.%s %s,", $campo, $ord);
            }

            $query = "SELECT a FROM {$entity} a";
            if(strlen($where) > 0) $query .= ' '.$where;
            if(strlen($orderBy) > 0) {
                $orderBy = substr($orderBy, 0, strlen($orderBy)-1);    //Elimina l'ultima virgola
                $query .= ' ORDER BY '.$orderBy;
            }

            $tmp = $em->createQuery($query);    //->setMaxResults($count)->setFirstResult(($page-1)*$count)

            if(count($params) > 0) {
                $tmp->setParameters($params);
            }

            return $tmp->execute();
        }
        
        return array();
    }
    
    public static function replaceQuote($string = '') {

        if(strlen(trim($string)) > 0) {
            return str_replace("'", "\'", $string);
        }

        return $string;
    }
}