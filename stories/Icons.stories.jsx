import { useState } from 'react';
import { Icon, iconNames, iconPaths } from '@ctos/ui';

export default {
  title: 'CTOS Design System/Icons',
  component: Icon,
  tags: ['autodocs'],

  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon identifier',
      table: { category: 'Content' },
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      description: 'Width & height in px',
      table: { category: 'Appearance', defaultValue: { summary: 20 } },
    },
    color: {
      control: 'color',
      description: 'Stroke colour (any CSS colour string)',
      table: { category: 'Appearance', defaultValue: { summary: 'currentColor' } },
    },
    strokeWidth: {
      control: { type: 'range', min: 0.5, max: 4, step: 0.5 },
      description: 'SVG stroke-width — 2 is the design-system default',
      table: { category: 'Appearance', defaultValue: { summary: 2 } },
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'SVG line icons with 24×24 viewBox. Stroke-based — no fills. ' +
          'Pass `name`, `size`, `color` and optionally any SVG prop (`strokeWidth`, `className`, etc.).',
      },
    },
  },

  globals: {
    backgrounds: { value: 'white' },
  },
};

// ─── Shared styles ─────────────────────────────────────────────────────────────

const label   = { fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:600, color:'#9CA3AF',
                  marginTop:6, display:'block', textAlign:'center' };
const head    = { fontFamily:'Manrope,sans-serif', fontSize:18, fontWeight:700, color:'#111827', margin:'0 0 4px' };
const desc    = { fontFamily:'Manrope,sans-serif', fontSize:12, color:'#9CA3AF', margin:'0 0 28px' };
const divider = { border:'none', borderTop:'1px solid #E5E7EB', margin:'32px 0' };

// ─── Helper: build a copyable SVG string ───────────────────────────────────────

function buildSvg(name, size = 24, color = 'currentColor', strokeWidth = 2) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg"\n` +
    `     width="${size}" height="${size}" viewBox="0 0 24 24"\n` +
    `     fill="none" stroke="${color}"\n` +
    `     stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n` +
    `  <path d="${iconPaths[name]}" />\n` +
    `</svg>`
  );
}

// ─── Playground ────────────────────────────────────────────────────────────────
// Live controls — change name, size, colour and stroke-width in the Controls tab.

export const Playground = {
  name: 'Playground',
  args: {
    name:        'shield',
    size:        24,
    color:       '#007B85',
    strokeWidth: 2,
  },
};

// ─── All Icons ─────────────────────────────────────────────────────────────────
// Click any tile to copy its SVG source to the clipboard.

export const AllIcons = {
  name: 'All Icons',
  parameters: { controls: { disable: true } },
  render: () => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (name) => {
      navigator.clipboard.writeText(buildSvg(name)).then(() => {
        setCopied(name);
        setTimeout(() => setCopied(null), 1500);
      });
    };

    return (
      <div style={{ padding:32, maxWidth:900 }}>
        <h1 style={head}>Icon Set</h1>
        <p style={desc}>
          SVG line icons. All icons are 1.8–2.2px stroke, round caps. Use at 16×16, 20×20 or 24×24.
          <br />
          <span style={{ color:'#007B85' }}>Click any icon</span> to copy its SVG source code.
        </p>

        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {iconNames.map(name => {
            const isCopied = copied === name;
            return (
              <div
                key={name}
                onClick={() => handleCopy(name)}
                title={`Copy SVG for "${name}"`}
                style={{
                  width:88, padding:'16px 8px 12px', textAlign:'center',
                  background: isCopied ? '#ECFDF5' : '#F9FAFB',
                  borderRadius:10,
                  border: `1px solid ${isCopied ? '#6EE7B7' : '#E5E7EB'}`,
                  cursor:'pointer',
                  transition:'background 0.15s, border-color 0.15s',
                }}
              >
                <Icon name={name} size={24} color={isCopied ? '#059669' : '#007B85'} />
                <span style={{ ...label, color: isCopied ? '#059669' : '#9CA3AF' }}>
                  {isCopied ? '✓ Copied!' : name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

// ─── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes = {
  name: 'Sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding:32 }}>
      <h2 style={head}>Icon Sizes</h2>
      <p style={desc}>Recommended sizes: 16px (inline/label), 20px (default), 24px (feature icon).</p>
      <div style={{ display:'flex', gap:32, alignItems:'flex-end' }}>
        {[16, 20, 24, 32].map(size => (
          <div key={size} style={{ textAlign:'center' }}>
            <Icon name="shield" size={size} color="#007B85" />
            <span style={{ ...label, display:'block', marginTop:8 }}>{size}px</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─── On Coloured Backgrounds ───────────────────────────────────────────────────

export const OnColours = {
  name: 'On Coloured Backgrounds',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding:32, display:'flex', gap:16, flexWrap:'wrap' }}>
      {[
        { bg:'#007B85',              color:'#FFFFFF', label:'On Teal' },
        { bg:'rgba(0,123,133,0.08)', color:'#007B85', label:'Teal Tint' },
        { bg:'#F9FAFB',              color:'#374151', label:'Light bg' },
        { bg:'#111827',              color:'#FFFFFF', label:'Dark bg' },
        { bg:'rgba(241,93,34,0.10)', color:'#F15D22', label:'Orange Tint' },
      ].map(({ bg, color, label: l }) => (
        <div key={l} style={{
          width:80, height:80, borderRadius:12, background:bg,
          display:'flex', flexDirection:'column', alignItems:'center',
          justifyContent:'center', gap:6,
        }}>
          <Icon name="score" size={24} color={color} />
          <span style={{ fontFamily:'Manrope,sans-serif', fontSize:9, fontWeight:700, color, opacity:0.7 }}>{l}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── SVG Code ──────────────────────────────────────────────────────────────────
// Browse and copy the raw SVG markup for any icon.

export const SvgCode = {
  name: 'SVG Code',
  parameters: { controls: { disable: true } },
  render: () => {
    const [selected, setSelected] = useState('shield');
    const [copied, setCopied]     = useState(false);

    const svgString = buildSvg(selected);

    const handleCopy = () => {
      navigator.clipboard.writeText(svgString).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    };

    return (
      <div style={{ padding:32, maxWidth:880, fontFamily:'Manrope,sans-serif' }}>
        <h2 style={head}>SVG Code</h2>
        <p style={desc}>Select an icon below to view and copy its SVG markup.</p>

        {/* Icon picker */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:28 }}>
          {iconNames.map(name => (
            <div
              key={name}
              onClick={() => { setSelected(name); setCopied(false); }}
              title={name}
              style={{
                width:52, padding:'10px 4px 6px', textAlign:'center',
                background: selected === name ? '#EFF6FF' : '#F9FAFB',
                borderRadius:8,
                border: `1px solid ${selected === name ? '#93C5FD' : '#E5E7EB'}`,
                cursor:'pointer',
              }}
            >
              <Icon name={name} size={20} color={selected === name ? '#2563EB' : '#007B85'} />
              <span style={{ ...label, fontSize:9, color: selected === name ? '#2563EB' : '#9CA3AF' }}>{name}</span>
            </div>
          ))}
        </div>

        {/* Preview + code panel */}
        <div style={{
          display:'flex', gap:24, alignItems:'flex-start',
          background:'#F9FAFB', borderRadius:12, border:'1px solid #E5E7EB',
          padding:24,
        }}>
          {/* Preview */}
          <div style={{
            flexShrink:0, width:80, height:80, borderRadius:10,
            background:'#fff', border:'1px solid #E5E7EB',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <Icon name={selected} size={36} color="#007B85" />
          </div>

          {/* Code + copy */}
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#111827' }}>{selected}</span>
              <button
                onClick={handleCopy}
                style={{
                  padding:'6px 14px', fontSize:12, fontWeight:600,
                  borderRadius:6, cursor:'pointer', border:'none',
                  background: copied ? '#059669' : '#007B85',
                  color:'#fff', transition:'background 0.15s',
                }}
              >
                {copied ? '✓ Copied!' : 'Copy SVG'}
              </button>
            </div>
            <pre style={{
              margin:0, padding:'12px 14px',
              background:'#111827', color:'#86EFAC',
              borderRadius:8, fontSize:11, lineHeight:1.7,
              overflowX:'auto', whiteSpace:'pre',
              fontFamily:'\'Fira Code\', \'Cascadia Code\', Consolas, monospace',
            }}>
              {svgString}
            </pre>

            {/* React usage */}
            <div style={{ marginTop:14 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#9CA3AF', letterSpacing:'0.06em',
                            textTransform:'uppercase', marginBottom:6 }}>React</div>
              <pre style={{
                margin:0, padding:'10px 14px',
                background:'#1E293B', color:'#7DD3FC',
                borderRadius:8, fontSize:11, lineHeight:1.6,
                overflowX:'auto', whiteSpace:'pre',
                fontFamily:'\'Fira Code\', \'Cascadia Code\', Consolas, monospace',
              }}>
                {`<Icon name="${selected}" size={24} color="#007B85" />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// ─── Credit Report Icons ────────────────────────────────────────────────────────

export const CreditReportIcons = {
  name: 'Credit Report Icons',
  parameters: { controls: { disable: true } },
  render: () => {
    const items = [
      { icon:'score',     label:'CTOS Score',              desc:'Your credit score' },
      { icon:'ccris',     label:'CCRIS',                   desc:'Bank loan records' },
      { icon:'person',    label:'Personal Info',           desc:'Personal details' },
      { icon:'briefcase', label:'Business & Directorship', desc:'Company links' },
      { icon:'scales',    label:'Litigation',              desc:'Legal proceedings' },
      { icon:'document',  label:'Non-Banking',             desc:'Telco, utilities' },
    ];
    return (
      <div style={{ padding:32, maxWidth:700 }}>
        <h2 style={head}>Credit Report Panel Icons</h2>
        <p style={desc}>Icons used in the "What's Inside" section of the Credit Report checkout panel.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
          {items.map(item => (
            <div key={item.icon} style={{
              display:'flex', alignItems:'center', gap:12,
              padding:'14px 16px', background:'#F9FAFB',
              borderRadius:10, border:'1px solid #E5E7EB',
            }}>
              <div style={{
                width:36, height:36, borderRadius:8,
                background:'rgba(0,123,133,0.08)',
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              }}>
                <Icon name={item.icon} size={18} color="#007B85" />
              </div>
              <div>
                <div style={{ fontFamily:'Manrope,sans-serif', fontSize:12, fontWeight:700, color:'#111827' }}>{item.label}</div>
                <div style={{ fontFamily:'Manrope,sans-serif', fontSize:11, color:'#9CA3AF' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// ─── SecureID Feature Icons ─────────────────────────────────────────────────────

export const SecureIDIcons = {
  name: 'SecureID Feature Icons',
  parameters: { controls: { disable: true } },
  render: () => {
    const items = [
      { icon:'globe',          color:'#0bb1be', bg:'rgba(11,177,190,0.12)',  label:'Dark Web Monitoring', desc:'Globe — dark web scan' },
      { icon:'credit-monitor', color:'#0bb1be', bg:'rgba(11,177,190,0.12)',  label:'Credit Monitoring',   desc:'Card + trend — score tracking' },
      { icon:'umbrella',       color:'#0bb1be', bg:'rgba(0,123,133,0.12)',   label:'Takaful',             desc:'Umbrella — financial protection' },
      { icon:'score',          color:'#f15d22', bg:'rgba(241,93,34,0.12)',   label:'MyCTOS Score ×4',     desc:'Gauge — free score reports' },
    ];
    return (
      <div style={{ padding:32, maxWidth:700 }}>
        <h2 style={head}>SecureID Feature Icons</h2>
        <p style={desc}>Icons used in the SecureID features grid. Each icon uses the product's brand color.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12 }}>
          {items.map(item => (
            <div key={item.icon} style={{
              display:'flex', alignItems:'center', gap:12,
              padding:'14px 16px', background:'#F4F8F6',
              borderRadius:10, border:'1px solid #E5E7EB',
            }}>
              <div style={{
                width:48, height:48, borderRadius:8,
                background: item.bg,
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              }}>
                <Icon name={item.icon} size={24} color={item.color} />
              </div>
              <div>
                <div style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, color:'#303434' }}>{item.label}</div>
                <div style={{ fontFamily:'Manrope,sans-serif', fontSize:11, color:'#9CA3AF' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// ─── Mega Menu Icons ────────────────────────────────────────────────────────────

const mmGroups = [
  {
    label: 'Consumer',
    color: '#007B85',
    bg: 'rgba(0,123,133,0.10)',
    items: [
      { icon:'mm-credit-report',  label:'Credit Report',  desc:'Personal credit report' },
      { icon:'mm-secureid',       label:'SecureID',        desc:'Identity protection' },
      { icon:'mm-credit-finder',  label:'Credit Finder',   desc:'Credit product search' },
    ],
  },
  {
    label: 'Commercial',
    color: '#055157',
    bg: 'rgba(5,81,87,0.10)',
    items: [
      { icon:'mm-credit-manager', label:'Credit Manager',         desc:'Business credit portfolio' },
      { icon:'mm-single-report',  label:'Single Report',          desc:'One-off company report' },
      { icon:'mm-biz-secure',     label:'CTOS BizSecure',          desc:'Device & identity security' },
      { icon:'mm-creditscan',     label:'CreditSCAN Quick Score',  desc:'Instant business risk score' },
      { icon:'mm-verified',       label:'CTOS Verified',           desc:'Business certification badge' },
      { icon:'mm-business-loan',  label:'Business Loan',           desc:'SME financing eligibility' },
    ],
  },
  {
    label: 'Corporate & FI',
    color: '#0BB1BE',
    bg: 'rgba(11,177,190,0.10)',
    items: [
      { icon:'mm-ekyc',        label:'CTOS eKYC',                    desc:'Digital identity verification' },
      { icon:'mm-decisioning', label:'Application & Decisioning',    desc:'Workflow automation' },
      { icon:'mm-ram-rating',  label:'RAM Rating Rationale Report',  desc:'Credit rating report' },
    ],
  },
  {
    label: 'International',
    color: '#374151',
    bg: 'rgba(55,65,81,0.08)',
    items: [
      { icon:'mm-singapore',    label:'Singapore Report',    desc:'SG company credit profile' },
      { icon:'mm-international',label:'International Report', desc:'Cross-border due diligence' },
    ],
  },
];

export const MegaMenuIcons = {
  name: 'Mega Menu Icons',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding:32, maxWidth:900 }}>
      <h1 style={head}>Mega Menu Product Icons</h1>
      <p style={desc}>
        14 inline SVG line icons used in the header mega-menu navigation sidebar.
        One icon per product, organised by menu tab. strokeWidth 2, round caps, 24×24 viewBox.
      </p>

      {mmGroups.map(group => (
        <div key={group.label} style={{ marginBottom:36 }}>
          <hr style={divider} />
          <h3 style={{ fontFamily:'Poppins,sans-serif', fontSize:13, fontWeight:700,
                       color:'#374151', letterSpacing:'0.06em', textTransform:'uppercase',
                       margin:'0 0 16px' }}>
            {group.label}
          </h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {group.items.map(item => (
              <div key={item.icon} style={{
                width:110, padding:'14px 8px 10px', textAlign:'center',
                background:'#F9FAFB', borderRadius:10, border:'1px solid #E5E7EB',
              }}>
                <div style={{
                  width:44, height:44, borderRadius:10, background: group.bg,
                  display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 8px',
                }}>
                  <Icon name={item.icon} size={22} color={group.color} />
                </div>
                <span style={{ ...label, color:'#374151', fontWeight:700 }}>{item.label}</span>
                <span style={{ ...label, color:'#9CA3AF', fontWeight:400, fontSize:10, marginTop:2 }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <hr style={divider} />
      <h3 style={{ fontFamily:'Poppins,sans-serif', fontSize:13, fontWeight:700,
                   color:'#374151', letterSpacing:'0.06em', textTransform:'uppercase',
                   margin:'0 0 16px' }}>
        All Mega Menu Icons — flat grid
      </h3>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {mmGroups.flatMap(g => g.items).map(item => (
          <div key={item.icon} style={{
            width:88, padding:'14px 8px 10px', textAlign:'center',
            background:'#F9FAFB', borderRadius:10, border:'1px solid #E5E7EB',
          }}>
            <Icon name={item.icon} size={24} color="#007B85" />
            <span style={label}>{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
