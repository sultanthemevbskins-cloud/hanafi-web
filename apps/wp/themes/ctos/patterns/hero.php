<?php
/**
 * Title: CTOS Hero
 * Slug: ctos/hero
 * Categories: banner, featured
 * Keywords: hero, banner, ctos, header, landing
 * Viewport Width: 1280
 * Description: Full-width hero banner matching the CTOS web homepage style — dark overlay, headline, description, and two CTA buttons.
 */
?>

<!-- wp:cover {"overlayColor":"ctos-dark","isUserOverlayColor":true,"minHeight":600,"minHeightUnit":"px","align":"full","style":{"spacing":{"padding":{"top":"5rem","bottom":"5rem"}}}} -->
<div class="wp-block-cover alignfull" style="min-height:600px">
  <span aria-hidden="true" class="wp-block-cover__background has-ctos-dark-background-color has-background-dim-80 has-background-dim"></span>
  <div class="wp-block-cover__inner-container">

    <!-- wp:group {"style":{"spacing":{"blockGap":"1.5rem"}},"layout":{"type":"flex","flexDirection":"column","justifyContent":"left"}} -->
    <div class="wp-block-group">

      <!-- wp:paragraph {"style":{"typography":{"fontWeight":"700","textTransform":"uppercase","letterSpacing":"0.2em"},"color":{"text":"var(--wp--preset--color--ctos-amber)"}},"fontSize":"xs"} -->
      <p class="has-text-color" style="color:var(--wp--preset--color--ctos-amber);font-weight:700;text-transform:uppercase;letter-spacing:0.2em">Malaysia's Leading Credit Reporting Agency</p>
      <!-- /wp:paragraph -->

      <!-- wp:heading {"level":1,"style":{"typography":{"lineHeight":"1.05","letterSpacing":"-2px"},"color":{"text":"#ffffff"}},"fontSize":"3xl"} -->
      <h1 class="wp-block-heading has-text-color" style="color:#ffffff;line-height:1.05;letter-spacing:-2px">Know Your Credit Score.<br>Take Control of Your Future.</h1>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"style":{"color":{"text":"rgba(255,255,255,0.7)"},"typography":{"lineHeight":"1.65"}},"fontSize":"md"} -->
      <p class="has-text-color" style="color:rgba(255,255,255,0.7);line-height:1.65">Access your CTOS credit report, monitor your score, and protect your financial identity — all in one place.</p>
      <!-- /wp:paragraph -->

      <!-- wp:buttons {"style":{"spacing":{"blockGap":"1rem","margin":{"top":"0.5rem"}}}} -->
      <div class="wp-block-buttons">
        <!-- wp:button {"backgroundColor":"ctos-teal","textColor":"white","style":{"border":{"radius":"100px"}}} -->
        <div class="wp-block-button"><a class="wp-block-button__link has-white-color has-ctos-teal-background-color has-text-color has-background wp-element-button" style="border-radius:100px">Get My Credit Report</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"style":{"border":{"radius":"100px","width":"2px","color":"rgba(255,255,255,0.4)"},"color":{"text":"#ffffff","background":"transparent"}}} -->
        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="border-radius:100px;border:2px solid rgba(255,255,255,0.4);color:#ffffff;background:transparent">Learn More</a></div>
        <!-- /wp:button -->
      </div>
      <!-- /wp:buttons -->

    </div>
    <!-- /wp:group -->

  </div>
</div>
<!-- /wp:cover -->
