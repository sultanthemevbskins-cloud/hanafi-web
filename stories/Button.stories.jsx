import { Button } from '@ctos/ui';

export default {
  title: 'CTOS Design System/Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['hero', 'cta', 'header', 'link'] },
    state:   { control: 'radio', options: ['default', 'hover', 'active', 'focus', 'disabled'] },
    size:    { control: 'radio', options: ['sm', 'md', 'lg'] },
    label:   { control: 'text' },
    onClick: { action: 'clicked' },
  },
  globals: {
    backgrounds: { value: 'light' },
  },
};

const sectionStyle    = { display: 'flex', flexDirection: 'column', gap: 32, fontFamily: 'Manrope, sans-serif' };
const rowStyle        = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };
const labelStyle      = { fontSize: 11, fontWeight: 700, fontFamily: 'Manrope, sans-serif', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 };
const sectionHeadStyle = { fontSize: 13, fontWeight: 700, fontFamily: 'Manrope, sans-serif', color: '#374151', marginBottom: 4, marginTop: 0 };
const descStyle       = { fontSize: 11, fontFamily: 'Manrope, sans-serif', color: '#9CA3AF', marginBottom: 16, marginTop: 0 };

const STATES = ['default', 'hover', 'active', 'focus', 'disabled'];

// =============================================================================
// PLAYGROUND — primary story (appears as hero canvas on Docs page)
// =============================================================================
export const Playground = {
  args: { label: 'Get Free Report', variant: 'hero', state: 'default', size: 'md' },
};

// =============================================================================
// ALL VARIANTS OVERVIEW — Docs-only (hidden from sidebar)
// =============================================================================
export const AllVariants = {
  name: 'All Variants Overview',
  tags: ['!dev'],
  render: () => (
    <div style={{ ...sectionStyle, padding: 32 }}>
      {/* Hero */}
      <div style={{ background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)', padding: '32px 24px', borderRadius: 12 }}>
        <p style={{ ...sectionHeadStyle, color: '#fff', opacity: 0.6, marginBottom: 16 }}>HERO SLIDE BUTTON - Poppins SemiBold · White bg · Radius 10px</p>
        <div style={rowStyle}>
          {STATES.map(s => <Button key={s} label="Get Free Report" variant="hero" state={s} />)}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#F9FAFB', padding: '24px', borderRadius: 12 }}>
        <p style={{ ...sectionHeadStyle, marginBottom: 16 }}>PRIMARY CTA BUTTON - Poppins ExtraBold · Teal · Pill</p>
        <div style={rowStyle}>
          {STATES.map(s => <Button key={s} label="Get it now" variant="cta" state={s} />)}
        </div>
      </div>

      {/* Header */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', padding: '24px', borderRadius: 12 }}>
        <p style={{ ...sectionHeadStyle, marginBottom: 16 }}>HEADER SIGN-IN BUTTON - Poppins Bold · Dark gradient · Pill</p>
        <div style={rowStyle}>
          {STATES.map(s => <Button key={s} label="Sign in" variant="header" state={s} />)}
        </div>
      </div>

      {/* Link */}
      <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', padding: '24px', borderRadius: 12 }}>
        <p style={{ ...sectionHeadStyle, marginBottom: 16 }}>LINK BUTTON - Manrope Bold · Teal to Orange · No bg</p>
        <div style={rowStyle}>
          {['default', 'hover', 'active', 'disabled'].map(s => (
            <Button key={s} label="Learn More" variant="link" state={s} />
          ))}
        </div>
      </div>
    </div>
  ),
};

// =============================================================================
// SIZE SCALE — Docs-only (hidden from sidebar)
// =============================================================================
export const Sizes = {
  name: 'Size Scale',
  tags: ['!dev'],
  render: () => (
    <div style={sectionStyle}>
      {['hero', 'cta', 'header'].map(variant => (
        <div key={variant}>
          <p style={labelStyle}>{variant}</p>
          <div style={{ ...rowStyle, alignItems: 'flex-end' }}>
            {['sm', 'md', 'lg'].map(size => (
              <div key={size} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 10, color: '#9CA3AF', marginBottom: 6, fontFamily: 'Manrope,sans-serif' }}>{size}</div>
                <Button label="Button" variant={variant} state="default" size={size} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// =============================================================================
// HERO BUTTON
// =============================================================================
export const HeroDefault  = { args: { label: 'Get Free Report', variant: 'hero', state: 'default',  size: 'md' } };
export const HeroHover    = { args: { label: 'Get Free Report', variant: 'hero', state: 'hover',    size: 'md' } };
export const HeroActive   = { args: { label: 'Get Free Report', variant: 'hero', state: 'active',   size: 'md' } };
export const HeroFocus    = { args: { label: 'Get Free Report', variant: 'hero', state: 'focus',    size: 'md' } };
export const HeroDisabled = { args: { label: 'Get Free Report', variant: 'hero', state: 'disabled', size: 'md' } };

export const HeroAllStates = {
  name: 'Hero - All States',
  render: () => (
    <div style={{ padding: 32, background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)', borderRadius: 12, minHeight: 120, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      {STATES.map(state => (
        <div key={state} style={{ textAlign: 'center' }}>
          <div style={{ ...labelStyle, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>{state}</div>
          <Button label="Get Free Report" variant="hero" state={state} size="md" />
        </div>
      ))}
    </div>
  ),
  globals: { backgrounds: { value: 'teal' } },
};

// =============================================================================
// PRIMARY CTA BUTTON
// =============================================================================
export const CtaDefault  = { args: { label: 'Get it now', variant: 'cta', state: 'default',  size: 'md' } };
export const CtaHover    = { args: { label: 'Get it now', variant: 'cta', state: 'hover',    size: 'md' } };
export const CtaActive   = { args: { label: 'Get it now', variant: 'cta', state: 'active',   size: 'md' } };
export const CtaFocus    = { args: { label: 'Get it now', variant: 'cta', state: 'focus',    size: 'md' } };
export const CtaDisabled = { args: { label: 'Get it now', variant: 'cta', state: 'disabled', size: 'md' } };

export const CtaAllStates = {
  name: 'CTA - All States',
  render: () => (
    <div style={sectionStyle}>
      <div>
        <p style={sectionHeadStyle}>Primary CTA Button</p>
        <p style={descStyle}>Teal fill · White text · Pill · Poppins ExtraBold · Used in pricing cards & CTAs</p>
        <div style={rowStyle}>
          {STATES.map(state => (
            <div key={state} style={{ textAlign: 'center' }}>
              <div style={labelStyle}>{state}</div>
              <Button label="Get it now" variant="cta" state={state} size="md" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={labelStyle}>Label Variants (Default)</div>
        <div style={rowStyle}>
          {['Get it now', 'Subscribe now', 'Sign up now', 'Get Credit Report'].map(l => (
            <Button key={l} label={l} variant="cta" state="default" size="md" />
          ))}
        </div>
      </div>
    </div>
  ),
};

// =============================================================================
// HEADER BUTTON
// =============================================================================
export const HeaderDefault  = { args: { label: 'Sign in', variant: 'header', state: 'default',  size: 'md' } };
export const HeaderHover    = { args: { label: 'Sign in', variant: 'header', state: 'hover',    size: 'md' } };
export const HeaderActive   = { args: { label: 'Sign in', variant: 'header', state: 'active',   size: 'md' } };
export const HeaderFocus    = { args: { label: 'Sign in', variant: 'header', state: 'focus',    size: 'md' } };
export const HeaderDisabled = { args: { label: 'Sign in', variant: 'header', state: 'disabled', size: 'md' } };

export const HeaderAllStates = {
  name: 'Header - All States',
  render: () => (
    <div style={{ padding: 24, background: '#FFFFFF', borderRadius: 12 }}>
      <p style={sectionHeadStyle}>Header Sign-In Button</p>
      <p style={descStyle}>Dark gradient fill · Pill · Poppins Bold 13px · Used in site header</p>
      <div style={rowStyle}>
        {STATES.map(state => (
          <div key={state} style={{ textAlign: 'center' }}>
            <div style={labelStyle}>{state}</div>
            <Button label="Sign in" variant="header" state={state} size="md" />
          </div>
        ))}
      </div>
    </div>
  ),
};

// =============================================================================
// LINK BUTTON
// =============================================================================
export const LinkDefault  = { args: { label: 'Learn More', variant: 'link', state: 'default',  size: 'md' } };
export const LinkHover    = { args: { label: 'Learn More', variant: 'link', state: 'hover',    size: 'md' } };
export const LinkActive   = { args: { label: 'Learn More', variant: 'link', state: 'active',   size: 'md' } };
export const LinkDisabled = { args: { label: 'Learn More', variant: 'link', state: 'disabled', size: 'md' } };

export const LinkAllStates = {
  name: 'Link - All States',
  render: () => (
    <div style={sectionStyle}>
      <div>
        <p style={sectionHeadStyle}>Link Button</p>
        <p style={descStyle}>No background · Teal (#007B85) default · Orange (#F15D22) on hover/active · Poppins Bold 14px</p>
        <div style={rowStyle}>
          {['default', 'hover', 'active', 'disabled'].map(state => (
            <div key={state} style={{ textAlign: 'center' }}>
              <div style={labelStyle}>{state}</div>
              <Button label="Learn More" variant="link" state={state} size="md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
