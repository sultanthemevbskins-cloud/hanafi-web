<?php
/**
 * Title: CTOS Hero Slider
 * Slug: ctos/hero
 * Categories: ctos, banner
 * Keywords: hero, slider, credit, score
 * Viewport Width: 1280
 * Description: 3-slide auto-rotating hero matching the CTOS production site.
 *   Dark background only — no background images.
 *   Edit slide titles/descriptions/buttons inside each .ctos-slide block.
 *   Change data-speed="5500" on the outer section to adjust auto-rotate speed (ms).
 */
?>
<!-- wp:html -->
<section class="ctos-hero-slider" data-speed="5500" role="region" aria-label="Hero" tabindex="0" style="background:#061a1b;position:relative;overflow:hidden;min-height:calc(100vh - 64px)">

<!-- ── Slide 1: Credit Score ── -->
<div class="ctos-hero-slide">
  <div class="ctos-hero-inner">
    <div class="ctos-hero-left">
      <p class="ctos-hero-eyebrow">#1 &nbsp; People's Choice for Credit Report</p>
      <div class="ctos-hero-title">
        <p class="ctos-grad-text" style="background-image:linear-gradient(90deg,#ffc28e 0%,#1feeff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Smarter credit</p>
        <p style="color:#fff">Stronger decisions.</p>
      </div>
      <p class="ctos-hero-desc">See your credit score in seconds, spot what's hurting it, and unlock the financial moves that actually move the needle — all in one place.</p>
      <div class="ctos-hero-btns">
        <a href="#pricing" class="ctos-btn-hero">Get Free Report <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
      </div>
      <div class="ctos-hero-stats">
        <div><span class="ctos-stat-n">5M<span class="ctos-stat-plus">+</span></span><span class="ctos-stat-l">Consumer Profiles</span></div>
        <div><span class="ctos-stat-n">1K<span class="ctos-stat-plus">+</span></span><span class="ctos-stat-l">Partner Institutions</span></div>
        <div><span class="ctos-stat-n">30<span class="ctos-stat-plus">+</span></span><span class="ctos-stat-l">Years of Data</span></div>
      </div>
    </div>
    <div class="ctos-hero-right">
      <!-- White Credit Health card -->
      <div class="ctos-hero-card-white">
        <div class="ctos-hcw-header"><span class="ctos-hcw-title">Credit Health</span></div>
        <!-- Score gauge SVG (simplified) -->
        <svg viewBox="0 0 430 220" style="width:100%;margin:0.5rem 0" aria-hidden="true">
          <!-- Arc segments -->
          <path d="M 87 200 A 128 128 0 0 1 215 72" fill="none" stroke="#C9302C" stroke-width="14" stroke-linecap="round" opacity="0.8"/>
          <path d="M 215 72 A 128 128 0 0 1 280 86" fill="none" stroke="#D9821F" stroke-width="14" stroke-linecap="round" opacity="0.8"/>
          <path d="M 280 86 A 128 128 0 0 1 318 128" fill="none" stroke="#C9A60E" stroke-width="14" stroke-linecap="round" opacity="0.8"/>
          <path d="M 318 128 A 128 128 0 0 1 332 168" fill="none" stroke="#3FA84A" stroke-width="14" stroke-linecap="round" opacity="0.8"/>
          <path d="M 332 168 A 128 128 0 0 1 343 200" fill="none" stroke="#2D9F4E" stroke-width="14" stroke-linecap="round" opacity="0.9"/>
          <!-- Needle dot -->
          <circle cx="320" cy="142" r="9" fill="#3FA84A"/>
          <circle cx="320" cy="142" r="4" fill="white"/>
          <!-- Score text -->
          <text x="215" y="178" text-anchor="middle" fill="#0F2123" font-size="44" font-weight="700" font-family="Poppins,sans-serif">735</text>
          <text x="215" y="198" text-anchor="middle" fill="#2D9F4E" font-size="13" font-weight="600" font-family="Poppins,sans-serif">Very Good</text>
          <text x="215" y="214" text-anchor="middle" fill="rgba(15,33,35,0.45)" font-size="10" font-family="Poppins,sans-serif">718 – 743</text>
        </svg>
        <!-- Credit factors -->
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
      </div>
    </div>
  </div>
</div>

<!-- ── Slide 2: Bank View ── -->
<div class="ctos-hero-slide">
  <div class="ctos-hero-inner">
    <div class="ctos-hero-left">
      <p class="ctos-hero-eyebrow">#1 &nbsp; Bank's Choice for Credit Report</p>
      <div class="ctos-hero-title">
        <p style="color:#fff">See what</p>
        <p class="ctos-grad-text" style="background-image:linear-gradient(90deg,#ffc28e 0%,#1feeff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">your bank sees.</p>
      </div>
      <p class="ctos-hero-desc">The same CTOS report your bank pulls when evaluating your loan — now in your hands. Know exactly where you stand before you apply.</p>
      <div class="ctos-hero-btns">
        <a href="#pricing" class="ctos-btn-hero">View My Report <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
      </div>
      <div class="ctos-hero-stats">
        <div><span class="ctos-stat-n">95<span class="ctos-stat-plus">%</span></span><span class="ctos-stat-l">of MY banks use CTOS</span></div>
        <div><span class="ctos-stat-n">2M<span class="ctos-stat-plus">+</span></span><span class="ctos-stat-l">Loan checks / month</span></div>
      </div>
    </div>
    <div class="ctos-hero-right">
      <div class="ctos-hero-card-white">
        <div class="ctos-hcw-header">
          <span class="ctos-hcw-title">Loan Application Review</span>
          <span class="ctos-live-badge">● Live</span>
        </div>
        <div class="ctos-bank-grid">
          <div class="ctos-bank-item"><span style="color:#FFC629;font-weight:800;font-size:11px">Maybank</span></div>
          <div class="ctos-bank-item"><span style="color:#DC2828;font-weight:800;font-size:11px">CIMB</span></div>
          <div class="ctos-bank-item"><span style="color:#C8102E;font-weight:800;font-size:11px">PUBLIC BANK</span></div>
          <div class="ctos-bank-item"><span style="color:#144A9B;font-weight:800;font-size:11px">RHB</span></div>
          <div class="ctos-bank-item"><span style="color:#006847;font-weight:800;font-size:11px">Hong Leong</span></div>
          <div class="ctos-bank-item"><span style="color:#ED1C24;font-weight:800;font-size:11px">AmBank</span></div>
        </div>
        <div class="ctos-loan-item" style="border-top:1px solid rgba(15,33,35,0.08);margin-top:0.75rem;padding-top:0.75rem">
          <div style="width:28px;height:28px;background:rgba(0,123,133,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#007b85;flex-shrink:0">⏱</div>
          <div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 50,000 Personal Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">Maybank · 2 min ago</p></div>
          <span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#007b85;background:rgba(0,123,133,0.10);border:1px solid rgba(0,123,133,0.22);white-space:nowrap;font-weight:600">Pending</span>
        </div>
        <div class="ctos-loan-item">
          <div style="width:28px;height:28px;background:rgba(232,130,31,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;color:#E8821F;flex-shrink:0">✓</div>
          <div style="flex:1;min-width:0"><p style="font-size:12px;color:#0F2123;font-weight:500;margin:0">RM 320,000 Home Loan</p><p style="font-size:10.5px;color:rgba(15,33,35,0.55);margin:0">CIMB · 1 day ago</p></div>
          <span style="font-size:10px;padding:3px 9px;border-radius:100px;color:#B86A14;background:rgba(232,130,31,0.10);border:1px solid rgba(232,130,31,0.22);white-space:nowrap;font-weight:600">Reviewing</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ── Slide 3: SecureID ── -->
<div class="ctos-hero-slide">
  <div class="ctos-hero-inner">
    <div class="ctos-hero-left">
      <p class="ctos-hero-eyebrow">24/7 Identity Protection</p>
      <div class="ctos-hero-title">
        <p class="ctos-grad-text" style="background-image:linear-gradient(90deg,#ffc28e 0%,#1feeff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Protect your identity</p>
        <p style="color:#fff">before it's too late.</p>
      </div>
      <p class="ctos-hero-desc">Real-time credit monitoring, dark web scanning, and Takaful fraud coverage — one plan watches everything, so you don't have to.</p>
      <div class="ctos-hero-btns">
        <a href="#pricing" class="ctos-btn-hero">Explore SecureID <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
      </div>
      <div class="ctos-hero-stats">
        <div><span class="ctos-stat-n">RM20K<span class="ctos-stat-plus"></span></span><span class="ctos-stat-l">Takaful Coverage</span></div>
        <div><span class="ctos-stat-n">24/7<span class="ctos-stat-plus"></span></span><span class="ctos-stat-l">Always-on Monitoring</span></div>
        <div><span class="ctos-stat-n">4x<span class="ctos-stat-plus"></span></span><span class="ctos-stat-l">Reports / Year</span></div>
      </div>
    </div>
    <div class="ctos-hero-right">
      <div class="ctos-hero-card-white">
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
      </div>
    </div>
  </div>
</div>

<!-- Dots -->
<div class="ctos-hero-dots">
  <button class="ctos-dot" aria-label="Slide 1"></button>
  <button class="ctos-dot" aria-label="Slide 2"></button>
  <button class="ctos-dot" aria-label="Slide 3"></button>
</div>

</section>
<!-- /wp:html -->
