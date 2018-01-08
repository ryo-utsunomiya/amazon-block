<?php
/**
 * Plugin Name: Amazon Block
 * Plugin URI: https://github.com/ryo-utsunomiya/amazon-block
 * Description: A WordPress plugin that provides 'Amazon' block for Gutenberg editor.
 * Version: 0.2.1
 * Author: Ryo Utsunomiya
 * License: GPLv2
 *
 * @package amazon-block
 */

/**
 * Include AmazonJS to add API to fetch Amazon Data.
 */
require_once dirname( __FILE__ ) . '/lib/AmazonJSAdapter.php';

/**
 * If this plugin is loaded before Gutenberg, this plugin does not work.
 *
 * @param array $active_plugins Active plugins.
 *
 * @return array Active plugins.
 */
function make_sure_amazon_block_is_loaded_after_gutenberg( $active_plugins ) {
	// When deactivating plugin, do not modify plugin order.
	if ( isset( $_GET['action'] ) && 'deactivate' === $_GET['action'] ) {
		return $active_plugins;
	}

	$this_plugin = str_replace( wp_normalize_path( WP_PLUGIN_DIR ) . '/', '', wp_normalize_path( __FILE__ ) );
	$index       = array_search( $this_plugin, $active_plugins );
	unset( $active_plugins[ $index ] );
	$active_plugins[] = $this_plugin;

	return $active_plugins;
}

add_filter( 'pre_update_option_active_plugins', 'make_sure_amazon_block_is_loaded_after_gutenberg' );

/**
 * Register Block JavaScript file.
 */
function amazon_block_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'amazon-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	global $amazonjs;
	$adapter = new AmazonJSAdapter( $amazonjs );
	$adapter->enqueue_assets();
}

add_action( 'enqueue_block_editor_assets', 'amazon_block_enqueue_block_editor_assets' );
