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
        'error_code' => null,
    ];

    private function __construct(array $params)
    {
        foreach (static::$attrToDefault as $name => $default) {
            if (!isset($params[$name])) {
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

    public static function withMessageAndData($message, array $data)
    { 
        return static::getJsonResponse([
            "data" => $data,
            "success" => true,
            "message" => $message,
            "error_code" => null,
        ]);
    }

    public static function withMessage($message)
    {
        return static::getJsonResponse([
            "data" => null,
            "success" => true,
            "message" => $message,
            "error_code" => null,
        ]);
    }
    
    public static function withDefaultParams($success, array $data = null, $message = '', $errorCode = null)
    {
        return static::getJsonResponse([
            "data" => $data,
            "success" => $success,
            "message" => $message,
            "error_code" => $errorCode,
        ]);
    }
}
