/**
 * CTOS Mega Menu
 * Two-column panel: left = product list, right = feature detail
 * Matches the original React mega menu in the Vercel production site.
 */
(function () {
  'use strict';

  var NAV_DATA = {
    'Consumer': [
      {
        name:     'Credit Report',
        tagline:  'Your full credit picture in one place.',
        desc:     'Get your CTOS Score plus CCRIS records from Bank Negara. See exactly what lenders see.',
        features: ['CTOS Score with full breakdown','CCRIS records from Bank Negara Malaysia','Litigation & bankruptcy history','Business directorship & SSM data'],
        note:     'RM27.90 / report',
        url:      '#pricing',
        color:    '#0bb1be',
        cta:      'Learn More',
      },
      {
        name:     'SecureID',
        tagline:  '24/7 identity protection, always on.',
        desc:     'Real-time credit monitoring, dark web scanning, and Takaful fraud coverage, one plan watches everything.',
        features: ['Real-time credit monitoring alerts','Dark web & data breach scanning','4 MyCTOS Score reports yearly','Takaful fraud coverage up to RM20,000'],
        note:     'From RM9.90 / month',
        url:      '#pricing',
        color:    '#007b85',
        cta:      'Learn More',
      },
      {
        name:     'Credit Finder',
        tagline:  'Match to the best loan for your profile.',
        desc:     'Compare personalised loan and credit card offers from 50+ banks, matched to your credit score in seconds.',
        features: ['Personalised loan & card matching','Compare rates from 50+ banks','Zero impact on your credit score','Instant eligibility check'],
        note:     'Free to use',
        url:      '#pricing',
        color:    '#f2b530',
        cta:      'Learn More',
      },
    ],
    'Commercial': [
      {
        name:     'Credit Manager',
        tagline:  "Malaysia's No.1 credit management solution.",
        desc:     'Evaluate, monitor, and manage business credit risk on one interactive platform. Powered by FICO scoring.',
        features: ['Comprehensive client credit reports','Automated monitoring & profile alerts','FICO-powered business credit scoring','CTOS eTR electronic trade reference'],
        note:     'Subscription plan',
        url:      '#commercial',
        color:    '#0bb1be',
        cta:      'Learn More',
      },
      {
        name:     'Single Report',
        tagline:  'One-off business credit report, on demand.',
        desc:     'Buy a single comprehensive business credit report for any Malaysian company. No subscription required.',
        features: ['SSM filings & company CCRIS data','Litigation & bankruptcy records','Directorship & ownership links','Pay per report, no commitment'],
        note:     'Pay per report',
        url:      '#commercial',
        color:    '#f15d22',
        cta:      'Learn More',
      },
      {
        name:     'CTOS BizSecure',
        tagline:  '24/7 managed cybersecurity for SMEs.',
        desc:     'Always-on threat detection and rapid expert response, no in-house security team required.',
        features: ['24/7 monitoring & threat detection','Expert-led rapid incident response','Ransomware & data breach protection','PDPA & Cyber Act 2024 compliant'],
        note:     'From RM100/device/mo',
        url:      '#commercial',
        color:    '#007b85',
        cta:      'Learn More',
      },
      {
        name:     'CreditSCAN Quick Score',
        tagline:  'Instant RAM-powered business risk score.',
        desc:     'Get a fast credit score for any Malaysian company. Instant risk grading backed by RAM Rating methodology.',
        features: ['RAM-powered credit scoring model','Instant company risk grade','Credit limit recommendation','Pay per report, no subscription'],
        note:     'Pay per report',
        url:      '#commercial',
        color:    '#6366f1',
        cta:      'Learn More',
      },
      {
        name:     'CTOS Verified',
        tagline:  'Boost your company credibility with a trusted seal.',
        desc:     'Get the CTOS Verified seal to win instant customer trust, stand out from competitors, and close deals faster.',
        features: ['Official CTOS Verified business seal','Win trust & close deals faster','Exclusive networking & training perks','Up to RM7,828 in added value'],
        note:     'Business certification',
        url:      '#commercial',
        color:    '#059669',
        cta:      'Get Verified',
      },
      {
        name:     'Business Loan',
        tagline:  'Find the right financing for your business.',
        desc:     'Match your business profile against multiple loan options from banks and financiers across Malaysia.',
        features: ['Compare rates & eligibility instantly','SME & commercial financing options','Free to search, no commitment'],
        note:     'Free to use',
        url:      '#commercial',
        color:    '#f2b530',
        cta:      'Find a Loan',
      },
    ],
    'Corporate & FI': [
      {
        name:     'CTOS eKYC',
        tagline:  'AI-enhanced digital identity verification.',
        desc:     'Verify customer identities remotely with 4-layer AI authentication. BNM sandbox-tested and fully compliant.',
        features: ['ID document & facial recognition','Bureau file & knowledge-based checks','AI hologram & liveness detection','BNM-compliant digital onboarding'],
        note:     'Enterprise',
        url:      '#',
        color:    '#0bb1be',
        cta:      'Learn More',
      },
      {
        name:     'Application & Decisioning',
        tagline:  'Automate credit approvals, reduce manual work.',
        desc:     'Streamline credit application workflows with real-time bureau data and fully customisable decisioning rules.',
        features: ['Automated credit decisioning engine','Customisable rule-based scoring','Real-time CTOS & CCRIS data pull','Seamless API integration'],
        note:     'Enterprise',
        url:      '#',
        color:    '#6366f1',
        cta:      'Learn More',
      },
      {
        name:     'RAM Rating Rationale Report',
        tagline:  'Official RAM credit ratings, fully explained.',
        desc:     "Access RAM's rating rationale reports for publicly rated Malaysian entities, bonds, and sukuk.",
        features: ['Official RAM credit rating reports','Detailed rating rationale & outlook','Sector & peer comparison data','Timely updates on rating changes'],
        note:     'Pay per report',
        url:      '#',
        color:    '#f15d22',
        cta:      'Learn More',
      },
    ],
    'International': [
      {
        name:     'Singapore Report',
        tagline:  'Business credit reports for Singapore companies.',
        desc:     'Access comprehensive credit profiles for Singapore-registered companies via our ctosbasis.com/sg portal.',
        features: ['Singapore company UEN & ACRA data','Financial health indicators','Directorship & ownership records','Cross-border due diligence'],
        note:     'Pay per report',
        url:      '#',
        color:    '#e53e3e',
        cta:      'Learn More',
      },
      {
        name:     'International Report',
        tagline:  'Credit reports on companies in 200+ countries.',
        desc:     'Know your international partners before you transact. Cross-border credit assessment for global due diligence.',
        features: ['200+ countries covered','Company financials & ownership data','Trade reference & payment history','AML & compliance screening'],
        note:     'Pay per report',
        url:      '#',
        color:    '#6366f1',
        cta:      'Learn More',
      },
    ],
  };

  /* ── Build mega panel ── */
  function buildPanel(products) {
    var panel = document.createElement('div');
    panel.className = 'ctos-mega-panel';

    /* Left: product list */
    var left = document.createElement('div');
    left.className = 'ctos-mega-left';
    var lbl = document.createElement('p');
    lbl.className = 'ctos-mega-label';
    lbl.textContent = 'Products';
    left.appendChild(lbl);

    /* Right: detail pane */
    var right = document.createElement('div');
    right.className = 'ctos-mega-right';

    function setRight(p) {
      var featureHTML = p.features.map(function (f) {
        return '<li><svg width="16" height="16" viewBox="0 0 16 16" fill="none">' +
          '<circle cx="8" cy="8" r="7" fill="' + p.color + '18"/>' +
          '<path d="M5 8l2 2 4-4" stroke="' + p.color + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
          '</svg><span>' + f + '</span></li>';
      }).join('');

      right.innerHTML =
        '<div class="ctos-mega-badge" style="background:' + p.color + '18;color:' + p.color + '">' +
          '<span class="ctos-mega-dot" style="background:' + p.color + '"></span>' + p.name +
        '</div>' +
        '<h3 class="ctos-mega-title">' + p.tagline + '</h3>' +
        '<p class="ctos-mega-desc">' + p.desc + '</p>' +
        '<ul class="ctos-mega-features">' + featureHTML + '</ul>' +
        '<div class="ctos-mega-actions">' +
          '<a href="' + p.url + '" class="ctos-mega-cta" style="background:' + p.color + '">' +
            p.cta +
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
        '<div class="ctos-mega-item-body">' +
          '<span class="ctos-mega-item-name">' + p.name + '</span>' +
          '<span class="ctos-mega-item-note">' + p.note + '</span>' +
        '</div>';

      row.addEventListener('mouseenter', function () {
        left.querySelectorAll('.ctos-mega-item').forEach(function (el) { el.classList.remove('is-active'); });
        row.classList.add('is-active');
        setRight(p);
      });
      left.appendChild(row);
    });

    setRight(products[0]);
    panel.appendChild(left);
    panel.appendChild(right);
    return panel;
  }

  /* ── Wire up nav items ── */
  document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('header.ctos-header .wp-block-navigation-item.has-child');
    items.forEach(function (item) {
      var btn = item.querySelector(':scope > a, :scope > button, :scope > .wp-block-navigation-item__content');
      if (!btn) return;
      var clone = btn.cloneNode(true);
      var arrow = clone.querySelector('.ctos-nav-arrow, .wp-block-navigation__submenu-icon');
      if (arrow) arrow.remove();
      var label = (clone.textContent || '').replace(/\s+/g, ' ').trim();
      var products = NAV_DATA[label];
      if (!products) return;

      /* Hide default WP submenu */
      var sub = item.querySelector('.wp-block-navigation__submenu-container');
      if (sub) sub.style.cssText = 'display:none!important';

      var panel = buildPanel(products);
      item.style.position = 'relative';
      item.appendChild(panel);

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
