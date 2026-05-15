import type { SVGProps } from 'react'

export type IconName =
  | 'check' | 'close' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right'
  | 'arrow-right' | 'arrow-left' | 'search' | 'user' | 'shield' | 'star'
  | 'bell' | 'info' | 'warning' | 'error' | 'eye' | 'eye-off'
  | 'download' | 'upload' | 'edit' | 'trash' | 'copy' | 'link'
  | 'home' | 'menu' | 'more-horizontal' | 'plus' | 'minus' | 'refresh'
  | 'credit-card' | 'lock' | 'unlock' | 'chart' | 'document' | 'mail'
  // Credit Report panel icons
  | 'score' | 'ccris' | 'person' | 'briefcase' | 'scales'
  // SecureID feature icons
  | 'globe' | 'umbrella' | 'credit-monitor'
  // Mega Menu – Consumer product icons
  | 'mm-credit-report' | 'mm-secureid' | 'mm-credit-finder'
  // Mega Menu – Commercial product icons
  | 'mm-credit-manager' | 'mm-single-report' | 'mm-biz-secure'
  | 'mm-creditscan' | 'mm-verified' | 'mm-business-loan'
  // Mega Menu – Corporate & FI product icons
  | 'mm-ekyc' | 'mm-decisioning' | 'mm-ram-rating'
  // Mega Menu – International product icons
  | 'mm-singapore' | 'mm-international'
  // Social brand icons (use fill prop override for solid rendering)
  | 'social-facebook' | 'social-youtube' | 'social-linkedin' | 'social-tiktok'

export const iconNames: IconName[] = [
  'check','close','chevron-down','chevron-up','chevron-left','chevron-right',
  'arrow-right','arrow-left','search','user','shield','star',
  'bell','info','warning','error','eye','eye-off',
  'download','upload','edit','trash','copy','link',
  'home','menu','more-horizontal','plus','minus','refresh',
  'credit-card','lock','unlock','chart','document','mail',
  // Credit Report panel icons
  'score','ccris','person','briefcase','scales',
  // SecureID feature icons
  'globe','umbrella','credit-monitor',
  // Mega Menu – Consumer product icons
  'mm-credit-report','mm-secureid','mm-credit-finder',
  // Mega Menu – Commercial product icons
  'mm-credit-manager','mm-single-report','mm-biz-secure',
  'mm-creditscan','mm-verified','mm-business-loan',
  // Mega Menu – Corporate & FI product icons
  'mm-ekyc','mm-decisioning','mm-ram-rating',
  // Mega Menu – International product icons
  'mm-singapore','mm-international',
  // Social brand icons
  'social-facebook','social-youtube','social-linkedin','social-tiktok',
]

export const paths: Record<IconName, string> = {
  'check':           'M20 6L9 17l-5-5',
  'close':           'M18 6L6 18M6 6l12 12',
  'chevron-down':    'M6 9l6 6 6-6',
  'chevron-up':      'M18 15l-6-6-6 6',
  'chevron-left':    'M15 18l-6-6 6-6',
  'chevron-right':   'M9 18l6-6-6-6',
  'arrow-right':     'M5 12h14M12 5l7 7-7 7',
  'arrow-left':      'M19 12H5M12 19l-7-7 7-7',
  'search':          'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z',
  'user':            'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'shield':          'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'star':            'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'bell':            'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  'info':            'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8h.01M12 12v4',
  'warning':         'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
  'error':           'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM15 9l-6 6M9 9l6 6',
  'eye':             'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  'eye-off':         'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22',
  'download':        'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  'upload':          'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  'edit':            'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  'trash':           'M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2',
  'copy':            'M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  'link':            'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  'home':            'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  'menu':            'M3 12h18M3 6h18M3 18h18',
  'more-horizontal': 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  'plus':            'M12 5v14M5 12h14',
  'minus':           'M5 12h14',
  'refresh':         'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15',
  'credit-card':     'M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM1 10h22',
  'lock':            'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4',
  'unlock':          'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 9.9-1',
  'chart':           'M18 20V10M12 20V4M6 20v-6',
  'document':        'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  'mail':            'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',

  // ── Credit Report panel icons ──────────────────────────────────────────────
  // Speedometer / credit score gauge
  'score':           'M3 12a9 9 0 0 1 18 0M6 17l1.5-1.5M12 5v2M18 17l-1.5-1.5M12 12l3-5M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  // 2×2 data grid (CCRIS records)
  'ccris':           'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  // Person / personal info
  'person':          'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20c0-4 3.6-7 8-7s8 3 8 7',
  // Briefcase / business & directorship
  'briefcase':       'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4',
  // Balance scales / litigation
  'scales':          'M12 3v18M7 21h10M3 7h18M6 7l-3 8a3 3 0 0 0 6 0zM18 7l3 8a3 3 0 0 1-6 0z',

  // ── SecureID feature icons ─────────────────────────────────────────────────
  // Globe / dark web monitoring
  'globe':           'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  // Umbrella / Takaful
  'umbrella':        'M23 12a11.05 11.05 0 0 0-22 0zM18 19a3 3 0 0 1-6 0v-7',
  // Credit card + trend line / credit monitoring
  'credit-monitor':  'M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM1 10h22M7 14.5l2.5-2 2 2 4-3.5',

  // ── Mega Menu – Consumer ───────────────────────────────────────────────────
  // Credit Report: document body + text lines + mini bar chart at bottom
  'mm-credit-report':'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M9 17l2-3 2 3 3-4',
  // SecureID: shield with checkmark
  'mm-secureid':     'M12 2L4 5v7c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5zM8 12l3 3 5-5',
  // Credit Finder: circle magnifier with plus (search for credit)
  'mm-credit-finder':'M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16zM21 21l-4.35-4.35M8 11h6M11 8v6',

  // ── Mega Menu – Commercial ─────────────────────────────────────────────────
  // Credit Manager: screen/monitor with rising trend line
  'mm-credit-manager':'M3 4h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM7 14l2-3.5 2.5 2.5 2.5-3 2 2',
  // Single Report: folded-corner document with content lines
  'mm-single-report': 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM13 2v7h7M8 12h8M8 16h5',
  // BizSecure: shield with exclamation warning
  'mm-biz-secure':   'M12 2L4 5v7c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5zM12 9v4M12 15h.01',
  // CreditSCAN Quick Score: gauge/speedometer (needle points left = scanning)
  'mm-creditscan':   'M3 12a9 9 0 0 1 18 0M6 17l1.5-1.5M18 17l-1.5-1.5M12 5v2M12 12l-3-5M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  // CTOS Verified: star badge with checkmark
  'mm-verified':     'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zM9 12l2 2 4-4',
  // Business Loan: wide card with chip circle
  'mm-business-loan':'M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM1 10h22M6 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',

  // ── Mega Menu – Corporate & FI ─────────────────────────────────────────────
  // eKYC: person silhouette + verified checkmark (digital identity)
  'mm-ekyc':         'M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20c0-4 3.6-7 8-7s8 3 8 7M15 13l2 2 4-4',
  // Application & Decisioning: flowchart — 3 boxes connected by branches
  'mm-decisioning':  'M2 2h6v5H2zM9 2h6v5H9zM16 2h6v5h-6zM5 7v3M12 7v3M19 7v3M5 10H19M12 10v6M9 16h6',
  // RAM Rating Rationale Report: star (rating symbol)
  'mm-ram-rating':   'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',

  // ── Mega Menu – International ──────────────────────────────────────────────
  // Singapore Report: globe (circle + equator + meridian ellipse)
  'mm-singapore':    'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2c2.76 3.33 4 6.33 4 10s-1.24 6.67-4 10c-2.76-3.33-4-6.33-4-10s1.24-6.67 4-10z',
  // International Report: globe + star overlay (cross-border)
  'mm-international':'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2c2.76 3.33 4 6.33 4 10s-1.24 6.67-4 10c-2.76-3.33-4-6.33-4-10s1.24-6.67 4-10zM19 5l.8 1.7 1.8.3-1.3 1.2.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.2 1.8-.3z',

  // ── Social brand icons ─────────────────────────────────────────────────────
  // Tip: pass fill={color} stroke="none" strokeWidth={0} for solid brand rendering
  // Facebook: letter-f letterform
  'social-facebook': 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  // YouTube: rounded-rect container + play triangle
  'social-youtube':  'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
  // LinkedIn: the classic "in" letterform
  'social-linkedin': 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  // TikTok: music-note-like shape
  'social-tiktok':   'M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5',
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  name:    IconName
  size?:   number
  color?:  string
}

export function Icon({ name, size = 20, color = 'currentColor', ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={name}
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  )
}
