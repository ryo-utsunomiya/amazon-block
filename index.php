<?php
/**
 * Plugin Name: Amazon Block
 * Plugin URI: https://github.com/ryo-utsunomiya/amazon-block
 * Description: A WordPress plugin that provides 'Amazon' block for Gutenberg editor.
 * Version: 0.0.1
 * Author: Ryo Utsunomiya
 * License: GPLv2
 *
 * @package gutenberg-plugin-template
 */

/**
 * Include AmazonJS to add API to fetch Amazon Data.
 */
require_once dirname( __FILE__ ) . '/amazonjs/amazonjs.php';

// If this plugin is loaded before Gutenberg, this plugin does not work.
function make_sure_this_plugin_is_loaded_after_gutenberg( $active_plugins ) {
	$this_plugin = str_replace( wp_normalize_path( WP_PLUGIN_DIR ) . '/', '', wp_normalize_path( __FILE__ ) );
	$index       = array_search( $this_plugin, $active_plugins );
	unset( $active_plugins[ $index ] );
	$active_plugins[] = $this_plugin;

	return $active_plugins;
}

add_filter( 'pre_update_option_active_plugins', 'make_sure_this_plugin_is_loaded_after_gutenberg' );

/**
 * Register Block JavaScript file.
 */
function amazon_block_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'amazon-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	// Use amazonjs.css in editor.
	global $amazonjs;
	wp_enqueue_style(
		'amazon-block',
		$amazonjs->url .
		'/css/amazonjs.css',
		array(),
		Amazonjs::VERSION
	);

	// Use amazonjs.js in editor.
	$depends = array( 'jquery-tmpl' );
	if ( $amazonjs->settings['displayCustomerReview'] ) {
		$depends[] = 'thickbox';
	}
	wp_enqueue_script(
		'amazon-block',
		$amazonjs->url . '/js/amazonjs.js',
		$depends,
		Amazonjs::VERSION
	);
}

add_action( 'enqueue_block_editor_assets', 'amazon_block_enqueue_block_editor_assets' );

function render_amazon_item( $data ) {
	if ( isset( $data['shortcode'] ) && is_string( $data['shortcode'] ) ) {
		return do_shortcode( $data['shortcode'] );
	}

	return ''; // fallback
}

if ( function_exists( 'register_block_type' ) ) {
	register_block_type( 'amazon-block/amazon-block', array(
		'render_callback' => 'render_amazon_item',
	) );
}

function get_amazonjs_shortcode_render( WP_REST_Request $request ) {
	$shortcode = $request->get_param( 'shortcode' );

	if ( ! is_string( $shortcode ) || 0 === strlen( $shortcode ) ) {
		return '';
	}

	// Allow the amazonjs shortcode only.
	if ( 0 !== strpos( $shortcode, '[amazonjs' ) ) {
		return '';
	}

	$decoded = str_replace( '\\', '', $shortcode );

	return do_shortcode( $decoded );
}

function add_amazon_block_shortcode_endpoint() {
	register_rest_route( 'amazon-block/v1', '/shortcode/(?P<shortcode>.+)', array(
		'methods'  => 'GET',
		'callback' => 'get_amazonjs_shortcode_render',
	) );
}

add_action( 'rest_api_init', 'add_amazon_block_shortcode_endpoint' );
