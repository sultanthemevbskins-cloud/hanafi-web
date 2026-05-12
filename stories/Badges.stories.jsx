import { Badge } from '@ctos/ui';

export default {
  title: 'CTOS Design System/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['primary','accent','neutral','success','warning','error','dark'] },
    size:    { control: 'radio', options: ['sm', 'md'] },
    dot:     { control: 'boolean' },
    label:   { control: 'text' },
  },
  parameters: { backgrounds: { default: 'white' } },
};

const row  = { display:'flex', flexWrap:'wrap', gap:10, alignItems:'center' };
const col  = { display:'flex', flexDirection:'column', gap:16, padding:24 };
const head = { fontFamily:'Manrope,sans-serif', fontSize:11, fontWeight:700, color:'#9CA3AF',
               textTransform:'uppercase', letterSpacing:'0.8px', margin:'0 0 8px', display:'block' };

// Playground
export const Playground = {
  args: { label: 'Most Popular', variant: 'primary', size: 'md', dot: false },
};

// All Variants
export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={col}>
      <span style={head}>Medium</span>
      <div style={row}>
        <Badge label="Primary"  variant="primary"  />
        <Badge label="Accent"   variant="accent"   />
        <Badge label="Neutral"  variant="neutral"  />
        <Badge label="Success"  variant="success"  />
        <Badge label="Warning"  variant="warning"  />
        <Badge label="Error"    variant="error"    />
      </div>
      <span style={head}>Small</span>
      <div style={row}>
        <Badge label="Primary"  variant="primary"  size="sm" />
        <Badge label="Accent"   variant="accent"   size="sm" />
        <Badge label="Neutral"  variant="neutral"  size="sm" />
        <Badge label="Success"  variant="success"  size="sm" />
        <Badge label="Warning"  variant="warning"  size="sm" />
        <Badge label="Error"    variant="error"    size="sm" />
      </div>
      <span style={head}>With Dot</span>
      <div style={row}>
        <Badge label="Active"   variant="success" dot />
        <Badge label="Pending"  variant="warning" dot />
        <Badge label="Failed"   variant="error"   dot />
        <Badge label="Inactive" variant="neutral" dot />
      </div>
    </div>
  ),
};

// On dark/teal background
export const OnDarkBackground = {
  name: 'On Teal Background',
  parameters: { backgrounds: { default: 'teal' } },
  render: () => (
    <div style={{ padding:32, background:'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)', borderRadius:12 }}>
      <span style={{ ...head, color:'rgba(255,255,255,0.5)' }}>Dark variant (for teal backgrounds)</span>
      <div style={row}>
        <Badge label="Most Popular"     variant="dark" />
        <Badge label="New"              variant="dark" dot />
        <Badge label="From RM 9.90/mo"  variant="dark" />
      </div>
    </div>
  ),
};

// Real-world usage
export const RealWorldUsage = {
  name: 'Usage Examples',
  render: () => (
    <div style={col}>
      <div>
        <span style={head}>Pricing card labels</span>
        <div style={row}>
          <Badge label="Most Popular"  variant="primary" />
          <Badge label="Best Value"    variant="accent"  />
          <Badge label="New"           variant="accent"  dot />
        </div>
      </div>
      <div>
        <span style={head}>Report status</span>
        <div style={row}>
          <Badge label="Score Updated"   variant="success" dot />
          <Badge label="Alert Triggered" variant="error"   dot />
          <Badge label="Pending Review"  variant="warning" dot />
          <Badge label="No Activity"     variant="neutral" dot />
        </div>
      </div>
      <div>
        <span style={head}>Plan tags</span>
        <div style={row}>
          <Badge label="Monthly"    variant="neutral" size="sm" />
          <Badge label="Yearly"     variant="primary" size="sm" />
          <Badge label="Enterprise" variant="neutral" size="sm" />
          <Badge label="Free Trial" variant="accent"  size="sm" />
        </div>
      </div>
      <div>
        <span style={head}>Credit score indicators</span>
        <div style={row}>
          <Badge label="Excellent"  variant="success" />
          <Badge label="Good"       variant="primary" />
          <Badge label="Fair"       variant="warning" />
          <Badge label="Poor"       variant="error"   />
        </div>
      </div>
    </div>
  ),
};

