<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mrapps\BackendBundle\Model\DraftInterface;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks
 */
class Draft extends Base implements DraftInterface {

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="published", type="boolean", nullable=true)
     */
    protected $published;

    
    public function __construct() {

        parent::__construct();

        $this->published = 0;
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Set published
     *
     * @param bool $published
     *
     * @return Draft
     */
    public function setPublished($published) {
        $this->published = $published;

        return $this;
    }

    /**
     * Get published
     *
     * @return bool
     */
    public function getPublished() {
        return $this->published;
    }

    public function getOther()
    {
        return null;
    }

    public function setOther($interface)
    {
        return $this;
    }
}
