<?php

/**
 * backend bundle fields
 */
namespace Mrapps\BackendBundle\Fields;

/**
 * builder of all backend bundle fields
 */
final class FieldBuilder
{
    /**
     * @var array $parameters all field parameters
     */
    private $parameters;

    /**
     * @var array $mandatories mandatory attributes of a field
     */
    private static $mandatories = [
        'type',
        'title',
        'required',
        'value',
        'name',
    ];

    /**
     * private constructor
     *
     * the constructor is private to force public factory methods
     *
     * @param array $parameters configuration of a field
     */
    private function __construct(array $parameters)
    {
        $this->parameters = $parameters;
    }

    /**
     * text field
     *
     * build a text field
     *
     * @param array $parameters configuration of a field
     */
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

    /**
     * transform a field in array
     */
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
