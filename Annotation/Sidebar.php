<?php

namespace Mrapps\BackendBundle\Annotation;

/**
 * @Annotation
 */
class Sidebar
{
    private $code = '';
    private $label = '';
    private $icon = '';
    private $min_role = 'ROLE_USER';
    private $visible = false;
    private $parent = '';
    private $weight = 0;

    public function __construct($options)
    {
        if(isset($options['value'])) {
            $options['code'] = $options['value'];
            unset($options['value']);
        }

        foreach ($options as $key => $value) {

            if (!property_exists($this, $key)) {
                throw new \InvalidArgumentException(sprintf('Property "%s" does not exist', $key));
            }

            $this->$key = $value;
        }
    }

    public function getCode()
    {
        return strtoupper(trim($this->code));
    }

    public function getLabel()
    {
        return trim($this->label);
    }
    
    public function getIcon()
    {
        return trim($this->icon);
    }

    public function getMinRole()
    {
        return strtoupper(trim($this->min_role));
    }

    public function getVisible()
    {
        return (bool)$this->visible;
    }

    public function getParent()
    {
        $parent = trim($this->parent);
        return (strlen($parent) > 0) ? strtoupper($parent) : null;
    }

    public function getWeight()
    {
        return intval($this->weight);
    }

}