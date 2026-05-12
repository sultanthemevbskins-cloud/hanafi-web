/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins:    ['Poppins', 'sans-serif'],
        manrope:    ['Manrope', 'sans-serif'],
        jakarta:    ['"Plus Jakarta Sans"', 'sans-serif'],
        lato:       ['Lato', 'sans-serif'],
      },

      // ── Design-system colour tokens ─────────────────────────────────────
      colors: {
        // Brand palette
        brand: {
          primary:         '#007b85',
          'primary-hover': '#006970',
          'primary-deep':  '#055157',
          secondary:       '#0bb1be',
          accent:          '#2de1ea',
          orange:          '#f58220',
          'orange-vivid':  '#f15d22',
          amber:           '#f2b530',
        },
        // Ink (text) scale
        ink: {
          heading: '#102a2e',
          body:    '#374151',
          muted:   '#6b7280',
          inverse: '#ffffff',
          link:    '#007b85',
        },
        // Surface (background / border) scale
        surface: {
          white:  '#ffffff',
          page:   '#fafbfc',
          soft:   '#f0f0f0',
          border: '#eaecef',
        },
        // UI-specific tokens
        ui: {
          header:  '#061a1b',
          canvas:  '#0a0a0a',
          success: '#2d9f4e',
          warning: '#f2b530',
          danger:  '#ef4444',
        },
        // Legacy — retained for backward compat during migration
        ctos: {
          teal:        '#007b85',
          'teal-dark': '#0f7a82',
          cyan:        '#0bb1be',
          'cyan-light':'#2de1ea',
          orange:      '#f15d22',
          amber:       '#f2b530',
          dark:        '#0f2123',
          'dark-deep': '#102a2e',
        },
      },

      // ── Typography scale ────────────────────────────────────────────────
      fontSize: {
        // Label / caption
        'label-xs': ['10px', { lineHeight: '15px',    letterSpacing: '0.01em' }],
        'label-sm': ['12px', { lineHeight: '18.6px' }],
        'label':    ['13px', { lineHeight: '20px' }],

        // Body copy
        'body-sm':  ['14px', { lineHeight: '21.7px' }],
        'body':     ['15px', { lineHeight: '24px' }],
        'body-lg':  ['16px', { lineHeight: '25.6px' }],
        'body-xl':  ['17px', { lineHeight: '26.35px' }],

        // Title (card headings, sub-sections)
        'title-sm': ['22px', { lineHeight: '34.1px', letterSpacing: '-0.02em' }],
        'title':    ['26px', { lineHeight: '39px',   letterSpacing: '-0.02em' }],

        // Display (section headings, hero)
        'display-sm': ['36px', { lineHeight: '39.6px', letterSpacing: '-0.03em' }],
        'display-md': ['48px', { lineHeight: '52.8px', letterSpacing: '-0.025em' }],
        'display-lg': ['54px', { lineHeight: '56.7px', letterSpacing: '-0.028em' }],
        'display-xl': ['58px', { lineHeight: '60.9px', letterSpacing: '-0.035em' }],
      },
    },
  },
  plugins: [],
}
