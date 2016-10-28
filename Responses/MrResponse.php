<?php

namespace Mrapps\BackendBundle\Responses;

final class MrResponse
{
    private $success;

    private $message;

    private $data;

    private function __construct()
    {
    }

    public static function build(array $params)
    {
        $this->data    = $params['data'];
        $this->message = $params['message'];
        $this->success = $params['success'];
    }

    public function getResponse()
    {
        return [
            'success' => $this->success,
            'data' => $this->data,
            'message' => $this->message,
        ];
    }
}
