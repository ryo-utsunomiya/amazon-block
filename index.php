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
 * Register Block JavaScript file.
 */
function amazon_block_enqueue_block_editor_assets()
{
    wp_enqueue_script(
        'amazon-block',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element')
    );
}

add_action('enqueue_block_editor_assets', 'amazon_block_enqueue_block_editor_assets');
