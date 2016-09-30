<?php

namespace Mrapps\BackendBundle\Fields\Field;

use Mrapps\BackendBundle\Fields\FieldInterface;

abstract class Base
    implements FieldInterface
{
    protected $parameters;

    protected static $mandatories = [];

    protected function __construct(array $parameters)
    {
        $this->parameters = $parameters;
    }

    public function getMandatories()
    {
        return static::$mandatories;
    }

    public static function withParameters(array $parameters)
    {
        return new static($parameters);
    }

    public function asArray()
    {
        return $this->parameters;
    }
}
