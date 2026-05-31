<?php
/**
 * Title: CTOS Hero Slider
 * Slug: ctos/hero
 * Categories: ctos, banner
 * Viewport Width: 1280
 * Description: Teal radial-gradient hero, translateX slide, 600px desktop height.
 *   Matches ctos-web.vercel.app exactly. Edit slides via Site Editor > Patterns.
 */

// Helper to build one slide
if ( ! function_exists( 'ctos_slide' ) ) :
function ctos_slide($eyebrow, $title_html, $desc, $btn_text, $btn_href, $stats_html, $right_html) {
    ob_start(); ?>
<div class="ctos-hero-slide">
  <div class="ctos-hero-inner">
    <div class="ctos-hero-left">
      <p class="ctos-hero-eyebrow"><?php echo $eyebrow; ?></p>
      <div class="ctos-hero-title"><?php echo $title_html; ?></div>
      <p class="ctos-hero-desc"><?php echo $desc; ?></p>
      <div style="padding-top:0.5rem">
        <a href="<?php echo $btn_href; ?>" class="ctos-btn-hero">
          <?php echo $btn_text; ?>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ctos-btn-hero-arrow"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
      </div>
      <div class="ctos-hero-stats"><?php echo $stats_html; ?></div>
    </div>
    <div class="ctos-hero-right"><?php echo $right_html; ?></div>
  </div>
</div>
<?php return ob_get_clean();
}
endif;

// White right card helper
if ( ! function_exists( 'ctos_stat' ) ) :
function ctos_stat($val, $plus, $label) {
    return '<div><span class="ctos-stat-n">' . $val . '<span class="ctos-stat-plus">' . $plus . '</span></span><span class="ctos-stat-l">' . $label . '</span></div>';
}
endif;

// Score gauge SVG (slide 1)
$slide1_right = '<div class="ctos-hero-card-white">
  <div class="ctos-hcw-header"><span class="ctos-hcw-title">Credit Health</span></div>
  <svg viewBox="0 0 430 220" style="width:100%;margin:0.5rem 0" aria-hidden="true">
    <path d="M 87 200 A 128 128 0 0 1 215 72" fill="none" stroke="#C9302C" stroke-width="14" stroke-linecap="round" opacity="0.9"/>
    <path d="M 215 72 A 128 128 0 0 1 280 86" fill="none" stroke="#D9821F" stroke-width="14" stroke-linecap="round" opacity="0.9"/>
    <path d="M 280 86 A 128 128 0 0 1 318 128" fill="none" stroke="#C9A60E" stroke-width="14" stroke-linecap="round" opacity="0.9"/>
    <path d="M 318 128 A 128 128 0 0 1 332 168" fill="none" stroke="#3FA84A" stroke-width="14" stroke-linecap="round" opacity="0.9"/>
    <path d="M 332 168 A 128 128 0 0 1 343 200" fill="none" stroke="#2D9F4E" stroke-width="14" stroke-linecap="round" opacity="0.95"/>
    <circle cx="320" cy="142" r="9" fill="#3FA84A"/><circle cx="320" cy="142" r="4" fill="white"/>
    <text x="215" y="178" text-anchor="middle" fill="#0F2123" font-size="44" font-weight="700" font-family="Poppins,sans-serif">735</text>
    <text x="215" y="198" text-anchor="middle" fill="#2D9F4E" font-size="13" font-weight="600" font-family="Poppins,sans-serif">Very Good</text>
    <text x="215" y="214" text-anchor="middle" fill="rgba(15,33,35,0.45)" font-size="10" font-family="Poppins,sans-serif">718 – 743</text>
  </svg>
  <div class="ctos-factors">
    <div class="ctos-factor"><span>Payment history</span><div class="ctos-bar"><div style="width:32%;background:#f2a0a0"></div></div></div>
    <div class="ctos-factor"><span>Amount of debt</span><div class="ctos-bar"><div style="width:90%;background:#f2a0a0"></div></div></div>
    <div class="ctos-factor"><span>Credit history</span><div class="ctos-bar"><div style="width:45%;background:#e8c547"></div></div></div>
    <div class="ctos-factor"><span>Credit mix</span><div class="ctos-bar"><div style="width:88%;background:#2d9f4e"></div></div></div>
  </div>
  <div class="ctos-hcw-footer">
    <span>Improve your score</span>
    <button style="background:#fff;border:1px solid rgba(0,123,133,0.2);border-radius:7px;height:31px;padding:0 12px;font-size:12px;color:#007b85;font-weight:600;cursor:pointer">View Tips</button>
  </div>
</div>';

// Bank logos card (slide 2)
$slide2_right = '<div class="ctos-hero-card-white">
  <div class="ctos-hcw-header"><span class="ctos-hcw-title">Loan Application Review</span><span class="ctos-live-badge">● Live</span></div>
  <div class="ctos-bank-grid">
    <div class="ctos-bank-item"><span style="color:#FFC629;font-weight:800;font-size:11px">Maybank</span></div>
    <div class="ctos-bank-item"><span style="color:#DC2828;font-weight:800;font-size:11px">CIMB</span></div>
    <div class="ctos-bank-item"><span style="color:#C8102E;font-weight:800;font-size:11px">PUBLIC BANK</span></div>
    <div class="ctos-bank-item"><span style="color:#144A9B;font-weight:800;font-size:11px">RHB</span></div>
    <div class="ctos-bank-item"><span style="color:#006847;font-weight:800;font-size:11px">Hong Leong</span></div>
    <div class="ctos-bank-item"><span style="color:#ED1C24;font-weight:800;font-size:11px">AmBank</span></div>
  </div>
  <div class="ctos-loan-item" style="border-top:1px solid rgba(15,33,35,0.08);margin-top:0.75rem;padding-top:0.75rem">
    <div style="width:28px;height:28px;background:rgba(0,123,133,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#007b85;flex-shrink:0;font-size:14px">⏱</div>
    <div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 50,000 Personal Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">Maybank · 2 min ago</p></div>
    <span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#007b85;background:rgba(0,123,133,0.10);border:1px solid rgba(0,123,133,0.22);white-space:nowrap;font-weight:600">Pending</span>
  </div>
  <div class="ctos-loan-item">
    <div style="width:28px;height:28px;background:rgba(232,130,31,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#E8821F;flex-shrink:0;font-size:14px">✓</div>
    <div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 320,000 Home Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">CIMB · 1 day ago</p></div>
    <span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#B86A14;background:rgba(232,130,31,0.10);border:1px solid rgba(232,130,31,0.22);white-space:nowrap;font-weight:600">Reviewing</span>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:10px;border:1px solid rgba(0,123,133,0.22);background:linear-gradient(90deg,rgba(0,123,133,0.10),rgba(0,123,133,0.04));margin-top:8px">
    <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:#1F3133;font-weight:500">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007b85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
      Pull the same report your bank sees
    </div>
    <button style="background:#fff;border:1px solid rgba(0,123,133,0.2);border-radius:7px;height:31px;padding:0 12px;font-size:12px;color:#007b85;font-weight:600;cursor:pointer">Try Now →</button>
  </div>
</div>';

// SecureID right card (slide 3)
$slide3_right = '<div class="ctos-hero-card-white">
  <div class="ctos-hcw-header"><span class="ctos-hcw-title">SecureID Protection</span><span class="ctos-live-badge">● Active</span></div>
  <div style="display:flex;flex-direction:column;gap:0.625rem;margin-top:0.75rem">
    <div style="background:rgba(0,123,133,0.08);border:1px solid rgba(0,123,133,0.2);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem">
      <span style="font-size:1.25rem">🔐</span>
      <div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Credit Monitoring</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">Real-time alerts active</p></div>
      <span style="font-size:10px;background:#2D9F4E;color:#fff;padding:2px 8px;border-radius:100px;font-weight:700">ON</span>
    </div>
    <div style="background:rgba(15,33,35,0.04);border:1px solid rgba(15,33,35,0.08);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem">
      <span style="font-size:1.25rem">🌐</span>
      <div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Dark Web Scan</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">No breaches found</p></div>
      <span style="font-size:10px;background:#2D9F4E;color:#fff;padding:2px 8px;border-radius:100px;font-weight:700">SAFE</span>
    </div>
    <div style="background:rgba(15,33,35,0.04);border:1px solid rgba(15,33,35,0.08);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem">
      <span style="font-size:1.25rem">🛡️</span>
      <div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Takaful Coverage</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">Up to RM20,000</p></div>
    </div>
  </div>
</div>';

$s1 = ctos_stat('5M', '+', 'Consumer Profiles');
$s2 = ctos_stat('1K', '+', 'Partner Institutions');
$s3 = ctos_stat('30', '+', 'Years of Data');
$b1 = ctos_stat('95', '%', 'of MY banks use CTOS');
$b2 = ctos_stat('2M', '+', 'Loan checks / month');

// Build 5 slides: [clone-last][slide1][slide2][slide3][clone-first]
$slide1 = ctos_slide(
    '<strong>#1</strong>&nbsp; People\'s Choice for Credit Report',
    '<p class="ctos-grad-text">Smarter credit</p><p style="color:#fff">Stronger decisions.</p>',
    'See your credit score in seconds, spot what\'s hurting it, and unlock the financial moves that actually move the needle — all in one place.',
    'Get Free Report',
    '#pricing',
    $s1 . $s2 . $s3,
    $slide1_right
);

$slide2 = ctos_slide(
    '<strong>#1</strong>&nbsp; Bank\'s Choice for Credit Report',
    '<p style="color:#fff">See what</p><p class="ctos-grad-text">your bank sees.</p>',
    'The same CTOS report your bank pulls when evaluating your loan — now in your hands. Know exactly where you stand before you apply.',
    'View My Report',
    '#pricing',
    $b1 . $b2,
    $slide2_right
);

$slide3 = ctos_slide(
    '24/7 Identity Protection',
    '<p style="color:#fff">Stay ahead with</p><p style="background:linear-gradient(90deg,#ffa53f 0%,#8bffde 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">CTOS SecureID.</p>',
    'Credit monitoring, dark web scanning, and 4 Score Reports yearly — one plan that watches your identity.',
    'Subscribe Now',
    '#pricing',
    ctos_stat('RM20K', '', 'Takaful Coverage') . ctos_stat('24/7', '', 'Always-on') . ctos_stat('4x', '', 'Reports / year'),
    $slide3_right
);
?>
<!-- wp:html -->
<section class="ctos-hero-slider" role="region" aria-label="Hero">
  <!-- Track: [clone-last | slide-1 | slide-2 | slide-3 | clone-first] -->
  <div class="ctos-hero-track" style="touch-action:pan-y;user-select:none">
    <?php echo $slide3; /* clone of last */ ?>
    <?php echo $slide1; ?>
    <?php echo $slide2; ?>
    <?php echo $slide3; ?>
    <?php echo $slide1; /* clone of first */ ?>
  </div>
  <!-- Dot indicators -->
  <div class="ctos-hero-dots" role="tablist">
    <button class="ctos-dot is-active" aria-label="Slide 1"></button>
    <button class="ctos-dot" aria-label="Slide 2"></button>
    <button class="ctos-dot" aria-label="Slide 3"></button>
  </div>
</section>
<!-- /wp:html -->
