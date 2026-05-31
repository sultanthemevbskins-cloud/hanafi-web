<?php
/**
 * Title: CTOS App Promo
 * Slug: ctos/app-promo
 * Categories: ctos
 * Viewport Width: 1280
 */
?>
<!-- wp:group {"tagName":"section","className":"ctos-app-section","layout":{"type":"constrained"}} -->
<section class="wp-block-group ctos-app-section">

<!-- wp:columns {"isStackedOnMobile":true,"style":{"spacing":{"blockGap":"3rem"}}} -->
<div class="wp-block-columns">

<!-- Left: text content -->
<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center">

<!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"clamp(1.75rem,4vw,2.5rem)","fontWeight":"800","letterSpacing":"-1px"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"0.75rem"}}}} -->
<h2 class="wp-block-heading has-text-color" style="color:#fff;font-size:clamp(1.75rem,4vw,2.5rem);font-weight:800;letter-spacing:-1px;margin-bottom:0.75rem">Download the CTOS App!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"color":{"text":"rgba(255,255,255,0.8)"},"typography":{"fontSize":"16px","lineHeight":"1.65"},"spacing":{"margin":{"bottom":"1.5rem"}}}} -->
<p class="has-text-color" style="color:rgba(255,255,255,0.8);font-size:16px;line-height:1.65;margin-bottom:1.5rem">View your credit details, track score changes and manage your CTOS account on mobile. Available on iOS and Android.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","flexWrap":"wrap"}} -->
<div class="wp-block-buttons">
<!-- wp:button {"className":"ctos-store-btn","style":{"border":{"radius":"12px"}}} --><div class="wp-block-button ctos-store-btn"><a class="wp-block-button__link wp-element-button" href="https://apps.ctos.com.my" style="border-radius:12px" target="_blank" rel="noreferrer noopener">🍎 App Store</a></div><!-- /wp:button -->
<!-- wp:button {"className":"ctos-store-btn","style":{"border":{"radius":"12px"}}} --><div class="wp-block-button ctos-store-btn"><a class="wp-block-button__link wp-element-button" href="https://apps.ctos.com.my" style="border-radius:12px" target="_blank" rel="noreferrer noopener">🤖 Google Play</a></div><!-- /wp:button -->
</div>
<!-- /wp:buttons -->

</div>
<!-- /wp:column -->

<!-- Right: QR code — use wp:html for the side-by-side layout (image + text) -->
<!-- wp:column {"verticalAlignment":"center","width":"340px"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:340px;flex-grow:0">

<!-- wp:html -->
<div class="ctos-app-qr-block">
  <div class="ctos-app-qr-img">
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=156x156&data=https%3A%2F%2Fapps.ctos.com.my&margin=10&format=png"
         alt="Scan to download CTOS app" width="78" height="78" />
  </div>
  <div class="ctos-app-qr-text">
    <strong>Scan to Download</strong>
    <p>Point your camera at the QR code to install the CTOS app instantly.</p>
  </div>
</div>
<!-- /wp:html -->

</div>
<!-- /wp:column -->

</div>
<!-- /wp:columns -->

</section>
<!-- /wp:group -->
