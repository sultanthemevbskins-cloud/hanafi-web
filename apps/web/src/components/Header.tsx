import { useState } from 'react'
import { Button } from '@ctos/ui'

const ctosLogo = 'https://www.figma.com/api/mcp/asset/08ce713a-5341-4b9e-83dc-7ed47d51dd8b'

// ── Shared type ──────────────────────────────────────────────────────────────
type Product = {
  name: string
  tagline: string
  desc: string
  color: string
  features: string[]
  cta: string
  ctaNote: string
  icon: React.ReactNode
}

// ── Consumer ─────────────────────────────────────────────────────────────────
const consumerProducts: Product[] = [
  {
    name: 'Credit Report',
    tagline: 'Your full credit picture in one place.',
    desc: 'Get your CTOS Score plus CCRIS records from Bank Negara. See exactly what lenders see.',
    color: '#0bb1be',
    features: [
      'CTOS Score with full breakdown',
      'CCRIS records from Bank Negara Malaysia',
      'Litigation & bankruptcy history',
      'Business directorship & SSM data',
    ],
    cta: 'Learn More',
    ctaNote: 'RM27.90 / report',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="2" width="14" height="16" rx="2" /><path d="M7 7h6M7 10h6M7 13h4" />
      </svg>
    ),
  },
  {
    name: 'SecureID',
    tagline: '24/7 identity protection, always on.',
    desc: 'Real-time credit monitoring, dark web scanning, and Takaful fraud coverage, one plan watches everything.',
    color: '#007b85',
    features: [
      'Real-time credit monitoring alerts',
      'Dark web & data breach scanning',
      '4 MyCTOS Score reports yearly',
      'Takaful fraud coverage up to RM20,000',
    ],
    cta: 'Learn More',
    ctaNote: 'From RM9.90 / month',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L3 5v5c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V5l-7-3Z" /><path d="M7 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Credit Finder',
    tagline: 'Match to the best loan for your profile.',
    desc: 'Compare personalised loan and credit card offers from 50+ banks, matched to your credit score in seconds.',
    color: '#f2b530',
    features: [
      'Personalised loan & card matching',
      'Compare rates from 50+ banks',
      'Zero impact on your credit score',
      'Instant eligibility check',
    ],
    cta: 'Learn More',
    ctaNote: 'Free to use',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="9" cy="9" r="5.5" /><path d="M17 17l-3.5-3.5M7 9h4M9 7v4" />
      </svg>
    ),
  },
]

// ── Commercial ───────────────────────────────────────────────────────────────
const commercialProducts: Product[] = [
  {
    name: 'Credit Manager',
    tagline: "Malaysia's No.1 credit management solution.",
    desc: 'Evaluate, monitor, and manage business credit risk on one interactive platform. Powered by FICO scoring.',
    color: '#0bb1be',
    features: [
      'Comprehensive client credit reports',
      'Automated monitoring & profile alerts',
      'FICO-powered business credit scoring',
      'CTOS eTR electronic trade reference',
    ],
    cta: 'Learn More',
    ctaNote: 'Subscription plan',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="11" rx="1.5" />
        <path d="M6 10l2-3 2 2 2-3.5 2 2.5" />
        <path d="M6 17v-3M10 17v-3M14 17v-3" />
      </svg>
    ),
  },
  {
    name: 'Single Report',
    tagline: 'One-off business credit report, on demand.',
    desc: 'Buy a single comprehensive business credit report for any Malaysian company. No subscription required.',
    color: '#f15d22',
    features: [
      'SSM filings & company CCRIS data',
      'Litigation & bankruptcy records',
      'Directorship & ownership links',
      'Pay per report, no commitment',
    ],
    cta: 'Learn More',
    ctaNote: 'Pay per report',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h7l5 5v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M11 4v5h5M7 11h6M7 14h4" />
      </svg>
    ),
  },
  {
    name: 'CTOS BizSecure',
    tagline: '24/7 managed cybersecurity for SMEs.',
    desc: 'Always-on threat detection and rapid expert response, no in-house security team required.',
    color: '#007b85',
    features: [
      '24/7 monitoring & threat detection',
      'Expert-led rapid incident response',
      'Ransomware & data breach protection',
      'PDPA & Cyber Act 2024 compliant',
    ],
    cta: 'Learn More',
    ctaNote: 'From RM100 / device / month',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L3 5v5c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V5l-7-3Z" />
        <path d="M10 8v3.5M10 13.5h.01" />
      </svg>
    ),
  },
  {
    name: 'CreditSCAN Quick Score',
    tagline: 'Instant RAM-powered business risk score.',
    desc: 'Get a fast credit score for any Malaysian company. Instant risk grading backed by RAM Rating methodology.',
    color: '#6366f1',
    features: [
      'RAM-powered credit scoring model',
      'Instant company risk grade',
      'Credit limit recommendation',
      'Pay per report, no subscription',
    ],
    cta: 'Learn More',
    ctaNote: 'Pay per report',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5a7 7 0 0 1 14 0" />
        <path d="M5.8 15l1.4-1.4M14.2 15l-1.4-1.4M10 5v1.5" />
        <path d="M10 11.5l2.5-4" />
        <circle cx="10" cy="11.5" r="1.5" />
      </svg>
    ),
  },
  {
    name: 'CTOS Verified',
    tagline: 'Boost your company credibility with a trusted seal.',
    desc: 'Get the CTOS Verified seal to win instant customer trust, stand out from competitors, and close deals faster.',
    color: '#059669',
    features: [
      'Official CTOS Verified business seal',
      'Win trust & close deals faster',
      'Exclusive networking & training perks',
      'Up to RM7,828 in added value',
    ],
    cta: 'Get Verified',
    ctaNote: 'Business certification',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 1.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L10 12.2l-4.2 2.3.8-4.7-3.4-3.3 4.7-.7z" />
        <path d="M7 10.5l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Business Loan',
    tagline: 'Find the right financing for your business.',
    desc: 'Match your business profile against multiple loan options from banks and financiers across Malaysia.',
    color: '#f2b530',
    features: [
      'Compare rates & eligibility instantly',
      'SME & commercial financing options',
      'Free to search, no commitment',
    ],
    cta: 'Find a Loan',
    ctaNote: 'Free to use',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="5" width="18" height="11" rx="2" />
        <path d="M1 9h18" />
        <circle cx="10" cy="13" r="2" />
      </svg>
    ),
  },
]

// ── Corporate & FI ───────────────────────────────────────────────────────────
const corporateFIProducts: Product[] = [
  {
    name: 'CTOS eKYC',
    tagline: 'AI-enhanced digital identity verification.',
    desc: 'Verify customer identities remotely with 4-layer AI authentication. BNM sandbox-tested and fully compliant.',
    color: '#0bb1be',
    features: [
      'ID document & facial recognition',
      'Bureau file & knowledge-based checks',
      'AI hologram & liveness detection',
      'BNM-compliant digital onboarding',
    ],
    cta: 'Learn More',
    ctaNote: 'Enterprise',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="7" r="3.5" />
        <path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" />
        <path d="M14 3l1.5 1.5L18 2" />
      </svg>
    ),
  },
  {
    name: 'CTOS Application & Decisioning',
    tagline: 'Automate credit approvals, reduce manual work.',
    desc: 'Streamline credit application workflows with real-time bureau data and fully customisable decisioning rules.',
    color: '#6366f1',
    features: [
      'Automated credit decisioning engine',
      'Customisable rule-based scoring',
      'Real-time CTOS & CCRIS data pull',
      'Seamless API integration',
    ],
    cta: 'Learn More',
    ctaNote: 'Enterprise',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="6" height="4" rx="1" />
        <rect x="12" y="3" width="6" height="4" rx="1" />
        <rect x="7" y="13" width="6" height="4" rx="1" />
        <path d="M5 7v3h10V7M10 10v3" />
      </svg>
    ),
  },
  {
    name: 'RAM Rating Rationale Report',
    tagline: 'Official RAM credit ratings, fully explained.',
    desc: "Access RAM's rating rationale reports for publicly rated Malaysian entities, bonds, and sukuk.",
    color: '#f15d22',
    features: [
      'Official RAM credit rating reports',
      'Detailed rating rationale & outlook',
      'Sector & peer comparison data',
      'Timely updates on rating changes',
    ],
    cta: 'Learn More',
    ctaNote: 'Pay per report',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 1.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L10 12.2l-4.2 2.3.8-4.7-3.4-3.3 4.7-.7z" />
      </svg>
    ),
  },
]

// ── International ─────────────────────────────────────────────────────────────
const internationalProducts: Product[] = [
  {
    name: 'Singapore Report',
    tagline: 'Business credit reports for Singapore companies.',
    desc: 'Access comprehensive credit profiles for Singapore-registered companies via our ctosbasis.com/sg portal.',
    color: '#e53e3e',
    features: [
      'Singapore company UEN & ACRA data',
      'Financial health indicators',
      'Directorship & ownership records',
      'Cross-border due diligence',
    ],
    cta: 'Learn More',
    ctaNote: 'Pay per report',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M2 10h16" />
        <path d="M10 2a12.5 12.5 0 0 1 3 8 12.5 12.5 0 0 1-3 8 12.5 12.5 0 0 1-3-8 12.5 12.5 0 0 1 3-8z" />
      </svg>
    ),
  },
  {
    name: 'International Report',
    tagline: 'Credit reports on companies in 200+ countries.',
    desc: 'Know your international partners before you transact. Cross-border credit assessment for global due diligence.',
    color: '#6366f1',
    features: [
      '200+ countries covered',
      'Company financials & ownership data',
      'Trade reference & payment history',
      'AML & compliance screening',
    ],
    cta: 'Learn More',
    ctaNote: 'Pay per report',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M2 10h16" />
        <path d="M10 2a12.5 12.5 0 0 1 3 8 12.5 12.5 0 0 1-3 8 12.5 12.5 0 0 1-3-8 12.5 12.5 0 0 1 3-8z" />
        <path d="M10 6l1 1.5h2l-1.5 1 .5 2-2-1.5-2 1.5.5-2L7 7.5h2z" />
      </svg>
    ),
  },
]

// ── Section map ───────────────────────────────────────────────────────────────
const menuSections: Record<string, Product[]> = {
  Consumer:          consumerProducts,
  Commercial:        commercialProducts,
  'Corporate & FI':  corporateFIProducts,
  International:     internationalProducts,
}

const sectionNames = Object.keys(menuSections)

// ── Component ─────────────────────────────────────────────────────────────────
export default function Header({ onLogoClick, onSupportClick }: { onLogoClick?: () => void; onSupportClick?: () => void }) {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeMega, setActiveMega]   = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]   = useState<string | null>(null)
  const [activeIdx, setActiveIdx]     = useState<Record<string, number>>(
    Object.fromEntries(sectionNames.map(s => [s, 0]))
  )

  const setProductIdx = (section: string, i: number) =>
    setActiveIdx(prev => ({ ...prev, [section]: i }))

  // Shared mega menu panel renderer
  const MegaPanel = ({ section }: { section: string }) => {
    const products = menuSections[section]
    const idx      = activeIdx[section] ?? 0
    const active   = products[idx]
    return (
      <div
        className="bg-white border border-[#e5e7eb] rounded-[16px] shadow-[0_24px_64px_rgba(0,0,0,0.15)] overflow-hidden flex"
        style={{ width: 700 }}
      >
        {/* Left: product list */}
        <div className="flex flex-col py-4 px-3 border-r border-[#f0f0f0] bg-[#fafafa]" style={{ width: 250 }}>
          <p className="text-[#9ca3af] text-[10px] font-semibold uppercase tracking-[1.5px] font-manrope mb-2 px-3">
            Products
          </p>
          {products.map((p, i) => (
            <a
              key={p.name}
              href="#"
              onMouseEnter={() => setProductIdx(section, i)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors group ${
                idx === i ? 'bg-white shadow-sm' : 'hover:bg-white/80'
              }`}
            >
              <div
                className="size-8 rounded-[8px] flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: `${p.color}18`, color: p.color }}
              >
                {p.icon}
              </div>
              <div className="min-w-0">
                <p className={`font-semibold text-[13px] font-manrope leading-[19px] transition-colors truncate ${
                  idx === i ? 'text-[#102a2e]' : 'text-[#374151] group-hover:text-[#102a2e]'
                }`}>
                  {p.name}
                </p>
                <p className="text-[11px] text-[#9ca3af] font-manrope leading-none mt-0.5 truncate">{p.ctaNote}</p>
              </div>
              {idx === i && (
                <svg
                  className="ml-auto size-3.5 flex-shrink-0 text-[#9ca3af]"
                  viewBox="0 0 14 14" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M3 7h8M7 3l4 4-4 4" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right: feature intro panel */}
        <div className="flex-1 p-6 flex flex-col gap-4">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold font-manrope mb-3"
              style={{ backgroundColor: `${active.color}15`, color: active.color }}
            >
              <div className="size-1.5 rounded-full" style={{ backgroundColor: active.color }} />
              {active.name}
            </div>
            <h3 className="text-[#102a2e] font-bold text-[18px] font-manrope leading-[24px] mb-1">
              {active.tagline}
            </h3>
            <p className="text-[#6b7280] text-[12.5px] font-manrope leading-[19px]">{active.desc}</p>
          </div>

          <div className="flex flex-col gap-2">
            {active.features.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <svg className="size-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill={`${active.color}18`} />
                  <path d="M5 8l2 2 4-4" stroke={active.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#374151] text-[12.5px] font-manrope leading-[19px]">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-2 flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] text-[13px] font-semibold font-manrope text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: active.color }}
            >
              {active.cta}
              <svg className="size-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h8M7 3l4 4-4 4" />
              </svg>
            </a>
            <span className="text-[#9ca3af] text-[11.5px] font-manrope">{active.ctaNote}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#061a1b]/70 border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 md:gap-8 py-3.5">
          <button
            onClick={onLogoClick}
            className="flex-shrink-0 rounded-full size-12 md:size-14 overflow-hidden hover:ring-2 hover:ring-white/40 transition-all"
            aria-label="Contact Us"
          >
            <img src={ctosLogo} alt="CTOS Digital" className="size-full object-cover" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 pl-3">
            {sectionNames.map((section) => (
              <div
                key={section}
                className="relative"
                onMouseEnter={() => setActiveMega(section)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
                  <span className="font-semibold text-[14px] tracking-[0.2px] font-manrope text-[#cfd6d8]">
                    {section}
                  </span>
                </button>

                {/* Mega menu panel */}
                <div
                  className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                    activeMega === section
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <MegaPanel section={section} />
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop sign in + support */}
          <div className="ml-auto hidden md:flex items-center gap-2">
            <button
              onClick={onSupportClick}
              className="flex items-center justify-center size-9 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              aria-label="Contact support"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </button>
            <Button variant="header" className="btn-border-spin text-[13px] px-[19px] py-2.5">Sign in</Button>
          </div>

          {/* Mobile: support + sign in + burger */}
          <div className="ml-auto flex items-center gap-3 md:hidden">
            <button
              onClick={onSupportClick}
              className="flex items-center justify-center size-8 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              aria-label="Contact support"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </button>
            <Button variant="header" size="sm" className="btn-border-spin">Sign in</Button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center gap-[5px] w-8 h-8"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
        <div className="bg-[#061a1b] border-t border-white/[0.08] px-6 py-3 flex flex-col">
          {sectionNames.map((section) => {
            const products = menuSections[section]
            const isOpen   = mobileOpen === section
            return (
              <div key={section}>
                <button
                  onClick={() => setMobileOpen(isOpen ? null : section)}
                  className="flex items-center justify-between px-3 py-3.5 rounded-lg hover:bg-white/5 transition-colors w-full text-left"
                >
                  <span className="font-semibold text-[#cfd6d8] text-[15px] font-manrope">{section}</span>
                  <span
                    className={`inline-block border-b border-r border-[#cfd6d8] size-2 transition-transform duration-200 ${
                      isOpen ? '-rotate-[135deg] translate-y-0.5' : 'rotate-45'
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-4 pb-2 flex flex-col gap-0.5">
                    {products.map((p) => (
                      <a
                        key={p.name}
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div
                          className="size-7 rounded-[6px] flex-shrink-0 flex items-center justify-center"
                          style={{ backgroundColor: `${p.color}22`, color: p.color }}
                        >
                          {p.icon}
                        </div>
                        <div>
                          <span className="font-semibold text-[#cfd6d8] text-[14px] font-manrope">{p.name}</span>
                          <p className="text-white/40 text-[11px] font-manrope">{p.ctaNote}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}
