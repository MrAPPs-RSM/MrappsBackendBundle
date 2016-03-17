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

        //Controller che estendono BaseBackendBundle
        $controllers = array();


        //Inizializzazione Controller
        $kernel = $container->get('kernel');
        $bundles = $kernel->getBundles();
        foreach ($bundles as $value) {
            $path = $value->getPath();
            if(strpos($path, '/vendor/') === false) {
                $controllerPattern = $path.'/Controller/*Controller.php';
                foreach (glob($controllerPattern) as $fileName) {
                    include_once $fileName;
                }
            }
        }
        //---

        $declaredClasses = get_declared_classes();
        foreach($declaredClasses as $class) {

            //Controller che estente BaseBackendController?
            if (is_subclass_of($class, $this->baseControllerClass)) {

                $compactName = Utils::getControllerCompactName($class);
                if(strlen($compactName) > 0) {
                    $controllers[] = $compactName;
                }
            }
        }

        //Ruoli
        $roles = Utils::getAllRoles($container);

        //Refresh permessi
        $em = $container->get('doctrine.orm.entity_manager');
        $repository = $em->getRepository('MrappsBackendBundle:Permission');
        $repository->clearPermissions();

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
