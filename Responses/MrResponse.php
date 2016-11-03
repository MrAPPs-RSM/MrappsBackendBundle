<?php

namespace Mrapps\BackendBundle\Responses;

use Symfony\Component\HttpFoundation\JsonResponse;

final class MrResponse
{
    private $attributes;

    private static $attrToDefault = [
        'data' => null,
        'message' => '',
        'success' => true,
    ];

    private function __construct(array $params)
    {
        if (isset($params['success'])) {
            if (false === $params['success']) {
                $params['success'] = 'false';
            }
        }

        foreach (static::$attrToDefault as $name => $default) {
            if (!isset($params[$name]) || $params[$name] == []) {
                $params[$name] = static::$attrToDefault[$name];
            }
        }

        $this->attributes = $params;
    }

    public static function getJsonResponse(array $params)
    {
        $response = new self($params);

        return new JsonResponse(
            $response->attributes
        );
    }
}