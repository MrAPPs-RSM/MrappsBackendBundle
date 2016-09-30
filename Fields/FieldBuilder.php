<?php

namespace Mrapps\BackendBundle\Fields;

final class FieldBuilder
{
    private $validator;

    public function __construct(Validator $validator)
    {
        $this->validator = $validator;
    }

    public function createField(array $parameters)
    {
        if (!isset($parameters['type'])) {
            throw new \RuntimeException(
                'Undefined type!'
            );
        }

        $this->parameters = $parameters;

        $classType = "Mrapps\\BackendBundle\\Fields\\Field\\" . ucfirst($this->parameters['type']) . "Field";

        $this->validator->check(
            $this->parameters,
            $this->field = $classType::withParameters($this->parameters)
        );

        return $this->field;
    }

    private function ensureFieldTypeClassExists()
    {
        if (!class_exists($this->classType)) {
            throw new \RuntimeException(
                'Type "'.$this->parameters['type'].'" has not its own class!'
            );
        }
    }
}
