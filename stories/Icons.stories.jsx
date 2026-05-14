import { Icon, iconNames } from '@ctos/ui';

export default {
  title: 'CTOS Design System/Icons',
  parameters: {
    controls: { hideNoControlsWarning: true },
    backgrounds: { default: 'white' },
  },
};

const label = { fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:600, color:'#9CA3AF',
                marginTop:6, display:'block', textAlign:'center' };
const head  = { fontFamily:'Manrope,sans-serif', fontSize:18, fontWeight:700, color:'#111827', margin:'0 0 4px' };
const desc  = { fontFamily:'Manrope,sans-serif', fontSize:12, color:'#9CA3AF', margin:'0 0 28px' };
const divider = { border:'none', borderTop:'1px solid #E5E7EB', margin:'32px 0' };

// All icons grid
export const AllIcons = {
  name: 'All Icons',
  render: () => (
    <div style={{ padding:32, maxWidth:900 }}>
      <h1 style={head}>Icon Set</h1>
      <p style={desc}>SVG line icons. All icons are 1.8–2.2px stroke, round caps. Use at 16×16, 20×20 or 24×24.</p>

      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {iconNames.map(name => (
          <div key={name} style={{
            width:88, padding:'16px 8px 12px', textAlign:'center',
            background:'#F9FAFB', borderRadius:10,
            border:'1px solid #E5E7EB',
          }}>
            <Icon name={name} size={24} color="#007B85" />
            <span style={label}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Sizes
export const Sizes = {
  name: 'Sizes',
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

// On coloured backgrounds
export const OnColours = {
  name: 'On Coloured Backgrounds',
  render: () => (
    <div style={{ padding:32, display:'flex', gap:16, flexWrap:'wrap' }}>
      {[
        { bg:'#007B85', color:'#FFFFFF', label:'On Teal' },
        { bg:'rgba(0,123,133,0.08)', color:'#007B85', label:'Teal Tint' },
        { bg:'#F9FAFB', color:'#374151', label:'Light bg' },
        { bg:'#111827', color:'#FFFFFF', label:'Dark bg' },
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

// CreditReport icons in context
export const CreditReportIcons = {
  name: 'Credit Report Icons',
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

// SecureID feature icons in context
export const SecureIDIcons = {
  name: 'SecureID Feature Icons',
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

