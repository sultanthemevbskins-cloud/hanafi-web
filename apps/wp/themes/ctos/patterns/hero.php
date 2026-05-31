<?php
/**
 * Title: CTOS Hero Slider
 * Slug: ctos/hero
 * Categories: ctos, banner
 * Viewport Width: 1280
 */

/* Use closures (anonymous functions) — safe to re-include, no redeclaration errors */

$_st = function($v,$p,$l){ return '<div><span class="ctos-stat-n">'.$v.'<span class="ctos-stat-plus">'.$p.'</span></span><span class="ctos-stat-l">'.$l.'</span></div>'; };

$_card = [
1 => '<div class="ctos-hero-card-white"><div class="ctos-hcw-header"><span class="ctos-hcw-title">Credit Health</span></div><svg viewBox="0 0 430 220" style="width:100%;margin:0.5rem 0" aria-hidden="true"><path d="M 87 200 A 128 128 0 0 1 215 72" fill="none" stroke="#C9302C" stroke-width="14" stroke-linecap="round"/><path d="M 215 72 A 128 128 0 0 1 280 86" fill="none" stroke="#D9821F" stroke-width="14" stroke-linecap="round"/><path d="M 280 86 A 128 128 0 0 1 318 128" fill="none" stroke="#C9A60E" stroke-width="14" stroke-linecap="round"/><path d="M 318 128 A 128 128 0 0 1 343 200" fill="none" stroke="#2D9F4E" stroke-width="14" stroke-linecap="round"/><circle cx="320" cy="142" r="9" fill="#3FA84A"/><circle cx="320" cy="142" r="4" fill="white"/><text x="215" y="178" text-anchor="middle" fill="#0F2123" font-size="44" font-weight="700" font-family="Poppins,sans-serif">735</text><text x="215" y="198" text-anchor="middle" fill="#2D9F4E" font-size="13" font-weight="600" font-family="Poppins,sans-serif">Very Good</text><text x="215" y="214" text-anchor="middle" fill="rgba(15,33,35,0.45)" font-size="10" font-family="Poppins,sans-serif">718-743</text></svg><div class="ctos-factors"><div class="ctos-factor"><span>Payment history</span><div class="ctos-bar"><div style="width:32%;background:#f2a0a0"></div></div></div><div class="ctos-factor"><span>Amount of debt</span><div class="ctos-bar"><div style="width:90%;background:#f2a0a0"></div></div></div><div class="ctos-factor"><span>Credit history</span><div class="ctos-bar"><div style="width:45%;background:#e8c547"></div></div></div><div class="ctos-factor"><span>Credit mix</span><div class="ctos-bar"><div style="width:88%;background:#2d9f4e"></div></div></div></div><div class="ctos-hcw-footer"><span>Improve your score</span><button style="background:#fff;border:1px solid rgba(0,123,133,0.2);border-radius:7px;height:31px;padding:0 12px;font-size:12px;color:#007b85;font-weight:600">View Tips</button></div></div>',
2 => '<div class="ctos-hero-card-white"><div class="ctos-hcw-header"><span class="ctos-hcw-title">Loan Application Review</span><span class="ctos-live-badge">Live</span></div><div class="ctos-bank-grid"><div class="ctos-bank-item"><span style="color:#FFC629;font-weight:800;font-size:11px">Maybank</span></div><div class="ctos-bank-item"><span style="color:#DC2828;font-weight:800;font-size:11px">CIMB</span></div><div class="ctos-bank-item"><span style="color:#C8102E;font-weight:800;font-size:11px">PUBLIC BANK</span></div><div class="ctos-bank-item"><span style="color:#144A9B;font-weight:800;font-size:11px">RHB</span></div><div class="ctos-bank-item"><span style="color:#006847;font-weight:800;font-size:11px">Hong Leong</span></div><div class="ctos-bank-item"><span style="color:#ED1C24;font-weight:800;font-size:11px">AmBank</span></div></div><div class="ctos-loan-item" style="border-top:1px solid rgba(15,33,35,0.08);margin-top:0.75rem;padding-top:0.75rem"><div style="width:28px;height:28px;background:rgba(0,123,133,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#007b85;flex-shrink:0">&#9200;</div><div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 50,000 Personal Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">Maybank &middot; 2 min ago</p></div><span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#007b85;background:rgba(0,123,133,0.10);border:1px solid rgba(0,123,133,0.22);font-weight:600">Pending</span></div><div class="ctos-loan-item"><div style="width:28px;height:28px;background:rgba(232,130,31,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#E8821F;flex-shrink:0">&#10003;</div><div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 320,000 Home Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">CIMB &middot; 1 day ago</p></div><span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#B86A14;background:rgba(232,130,31,0.10);border:1px solid rgba(232,130,31,0.22);font-weight:600">Reviewing</span></div></div>',
3 => '<div class="ctos-hero-card-white"><div class="ctos-hcw-header"><span class="ctos-hcw-title">SecureID Protection</span><span class="ctos-live-badge">Active</span></div><div style="display:flex;flex-direction:column;gap:0.625rem;margin-top:0.75rem"><div style="background:rgba(0,123,133,0.08);border:1px solid rgba(0,123,133,0.2);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.25rem">&#128272;</span><div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Credit Monitoring</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">Real-time alerts active</p></div><span style="font-size:10px;background:#2D9F4E;color:#fff;padding:2px 8px;border-radius:100px;font-weight:700">ON</span></div><div style="background:rgba(15,33,35,0.04);border:1px solid rgba(15,33,35,0.08);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.25rem">&#127760;</span><div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Dark Web Scan</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">No breaches found</p></div><span style="font-size:10px;background:#2D9F4E;color:#fff;padding:2px 8px;border-radius:100px;font-weight:700">SAFE</span></div><div style="background:rgba(15,33,35,0.04);border:1px solid rgba(15,33,35,0.08);border-radius:10px;padding:0.875rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.25rem">&#128737;</span><div style="flex:1"><p style="font-size:12px;font-weight:600;color:#102a2e;margin:0">Takaful Coverage</p><p style="font-size:11px;color:rgba(0,0,0,0.45);margin:0">Up to RM20,000</p></div></div></div></div>',
];

$_slide = function($ey,$l1,$l2,$desc,$btn,$stats,$card){
    return "<!-- wp:html -->\n"
        . '<div class="ctos-hero-slide"><div class="ctos-hero-inner"><div class="ctos-hero-left">'
        . '<p class="ctos-hero-eyebrow">'.$ey.'</p>'
        . '<div class="ctos-hero-title"><p style="color:#fff">'.$l1.'</p><p class="ctos-grad-text">'.$l2.'</p></div>'
        . '<p class="ctos-hero-desc">'.$desc.'</p>'
        . '<div class="ctos-hero-btns"><a href="#pricing" class="ctos-btn-hero">'.$btn.' <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ctos-btn-hero-arrow"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a></div>'
        . '<div class="ctos-hero-stats">'.$stats.'</div>'
        . '</div><div class="ctos-hero-right">'.$card.'</div></div></div>'
        . "\n<!-- /wp:html -->";
};

$s1 = $_slide('#1 &nbsp; People\'s Choice for Credit Report','Smarter credit','Stronger decisions.','See your credit score in seconds, spot what\'s hurting it, and unlock the financial moves that actually move the needle.','Get Free Report',$_st('5M','+','Consumer Profiles').$_st('1K','+','Partner Institutions').$_st('30','+','Years of Data'),$_card[1]);
$s2 = $_slide('#1 &nbsp; Bank\'s Choice for Credit Report','See what','your bank sees.','The same CTOS report your bank pulls when evaluating your loan — now in your hands. Know exactly where you stand.','View My Report',$_st('95','%','of MY banks use CTOS').$_st('2M','+','Loan checks / month'),$_card[2]);
$s3 = $_slide('24/7 Identity Protection','Stay ahead with','CTOS SecureID.','Credit monitoring, dark web scanning, and 4 Score Reports yearly — one plan that watches your identity.','Subscribe Now',$_st('RM20K','','Takaful').$_st('24/7','','Always-on').$_st('4x','','Reports/year'),$_card[3]);
?>
<!-- wp:html -->
<section class="ctos-hero-slider" data-speed="5000" role="region" aria-label="Hero">
<div class="ctos-hero-track">
<?php echo $s3; /* clone-last */ ?>
<!-- /wp:html -->
<?php echo $s1; ?>
<?php echo $s2; ?>
<?php echo $s3; ?>
<!-- wp:html -->
<?php echo $s1; /* clone-first */ ?>
</div>
<div class="ctos-hero-dots" role="tablist">
  <button class="ctos-dot" aria-label="Slide 1"></button>
  <button class="ctos-dot" aria-label="Slide 2"></button>
  <button class="ctos-dot" aria-label="Slide 3"></button>
</div>
</section>
<!-- /wp:html -->
