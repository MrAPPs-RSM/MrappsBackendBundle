<?php

namespace Mrapps\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="Mrapps\BackendBundle\Repository\PermissionRepository")
 * @ORM\Table(name="mrapps_backend_permissions")
 */
class Permission extends Base
{
    /**
     * @ORM\Column(name="route", type="string", length=255)
     * @Assert\Length(max=255)
     */
    protected $route;

    /**
     * @ORM\Column(name="role", type="string", length=255)
     * @Assert\Length(max=255)
     */
    protected $role;

    /**
     * @ORM\Column(name="can_view", type="boolean", nullable=true)
     */
    protected $canView;

    /**
     * @ORM\Column(name="can_edit", type="boolean", nullable=true)
     */
    protected $canEdit;

    /**
     * @ORM\Column(name="can_delete", type="boolean", nullable=true)
     */
    protected $canDelete;

    /**
     * Set route
     *
     * @param string $route
     *
     * @return Permission
     */
    public function setRoute($route)
    {
        $this->route = $route;

        return $this;
    }

    /**
     * Get route
     *
     * @return string
     */
    public function getRoute()
    {
        return $this->route;
    }

    /**
     * Set role
     *
     * @param string $role
     *
     * @return Permission
     */
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * Get role
     *
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set canView
     *
     * @param boolean $canView
     *
     * @return Permission
     */
    public function setCanView($canView)
    {
        $this->canView = $canView;

        return $this;
    }

    /**
     * Get canView
     *
     * @return boolean
     */
    public function getCanView()
    {
        return $this->canView;
    }

    /**
     * Set canEdit
     *
     * @param boolean $canEdit
     *
     * @return Permission
     */
    public function setCanEdit($canEdit)
    {
        $this->canEdit = $canEdit;

        return $this;
    }

    /**
     * Get canEdit
     *
     * @return boolean
     */
    public function getCanEdit()
    {
        return $this->canEdit;
    }

    /**
     * Set canDelete
     *
     * @param boolean $canDelete
     *
     * @return Permission
     */
    public function setCanDelete($canDelete)
    {
        $this->canDelete = $canDelete;

        return $this;
    }

    /**
     * Get canDelete
     *
     * @return boolean
     */
    public function getCanDelete()
    {
        return $this->canDelete;
    }
}
