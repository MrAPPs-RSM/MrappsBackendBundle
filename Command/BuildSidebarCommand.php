<?php

namespace Mrapps\BackendBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Doctrine\Common\Annotations\AnnotationReader;
use Mrapps\BackendBundle\Builder\SidebarBuilder;

class BuildSidebarCommand extends ContainerAwareCommand
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setName('mrapps:backend:buildsidebar')
            ->setDescription('Genera la Sidebar del Pannello di controllo a partire dalle Annotations')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        //Generazione Sidebar
        $sb = new SidebarBuilder(new AnnotationReader(), $this->getContainer());
        $sb->build();
        
        $output->writeln("Sidebar generata.");
    }
}