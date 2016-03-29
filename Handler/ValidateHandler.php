<?php

namespace Mrapps\BackendBundle\Handler;

class ValidateHandler
{
    /*
     * Cast to INTEGER
     */
    public function integer($value, $preserveNull = true) {

        if((bool)$preserveNull) {
            return ($value !== null) ? intval($value) : null;
        }else {
            return intval($value);
        }
    }

    /*
     * Cast to INTEGER (alias)
     */
    public function int($value, $preserveNull = true) {
        return $this->integer($value, $preserveNull);
    }

    /*
     * Cast to BOOLEAN
     */
    public function bool($value, $preserveNull = true) {

        if((bool)$preserveNull && $value === null) return null;
        return (bool)$value;
    }

    /*
     * Cast to STRING
     */
    public function string($value, $preserveNull = true) {

        if((bool)$preserveNull) {
            return ($value !== null) ? trim($value) : null;
        }else {
            return trim($value);
        }
    }

    /*
     * Cast to STRING (alias)
     */
    public function str($value, $preserveNull = true) {
        return $this->string($value, $preserveNull);
    }

    /*
     * Cast to STRING, upperCase
     */
    public function stringToUpper($value, $preserveNull = true) {

        $string = $this->string($value, $preserveNull);
        return ($string !== null) ? strtoupper($string) : null;
    }

    /*
     * Cast to STRING, upperCase (alias)
     */
    public function strToUpper($value, $preserveNull = true) {
        return $this-stringToUpper($value, $preserveNull);
    }

    /*
     * Cast to STRING, lowerCase
     */
    public function stringToLower($value, $preserveNull = true) {

        $string = $this->string($value, $preserveNull);
        return ($string !== null) ? strtolower($string) : null;
    }

    /*
     * Cast to STRING, lowerCase (alias)
     */
    public function strToLower($value, $preserveNull = true) {
        return $this->stringToLower($value, $preserveNull);
    }

    /*
     * Cast to FLOAT
     */
    public function float($value, $preserveNull = true) {
        if((bool)$preserveNull) {
            return ($value !== null) ? floatval($value) : null;
        }else {
            return floatval($value);
        }
    }

    /*
     * Cast to FLOAT (alias)
     */
    public function double($value, $preserveNull = true) {
        return $this->float($value, $preserveNull);
    }

    /*
     * Validate EMAIL
     */
    public function email($value, $preserveNull = true) {

        if((bool)$preserveNull && $value === null) return null;

        $filtered = ($value !== null) ? filter_var($value, FILTER_VALIDATE_EMAIL) : false;
        return ($filtered !== false) ? $filtered : null;
    }

    /*
     * Check length
     */
    public function checkLength($value, $length = 0) {

        $tmp = $this->string($value, false);
        return (strlen($tmp) <= intval($length));
    }

    /*
     * Truncate
     */
    public function truncate($value, $length = 0) {

        $tmp = $this->string($value, false);
        return substr($tmp, 0, intval($length));
    }

    /*
     * In Range
     */
    public function inRange($value, $type = '', $min = null, $max = null) {

        if(method_exists($this, $type)) {
            $value = call_user_func(array($this, $type), $value, false);
        }

        if($min !== null) {
            if($value < $min) $value = $min;
        }

        if($max !== null) {
            if($value > $max) $value = $max;
        }

        return $value;
    }

    /*
     * Get Date from Timestamp
     */
    public function dateFromTimestamp($value) {

        if($value !== null) {
            $value = intval($value);
            $date = new \DateTime();
            $res = $date->setTimestamp($value);
            return ($res !== false) ? $date : null;
        }

        return null;
    }

    /*
     * Check if field is set in array + cast\validation
     */
    public function setted($array, $key, $type = '', $preserveNull = true) {

        $type = strtolower(trim($type));

        if(is_array($array) && isset($array[$key])) {

            $value = $array[$key];
            return (method_exists($this, $type)) ? call_user_func(array($this, $type), $value, $preserveNull) : $value;
        }

        return ($preserveNull) ? null : ( (method_exists($this, $type)) ? call_user_func(array($this, $type), null, false) : null);
    }
}