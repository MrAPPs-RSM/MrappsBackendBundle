<?php

namespace Mrapps\BackendBundle\Fields;

final class TextField
{
    private $parameters;

    private static $mandatories = [
        'type',
        'title',
        'required',
        'value',
        'name',
    ];

    private function __construct(array $parameters)
    {
        $this->parameters = $parameters;
    }

    public function getMandatories()
    {
        return static::$mandatories;
    }

    public static function withParameters(
        array $parameters
    ) {
        return new self($parameters);
    }

    public function asArray()
    {
        return [
            'title'    => $this->parameters['title'],
            'type'     => $this->parameters['type'],
            'name'     => $this->parameters['name'],
            'required' => $this->parameters['required'],
            'value'    => $this->parameters['value'],
        ];
    }
}

