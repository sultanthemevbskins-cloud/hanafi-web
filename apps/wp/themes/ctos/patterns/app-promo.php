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

<!-- wp:columns {"style":{"spacing":{"blockGap":"3rem"}},"isStackedOnMobile":true} -->
<div class="wp-block-columns">

  <!-- Left: text -->
  <!-- wp:column {"verticalAlignment":"center"} -->
  <div class="wp-block-column is-vertically-aligned-center">

    <!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"clamp(1.75rem,4vw,2.5rem)","fontWeight":"800","letterSpacing":"-1px"},"color":{"text":"#ffffff"}}} -->
    <h2 class="wp-block-heading has-text-color" style="color:#ffffff;font-size:clamp(1.75rem,4vw,2.5rem);font-weight:800;letter-spacing:-1px">Download the CTOS App!</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"style":{"color":{"text":"rgba(255,255,255,0.8)"},"typography":{"fontSize":"16px","lineHeight":"1.65"}}} -->
    <p class="has-text-color" style="color:rgba(255,255,255,0.8);font-size:16px;line-height:1.65">View your credit details, track score changes and manage your CTOS account on mobile. Available on iOS and Android.</p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons {"style":{"spacing":{"margin":{"top":"1.5rem"}}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
    <div class="wp-block-buttons" style="margin-top:1.5rem">
      <!-- wp:button {"className":"ctos-store-btn","style":{"border":{"radius":"12px"}}} -->
      <div class="wp-block-button ctos-store-btn"><a class="wp-block-button__link wp-element-button" href="https://apps.ctos.com.my" style="border-radius:12px" target="_blank" rel="noreferrer noopener">🍎 App Store</a></div>
      <!-- /wp:button -->
      <!-- wp:button {"className":"ctos-store-btn","style":{"border":{"radius":"12px"}}} -->
      <div class="wp-block-button ctos-store-btn"><a class="wp-block-button__link wp-element-button" href="https://apps.ctos.com.my" style="border-radius:12px" target="_blank" rel="noreferrer noopener">🤖 Google Play</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->

  </div>
  <!-- /wp:column -->

  <!-- Right: QR code -->
  <!-- wp:column {"verticalAlignment":"center","width":"auto"} -->
  <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:auto">
  <!-- wp:group {"className":"ctos-app-qr","style":{"border":{"radius":"14px"}}} -->
  <div class="wp-block-group ctos-app-qr" style="border-radius:14px">
    <!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"6px"}},"width":"78px","height":"78px"} -->
    <figure class="wp-block-image size-full" style="border-radius:6px;width:78px;height:78px"><img src="https://api.qrserver.com/v1/create-qr-code/?size=156x156&data=https%3A%2F%2Fapps.ctos.com.my&margin=10&format=png" alt="Scan to download CTOS app" /></figure>
    <!-- /wp:image -->
    <!-- wp:group {"layout":{"type":"flex","flexDirection":"column"}} -->
    <div class="wp-block-group">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"600"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"4px"}}}} --><p class="has-text-color" style="color:#fff;font-size:14px;font-weight:600;margin-bottom:4px">Scan to Download</p><!-- /wp:paragraph -->
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"rgba(255,255,255,0.7)"}}} --><p class="has-text-color" style="color:rgba(255,255,255,0.7);font-size:13px">Point your camera to install the CTOS app.</p><!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
  </div>
  <!-- /wp:column -->

</div>
<!-- /wp:columns -->

</section>
<!-- /wp:group -->
