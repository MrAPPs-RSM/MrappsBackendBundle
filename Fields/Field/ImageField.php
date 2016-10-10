<?php

namespace Mrapps\BackendBundle\Fields\Field;

use Mrapps\BackendBundle\Fields\FieldInterface;

final class ImageField
    extends Base
{
    protected static $mandatories = [
        'name',
        'title',
        'type',
        'required',
        // 'value', // allowed: not mandatory
    ];
}

