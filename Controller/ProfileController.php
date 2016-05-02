<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Mrapps\BackendBundle\Classes\Utils;
use Mrapps\BackendBundle\Entity\Immagine;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use FOS\UserBundle\Model\UserInterface;

/**
 * @Route("/panel/profile")
 */
class ProfileController extends Controller
{
    /**
     * @Route("/change_password", name="mrapps_backend_profile_changepwd")
     * @Method({"GET","POST"})
     */
    public function changePasswordAction(Request $request)
    {
        $errors = array();
        $user = $this->container->get('security.context')->getToken()->getUser();

        $form = $this->container->get('fos_user.change_password.form');
        $formHandler = $this->container->get('fos_user.change_password.form.handler');

        $process = $formHandler->process($user);
        if ($process) {
            $this->setFlash('fos_user_success', 'change_password.flash.success');
        }else {
            foreach ($form->getErrors(true) as $er) {
                $errors[] = $er;
            }
        }

        return $this->render('MrappsBackendBundle:Profile:change_password.html.twig', array(
            'title' => "Cambia Password",
            'form' => $form->createView(),
            'errors' => $errors,
            'success' => $process,
        ));
    }

    /**
     * @param string $action
     * @param string $value
     */
    protected function setFlash($action, $value)
    {
        $this->container->get('session')->getFlashBag()->set($action, $value);
    }

}
