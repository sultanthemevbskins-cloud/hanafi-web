import { colors, spacing, radius, shadows, animation, zIndex, breakpoints } from '@ctos/tokens';

export default {
  title: 'CTOS Design System/Tokens',

  parameters: {
    controls: { hideNoControlsWarning: true }
  },

  globals: {
    backgrounds: {
      value: "white"
    }
  }
};

const mono = (v) => (
  <code style={{ fontFamily: 'monospace', fontSize: 10, color: '#9CA3AF', background: '#F3F4F6', padding: '1px 5px', borderRadius: 3 }}>{v}</code>
);
const sectionHead = { fontFamily: 'Manrope, sans-serif', fontSize: 18, fontWeight: 700, color: '#111827', margin: '0 0 4px' };
const sectionDesc = { fontFamily: 'Manrope, sans-serif', fontSize: 12, color: '#9CA3AF', margin: '0 0 28px' };
const divider = { border: 'none', borderTop: '1px solid #E5E7EB', margin: '40px 0' };
const tokenLabel = { fontFamily: 'Manrope, sans-serif', fontSize: 11, fontWeight: 700, color: '#374151', margin: '8px 0 2px', display: 'block' };
const tokenMeta  = { fontFamily: 'Manrope, sans-serif', fontSize: 10, color: '#9CA3AF', display: 'block' };

// â”€â”€â”€ Colours â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const Colours = {
  name: 'Colours',
  render: () => {
    const groups = [
      {
        title: 'Brand: Primary',
        desc:  'Core teal palette for buttons, links, icons, and highlights.',
        tokens: [
          { name: 'blueLagoon', hex: '#007B85', role: 'Primary / Button fill' },
          { name: 'darkTeal',   hex: '#055157', role: 'Button hover / dark bg' },
          { name: 'cerulean',   hex: '#0BB1BE', role: 'Accent / gradient / focus ring' },
          { name: 'firefly',    hex: '#102A2E', role: 'Deep dark text / header bg' },
        ],
      },
      {
        title: 'Brand: Accent',
        desc:  'Warm accent colours used for CTAs, gradients and hover states.',
        tokens: [
          { name: 'buttercup', hex: '#F15D22', role: 'Orange CTA / hover text' },
          { name: 'saffron',   hex: '#F2B530', role: 'Amber / gradient end' },
        ],
      },
      {
        title: 'Text',
        desc:  'Text colours from darkest heading to lightest placeholder.',
        tokens: [
          { name: 'textDark',   hex: '#111827', role: 'Headings' },
          { name: 'textBody',   hex: '#374151', role: 'Body copy' },
          { name: 'textMuted',  hex: '#6B7280', role: 'Secondary / helper text' },
          { name: 'textSubtle', hex: '#9CA3AF', role: 'Placeholder / caption' },
          { name: 'textWhite',  hex: '#FFFFFF', role: 'On dark/teal backgrounds' },
        ],
      },
      {
        title: 'Surfaces & Backgrounds',
        desc:  'Background fills for cards, pages and interactive states.',
        tokens: [
          { name: 'white',      hex: '#FFFFFF', role: 'Default surface' },
          { name: 'bgLight',    hex: '#F9FAFB', role: 'Page / card background' },
          { name: 'bgMid',      hex: '#F3F4F6', role: 'Pressed/active state' },
          { name: 'bgDarkGrad1',hex: '#1F1F1F', role: 'Header button gradient top' },
          { name: 'bgDarkGrad2',hex: '#0E0E0E', role: 'Header button gradient bottom' },
        ],
      },
      {
        title: 'Borders',
        desc:  'Border and outline colours for inputs, cards and dividers.',
        tokens: [
          { name: 'borderLight', hex: '#E5E7EB', role: 'Dividers / card borders' },
          { name: 'borderMid',   hex: '#D1D5DB', role: 'Input borders' },
          { name: 'borderDark',  hex: '#2A2A2A', role: 'Header button border' },
          { name: 'borderTeal',  hex: '#007B85', role: 'Focus ring / active border' },
        ],
      },
    ];

    return (
      <div style={{ fontFamily: 'Manrope, sans-serif', padding: 32, maxWidth: 900 }}>
        <h1 style={sectionHead}>Colour Tokens</h1>
        <p style={sectionDesc}>Use these tokens consistently, never hardcode raw hex values in components.</p>

        {groups.map(g => (
          <div key={g.title} style={{ marginBottom: 40 }}>
            <h2 style={{ ...sectionHead, fontSize: 14 }}>{g.title}</h2>
            <p style={sectionDesc}>{g.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {g.tokens.map(t => (
                <div key={t.name} style={{ width: 130 }}>
                  <div style={{
                    width: '100%', height: 72, borderRadius: 10,
                    background: t.hex,
                    border: t.hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }} />
                  <span style={tokenLabel}>{t.name}</span>
                  {mono(t.hex)}
                  <span style={tokenMeta}>{t.role}</span>
                </div>
              ))}
            </div>
            <hr style={divider} />
          </div>
        ))}
      </div>
    );
  },
};

// â”€â”€â”€ Spacing â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const Spacing = {
  name: 'Spacing Scale',
  render: () => {
    const entries = Object.entries(spacing);
    return (
      <div style={{ fontFamily: 'Manrope, sans-serif', padding: 32, maxWidth: 700 }}>
        <h1 style={sectionHead}>Spacing Scale</h1>
        <p style={sectionDesc}>Base unit: 4px. All values are multiples of 4. Used for padding, gap, margin.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {entries.map(([key, val]) => {
            const usages = {
              4:  'icon gap, tight inline padding',
              8:  'button icon gap, small padding',
              12: 'badge padding, small input padding',
              16: 'default padding, input y-padding',
              20: 'button x-padding, card gap',
              24: 'section inner padding',
              32: 'card padding, grid gap',
              40: 'section vertical gap',
              48: 'large section gap, hero padding',
              64: 'page section gap',
              80: 'hero section gap, large page breaks',
            };
            return (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 80, fontFamily: 'monospace', fontSize: 11, color: '#374151' }}>space-{key}</span>
                <span style={{ width: 36, fontFamily: 'Manrope, sans-serif', fontSize: 11, fontWeight: 700, color: '#007B85' }}>{val}px</span>
                <div style={{ width: val * 2, height: 24, background: '#007B85', borderRadius: 4, opacity: 0.85, flexShrink: 0 }} />
                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: 11, color: '#9CA3AF' }}>{usages[val]}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

// â”€â”€â”€ Border Radius â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const BorderRadius = {
  name: 'Border Radius',
  render: () => {
    const radiusEntries = [
      { name: 'sm',   value: 6,   usage: 'Tags, badges, small chips' },
      { name: 'md',   value: 8,   usage: 'Toggle pills, inputs' },
      { name: 'card', value: 10,  usage: 'Hero buttons, input boxes' },
      { name: 'lg',   value: 12,  usage: 'Cards, panels, modals' },
      { name: 'xl',   value: 16,  usage: 'Large cards, feature blocks' },
      { name: '2xl',  value: 20,  usage: 'Sheets, bottom panels' },
      { name: 'pill', value: 999, usage: 'CTA buttons, header buttons' },
    ];

    return (
      <div style={{ fontFamily: 'Manrope, sans-serif', padding: 32, maxWidth: 900 }}>
        <h1 style={sectionHead}>Border Radius Scale</h1>
        <p style={sectionDesc}>Consistent radius values for buttons, cards, inputs and UI elements.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {radiusEntries.map(r => (
            <div key={r.name} style={{ textAlign: 'center', width: 100 }}>
              <div style={{
                width: 72, height: 72, margin: '0 auto 10px',
                borderRadius: Math.min(r.value, 36),
                background: 'rgba(0,123,133,0.08)',
                border: '1.5px solid #007B85',
              }} />
              <span style={tokenLabel}>{r.name}</span>
              {mono(r.value === 999 ? '999px' : `${r.value}px`)}
              <span style={{ ...tokenMeta, marginTop: 4 }}>{r.usage}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// â”€â”€â”€ Shadows / Elevation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const Shadows = {
  name: 'Shadows & Elevation',
  render: () => (
    <div style={{ fontFamily: 'Manrope, sans-serif', padding: 32, maxWidth: 900 }}>
      <h1 style={sectionHead}>Shadows & Elevation</h1>
      <p style={sectionDesc}>10 shadow tokens from xs (barely lifted) to xl (overlay). Plus semantic shadows for buttons and focus rings.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
        {Object.entries(shadows).map(([name, value]) => (
          <div key={name} style={{ textAlign: 'center', width: 120 }}>
            <div style={{ width:80, height:80, margin:'0 auto 12px', borderRadius:12, background:'#FFFFFF', boxShadow: value }} />
            <span style={tokenLabel}>{name}</span>
            {mono(`shadow-${name}`)}
          </div>
        ))}
      </div>
      <div>
        <span style={{ ...tokenLabel, display:'block', marginBottom:16 }}>Usage Examples</span>
        <div style={{ display:'flex', gap:16, flexWrap:'wrap', alignItems:'flex-start' }}>
          {[
            { label:'Card (md)',    shadow: shadows.md,     bg:'#fff',     h:80,  color:'#9CA3AF', w:100 },
            { label:'Panel (lg)',   shadow: shadows.lg,     bg:'#fff',     h:100, color:'#9CA3AF', w:100 },
            { label:'CTA Button',  shadow: shadows.button,  bg:'#007B85',  h:48,  color:'#fff',    w:140 },
            { label:'Hero Button', shadow: shadows.hero,    bg:'#fff',     h:48,  color:'#007B85', w:150 },
            { label:'Focus Ring',  shadow: shadows.focus,   bg:'#fff',     h:48,  color:'#007B85', w:120, border:'1.5px solid #007B85' },
          ].map(({ label: l, shadow, bg, h, color, w, border }) => (
            <div key={l} style={{ width:w, height:h, borderRadius:10, background:bg, boxShadow:shadow, border,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:700, color }}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// â”€â”€â”€ Animation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const Animation = {
  name: 'Animation Tokens',
  render: () => (
    <div style={{ fontFamily: 'Manrope, sans-serif', padding: 32, maxWidth: 900 }}>
      <h1 style={sectionHead}>Animation Tokens</h1>
      <p style={sectionDesc}>Duration and easing tokens. Always use these instead of hardcoded values.</p>
      <h2 style={{ ...sectionHead, fontSize:13, marginBottom:4 }}>Durations</h2>
      <p style={sectionDesc}>From instant (100ms) micro-interactions to slower (800ms) hero animations.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:40 }}>
        {Object.entries(animation.duration).map(([name, value]) => {
          const uses = { instant:'Icon swap, opacity flicker', fast:'Button hover, colour transitions', normal:'Panel open, tooltip', slow:'Slide / page transitions', slower:'Hero animations' };
          return (
            <div key={name} style={{ display:'flex', alignItems:'center', gap:16 }}>
              <span style={{ width:72, fontFamily:'monospace', fontSize:11, color:'#374151' }}>{name}</span>
              <span style={{ width:52, fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:700, color:'#007B85' }}>{value}</span>
              <div style={{ width: parseInt(value)/3, height:20, background:'#007B85', borderRadius:4, opacity:0.75, flexShrink:0 }} />
              <span style={{ fontFamily:'Manrope,sans-serif', fontSize:11, color:'#9CA3AF' }}>{uses[name]}</span>
            </div>
          );
        })}
      </div>
      <h2 style={{ ...sectionHead, fontSize:13, marginBottom:4 }}>Easing Curves</h2>
      <p style={sectionDesc}>Material-style easing for consistent motion feel across the product.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {Object.entries(animation.easing).map(([name, value]) => {
          const uses = { default:'Standard (most transitions)', in:'Entering elements', out:'Exiting elements', bounce:'Playful bounce (hero icons)' };
          return (
            <div key={name} style={{ display:'flex', alignItems:'center', gap:16, padding:'10px 14px', background:'#F9FAFB', borderRadius:8, border:'1px solid #E5E7EB' }}>
              <span style={{ width:72, fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:700, color:'#374151' }}>{name}</span>
              <code style={{ flex:1, fontFamily:'monospace', fontSize:10, color:'#007B85' }}>{value}</code>
              <span style={{ fontFamily:'Manrope,sans-serif', fontSize:11, color:'#9CA3AF' }}>{uses[name]}</span>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

// â”€â”€â”€ Z-Index & Breakpoints â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const LayeringAndBreakpoints = {
  name: 'Z-Index & Breakpoints',
  render: () => (
    <div style={{ fontFamily: 'Manrope, sans-serif', padding: 32, maxWidth: 900 }}>
      <h1 style={sectionHead}>Z-Index Scale</h1>
      <p style={sectionDesc}>8 z-index layers. Use tokens instead of magic numbers.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:48 }}>
        {Object.entries(zIndex).reverse().map(([name, value]) => {
          const uses = { max:'Always on top (dev tools)', toast:'Toast notifications', modal:'Modals, dialogs', panel:'Side panels, drawers', overlay:'Backdrop overlays', dropdown:'Dropdowns, tooltips', raised:'Cards, sticky elements', base:'Default stacking' };
          const pct  = Math.min((Math.log10(value + 1) / Math.log10(10000)) * 100, 100);
          return (
            <div key={name} style={{ display:'flex', alignItems:'center', gap:12 }}>
              <span style={{ width:80, fontFamily:'monospace', fontSize:11, color:'#374151' }}>{name}</span>
              <span style={{ width:44, fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:700, color:'#007B85' }}>{value}</span>
              <div style={{ width: Math.max(pct*4, 8), height:20, background:'#007B85', borderRadius:4, opacity:0.65, flexShrink:0 }} />
              <span style={{ fontFamily:'Manrope,sans-serif', fontSize:11, color:'#9CA3AF' }}>{uses[name]}</span>
            </div>
          );
        })}
      </div>
      <h1 style={sectionHead}>Breakpoints</h1>
      <p style={sectionDesc}>5 responsive breakpoints (Tailwind-compatible). Mobile-first approach.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {Object.entries(breakpoints).map(([name, value]) => {
          const uses = { sm:'Mobile landscape', md:'Tablet', lg:'Small desktop', xl:'Desktop', '2xl':'Wide desktop' };
          return (
            <div key={name} style={{ display:'flex', alignItems:'center', gap:12 }}>
              <span style={{ width:40, fontFamily:'monospace', fontSize:11, color:'#374151' }}>{name}</span>
              <span style={{ width:56, fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:700, color:'#007B85' }}>{value}px</span>
              <div style={{ width: value/6, height:24, background:'linear-gradient(90deg,#007B85,#0BB1BE)', borderRadius:4, opacity:0.7, flexShrink:0 }} />
              <span style={{ fontFamily:'Manrope,sans-serif', fontSize:11, color:'#9CA3AF' }}>{uses[name]}</span>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

