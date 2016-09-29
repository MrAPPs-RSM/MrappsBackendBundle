<?php

namespace Mrapps\BackendBundle\Fields\Field;

use Mrapps\BackendBundle\Fields\FieldInterface;

final class HiddenField
    extends Base
{
    protected static $mandatories = [
        'type',
        'name',
        'value',
    ];
}

