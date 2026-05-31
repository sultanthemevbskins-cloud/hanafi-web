<?php
/**
 * CTOS Theme Functions
 *
 * @package CTOS
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ── Theme setup ─────────────────────────────────────────────────────────── */
function ctos_setup() {
    load_theme_textdomain( 'ctos', get_template_directory() . '/languages' );

    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'html5', [
        'search-form', 'comment-form', 'comment-list',
        'gallery', 'caption', 'style', 'script',
    ] );

    // Post thumbnail sizes matching the React app
    add_theme_support( 'post-thumbnails' );
    add_image_size( 'ctos-card',     800, 300, true );
    add_image_size( 'ctos-hero',    1280, 480, true );
    add_image_size( 'ctos-feature', 800,  600, true );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'ctos' ),
        'footer'  => __( 'Footer Navigation',  'ctos' ),
    ] );
}
add_action( 'after_setup_theme', 'ctos_setup' );

/* ── Enqueue styles ──────────────────────────────────────────────────────── */
function ctos_styles() {
    wp_enqueue_style(
        'ctos-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'ctos_styles' );

/* ── Editor styles ───────────────────────────────────────────────────────── */
function ctos_editor_styles() {
    add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', 'ctos_editor_styles' );

/* ── Block pattern categories ────────────────────────────────────────────── */
function ctos_register_pattern_categories() {
    register_block_pattern_category( 'ctos', [
        'label' => __( 'CTOS', 'ctos' ),
    ] );
}
add_action( 'init', 'ctos_register_pattern_categories' );

/* ── Remove default block patterns (keep only ours) ─────────────────────── */
remove_theme_support( 'core-block-patterns' );
