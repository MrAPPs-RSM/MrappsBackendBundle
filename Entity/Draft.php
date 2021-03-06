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
     * @var \DateTime
     *
     * @ORM\Column(name="published_at", type="datetime", nullable=true)
     */
    protected $publishedAt;

    /**
     * @var integer
     *
     * @ORM\Column(name="enable_locking_feature", type="boolean", nullable=true)
     */
    protected $enableLockingFeature = false;

    /**
     * @var integer
     *
     * @ORM\Column(name="locked", type="boolean", nullable=true)
     */
    protected $locked = false;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="locked_at", type="datetime", nullable=true)
     */
    protected $lockedAt;

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

    /**
     * Set enableLockingFeature
     *
     * @param bool $enableLockingFeature
     *
     * @return Draft
     */
    public function setEnableLockingFeature($enableLockingFeature) {
        $this->enableLockingFeature = $enableLockingFeature;

        return $this;
    }

    /**
     * Get enableLockingFeature
     *
     * @return bool
     */
    public function getEnableLockingFeature() {
        return $this->enableLockingFeature;
    }

    /**
     * Set locked
     *
     * @param bool $locked
     *
     * @return Draft
     */
    public function setLocked($locked) {
        $this->locked = $locked;

        return $this;
    }

    /**
     * Get locked
     *
     * @return bool
     */
    public function getLocked() {
        return $this->locked;
    }

    /**
     * Set publishedAt
     *
     * @param \DateTime $publishedAt
     *
     * @return Base
     */
    public function setPublishedAt($publishedAt) {
        $this->publishedAt = $publishedAt;

        return $this;
    }

    /**
     * Get publishedAt
     *
     * @return \DateTime
     */
    public function getPublishedAt() {
        return $this->publishedAt;
    }

    /**
     * Set lockedAt
     *
     * @param \DateTime $lockedAt
     *
     * @return Base
     */
    public function setLockedAt($lockedAt) {
        $this->lockedAt = $lockedAt;

        return $this;
    }

    /**
     * Get lockedAt
     *
     * @return \DateTime
     */
    public function getLockedAt() {
        return $this->lockedAt;
    }
}
