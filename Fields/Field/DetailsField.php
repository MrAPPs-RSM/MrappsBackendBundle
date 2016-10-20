<?php

namespace Mrapps\BackendBundle\Fields\Field;

use Mrapps\BackendBundle\Fields\FieldInterface;

final class DetailsField
    extends Base
{
    protected static $mandatories = [
        'type',
        'name',
        'title',
        'required',
        'structure',
        'value',
    ];
    
    /*
     * optional:
     * 
     * - disable_add
     * - disable_edit
     * - disable_delete
     * - max
     */
}