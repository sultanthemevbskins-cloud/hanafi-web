export default {
  title: 'CTOS Design System/Typography',

  parameters: {
    controls: { hideNoControlsWarning: true }
  },

  globals: {
    backgrounds: {
      value: "white"
    }
  }
};

const P  = 'Poppins, sans-serif';
const L  = 'Lato, sans-serif';

const lbl  = { fontFamily: P, fontSize: 11, fontWeight: 600, color: '#007B85', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 6, display: 'block' };
const meta = { fontFamily: P, fontSize: 11, color: '#9CA3AF', marginTop: 4, display: 'block' };
const hr   = { border: 'none', borderTop: '1px solid #E5E7EB', margin: '32px 0' };

// ─── Type Scale ──────────────────────────────────────────────────────────────
export const TypeScale = {
  name: 'Type Scale',
  render: () => (
    <div style={{ fontFamily: P, maxWidth: 860, padding: 32 }}>
      <h1 style={{ fontFamily: P, fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Typography System</h1>
      <p style={{ fontFamily: P, fontSize: 14, color: '#9CA3AF', marginBottom: 40 }}>
        Two font families — <strong>Poppins</strong> (primary, all UI) and <strong>Lato</strong> (card body descriptions only). Hierarchy is expressed through weight and size.
      </p>

      {/* Hero Display */}
      <span style={lbl}>Hero Display</span>
      <div style={{ background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)', borderRadius: 10, padding: '28px 32px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 700, fontSize: 40, color: '#fff', lineHeight: 1.2, display: 'block' }}>
          Monitor Your Credit,<br />Protect Your Identity
        </span>
      </div>
      <span style={meta}>Poppins Bold · 40px · lh 120% · Hero carousel slides</span>
      <hr style={hr} />

      {/* Hero Sub */}
      <span style={lbl}>Hero Subheading</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 400, fontSize: 16, color: '#374151', lineHeight: 1.6, display: 'block' }}>
          Stay ahead with real-time credit monitoring and instant identity alerts.
        </span>
      </div>
      <span style={meta}>Poppins Regular · 16px · lh 160% · Supporting text in hero slides</span>
      <hr style={hr} />

      {/* Section Title */}
      <span style={lbl}>Section Title (H2)</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 700, fontSize: 28, color: '#111827', lineHeight: 1.3, display: 'block' }}>
          Choose Your Plan
        </span>
      </div>
      <span style={meta}>Poppins Bold · 28px · lh 130% · Main section headings (Pricing, Features…)</span>
      <hr style={hr} />

      {/* Card Title */}
      <span style={lbl}>Card Title (H3)</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 600, fontSize: 18, color: '#111827', lineHeight: 1.3, display: 'block' }}>
          SecureID Protection
        </span>
      </div>
      <span style={meta}>Poppins SemiBold · 18px · lh 130% · Card headings, panel titles, pricing plan names</span>
      <hr style={hr} />

      {/* Card Subtitle */}
      <span style={lbl}>Card Subtitle / Price</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 500, fontSize: 15, color: '#374151', lineHeight: 1.4, display: 'block' }}>
          RM 28.90 / month
        </span>
      </div>
      <span style={meta}>Poppins Medium · 15px · lh 140% · Pricing figures, feature list titles</span>
      <hr style={hr} />

      {/* Body */}
      <span style={lbl}>Body / Content</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 400, fontSize: 14, color: '#374151', lineHeight: 1.7, display: 'block' }}>
          Get access to your full CTOS credit report, score, and real-time alerts to stay on top of your financial health and protect yourself from identity theft.
        </span>
      </div>
      <span style={meta}>Poppins Regular · 14px · lh 170% · Paragraphs, card descriptions, FAQ answers</span>
      <hr style={hr} />

      {/* Body Emphasis */}
      <span style={lbl}>Body Emphasis</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 600, fontSize: 14, color: '#111827', lineHeight: 1.7, display: 'block' }}>
          Your credit score is updated monthly.
        </span>
      </div>
      <span style={meta}>Poppins SemiBold · 14px · lh 170% · Highlighted body text, feature bullets</span>
      <hr style={hr} />

      {/* Small Description */}
      <span style={lbl}>Small Description</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 400, fontSize: 12, color: '#6B7280', lineHeight: 1.6, display: 'block' }}>
          Billed annually. Cancel any time. No hidden fees.
        </span>
      </div>
      <span style={meta}>Poppins Regular · 12px · lh 160% · Helper text, disclaimers, form hints</span>
      <hr style={hr} />

      {/* Label */}
      <span style={lbl}>Label / Tag</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 600, fontSize: 11, color: '#007B85', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block' }}>
          MOST POPULAR  ·  FROM RM 9.90/MO
        </span>
      </div>
      <span style={meta}>Poppins SemiBold · 11px · ls 0.8px · Badges, tags, section labels, status chips</span>
      <hr style={hr} />

      {/* Caption */}
      <span style={lbl}>Micro / Caption</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: P, fontWeight: 400, fontSize: 10, color: '#9CA3AF', lineHeight: 1.5, display: 'block' }}>
          Last updated: 11 May 2025 · Source: CTOS Data Systems Sdn Bhd
        </span>
      </div>
      <span style={meta}>Poppins Regular · 10px · lh 150% · Timestamps, footnotes, data source labels</span>
      <hr style={hr} />

      {/* Lato — Card Description */}
      <span style={lbl}>Card Description (Lato)</span>
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '20px 24px', marginBottom: 8 }}>
        <span style={{ fontFamily: L, fontWeight: 400, fontSize: 13, color: '#374151', lineHeight: 1.54, display: 'block' }}>
          Check your CTOS Score, monitor identity theft, compare matched loans, and dispute errors on your credit record.
        </span>
      </div>
      <span style={meta}>Lato Regular · 13px · lh 154% · Card body descriptions in Market Segments section only</span>
    </div>
  ),
};

// ─── Weight Scale ─────────────────────────────────────────────────────────────
export const WeightScale = {
  name: 'Weight Scale',
  render: () => (
    <div style={{ fontFamily: P, maxWidth: 700, padding: 32 }}>
      <h1 style={{ fontFamily: P, fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 4 }}>Poppins Weight Scale</h1>
      <p style={{ fontFamily: P, fontSize: 14, color: '#9CA3AF', marginBottom: 40 }}>
        All hierarchy is expressed through weight. Use the minimum weight needed — never jump more than one step.
      </p>

      {[
        { weight: 400, name: 'Regular',  use: 'Body, descriptions, captions, placeholders' },
        { weight: 500, name: 'Medium',   use: 'Card subtitles, secondary labels, price' },
        { weight: 600, name: 'SemiBold', use: 'Card titles, body emphasis, labels, tags' },
        { weight: 700, name: 'Bold',     use: 'Section headings, hero subheadings' },
        { weight: 800, name: 'ExtraBold',use: 'Reserved — use Bold instead' },
      ].map(w => (
        <div key={w.weight} style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '14px 0', borderBottom: '1px solid #F3F4F6' }}>
          <span style={{ fontFamily: P, fontSize: 28, fontWeight: w.weight, color: w.weight === 800 ? '#D1D5DB' : '#111827', width: 260, flexShrink: 0 }}>
            {w.weight} {w.name}
          </span>
          <span style={{ fontFamily: P, fontSize: 11, color: w.weight === 800 ? '#D1D5DB' : '#9CA3AF' }}>{w.use}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Font Family Cards ────────────────────────────────────────────────────────
export const FontFamily = {
  name: 'Font Families',
  render: () => (
    <div style={{ fontFamily: P, padding: 32, maxWidth: 1060, display: 'flex', gap: 24, flexWrap: 'wrap' }}>

      {/* Poppins card */}
      <div style={{ flex: '1 1 440px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ height: 4, background: '#007B85' }} />
        <div style={{ padding: 28 }}>
          <p style={{ fontFamily: P, fontSize: 40, fontWeight: 700, color: '#007B85', margin: '0 0 8px', lineHeight: 1 }}>Poppins</p>
          <p style={{ fontFamily: P, fontSize: 13, fontWeight: 500, color: '#374151', margin: '0 0 4px' }}>Primary typeface · All UI roles</p>
          <p style={{ fontFamily: P, fontSize: 11, color: '#9CA3AF', margin: '0 0 20px' }}>Regular · Medium · SemiBold · Bold · ExtraBold</p>
          <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '16px 0' }} />
          <p style={{ fontFamily: P, fontSize: 11, color: '#6B7280', margin: 0, lineHeight: 1.7 }}>
            Default font across the entire product. Used for all headings, labels, UI text, CTAs, and navigation. Hierarchy through weight and size only.
          </p>
        </div>
        <div style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', padding: '20px 28px' }}>
          {[
            { w: 700, label: 'Bold 700' },
            { w: 600, label: 'SemiBold 600' },
            { w: 500, label: 'Medium 500' },
            { w: 400, label: 'Regular 400' },
          ].map(({ w, label }) => (
            <div key={w} style={{ marginBottom: 10 }}>
              <span style={{ fontFamily: P, fontSize: 9, color: '#9CA3AF', display: 'block', marginBottom: 2 }}>{label}</span>
              <span style={{ fontFamily: P, fontSize: 16, fontWeight: w, color: '#111827', letterSpacing: '0.5px' }}>
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lato card */}
      <div style={{ flex: '1 1 440px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ height: 4, background: '#0BB1BE' }} />
        <div style={{ padding: 28 }}>
          <p style={{ fontFamily: L, fontSize: 40, fontWeight: 700, color: '#0BB1BE', margin: '0 0 8px', lineHeight: 1 }}>Lato</p>
          <p style={{ fontFamily: P, fontSize: 13, fontWeight: 500, color: '#374151', margin: '0 0 4px' }}>Secondary typeface · Card descriptions only</p>
          <p style={{ fontFamily: P, fontSize: 11, color: '#9CA3AF', margin: '0 0 20px' }}>Regular · Medium · SemiBold · Bold</p>
          <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '16px 0' }} />
          <p style={{ fontFamily: P, fontSize: 11, color: '#6B7280', margin: 0, lineHeight: 1.7 }}>
            Used exclusively for card body descriptions in the Market Segments (Trusted Intelligence) section. Adds warmth and approachability to segment card copy.
          </p>
        </div>
        <div style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', padding: '20px 28px' }}>
          {[
            { w: 700, label: 'Bold 700' },
            { w: 600, label: 'SemiBold 600' },
            { w: 500, label: 'Medium 500' },
            { w: 400, label: 'Regular 400' },
          ].map(({ w, label }) => (
            <div key={w} style={{ marginBottom: 10 }}>
              <span style={{ fontFamily: P, fontSize: 9, color: '#9CA3AF', display: 'block', marginBottom: 2 }}>{label}</span>
              <span style={{ fontFamily: L, fontSize: 16, fontWeight: w, color: '#111827', letterSpacing: '0.5px' }}>
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
};
