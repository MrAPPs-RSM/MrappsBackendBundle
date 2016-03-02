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
            ->scalarNode('default_route_name')->defaultValue('mrapps_backend_index')->end()
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
            ->arrayNode('sidebar_menu')
            ->requiresAtLeastOneElement()
            ->prototype('array')
            ->children()
            ->booleanNode('has_submenu')->defaultValue(false)->end()
            ->scalarNode('min_role')->defaultValue('')->end()
            ->scalarNode('title')->end()
            ->scalarNode('icon')->end()
            ->scalarNode('route_name')->end()
            ->arrayNode('submenu')
            ->prototype('array')
            ->children()
            ->scalarNode('title')->end()
            ->scalarNode('route_name')->end()
            ->end()
            ->end()
            ->end()
            ->end()
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
