<?php

namespace Mrapps\BackendBundle\Command;

use Mrapps\BackendBundle\Classes\Utils;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputOption;


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
            ->addOption(
                'reset',
                null,
                InputOption::VALUE_NONE,
                "Se TRUE, resetta tutti i permessi al valore di default. Se FALSE, genera solo i permessi mancanti."
            )
        ;
    }


    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $container = $this->getContainer();
        $routes = $container->get('router')->getRouteCollection()->all();

        //Controller che estendono BaseBackendBundle
        $controllers = array();

        foreach ($routes as $r) {
	        if(!isset($r->getDefaults()['_controller'])) continue;
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

        $em = $container->get('doctrine.orm.entity_manager');
        $repository = $em->getRepository('MrappsBackendBundle:Permission');

        //Reset dei permessi
        if ($input->getOption('reset')) {
            $repository->clearPermissions();
        }

        //Permessi hardcoded nel config
        $permessiConfig = $container->hasParameter('mrapps_backend.default_permissions') ? $container->getParameter('mrapps_backend.default_permissions') : array();

        //Per ogni combinazione di controller/ruolo creo una riga su database
        foreach($controllers as $object) {
            foreach($roles as $role) {

                if(isset($permessiConfig[$role]['controllers'][$object])) {

                    $perms = $permessiConfig[$role]['controllers'][$object];

                    $canView = (isset($perms['view'])) ? (bool)$perms['view'] : false;
                    $canCreate = (isset($perms['create'])) ? (bool)$perms['create'] : false;
                    $canEdit = (isset($perms['edit'])) ? (bool)$perms['edit'] : false;
                    $canDelete = (isset($perms['delete'])) ? (bool)$perms['delete'] : false;

                }else {
                    $perm = ($role == 'ROLE_SUPER_ADMIN' || $role == 'ROLE_ADMIN') ? 1 : 0;
                    $canView = $perm;
                    $canCreate = $perm;
                    $canEdit = $perm;
                    $canDelete = $perm;
                }

                $repository->addPermission($object, $role, array(
                    'view' => $canView,
                    'create' => $canCreate,
                    'edit' => $canEdit,
                    'delete' => $canDelete,
                ), false);
            }
        }

        //Salvataggio
        $em->flush();

        $output->writeln("Permessi aggiornati.");
    }
}
