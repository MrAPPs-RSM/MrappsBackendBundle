<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Mrapps\BackendBundle\Model\DraftInterface;
use Mrapps\BackendBundle\Exception\NotImplementedException;

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

    /**
     * @var integer
     *
     * @ORM\Column(name="deleted", type="boolean", nullable=true)
     */
    protected $deleted;


    public function __construct() {

        parent::__construct();

        $this->published = 0;
        $this->deleted = 0;
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

    /**
     * Set deleted
     *
     * @param bool $deleted
     *
     * @return Draft
     */
    public function setDeleted($deleted) {
        $this->deleted = $deleted;

        return $this;
    }

    /**
     * Get deleted
     *
     * @return bool
     */
    public function getDeleted() {
        return $this->deleted;
    }

    public function getOther()
    {
        throw new NotImplementedException();
    }
}
