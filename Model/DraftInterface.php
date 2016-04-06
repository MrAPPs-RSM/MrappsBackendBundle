<?php

namespace Mrapps\BackendBundle\Model;

interface DraftInterface
{
    /**
     * @return string
     */
    public function getId();

    /**
     * @return bool
     */
    public function getPublished();

    /**
     * @param bool $published
     *
     * @return DraftInterface
     */
    public function setPublished($published);

    /**
     * @return DraftInterface
     */
    public function getOther();
}