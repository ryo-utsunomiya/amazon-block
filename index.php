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

/**
 * Register Block JavaScript file.
 */
function amazon_block_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'amazon-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	// Temporarily, use amazonjs.css in editor.
	global $amazonjs;
	wp_enqueue_style(
		'amazon-block',
		$amazonjs->url .
		'/css/amazonjs.css',
		array(),
		Amazonjs::VERSION
	);
}

add_action( 'enqueue_block_editor_assets', 'amazon_block_enqueue_block_editor_assets' );
