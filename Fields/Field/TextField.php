<?php

namespace Mrapps\BackendBundle\Fields\Field;

use Mrapps\BackendBundle\Fields\FieldInterface;

final class TextField
    extends Base
{
    protected static $mandatories = [
        'type',
        'title',
        'required',
        'name',
    ];
}

