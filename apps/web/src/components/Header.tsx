import { useState } from 'react'
import { Button } from '@ctos/ui'

const ctosLogo = 'https://www.figma.com/api/mcp/asset/08ce713a-5341-4b9e-83dc-7ed47d51dd8b'

const consumerProducts = [
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
    name: 'Biz Report',
    tagline: "Know who you're doing business with.",
    desc: 'Search 1.3M+ Malaysian companies. Access SSM filings, litigation records, and directorship data.',
    color: '#f15d22',
    features: [
      'Search 1.3M+ registered companies',
      'SSM filings & directorship history',
      'Litigation & court records',
      'Compliance & counterparty risk screening',
    ],
    cta: 'Learn More',
    ctaNote: 'Pay per search',
    icon: (
      <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="16" height="11" rx="2" />
        <path d="M7 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M2 11h16" />
      </svg>
    ),
  },
  {
    name: 'SecureID',
    tagline: '24/7 identity protection, always on.',
    desc: 'Real-time credit monitoring, dark web scanning, and Takaful fraud coverage â€” one plan watches everything.',
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

const navLinks = ['Commercial', 'Corporate', 'FI/Banks', 'Global']

export default function Header({ onLogoClick, onSupportClick }: { onLogoClick?: () => void; onSupportClick?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [consumerOpen, setConsumerOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  const active = consumerProducts[activeProduct]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#061a1b]/70 border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 md:gap-8 py-3.5">
          <button onClick={onLogoClick} className="flex-shrink-0 rounded-full size-12 md:size-14 overflow-hidden hover:ring-2 hover:ring-white/40 transition-all" aria-label="Contact Us">
            <img src={ctosLogo} alt="CTOS Digital" className="size-full object-cover" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 pl-3">
            <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
                <span className="font-semibold text-[14px] tracking-[0.2px] font-manrope text-[#cfd6d8]">Consumer</span>
                <div className="flex items-center justify-center size-[11px] ml-0.5">
                  <div className={`border-b border-r border-[#cfd6d8] size-2 transition-transform duration-200 ${megaOpen ? '-rotate-[135deg] translate-y-0.5' : 'rotate-45 -translate-y-0.5'}`} />
                </div>
              </button>

              {/* Mega menu */}
              <div className={`absolute top-full left-0 pt-3 transition-all duration-200 ${megaOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                <div className="bg-white border border-[#e5e7eb] rounded-[16px] shadow-[0_24px_64px_rgba(0,0,0,0.15)] overflow-hidden flex" style={{ width: 700 }}>

                  {/* Left: product list */}
                  <div className="flex flex-col py-4 px-3 border-r border-[#f0f0f0] bg-[#fafafa]" style={{ width: 250 }}>
                    <p className="text-[#9ca3af] text-[10px] font-semibold uppercase tracking-[1.5px] font-manrope mb-2 px-3">Products</p>
                    {consumerProducts.map((p, i) => (
                      <a
                        key={p.name}
                        href="#"
                        onMouseEnter={() => setActiveProduct(i)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors group ${activeProduct === i ? 'bg-white shadow-sm' : 'hover:bg-white/80'}`}
                      >
                        <div className="size-8 rounded-[8px] flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${p.color}18`, color: p.color }}>
                          {p.icon}
                        </div>
                        <div>
                          <p className={`font-semibold text-[13px] font-manrope leading-[19px] transition-colors ${activeProduct === i ? 'text-[#102a2e]' : 'text-[#374151] group-hover:text-[#102a2e]'}`}>{p.name}</p>
                          <p className="text-[11px] text-[#9ca3af] font-manrope leading-none mt-0.5">{p.ctaNote}</p>
                        </div>
                        {activeProduct === i && (
                          <svg className="ml-auto size-3.5 flex-shrink-0 text-[#9ca3af]" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7h8M7 3l4 4-4 4" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>

                  {/* Right: feature intro panel */}
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold font-manrope mb-3" style={{ backgroundColor: `${active.color}15`, color: active.color }}>
                        <div className="size-1.5 rounded-full" style={{ backgroundColor: active.color }} />
                        {active.name}
                      </div>
                      <h3 className="text-[#102a2e] font-bold text-[18px] font-manrope leading-[24px] mb-1">{active.tagline}</h3>
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
                      <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] text-[13px] font-semibold font-manrope text-white transition-opacity hover:opacity-80" style={{ backgroundColor: active.color }}>
                        {active.cta}
                        <svg className="size-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 7h8M7 3l4 4-4 4" />
                        </svg>
                      </a>
                      <span className="text-white/30 text-[11.5px] font-manrope">{active.ctaNote}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <a key={link} href="#" className="flex items-center px-4 py-2.5 rounded-md hover:bg-white/5 transition-colors">
                <span className="font-semibold text-[#cfd6d8] text-[14px] tracking-[0.2px] font-manrope leading-[21.7px]">{link}</span>
              </a>
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
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col justify-center items-center gap-[5px] w-8 h-8" aria-label="Toggle menu">
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="bg-[#061a1b] border-t border-white/[0.08] px-6 py-3 flex flex-col">
          <button onClick={() => setConsumerOpen(!consumerOpen)} className="flex items-center justify-between px-3 py-3.5 rounded-lg hover:bg-white/5 transition-colors w-full text-left">
            <span className="font-semibold text-[#cfd6d8] text-[15px] font-manrope">Consumer</span>
            <span className={`inline-block border-b border-r border-[#cfd6d8] size-2 transition-transform duration-200 ${consumerOpen ? '-rotate-[135deg] translate-y-0.5' : 'rotate-45'}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-200 ${consumerOpen ? 'max-h-80' : 'max-h-0'}`}>
            <div className="pl-4 pb-2 flex flex-col gap-0.5">
              {consumerProducts.map((p) => (
                <a key={p.name} href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="size-7 rounded-[6px] flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${p.color}22`, color: p.color }}>{p.icon}</div>
                  <div>
                    <span className="font-semibold text-[#cfd6d8] text-[14px] font-manrope">{p.name}</span>
                    <p className="text-white/40 text-[11px] font-manrope">{p.ctaNote}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <a key={link} href="#" className="px-3 py-3.5 rounded-lg hover:bg-white/5 transition-colors">
              <span className="font-semibold text-[#cfd6d8] text-[15px] font-manrope">{link}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

