<?php

namespace Mrapps\BackendBundle\Fields;

class Validator
{
    public function check(
        array $parameters,
        TextField $type
    ) {
        $notFoundFields = [];
        foreach ($type->getMandatories() as $mandatoryField) {
            if (!isset($parameters[$mandatoryField])) {
                $notFoundFields[] = $mandatoryField;
            }
        }

        if (count($notFoundFields) > 0) {
            throw new \RuntimeException(
                'Some mandatory values are not defined'
            );
        }
    }
}

