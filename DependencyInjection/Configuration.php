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
                ->scalarNode('temp_folder')->defaultValue('temp')->end()
                ->arrayNode('file_accepted_types')
                    ->addDefaultsIfNotSet()
                    ->children()
                        ->scalarNode('image')->defaultValue('image/jpeg, image/jpg, image/png, image/gif')->end()
                        ->scalarNode('video')->defaultValue('video/quicktime, video/mp4, video/mpeg, video/x-msvideo, video/3gpp')->end()
                        ->scalarNode('pdf')->defaultValue('application/pdf, x-pdf, application/vnd.pdf, text/pdf')->end()
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
            ->end();

        return $treeBuilder;
    }
}
