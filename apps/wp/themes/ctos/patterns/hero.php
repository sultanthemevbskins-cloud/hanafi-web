<?php
/**
 * Title: CTOS Hero Slider
 * Slug: ctos/hero
 * Categories: ctos, banner
 * Viewport Width: 1280
 * Description: 3-slide hero. Edit slide content by clicking any text block.
 *   The slider JS structure (section/track wrappers) uses wp:html.
 *   Each slide's editable content is in proper WordPress blocks.
 *   Change data-speed on the outer section to adjust auto-rotate ms.
 */
if ( ! function_exists( 'ctos_hero_right_card' ) ) :
function ctos_hero_right_card( $slide ) {
    if ( $slide === 1 ) {
        return '<!-- wp:html --><div class="ctos-hero-card-white"><div class="ctos-hcw-header"><span class="ctos-hcw-title">Credit Health</span></div><svg viewBox="0 0 430 220" style="width:100%;margin:0.5rem 0" aria-hidden="true"><path d="M 87 200 A 128 128 0 0 1 215 72" fill="none" stroke="#C9302C" stroke-width="14" stroke-linecap="round" opacity="0.9"/><path d="M 215 72 A 128 128 0 0 1 280 86" fill="none" stroke="#D9821F" stroke-width="14" stroke-linecap="round" opacity="0.9"/><path d="M 280 86 A 128 128 0 0 1 318 128" fill="none" stroke="#C9A60E" stroke-width="14" stroke-linecap="round" opacity="0.9"/><path d="M 318 128 A 128 128 0 0 1 332 168" fill="none" stroke="#3FA84A" stroke-width="14" stroke-linecap="round" opacity="0.9"/><path d="M 332 168 A 128 128 0 0 1 343 200" fill="none" stroke="#2D9F4E" stroke-width="14" stroke-linecap="round" opacity="0.95"/><circle cx="320" cy="142" r="9" fill="#3FA84A"/><circle cx="320" cy="142" r="4" fill="white"/><text x="215" y="178" text-anchor="middle" fill="#0F2123" font-size="44" font-weight="700" font-family="Poppins,sans-serif">735</text><text x="215" y="198" text-anchor="middle" fill="#2D9F4E" font-size="13" font-weight="600" font-family="Poppins,sans-serif">Very Good</text><text x="215" y="214" text-anchor="middle" fill="rgba(15,33,35,0.45)" font-size="10" font-family="Poppins,sans-serif">718 – 743</text></svg><div class="ctos-factors"><div class="ctos-factor"><span>Payment history</span><div class="ctos-bar"><div style="width:32%;background:#f2a0a0"></div></div></div><div class="ctos-factor"><span>Amount of debt</span><div class="ctos-bar"><div style="width:90%;background:#f2a0a0"></div></div></div><div class="ctos-factor"><span>Credit history</span><div class="ctos-bar"><div style="width:45%;background:#e8c547"></div></div></div><div class="ctos-factor"><span>Credit mix</span><div class="ctos-bar"><div style="width:88%;background:#2d9f4e"></div></div></div></div><div class="ctos-hcw-footer"><span>Improve your score</span><button style="background:#fff;border:1px solid rgba(0,123,133,0.2);border-radius:7px;height:31px;padding:0 12px;font-size:12px;color:#007b85;font-weight:600;cursor:pointer">View Tips</button></div></div><!-- /wp:html -->';
    }
    if ( $slide === 2 ) {
        return '<!-- wp:html --><div class="ctos-hero-card-white"><div class="ctos-hcw-header"><span class="ctos-hcw-title">Loan Application Review</span><span class="ctos-live-badge">● Live</span></div><div class="ctos-bank-grid"><div class="ctos-bank-item"><span style="color:#FFC629;font-weight:800;font-size:11px">Maybank</span></div><div class="ctos-bank-item"><span style="color:#DC2828;font-weight:800;font-size:11px">CIMB</span></div><div class="ctos-bank-item"><span style="color:#C8102E;font-weight:800;font-size:11px">PUBLIC BANK</span></div><div class="ctos-bank-item"><span style="color:#144A9B;font-weight:800;font-size:11px">RHB</span></div><div class="ctos-bank-item"><span style="color:#006847;font-weight:800;font-size:11px">Hong Leong</span></div><div class="ctos-bank-item"><span style="color:#ED1C24;font-weight:800;font-size:11px">AmBank</span></div></div><div class="ctos-loan-item" style="border-top:1px solid rgba(15,33,35,0.08);margin-top:0.75rem;padding-top:0.75rem"><div style="width:28px;height:28px;background:rgba(0,123,133,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#007b85;flex-shrink:0;font-size:14px">⏱</div><div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 50,000 Personal Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">Maybank · 2 min ago</p></div><span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#007b85;background:rgba(0,123,133,0.10);border:1px solid rgba(0,123,133,0.22);white-space:nowrap;font-weight:600">Pending</span></div><div class="ctos-loan-item"><div style="width:28px;height:28px;background:rgba(232,130,31,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#E8821F;flex-shrink:0;font-size:14px">✓</div><div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 320,000 Home Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">CIMB · 1 day ago</p></div><span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#B86A14;background:rgba(232,130,31,0.10);border:1px solid rgba(232,130,31,0.22);white-space:nowrap;font-weight:600">Reviewing</span></div></div><!-- /wp:html -->';
    }
    return '<!-- wp:html --><div class="ctos-hero-card-white"><div class="ctos-hcw-header"><span class="ctos-hcw-title">SecureID Protection</span><span class="ctos-live-badge">● Active</span></div><div style="display:flex;flex-direction:column;gap:0.625rem;margin-top:0.75rem"><div style="background:rgba(0,123,133,0.08);border:1px solid rgba(0,123,133,0.2);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.25rem">🔐</span><div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Credit Monitoring</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">Real-time alerts active</p></div><span style="font-size:10px;background:#2D9F4E;color:#fff;padding:2px 8px;border-radius:100px;font-weight:700">ON</span></div><div style="background:rgba(15,33,35,0.04);border:1px solid rgba(15,33,35,0.08);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.25rem">🌐</span><div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Dark Web Scan</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">No breaches found</p></div><span style="font-size:10px;background:#2D9F4E;color:#fff;padding:2px 8px;border-radius:100px;font-weight:700">SAFE</span></div><div style="background:rgba(15,33,35,0.04);border:1px solid rgba(15,33,35,0.08);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.25rem">🛡️</span><div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Takaful Coverage</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">Up to RM20,000</p></div></div></div></div><!-- /wp:html -->';
}
endif;

// Build one slide: opening HTML wrapper + editable blocks + right card HTML + closing wrapper
if ( ! function_exists( 'ctos_hero_make_slide' ) ) :
function ctos_hero_make_slide( $eyebrow, $title_line1, $title_line2_class, $title_line2, $desc, $btn_text, $btn_href, $stats_html, $right_card ) {
    $open  = '<!-- wp:html --><div class="ctos-hero-slide"><div class="ctos-hero-inner"><div class="ctos-hero-left"><!-- /wp:html -->';
    $close = '<!-- wp:html --></div>' . $right_card . '</div></div><!-- /wp:html -->';
    return $open .
        '<!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","letterSpacing":"0.48px"},"color":{"text":"rgba(255,255,255,0.85)"}}} --><p class="has-text-color" style="color:rgba(255,255,255,0.85);font-size:12px;letter-spacing:0.48px">' . $eyebrow . '</p><!-- /wp:paragraph -->' .
        '<!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"clamp(1.875rem,4.5vw,3.625rem)","fontWeight":"700","lineHeight":"1.055","letterSpacing":"-2px"}}} --><h1 class="wp-block-heading"><span style="color:#fff">' . $title_line1 . '</span><br><span class="' . $title_line2_class . '">' . $title_line2 . '</span></h1><!-- /wp:heading -->' .
        '<!-- wp:paragraph {"style":{"typography":{"fontSize":"clamp(13px,1.5vw,15px)","lineHeight":"1.6"},"color":{"text":"rgba(255,255,255,0.78)"}}} --><p class="has-text-color" style="color:rgba(255,255,255,0.78);font-size:clamp(13px,1.5vw,15px);line-height:1.6">' . $desc . '</p><!-- /wp:paragraph -->' .
        '<!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button {"className":"ctos-btn-hero","style":{"border":{"radius":"100px"},"color":{"background":"#ffffff","text":"#f58220"}}} --><div class="wp-block-button ctos-btn-hero"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="' . $btn_href . '" style="color:#f58220;background-color:#fff;border-radius:100px">' . $btn_text . '</a></div><!-- /wp:button --></div><!-- /wp:buttons -->' .
        '<!-- wp:html --><div class="ctos-hero-stats">' . $stats_html . '</div><!-- /wp:html -->' .
        $close;
}
endif;

if ( ! function_exists( 'ctos_stat_html' ) ) :
function ctos_stat_html($val, $plus, $label) {
    return '<div><span class="ctos-stat-n">' . $val . '<span class="ctos-stat-plus">' . $plus . '</span></span><span class="ctos-stat-l">' . $label . '</span></div>';
}
endif;

$slide1_stats = ctos_stat_html('5M','+','Consumer Profiles') . ctos_stat_html('1K','+','Partner Institutions') . ctos_stat_html('30','+','Years of Data');
$slide2_stats = ctos_stat_html('95','%','of MY banks use CTOS') . ctos_stat_html('2M','+','Loan checks / month');
$slide3_stats = ctos_stat_html('RM20K','','Takaful Coverage') . ctos_stat_html('24/7','','Always-on') . ctos_stat_html('4x','','Reports / year');

$s1 = ctos_hero_make_slide('#1 &nbsp; People\'s Choice for Credit Report','Smarter credit','ctos-grad-text','Stronger decisions.','See your credit score in seconds, spot what\'s hurting it, and unlock the financial moves that actually move the needle — all in one place.','Get Free Report','#pricing',$slide1_stats,ctos_hero_right_card(1));
$s2 = ctos_hero_make_slide('#1 &nbsp; Bank\'s Choice for Credit Report','See what','ctos-grad-text','your bank sees.','The same CTOS report your bank pulls when evaluating your loan — now in your hands. Know exactly where you stand before you apply.','View My Report','#pricing',$slide2_stats,ctos_hero_right_card(2));
$s3 = ctos_hero_make_slide('24/7 Identity Protection','Stay ahead with','ctos-grad-text','CTOS SecureID.','Credit monitoring, dark web scanning, and 4 Score Reports yearly — one plan that watches your identity.','Subscribe Now','#pricing',$slide3_stats,ctos_hero_right_card(3));
?>
<!-- wp:html -->
<section class="ctos-hero-slider" data-speed="5000" role="region" aria-label="Hero">
<div class="ctos-hero-track">
<!-- clone-last --><?php echo $s3; ?>
<!-- /wp:html -->
<?php echo $s1; ?>
<?php echo $s2; ?>
<?php echo $s3; ?>
<!-- wp:html -->
<!-- clone-first --><?php echo $s1; ?>
</div>
<div class="ctos-hero-dots" role="tablist">
  <button class="ctos-dot" aria-label="Slide 1"></button>
  <button class="ctos-dot" aria-label="Slide 2"></button>
  <button class="ctos-dot" aria-label="Slide 3"></button>
</div>
</section>
<!-- /wp:html -->
