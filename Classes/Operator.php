<?php

namespace Mrapps\BackendBundle\Classes;

class Operator
{
    const Like = "LIKE";
    const LikeCustom = "LIKE CUSTOM";
    const Equal = "=";
    const NotEqual = "!=";
    const GreaterOrEqual = ">=";
    const LowerOrEqual = "<=";
    const Lower = "<";
    const Greater = ">";
    const IsNull = "IS NULL";
    const IsNotNull = "IS NOT NULL";
    const In = "IN";
    const NotIn = "NOT IN";
    const InSubquery = "INSUBQUERY";
}