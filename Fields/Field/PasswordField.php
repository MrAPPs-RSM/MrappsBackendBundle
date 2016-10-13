<?php

namespace Mrapps\BackendBundle\Fields\Field;

use Mrapps\BackendBundle\Fields\FieldInterface;

final class PasswordField
    extends Base
{
    protected static $mandatories = [
        'type',
        'title',
    ];
}

