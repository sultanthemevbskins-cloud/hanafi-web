<?php
/**
 * Title: CTOS App Promo
 * Slug: ctos/app-promo
 * Categories: ctos
 * Viewport Width: 1280
 */
$QR_BASE   = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=6&format=png&data=';
$qrAndroid = $QR_BASE . rawurlencode('https://play.google.com/store/apps/details?id=com.ctosdigital.ctosapp');
$qrIos     = $QR_BASE . rawurlencode('https://apps.apple.com/my/app/myctos/id1496539141');
$qrHuawei  = $QR_BASE . rawurlencode('https://appgallery.huawei.com/app/C103285547');
$appScreen = 'https://ctos-web.vercel.app/assets/ctos-app-screen-SJy2DDmM.png';

$huawei_svg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none">';
foreach ([0,45,90,135,180,225,270,315] as $deg) {
    $huawei_svg .= '<path d="M12,3.5 C11.2,5.5 10.7,8 10.8,9.8 C10.9,11.2 11.5,12 12,12 C12.5,12 13.1,11.2 13.2,9.8 C13.3,8 12.8,5.5 12,3.5 Z" fill="#CF0A2C" transform="rotate('.$deg.' 12 12)"/>';
}
$huawei_svg .= '</svg>';
?>
<!-- wp:group {"tagName":"section","className":"ctos-app-promo-section","layout":{"type":"constrained"}} -->
<section class="wp-block-group ctos-app-promo-section">

<!-- wp:columns {"isStackedOnMobile":true,"style":{"spacing":{"blockGap":"4rem"}}} -->
<div class="wp-block-columns">

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center">
<!-- wp:image {"sizeSlug":"full","linkDestination":"none","className":"ctos-app-phone-wrap"} -->
<figure class="wp-block-image size-full ctos-app-phone-wrap"><img src="<?php echo esc_url($appScreen); ?>" alt="CTOS App Screenshot"/></figure>
<!-- /wp:image -->
</div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center">

<!-- wp:heading {"level":2,"className":"ctos-app-heading","style":{"typography":{"fontSize":"clamp(2rem,4vw,3rem)","fontWeight":"800","lineHeight":"1.1","letterSpacing":"-1.2px"},"spacing":{"margin":{"bottom":"1.25rem"}}}} -->
<h2 class="wp-block-heading ctos-app-heading" style="font-size:clamp(2rem,4vw,3rem);font-weight:800;line-height:1.1;letter-spacing:-1.2px;margin-bottom:1.25rem"><span style="color:#5c5c5c">Your credit,</span><br><span style="background:linear-gradient(90deg,#39a7b1 0%,#007b85 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;display:inline-block">in your pocket.</span></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"color":{"text":"#102a2e"},"typography":{"fontSize":"16px","lineHeight":"1.6"},"spacing":{"margin":{"bottom":"0"}}}} -->
<p class="has-text-color" style="color:#102a2e;font-size:16px;line-height:1.6;margin-bottom:0">Track your CTOS Score, monitor your accounts, and act on alerts the moment they happen. Everything you need to stay on top of your credit, right on your home screen.</p>
<!-- /wp:paragraph -->

<!-- QR cards as wp:html to avoid nested columns -->
<!-- wp:html -->
<div style="border-top:1px solid rgba(0,0,0,0.08);padding-top:1.5rem;margin-top:1.5rem">
  <p style="font-family:Poppins,sans-serif;font-size:12px;font-weight:600;color:rgba(15,33,35,0.45);text-transform:uppercase;letter-spacing:1.5px;margin:0 0 1rem">Scan to download</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem">
    <div class="ctos-qr-card">
      <div class="ctos-qr-badge" style="background:rgba(1,135,95,0.08)"><svg width="20" height="18" viewBox="0 0 576 512" fill="#3DDC84"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a8.34,8.34,0,1,0-14.48-8.23h0l-48.51,84.07a301.3,301.3,0,0,0-246.56,0L119.09,66.22a8.35,8.35,0,1,0-14.48,8.23h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/></svg><span style="color:#01875F;font-weight:700;font-size:11px;font-family:Poppins,sans-serif">Android</span></div>
      <div class="ctos-qr-img"><img src="<?php echo esc_url($qrAndroid); ?>" alt="QR Google Play" width="80" height="80"/></div>
      <span class="ctos-qr-store-name">Google Play</span>
    </div>
    <div class="ctos-qr-card">
      <div class="ctos-qr-badge" style="background:rgba(15,33,35,0.06)"><svg width="17" height="20" viewBox="0 0 24 24" fill="#0F2123"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"/><path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><span style="color:#0F2123;font-weight:700;font-size:11px;font-family:Poppins,sans-serif">iOS</span></div>
      <div class="ctos-qr-img"><img src="<?php echo esc_url($qrIos); ?>" alt="QR App Store" width="80" height="80"/></div>
      <span class="ctos-qr-store-name">App Store</span>
    </div>
    <div class="ctos-qr-card">
      <div class="ctos-qr-badge" style="background:rgba(207,10,44,0.07)"><?php echo $huawei_svg; ?><span style="color:#CF0A2C;font-weight:700;font-size:11px;font-family:Poppins,sans-serif">Huawei</span></div>
      <div class="ctos-qr-img"><img src="<?php echo esc_url($qrHuawei); ?>" alt="QR AppGallery" width="80" height="80"/></div>
      <span class="ctos-qr-store-name">AppGallery</span>
    </div>
  </div>
</div>
<!-- /wp:html -->

</div>
<!-- /wp:column -->

</div>
<!-- /wp:columns -->

</section>
<!-- /wp:group -->
