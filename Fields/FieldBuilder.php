<?php

namespace Mrapps\BackendBundle\Fields;

final class FieldBuilder
{
    private $validator;

    public function __construct(Validator $validator)
    {
        $this->validator = $validator;
    }

    public function createTextField(array $parameters)
    {
        $this->validator->check(
            $parameters,
            $this->field = TextField::withParameters($parameters)
        );

        return $this->field;
    }
}
