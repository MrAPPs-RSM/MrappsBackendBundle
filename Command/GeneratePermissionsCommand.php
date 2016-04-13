<?php

namespace Mrapps\BackendBundle\Command;

use Mrapps\BackendBundle\Classes\Utils;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;


class GeneratePermissionsCommand extends ContainerAwareCommand
{
    private $baseControllerClass = 'Mrapps\\BackendBundle\\Controller\\BaseBackendController';

    public function __construct()
    {
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setName('mrapps:backend:generatepermissions')
            ->setDescription('Genera i record su Database per la gestione dei permessi.')
        ;
    }


    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $container = $this->getContainer();
        $routes = $container->get('router')->getRouteCollection()->all();

        //Controller che estendono BaseBackendBundle
        $controllers = array();

        foreach ($routes as $r) {
            $ctrl = $r->getDefaults()['_controller'];
            $pos = strpos($ctrl, '::');
            if($pos !== false) {
                $ctrl = substr($ctrl, 0, $pos);
            }
            if(is_subclass_of($ctrl, $this->baseControllerClass)) {
                $compactName = Utils::getControllerCompactName($ctrl);

                if(strlen($compactName) > 0 && !in_array($compactName, $controllers)) {
                    $controllers[] = $compactName;
                }
            }
        }

        //Ruoli
        $roles = Utils::getAllRoles($container);

        //Refresh permessi
        $em = $container->get('doctrine.orm.entity_manager');
        $repository = $em->getRepository('MrappsBackendBundle:Permission');
        //$repository->clearPermissions();

        //Per ogni combinazione di controller/ruolo creo una riga su database
        foreach($controllers as $object) {
            foreach($roles as $role) {

                $perm = ($role == 'ROLE_SUPER_ADMIN' || $role == 'ROLE_ADMIN') ? 1 : 0;

                $repository->addPermission($object, $role, array(
                    'view' => $perm,
                    'create' => $perm,
                    'edit' => $perm,
                    'delete' => $perm,
                ), false);
            }
        }

        //Salvataggio
        $em->flush();

        $output->writeln("Permessi aggiornati.");
    }
}
