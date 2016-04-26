<?php

namespace Mrapps\BackendBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class MrappsBackendExtension extends Extension
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('mrapps_backend.logo_path', $config['logo_path']);
        $container->setParameter('mrapps_backend.temp_folder', $config['temp_folder']);
        $container->setParameter('mrapps_backend.images_url', $config['images_url']);
        $container->setParameter('mrapps_backend.gmaps_api_key', $config['gmaps_api_key']);
        $container->setParameter('mrapps_backend.default_routes', $config['default_routes']);
        $container->setParameter('mrapps_backend.custom_css', $config['custom_css']);
        $container->setParameter('mrapps_backend.file_accepted_types.image', $config['file_accepted_types']['image']);
        $container->setParameter('mrapps_backend.file_accepted_types.video', $config['file_accepted_types']['video']);
        $container->setParameter('mrapps_backend.file_accepted_types.pdf', $config['file_accepted_types']['pdf']);
        $container->setParameter('mrapps_backend.file_accepted_types.zip', $config['file_accepted_types']['zip']);
        $container->setParameter('mrapps_backend.file_accepted_types.json', $config['file_accepted_types']['json']);
        $container->setParameter('mrapps_backend.customization.primary_color', $config['customization']['primary_color']);
        $container->setParameter('mrapps_backend.customization.text_on_primary_color', $config['customization']['text_on_primary_color']);
        $container->setParameter('mrapps_backend.customization.secondary_color', $config['customization']['secondary_color']);
        $container->setParameter('mrapps_backend.customization.text_hover_on_primary_color', $config['customization']['text_hover_on_primary_color']);
        $container->setParameter('mrapps_backend.customization.text_on_secondary_color', $config['customization']['text_on_secondary_color']);
        $container->setParameter('mrapps_backend.customization.text_hover_on_secondary_color', $config['customization']['text_hover_on_secondary_color']);


        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yml');
    }
}
