/**
 * CTOS Mega Menu
 * Replaces the default WordPress navigation dropdown with
 * the two-column mega menu matching the Vercel production design.
 */
(function () {
  'use strict';

  var NAV_DATA = {
    'Consumer': [
      { name: 'Credit Report',   tagline: 'Your full credit picture in one place.',        note: 'RM27.90 / report',      url: '#consumer-credit-report',  color: '#0bb1be' },
      { name: 'SecureID',        tagline: '24/7 identity protection, always on.',           note: 'From RM9.90 / month',    url: '#consumer-secureid',       color: '#007b85' },
      { name: 'Credit Finder',   tagline: 'Match to the best loan for your profile.',       note: 'Free to use',            url: '#consumer-credit-finder',  color: '#f2b530' },
    ],
    'Commercial': [
      { name: 'Credit Manager',         tagline: "Malaysia's No.1 credit management solution.", note: 'Subscription plan',       url: '#commercial-credit-manager',  color: '#0bb1be' },
      { name: 'Single Report',          tagline: 'One-off business credit report, on demand.',  note: 'Pay per report',          url: '#commercial-single-report',    color: '#f15d22' },
      { name: 'CTOS BizSecure',         tagline: '24/7 managed cybersecurity for SMEs.',        note: 'From RM100/device/mo',    url: '#commercial-bizsecure',        color: '#007b85' },
      { name: 'CreditSCAN Quick Score', tagline: 'Instant RAM-powered business risk score.',    note: 'Pay per report',          url: '#commercial-creditscan',       color: '#6366f1' },
      { name: 'CTOS Verified',          tagline: 'Boost your company credibility.',             note: 'Business certification',  url: '#commercial-verified',         color: '#059669' },
      { name: 'Business Loan',          tagline: 'Find the right financing for your business.', note: 'Free to use',             url: '#commercial-loan',             color: '#f2b530' },
    ],
    'Corporate & FI': [
      { name: 'CTOS eKYC',                    tagline: 'AI-enhanced digital identity verification.',  note: 'Enterprise',      url: '#fi-ekyc',         color: '#0bb1be' },
      { name: 'Application & Decisioning',    tagline: 'Automate credit approvals, reduce manual work.', note: 'Enterprise',   url: '#fi-decisioning',  color: '#6366f1' },
      { name: 'RAM Rating Rationale Report',  tagline: 'Official RAM credit ratings, fully explained.', note: 'Pay per report', url: '#fi-ram',          color: '#f15d22' },
    ],
    'International': [
      { name: 'Singapore Report',    tagline: 'Business credit reports for Singapore companies.', note: 'Pay per report',  url: '#intl-sg',    color: '#e53e3e' },
      { name: 'International Report',tagline: 'Credit reports on companies in 200+ countries.',   note: 'Pay per report',  url: '#intl-world', color: '#6366f1' },
    ],
  };

  function buildPanel(products) {
    var panel = document.createElement('div');
    panel.className = 'ctos-mega-panel';

    var left = document.createElement('div');
    left.className = 'ctos-mega-left';

    var lbl = document.createElement('p');
    lbl.className = 'ctos-mega-label';
    lbl.textContent = 'Products';
    left.appendChild(lbl);

    var right = document.createElement('div');
    right.className = 'ctos-mega-right';

    function setRight(p) {
      right.innerHTML =
        '<div class="ctos-mega-badge" style="background:' + p.color + '18;color:' + p.color + '">' +
          '<span class="ctos-mega-dot" style="background:' + p.color + '"></span>' + p.name +
        '</div>' +
        '<h3 class="ctos-mega-title">' + p.tagline + '</h3>' +
        '<div class="ctos-mega-actions">' +
          '<a href="' + p.url + '" class="ctos-mega-cta" style="background:' + p.color + '">Learn More' +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
          '</a>' +
          '<span class="ctos-mega-note">' + p.note + '</span>' +
        '</div>';
    }

    products.forEach(function (p, i) {
      var row = document.createElement('a');
      row.href = p.url;
      row.className = 'ctos-mega-item' + (i === 0 ? ' is-active' : '');
      row.innerHTML =
        '<div class="ctos-mega-item-icon" style="background:' + p.color + '18;color:' + p.color + '">' +
          '<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3" y="2" width="14" height="16" rx="2"/><path d="M7 7h6M7 10h6M7 13h4"/></svg>' +
        '</div>' +
        '<div class="ctos-mega-item-body"><span class="ctos-mega-item-name">' + p.name + '</span>' +
          '<span class="ctos-mega-item-note">' + p.note + '</span></div>' +
        (i === 0 ? '<svg class="ctos-mega-arrow" width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>' : '');

      row.addEventListener('mouseenter', function () {
        left.querySelectorAll('.ctos-mega-item').forEach(function (el) {
          el.classList.remove('is-active');
          el.querySelector('.ctos-mega-arrow') && (el.querySelector('.ctos-mega-arrow').style.display = 'none');
        });
        row.classList.add('is-active');
        if (!row.querySelector('.ctos-mega-arrow')) {
          var arr = document.createElement('span');
          arr.className = 'ctos-mega-arrow';
          arr.innerHTML = '<svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>';
          row.appendChild(arr);
        }
        setRight(p);
      });

      left.appendChild(row);
    });

    setRight(products[0]);
    panel.appendChild(left);
    panel.appendChild(right);
    return panel;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var topItems = document.querySelectorAll('.ctos-nav-item.has-child, .ctos-header .wp-block-navigation-item.has-child');
    topItems.forEach(function (item) {
      var link = item.querySelector(':scope > a, :scope > button, :scope > .wp-block-navigation-item__content');
      if (!link) return;
      /* Strip the arrow span text to get just the label */
      var labelEl = link.cloneNode(true);
      var arrow = labelEl.querySelector('.ctos-nav-arrow');
      if (arrow) arrow.remove();
      var label = (labelEl.textContent || labelEl.innerText || '').trim();
      var products = NAV_DATA[label];
      if (!products) return;

      /* hide the default WP submenu */
      var sub = item.querySelector('.wp-block-navigation__submenu-container');
      if (sub) sub.style.cssText = 'display:none!important';

      var panel = buildPanel(products);
      item.appendChild(panel);
      item.style.position = 'relative';

      var timer;
      function show() { clearTimeout(timer); panel.classList.add('is-visible'); }
      function hide() { timer = setTimeout(function () { panel.classList.remove('is-visible'); }, 80); }
      item.addEventListener('mouseenter', show);
      item.addEventListener('mouseleave', hide);
      panel.addEventListener('mouseenter', show);
      panel.addEventListener('mouseleave', hide);
    });
  });
}());
