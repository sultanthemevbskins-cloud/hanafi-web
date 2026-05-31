<?php
/**
 * CTOS Theme Functions
 * @package CTOS
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ── Hide admin bar on frontend — eliminates 32px gap above header ── */
add_filter( 'show_admin_bar', '__return_false' );

/* ── Theme setup ─────────────────────────────────────────────────────────── */
function ctos_setup() {
    load_theme_textdomain( 'ctos', get_template_directory() . '/languages' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form','comment-form','comment-list','gallery','caption','style','script' ] );

    add_image_size( 'ctos-card',    800, 300, true );
    add_image_size( 'ctos-hero',   1280, 620, true );
    add_image_size( 'ctos-thumb',   400, 300, true );

    register_nav_menus( [
        'primary'   => __( 'Primary Navigation', 'ctos' ),
        'footer'    => __( 'Footer Navigation',  'ctos' ),
        'consumer'  => __( 'Consumer Products',  'ctos' ),
        'commercial'=> __( 'Commercial Products','ctos' ),
        'corporate' => __( 'Corporate & FI',     'ctos' ),
        'intl'      => __( 'International',       'ctos' ),
    ] );
}
add_action( 'after_setup_theme', 'ctos_setup' );

/* ── Enqueue styles + scripts ────────────────────────────────────────────── */
function ctos_assets() {
    // Theme base
    wp_enqueue_style( 'ctos-style', get_stylesheet_uri(), [], wp_get_theme()->get('Version') );
    // Custom CSS
    wp_enqueue_style( 'ctos-custom', get_template_directory_uri() . '/assets/css/ctos-custom.css', ['ctos-style'], wp_get_theme()->get('Version') );
    // Slider JS
    wp_enqueue_script( 'ctos-slider', get_template_directory_uri() . '/assets/js/ctos-slider.js', [], wp_get_theme()->get('Version'), true );
    // Mega menu JS
    wp_enqueue_script( 'ctos-mega-menu', get_template_directory_uri() . '/assets/js/ctos-mega-menu.js', [], wp_get_theme()->get('Version'), true );
}
add_action( 'wp_enqueue_scripts', 'ctos_assets' );

/* ── Editor styles ───────────────────────────────────────────────────────── */
add_action( 'after_setup_theme', function () {
    add_editor_style( 'assets/css/ctos-custom.css' );
} );

/* ── Synced block patterns (wp_block posts — editable in Site Editor) ────── */
function ctos_ensure_synced_patterns() {
    $pattern_files = [
        'ctos-hero'                => [ 'CTOS Hero Slider',         'hero'                ],
        'ctos-welcome'             => [ 'CTOS Welcome Section',     'welcome'             ],
        'ctos-consumer-products'   => [ 'CTOS Consumer Products',   'consumer-products'   ],
        'ctos-commercial-products' => [ 'CTOS Commercial Products', 'commercial-products' ],
        'ctos-app-promo'           => [ 'CTOS App Promo',           'app-promo'           ],
        'ctos-knowledge-centre'    => [ 'CTOS Knowledge Centre',    'knowledge-centre'    ],
    ];

    $ids = [];
    foreach ( $pattern_files as $slug => [ $title, $file ] ) {
        $existing = get_posts( [ 'post_type' => 'wp_block', 'post_status' => 'publish', 'name' => $slug, 'numberposts' => 1 ] );
        if ( $existing ) {
            $ids[ $slug ] = $existing[0]->ID;
            continue;
        }
        // Capture pattern PHP output
        ob_start();
        include get_template_directory() . "/patterns/{$file}.php";
        $content = ob_get_clean();

        $id = wp_insert_post( [
            'post_title'   => $title,
            'post_name'    => $slug,
            'post_type'    => 'wp_block',
            'post_status'  => 'publish',
            'post_content' => $content,
        ] );
        $ids[ $slug ] = $id;
    }
    update_option( 'ctos_pattern_ids', $ids );
    return $ids;
}
add_action( 'after_switch_theme', 'ctos_ensure_synced_patterns' );
add_action( 'init', function () {
    if ( ! get_option( 'ctos_pattern_ids' ) ) ctos_ensure_synced_patterns();
} );

/* ── Block pattern category + assign wp_block posts ─────────────────────── */
add_action( 'init', function () {
    register_block_pattern_category( 'ctos', [ 'label' => __( 'CTOS', 'ctos' ) ] );

    /* Ensure all synced wp_block patterns have the ctos category assigned */
    if ( taxonomy_exists( 'wp_pattern_category' ) ) {
        $blocks = get_posts( [ 'post_type' => 'wp_block', 'post_status' => 'publish', 'numberposts' => -1 ] );
        foreach ( $blocks as $b ) {
            if ( ! has_term( 'ctos', 'wp_pattern_category', $b->ID ) ) {
                wp_set_object_terms( $b->ID, 'ctos', 'wp_pattern_category', true );
            }
        }
    }

    $patterns = [ 'hero', 'welcome', 'consumer-products', 'commercial-products', 'app-promo', 'knowledge-centre' ];
    foreach ( $patterns as $slug ) {
        $file = get_template_directory() . "/patterns/{$slug}.php";
        if ( ! file_exists( $file ) ) continue;
        ob_start();
        include $file;
        $content = ob_get_clean();
        register_block_pattern( "ctos/{$slug}", [
            'title'      => ucwords( str_replace( '-', ' ', $slug ) ),
            'categories' => [ 'ctos' ],
            'content'    => $content,
        ] );
    }
} );

remove_theme_support( 'core-block-patterns' );

/* ── wp_navigation — direct DB write (bypasses & sanitization) ───────────── */
function ctos_ensure_navigation() {
    global $wpdb;
    // Check if a clean navigation already exists
    $existing = $wpdb->get_var(
        "SELECT ID FROM {$wpdb->posts}
         WHERE post_type='wp_navigation' AND post_status='publish'
           AND post_name='primary-navigation'
         LIMIT 1"
    );
    if ( $existing ) return (int) $existing;

    $nav = '';
    $sections = [
        ['Consumer', '#', [
            ['Credit Report','#pricing'],['SecureID','#pricing'],['Credit Finder','#pricing'],
        ]],
        ['Commercial', '#', [
            ['Credit Manager','#commercial'],['Single Report','#commercial'],
            ['CTOS BizSecure','#commercial'],['CreditSCAN Quick Score','#commercial'],
            ['CTOS Verified','#commercial'],['Business Loan','#commercial'],
        ]],
        ['Corporate & FI', '#', [
            ['CTOS eKYC','#'],['Application & Decisioning','#'],['RAM Rating Rationale Report','#'],
        ]],
        ['International', '#', [
            ['Singapore Report','#'],['International Report','#'],
        ]],
    ];
    foreach ( $sections as [$label, $url, $children] ) {
        $nav .= '<!-- wp:navigation-submenu {"label":"' . $label . '","url":"' . $url . '"} -->' . "\n";
        foreach ( $children as [$cl, $cu] ) {
            $nav .= '<!-- wp:navigation-link {"label":"' . $cl . '","url":"' . $cu . '"} /-->' . "\n";
        }
        $nav .= '<!-- /wp:navigation-submenu -->' . "\n";
    }

    $now = current_time('mysql');
    $wpdb->insert( $wpdb->posts, [
        'post_author'    => 1, 'post_date' => $now, 'post_date_gmt' => current_time('mysql',1),
        'post_content'   => $nav, 'post_title' => 'Primary Navigation',
        'post_status'    => 'publish', 'post_name' => 'primary-navigation',
        'post_type'      => 'wp_navigation', 'comment_status' => 'closed',
        'ping_status'    => 'closed', 'post_modified' => $now,
        'post_modified_gmt' => current_time('mysql',1),
    ]);
    $id = (int) $wpdb->insert_id;
    $wpdb->update( $wpdb->posts, [ 'guid' => home_url('/?p='.$id) ], ['ID'=>$id] );
    clean_post_cache( $id );
    return $id;
}
add_action( 'init', 'ctos_ensure_navigation', 5 );

/* ── Classic nav menu setup (for legacy/fallback) ────────────────────────── */
function ctos_create_nav_menus() {
    /* ── PRIMARY NAV ── */
    if ( ! wp_get_nav_menu_object( 'Primary Navigation' ) ) {
        $menu_id = wp_create_nav_menu( 'Primary Navigation' );

        $consumer = wp_update_nav_menu_item( $menu_id, 0, [
            'menu-item-title'   => 'Consumer',
            'menu-item-url'     => '#',
            'menu-item-status'  => 'publish',
        ] );
        $products_c = [
            [ 'Credit Report',  '#consumer-credit-report',  'RM27.90 / report'       ],
            [ 'SecureID',       '#consumer-secureid',        'From RM9.90 / month'    ],
            [ 'Credit Finder',  '#consumer-credit-finder',   'Free to use'            ],
        ];
        foreach ( $products_c as $p ) {
            wp_update_nav_menu_item( $menu_id, 0, [
                'menu-item-title'      => $p[0],
                'menu-item-url'        => $p[1],
                'menu-item-parent-id'  => $consumer,
                'menu-item-status'     => 'publish',
                'menu-item-description'=> $p[2],
            ] );
        }

        $commercial = wp_update_nav_menu_item( $menu_id, 0, [
            'menu-item-title'  => 'Commercial',
            'menu-item-url'    => '#',
            'menu-item-status' => 'publish',
        ] );
        $products_b = [
            [ 'Credit Manager',          '#commercial-credit-manager',   'Subscription plan'    ],
            [ 'Single Report',           '#commercial-single-report',     'Pay per report'       ],
            [ 'CTOS BizSecure',          '#commercial-bizsecure',         'From RM100/device/mo' ],
            [ 'CreditSCAN Quick Score',  '#commercial-creditscan',        'Pay per report'       ],
            [ 'CTOS Verified',           '#commercial-verified',          'Business certification'],
            [ 'Business Loan',           '#commercial-loan',              'Free to use'          ],
        ];
        foreach ( $products_b as $p ) {
            wp_update_nav_menu_item( $menu_id, 0, [
                'menu-item-title'      => $p[0],
                'menu-item-url'        => $p[1],
                'menu-item-parent-id'  => $commercial,
                'menu-item-status'     => 'publish',
                'menu-item-description'=> $p[2],
            ] );
        }

        $corporate = wp_update_nav_menu_item( $menu_id, 0, [
            'menu-item-title'  => 'Corporate & FI',
            'menu-item-url'    => '#',
            'menu-item-status' => 'publish',
        ] );
        $products_fi = [
            [ 'CTOS eKYC',                       '#fi-ekyc',          'Enterprise' ],
            [ 'Application & Decisioning',        '#fi-decisioning',   'Enterprise' ],
            [ 'RAM Rating Rationale Report',      '#fi-ram',           'Pay per report' ],
        ];
        foreach ( $products_fi as $p ) {
            wp_update_nav_menu_item( $menu_id, 0, [
                'menu-item-title'      => $p[0],
                'menu-item-url'        => $p[1],
                'menu-item-parent-id'  => $corporate,
                'menu-item-status'     => 'publish',
                'menu-item-description'=> $p[2],
            ] );
        }

        $intl = wp_update_nav_menu_item( $menu_id, 0, [
            'menu-item-title'  => 'International',
            'menu-item-url'    => '#',
            'menu-item-status' => 'publish',
        ] );
        $products_i = [
            [ 'Singapore Report',    '#intl-sg',   'Pay per report' ],
            [ 'International Report','#intl-world', 'Pay per report' ],
        ];
        foreach ( $products_i as $p ) {
            wp_update_nav_menu_item( $menu_id, 0, [
                'menu-item-title'      => $p[0],
                'menu-item-url'        => $p[1],
                'menu-item-parent-id'  => $intl,
                'menu-item-status'     => 'publish',
                'menu-item-description'=> $p[2],
            ] );
        }

        // Sign In
        wp_update_nav_menu_item( $menu_id, 0, [
            'menu-item-title'   => 'Sign In',
            'menu-item-url'     => '#signin',
            'menu-item-classes' => 'ctos-header-btn',
            'menu-item-status'  => 'publish',
        ] );

        set_theme_mod( 'nav_menu_locations', [ 'primary' => $menu_id ] );
    }

    /* ── FOOTER NAV ── */
    if ( ! wp_get_nav_menu_object( 'Footer Navigation' ) ) {
        $footer_id = wp_create_nav_menu( 'Footer Navigation' );
        $footer_items = [
            'FAQs', 'Disclaimer Clause', 'Terms and Conditions',
            'Security Disclaimer', 'Privacy Policy', 'Terms of Use',
            'Declaration of Consent', 'Contact Us',
        ];
        foreach ( $footer_items as $label ) {
            wp_update_nav_menu_item( $footer_id, 0, [
                'menu-item-title'  => $label,
                'menu-item-url'    => '#',
                'menu-item-status' => 'publish',
            ] );
        }
        $locations = get_theme_mod( 'nav_menu_locations', [] );
        $locations['footer'] = $footer_id;
        set_theme_mod( 'nav_menu_locations', $locations );
    }
}
add_action( 'after_switch_theme', 'ctos_create_nav_menus' );
// Also run on init if menus don't exist yet
add_action( 'init', function () {
    if ( ! wp_get_nav_menu_object( 'Primary Navigation' ) ) {
        ctos_create_nav_menus();
    }
} );

/* ── REST API: expose nav menu slugs as navigation block source ──────────── */
add_filter( 'rest_navigation_query', function ( $args ) {
    $args['post_status'] = [ 'publish', 'draft' ];
    return $args;
} );

/* ── Homepage setup ──────────────────────────────────────────────────────── */
function ctos_setup_homepage() {
    // Check if there's already a home page
    if ( get_option('page_on_front') ) return;

    $home = get_page_by_title( 'Home' );
    if ( ! $home ) {
        $home_id = wp_insert_post( [
            'post_title'   => 'Home',
            'post_name'    => 'home',
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'post_content' => '',
        ] );
        update_option( 'page_on_front', $home_id );
        update_option( 'show_on_front', 'page' );
    }
}
add_action( 'after_switch_theme', 'ctos_setup_homepage' );
