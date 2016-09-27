<?php

namespace Mrapps\BackendBundle\Fields;

final class FieldBuilder
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

    public static function createTextField(array $parameters)
    {
        $notFoundFields = [];
        foreach (static::$mandatories as $mandatoryField) {
            if (!isset($parameters[$mandatoryField])) {
                $notFoundFields[] = $mandatoryField;
            }
        }

        if (count($notFoundFields) > 0) {
            throw new \RuntimeException(
                'Some mandatory values are not defined'
            );
        }

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
