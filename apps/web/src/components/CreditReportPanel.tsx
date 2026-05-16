import { useEffect, useState } from 'react'

const CtosScoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 1 18 0"/>
    <path d="M3 12h2M19 12h2M12 3v2"/>
    <path d="M6.34 6.34l1.42 1.42M16.24 7.76l1.42-1.42"/>
    <path d="M12 12l3-4"/>
    <circle cx="12" cy="12" r="1.5" fill="#007b85"/>
  </svg>
)
const CcrisIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
)
const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
)
const BusinessIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12" strokeWidth="2"/>
    <path d="M2 12h20"/>
  </svg>
)
const LitigationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Center pole */}
    <line x1="12" y1="3" x2="12" y2="21"/>
    {/* Base */}
    <line x1="7" y1="21" x2="17" y2="21"/>
    {/* Crossbar */}
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
    {/* Left pan */}
    <path d="M5 7l3 7c-.8.6-1.9 1-3 1s-2.2-.4-3-1l3-7z"/>
    {/* Right pan */}
    <path d="M19 7l3 7c-.8.6-1.9 1-3 1s-2.2-.4-3-1l3-7z"/>
  </svg>
)
const NonBankingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>
  </svg>
)

const creditFeatures = [
  { Icon: CtosScoreIcon,    title: 'CTOS Score',              desc: 'Your full CTOS Score with detailed breakdown across all credit factors' },
  { Icon: CcrisIcon,        title: 'CCRIS Records',           desc: 'Complete Bank Negara Malaysia CCRIS data, exactly what lenders see' },
  { Icon: PersonIcon,       title: 'Personal Info (NRD)',     desc: 'Verified personal information from the National Registration Department' },
  { Icon: BusinessIcon,     title: 'Business & Directorship', desc: 'SSM company directorship and business records linked to your identity' },
  { Icon: LitigationIcon,   title: 'Litigation & Bankruptcy', desc: 'Court litigation and bankruptcy records from official sources' },
  { Icon: NonBankingIcon,   title: 'Non-Banking (eTR)',       desc: 'Trade reference and non-banking credit information' },
]

type Props = { open: boolean; onClose: () => void }

export default function CreditReportPanel({ open, onClose }: Props) {
  const [agreed, setAgreed]         = useState(false)
  const [nric, setNric]             = useState('')
  const [confirmNric, setConfirmNric] = useState('')
  const [email, setEmail]           = useState('')
  const [expanded, setExpanded]     = useState(false)
  const [isMobile, setIsMobile]     = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => { if (!open) { setExpanded(false) } }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed top-0 right-0 z-50 h-full bg-white flex flex-col shadow-2xl transition-[transform,width] duration-500 ease-in-out"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          width: isMobile ? '100%' : (expanded ? 1000 : 480),
        }}
      >
        {/* ── Teal header ── */}
        <div
          className="relative flex-shrink-0 rounded-b-[20px] overflow-hidden h-[73px]"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)' }}
        >
          {/* X close */}
          <button onClick={onClose} className="absolute top-1/2 -translate-y-1/2 right-4 size-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-10" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {expanded ? (
            <div className="flex items-center gap-4 px-7 pr-16 h-full">
              <div className="size-9 rounded-[10px] bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="2" width="14" height="16" rx="2" /><path d="M7 7h6M7 10h6M7 13h4" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-[22px] font-poppins tracking-[-0.5px] leading-[24px]">Credit Report</span>
                <p className="text-white/85 text-[11px] font-poppins leading-[1.5]">Full credit snapshot, the same report lenders see</p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white rounded-[8px] pl-3 pr-4 h-[30px] text-[#007b85] font-semibold text-[12px] font-poppins hover:bg-white/90 transition-colors"
              >
                Close
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6h8M7 3l3 3-3 3" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between px-7 pr-16 h-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-[22px] font-poppins tracking-[-0.5px] leading-[24px]">Credit Report</span>
                <p className="text-white/85 text-[10px] font-poppins leading-[1.5] max-w-[267px]">Full credit snapshot, the same report lenders see</p>
              </div>
              <button
                onClick={() => setExpanded(true)}
                className="flex-shrink-0 bg-white rounded-[8px] h-[30px] w-[96px] text-center text-[#007b85] font-semibold text-[12px] font-poppins hover:bg-white/90 transition-colors"
              >
                What's inside
              </button>
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-hidden flex flex-row relative">

          {/* Features panel */}
          <div
            className="overflow-hidden flex-shrink-0 border-r border-[#e5e7eb] transition-all duration-500 ease-in-out bg-white"
            style={isMobile
              ? { position: 'absolute', inset: 0, width: '100%', zIndex: 10, transform: expanded ? 'translateX(0)' : 'translateX(-100%)' }
              : { width: expanded ? 540 : 0 }
            }
          >
            <div className="h-full overflow-y-auto px-6 py-6" style={{ width: isMobile ? '100%' : 540 }}>
              <h3 className="font-semibold text-[17px] text-[#303434] font-poppins mb-1">What's inside your Credit Report</h3>
              <p className="text-[12px] text-[#6b7280] font-poppins mb-5 leading-[1.6]">
                Your Credit Report includes everything lenders check when you apply for a loan or credit card.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {creditFeatures.map((f, i) => (
                  <div key={i} className="bg-[#f4f8f9] rounded-[10px] p-4 flex flex-col gap-2 hover:bg-[#e8f4f6] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                    <div className="size-9 rounded-[8px] bg-[#007b85]/10 flex items-center justify-center flex-shrink-0">
                      <f.Icon />
                    </div>
                    <p className="font-semibold text-[12.5px] text-[#102a2e] font-poppins leading-[1.4]">{f.title}</p>
                    <p className="text-[11.5px] text-[#535959] font-poppins leading-[1.5]">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sample report promo */}
              <div className="flex items-center justify-between px-4 py-3 rounded-[10px] border border-[rgba(0,123,133,0.2)] bg-gradient-to-r from-[rgba(0,123,133,0.06)] to-transparent">
                <div>
                  <p className="font-semibold text-[13px] text-[#102a2e] font-poppins">See a sample report</p>
                  <p className="text-[11px] text-[#6b7280] font-poppins mt-0.5">Preview what your full report looks like</p>
                </div>
                <a href="#" className="flex-shrink-0 bg-[#007b85] text-white text-[12px] font-semibold font-poppins px-4 py-2 rounded-[8px] hover:bg-[#005f68] transition-colors">
                  View Sample
                </a>
              </div>
            </div>
          </div>

          {/* ── Checkout form ── */}
          <div className="flex-1 overflow-y-auto bg-white px-6 py-5 flex flex-col gap-4 shadow-[inset_10px_0_18px_-6px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-[20px] text-[#303434] font-poppins">Checkout</h2>
              <div className="text-right">
                <span className="font-extrabold text-[22px] text-[#102a2e] font-poppins leading-none">RM27.90</span>
                <p className="text-[11px] text-[#6b7280] font-poppins mt-0.5">per report · incl. SST</p>
              </div>
            </div>

            {/* What you get — compact */}
            <div className="bg-[#f4f8f9] rounded-[10px] px-4 py-3 flex flex-col gap-1.5">
              <p className="font-semibold text-[12px] text-[#007b85] font-poppins mb-0.5">This report includes:</p>
              {['CTOS Score', 'CCRIS Records (BNM)', 'Personal Info (NRD)', 'Business & Directorship (SSM)', 'Litigation & Bankruptcy', 'Non-Banking (eTR)'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="6" fill="#007b85" opacity="0.15" />
                    <path d="M4 6.5l2 2 3-3" stroke="#007b85" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[12px] text-[#303434] font-poppins">{item}</span>
                </div>
              ))}
            </div>

            {/* Form fields */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[12px] text-[#404040] font-poppins">Key in Your NRIC / Passport No:</label>
                <input type="text" value={nric} onChange={e => setNric(e.target.value)} placeholder="e.g. 790221055077"
                  className="w-full border border-[#d9d9d9] rounded-[4px] h-[36px] px-3 text-[13px] font-poppins text-[#303434] placeholder:text-[#acacac] focus:outline-none focus:border-[#007b85]" />
              </div>

              <div className="bg-[#f9f6d3] rounded-[4px] px-3 py-2 text-[10px] font-poppins text-[#4a4a4a] leading-[1.5]">
                ID not found? Ensure it's correct or key in your details below to proceed with the report purchase.
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[12px] text-[#404040] font-poppins">Confirm Your NRIC / Passport No:</label>
                <input type="text" value={confirmNric} onChange={e => setConfirmNric(e.target.value)} placeholder="e.g. 790221055077"
                  className="w-full border border-[#d9d9d9] rounded-[4px] h-[36px] px-3 text-[13px] font-poppins text-[#303434] placeholder:text-[#acacac] focus:outline-none focus:border-[#007b85]" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[12px] text-[#404040] font-poppins">Key in Your Email Address:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.g. name@email.com"
                  className="w-full border border-[#d9d9d9] rounded-[4px] h-[36px] px-3 text-[13px] font-poppins text-[#303434] placeholder:text-[#acacac] focus:outline-none focus:border-[#007b85]" />
              </div>

              <p className="text-[#f15d22] text-[10px] font-poppins leading-[1.6]">
                CTOS is committed to protecting your privacy in accordance with the Personal Data Protection Act 2010 (PDPA).
              </p>
            </div>

            {/* T&C */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                className="mt-0.5 size-[16px] rounded-[3px] accent-[#007b85] flex-shrink-0 cursor-pointer" />
              <span className="text-[10px] font-poppins text-[#272727] leading-[1.6]">
                I agree to CTOS's <a href="#" className="text-[#f15d22] underline">Terms &amp; Conditions</a> and <a href="#" className="text-[#f15d22] underline">Declaration of Consent</a>
              </span>
            </label>

            {/* Buy button */}
            <button disabled={!agreed}
              className="w-full bg-[#007b85] disabled:bg-[#007b85]/50 text-white font-bold text-[16px] font-poppins py-3.5 rounded-[8px] transition-colors hover:bg-[#005f68] disabled:cursor-not-allowed">
              Get My Credit Report, RM27.90
            </button>

            <p className="text-center text-[10.5px] text-[#9ca3af] font-poppins">One-time purchase · Delivered to your email instantly</p>
          </div>
        </div>
      </div>
    </>
  )
}
