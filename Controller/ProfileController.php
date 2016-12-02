<?php

namespace Mrapps\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Mrapps\BackendBundle\Classes\Utils;
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
        /**@var UserInterface $user */
        $user = $this->getUser();

        $form = $this->get('fos_user.change_password.form');
        $formHandler = $this->get('fos_user.change_password.form.handler');

        $process = $formHandler->process($user);

        if (!$process) {
            foreach ($form->getErrors(true) as $er) {
                $errors[] = $er;
            }
        }

        $defaultRouteName = Utils::getDefaultRouteForUser($this->container, $user);

        return $this->render('MrappsBackendBundle:Profile:change_password.html.twig', array(
            'title' => "Cambia Password",
            'form' => $form->createView(),
            'errors' => $errors,
            'success' => $process,
            'current_route' => $request->get('_route'),
            'route_params' => !empty($request->get('_route_params'))
                ? $request->get('_route_params')
                : [],
            'default_route_name' => $defaultRouteName,
            'logo_path' => $this->container->hasParameter('mrapps_backend.logo_path')
                ? $this->container->getParameter('mrapps_backend.logo_path')
                : null,
            'languages' => Utils::getLanguages(),
        ));
    }
}
