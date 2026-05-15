import { useEffect, useState } from 'react'
import { Icon } from '@ctos/ui'
import appScreen from '../assets/ctos-app-screen.png'

const features = [
  { iconName: 'globe'          as const, color: '#0bb1be', title: 'Dark Web Monitoring',       desc: 'Scanning 14 billion+ breach records to check if your info is compromised' },
  { iconName: 'credit-monitor' as const, color: '#0bb1be', title: 'Credit Monitoring',         desc: 'Monitor your credit score every 3 months and stay in control' },
  { iconName: 'umbrella'       as const, color: '#0bb1be', title: 'Takaful',                   subtitle: '(up to RM20,000 coverage)', desc: 'Peace of mind with coverage against financial losses from transactions' },
  { iconName: 'score'          as const, color: '#f15d22', titlePrefix: 'FREE ', title: 'MyCTOS Score Report ×4', desc: 'Get 4 free MyCTOS Score reports every year to monitor your credit health' },
]

type Props = { open: boolean; onClose: () => void; initialPlan?: 'monthly' | 'yearly' }

export default function SecureIDPanel({ open, onClose, initialPlan = 'monthly' }: Props) {
  const [plan, setPlan] = useState<'monthly' | 'yearly'>(initialPlan)
  const [agreed, setAgreed] = useState(false)
  const [nric, setNric] = useState('')
  const [confirmNric, setConfirmNric] = useState('')
  const [email, setEmail] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [hoveredSneak, setHoveredSneak] = useState<number | null>(null)
  const [previewLoaded, setPreviewLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => { if (!open) { setExpanded(false); setHoveredSneak(null); setPreviewLoaded(false) } }, [open])
  useEffect(() => { setPreviewLoaded(false) }, [hoveredSneak])
  useEffect(() => { if (open) setPlan(initialPlan) }, [open, initialPlan])

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
          width: isMobile ? '100%' : (expanded ? 1050 : 480),
        }}
      >
        {/* ── Teal header ── */}
        <div
          className="relative flex-shrink-0 rounded-b-[20px] overflow-hidden h-[73px]"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)' }}
        >
          {/* X close — always top-right */}
          <button onClick={onClose} className="absolute top-1/2 -translate-y-1/2 right-4 size-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors z-10" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {expanded ? (
            /* ── Expanded header (173:775) ── */
            <div className="flex items-center gap-4 px-7 pr-16 h-full">
              {/* Title + subtitle */}
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-[24px] font-poppins tracking-[-0.6px] leading-[24px]">CTOS SecureID</span>
                <p className="text-white/85 text-[11px] font-poppins leading-[1.5]">
                  Malaysia's top credit and identity protection service
                </p>
              </div>
              {/* Close → button */}
              <button
                onClick={() => setExpanded(false)}
                className="flex-shrink-0 flex items-center gap-2 bg-white rounded-[8px] pl-[14px] pr-[18px] h-[30px] text-[#007b85] font-semibold text-[12px] font-poppins hover:bg-white/90 transition-colors"
              >
                Close
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </button>
            </div>
          ) : (
            /* ── Collapsed header (172:798) ── */
            <div className="flex items-center justify-between px-7 pr-16 h-full">
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-[24px] font-poppins tracking-[-0.6px] leading-[24px]">CTOS SecureID</span>
                <p className="text-white/85 text-[10px] font-poppins leading-[1.5] max-w-[267px]">
                  Malaysia's top credit and identity protection service
                </p>
              </div>
              <button
                onClick={() => setExpanded(true)}
                className="flex-shrink-0 bg-white rounded-[8px] h-[30px] w-[96px] text-center text-[#007b85] font-semibold text-[12px] font-poppins hover:bg-white/90 transition-colors"
              >
                Plan details
              </button>
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-hidden flex flex-row relative">

          {/* ── Features panel ──
              Desktop: animates width 0↔590 side-by-side
              Mobile:  full-width overlay, slides in/out via translateX -->
          */}
          <div
            className="overflow-hidden flex-shrink-0 border-r border-[#e5e7eb] transition-all duration-500 ease-in-out bg-white"
            style={isMobile
              ? { position: 'absolute', inset: 0, width: '100%', zIndex: 10, transform: expanded ? 'translateX(0)' : 'translateX(-100%)' }
              : { width: expanded ? 590 : 0 }
            }
          >
            <div className="h-full overflow-y-auto px-6 py-6" style={{ width: isMobile ? '100%' : 590 }}>
              <h3 className="font-semibold text-[18px] text-[#303434] font-poppins mb-4">SecureID Features:</h3>

              <div className="grid grid-cols-2 gap-3 mb-7">
                {features.map((f, i) => (
                  <div key={i} className="bg-[#f4f8f6] rounded-[8px] p-4 flex gap-3 items-start hover:bg-[#e6f2f0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                    <div className="flex-shrink-0 size-[30px] flex items-center justify-center">
                      <Icon name={f.iconName} size={24} color={f.color} />
                    </div>
                    <div>
                      <p className="font-normal text-[13px] text-[#303434] font-poppins leading-[1.4] mb-1">
                        {f.titlePrefix && <span className="text-[#f15d22]">{f.titlePrefix}</span>}
                        {f.title}
                        {f.subtitle && <span className="font-normal italic text-[11px] text-[#6b7280]"> {f.subtitle}</span>}
                      </p>
                      <p className="text-[12px] text-[#535959] font-poppins leading-[1.5]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-[18px] text-[#303434] font-poppins mb-4">SecureID Sneak Peek</h3>

              {/* Thumbnail strip */}
              <div className="flex gap-3 py-2 pl-1" style={{ overflowX: 'auto', overflowY: 'visible' }}>
                {[appScreen, appScreen, appScreen, appScreen, appScreen].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`SecureID screen ${i + 1}`}
                    className={`h-[180px] w-auto flex-shrink-0 shadow-md cursor-pointer transition-all duration-150 ${hoveredSneak === i ? 'ring-1 ring-[#007b85] opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    onMouseEnter={() => !isMobile && setHoveredSneak(i)}
                    onMouseLeave={() => !isMobile && setHoveredSneak(null)}
                    onClick={() => isMobile && setHoveredSneak(hoveredSneak === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Checkout form ── */}
          <div className="flex-1 overflow-y-auto bg-white px-6 py-5 flex flex-col gap-4 shadow-[inset_10px_0_18px_-6px_rgba(0,0,0,0.06)]">
            <h2 className="font-semibold text-[20px] text-[#303434] font-poppins">Checkout</h2>

            {/* Select Plan */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[13px] text-[#303434] font-poppins">Select Plan</p>

              <button onClick={() => setPlan('monthly')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-[8px] border transition-colors ${plan === 'monthly' ? 'bg-[#f0fafa] border-[#9dd4d6]' : 'bg-white border-[#d4dfe0]'}`}>
                <span className="font-normal text-[13px] text-[#303434] font-poppins">Monthly</span>
                <div className="flex items-center gap-3">
                  <span className="font-normal text-[13px] text-[#303434] font-poppins">RM 9.90</span>
                  <span className={`size-[16px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${plan === 'monthly' ? 'border-[#007b85]' : 'border-[#d4dfe0]'}`}>
                    {plan === 'monthly' && <span className="size-[8px] rounded-full bg-[#007b85]" />}
                  </span>
                </div>
              </button>

              <div className="relative">
                <button onClick={() => setPlan('yearly')}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-[8px] border transition-colors mt-3 ${plan === 'yearly' ? 'bg-[#f0fafa] border-[#9dd4d6]' : 'bg-white border-[#d4dfe0]'}`}>
                  <span className="font-normal text-[13px] text-[#303434] font-poppins">Yearly</span>
                  <div className="flex items-center gap-3">
                    <span className="font-normal text-[13px] text-[#303434] font-poppins">RM 99.00</span>
                    <span className={`size-[16px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${plan === 'yearly' ? 'border-[#007b85]' : 'border-[#d4dfe0]'}`}>
                      {plan === 'yearly' && <span className="size-[8px] rounded-full bg-[#007b85]" />}
                    </span>
                  </div>
                </button>
                <span className="jiggle absolute top-0 left-[10px] bg-[#ffd5b1] text-[#303434] text-[11px] font-normal font-poppins px-2 py-0.5 rounded-[4px]">Save RM 19.80</span>
              </div>
            </div>

            {/* Form fields */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[12px] text-[#404040] font-poppins">Key in Your New NRIC / Passport No:</label>
                <input type="text" value={nric} onChange={e => setNric(e.target.value)} placeholder="e.g. 790221055077"
                  className="w-full border border-[#d9d9d9] rounded-[4px] h-[36px] px-3 text-[13px] font-poppins text-[#303434] placeholder:text-[#acacac] focus:outline-none focus:border-[#007b85]" />
              </div>

              <div className="bg-[#f9f6d3] rounded-[4px] px-3 py-2 text-[10px] font-poppins text-[#4a4a4a] leading-[1.5]">
                ID not found. Please ensure it's correct or key in below details to proceed with the report purchase.
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[12px] text-[#404040] font-poppins">Confirm Your New NRIC / Passport No:</label>
                <input type="text" value={confirmNric} onChange={e => setConfirmNric(e.target.value)} placeholder="e.g. 790221055077"
                  className="w-full border border-[#d9d9d9] rounded-[4px] h-[36px] px-3 text-[13px] font-poppins text-[#303434] placeholder:text-[#acacac] focus:outline-none focus:border-[#007b85]" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[12px] text-[#404040] font-poppins">Key in Your Email Address:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.g. name@email.com"
                  className="w-full border border-[#d9d9d9] rounded-[4px] h-[36px] px-3 text-[13px] font-poppins text-[#303434] placeholder:text-[#acacac] focus:outline-none focus:border-[#007b85]" />
              </div>

              <p className="text-[#f15d22] text-[10px] font-poppins leading-[1.6]">
                CTOS is committed to protecting your privacy in accordance with the Personal Data Protection Act 2010 of Malaysia (PDPA).
              </p>
            </div>

            {/* Notes — monthly only */}
            {plan === 'monthly' && (
              <div className="border border-[#d4dfe0] rounded-[8px] py-1.5 px-3 flex flex-col gap-1">
                <p className="font-semibold text-[12px] text-[#303434] font-poppins">Notes</p>
                <ul className="list-disc ml-4 text-[11px] text-[#535959] font-poppins leading-[1.6] flex flex-col gap-0.5">
                  <li>Monthly plans have a 3-month lock-in period.</li>
                  <li>Monthly renewal payments start from the 12th of each month.</li>
                  <li>To avoid being charged, please cancel your plan before the payment period.</li>
                </ul>
              </div>
            )}

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
              {plan === 'monthly' ? 'Subscribe Monthly' : 'Subscribe Yearly'}
            </button>
          </div>
        </div>

        {/* ── Mobile sneak peek overlay ── */}
        {hoveredSneak !== null && expanded && isMobile && (
          <div
            className="absolute inset-0 z-[110] flex flex-col items-center bg-black/70 pt-5"
            onClick={() => setHoveredSneak(null)}
          >
            <div className="bg-black/40 rounded-[14px] p-2 shadow-2xl relative flex items-center justify-center" style={{ minWidth: 100, minHeight: 160 }} onClick={e => e.stopPropagation()}>
              {!previewLoaded && (
                <div className="absolute inset-0 flex items-center justify-center rounded-[14px]">
                  <svg className="animate-spin size-10 text-white/60" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                </div>
              )}
              <img
                src={[appScreen, appScreen, appScreen, appScreen, appScreen][hoveredSneak]}
                alt="Preview"
                className={`h-[75vh] w-auto object-contain rounded-[10px] transition-opacity duration-300 ${previewLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setPreviewLoaded(true)}
              />
            </div>
            <p className="text-white/60 text-[11px] mt-3 font-poppins">Tap outside to close</p>
          </div>
        )}
      </div>
      {/* ── Desktop sneak peek preview — fixed, floats to the left of the panel ── */}
      {hoveredSneak !== null && expanded && !isMobile && (
        <div
          className="fixed top-1/2 -translate-y-1/2 z-[60] pointer-events-none"
          style={{ right: 1050 + 16 }}
        >
          <div className="bg-black/40 rounded-[14px] p-2 shadow-2xl relative flex items-center justify-center" style={{ minWidth: 120, minHeight: 200 }}>
            {!previewLoaded && (
              <div className="absolute inset-0 flex items-center justify-center rounded-[14px]">
                <svg className="animate-spin size-10 text-white/60" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </div>
            )}
            <img
              src={[appScreen, appScreen, appScreen, appScreen, appScreen][hoveredSneak]}
              alt="Preview"
              className={`h-[85vh] w-auto object-contain rounded-[10px] transition-opacity duration-300 ${previewLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setPreviewLoaded(true)}
            />
          </div>
        </div>
      )}
    </>
  )
}
