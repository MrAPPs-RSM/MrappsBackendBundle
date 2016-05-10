<?php

namespace Mrapps\BackendBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * This is the class that validates and merges configuration from your app/config files
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html#cookbook-bundles-extension-config-class}
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('mrapps_backend');

        $rootNode
            ->children()

            ->scalarNode('logo_path')->defaultValue('temp')->end()
            ->scalarNode('temp_folder')->defaultValue('temp')->end()
            ->scalarNode('images_url')->defaultValue('')->end()
            ->scalarNode('gmaps_api_key')->defaultValue('')->end()

            ->arrayNode('custom_css')
            ->prototype('scalar')->end()
            ->end()

            ->arrayNode('default_routes')
            ->prototype('array')
            ->children()
            ->scalarNode('role')->defaultValue('')->end()
            ->scalarNode('name')->defaultValue('')->end()
            ->end()
            ->end()
            ->end()

            ->arrayNode('default_permissions')
            ->useAttributeAsKey('controller')
            ->prototype('array')
            ->children()
            ->arrayNode('roles')
            ->useAttributeAsKey('role')
            ->prototype('array')
            ->children()
            ->scalarNode('view')->defaultValue(false)->end()
            ->scalarNode('create')->defaultValue(false)->end()
            ->scalarNode('edit')->defaultValue(false)->end()
            ->scalarNode('delete')->defaultValue(false)->end()
            ->end()
            ->end()
            ->end()
            ->end()
            ->end()
            ->end()

            ->arrayNode('file_accepted_types')
            ->addDefaultsIfNotSet()
            ->children()
            ->scalarNode('image')->defaultValue('image/jpeg, image/jpg, image/png, image/gif')->end()
            ->scalarNode('video')->defaultValue('video/quicktime, video/mp4, video/mpeg, video/x-msvideo, video/3gpp')->end()
            ->scalarNode('pdf')->defaultValue('application/pdf, x-pdf, application/vnd.pdf, text/pdf')->end()
            ->scalarNode('zip')->defaultValue('application/zip, application/octet-stream')->end()
            ->scalarNode('json')->defaultValue('application/json, text/plain, text/json')->end()
            ->end()
            ->end()

            ->arrayNode('customization')
            ->addDefaultsIfNotSet()
            ->children()
            ->scalarNode('primary_color')->defaultValue('black')->end()
            ->scalarNode('text_on_primary_color')->defaultValue('white')->end()
            ->scalarNode('text_hover_on_primary_color')->defaultValue('gray')->end()
            ->scalarNode('secondary_color')->defaultValue('gray')->end()
            ->scalarNode('text_on_secondary_color')->defaultValue('white')->end()
            ->scalarNode('text_hover_on_secondary_color')->defaultValue('black')->end()
            ->end()
            ->end()

            ->end();

        return $treeBuilder;
    }
}
