import { useState } from 'react'
import ctosLogo from '../assets/ctos-logo-circle.png'
import mapPenang from '../assets/map-penang.svg'
import mapPahang from '../assets/map-pahang.svg'
import mapJohor  from '../assets/map-johor.svg'

const branches = [
  { name: 'Penang',  img: mapPenang, address: 'Unit G-17-3, Lorong Bayan Indah 1, Bay Avenue, 11900 Penang.' },
  { name: 'Pahang',  img: mapPahang, address: 'A133, 1st Floor, Jalan Haji Abdul Aziz, 25000 Kuantan, Pahang.' },
  { name: 'Johor',   img: mapJohor,  address: "72-01, Jalan Setia Tropika 1/14, Setia Tropika, 81200 Johor Bahru, Johor." },
]

const faqs = [
  'What is a credit report?',
  'What information is in a MyCTOS report?',
  'Where does CTOS get the information from?',
  'How can I get a MyCTOS report?',
  'Does CTOS decide whether to approve my loans?',
  'My loan was rejected, why is it a CTOS issue?',
  'What if the information in my report is wrong?',
  "I've been told I am blacklisted by CTOS. Why?",
  "What if I'm still rejected after updating my record?",
  'I was rejected by one bank. Will others do the same?',
]

export default function ContactUs({ onClose }: { onClose: () => void }) {
  const [branchOpen, setBranchOpen] = useState(false)
  const [faqOpen,    setFaqOpen]    = useState(false)

  return (
    <div className="relative flex flex-col h-full bg-white overflow-hidden">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <div
        className="flex-shrink-0 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a2224 0%, #0d3438 50%, #072527 100%)' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(11,177,190,0.12) 0%, transparent 60%)' }} />

        <div className="relative flex items-center gap-4 px-6 py-5">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 flex-shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <img src={ctosLogo} alt="CTOS" className="w-full h-full object-cover" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-manrope font-extrabold text-[17px] text-white leading-tight tracking-tight">CTOS Digital</p>
            <p className="font-manrope text-[11.5px] text-white/50 mt-0.5">Malaysia's #1 Credit Intelligence Platform</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Teal accent line */}
        <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, #007b85 0%, #0bb1be 50%, transparent 100%)' }} />
      </div>

      {/* ── SCROLLABLE BODY ────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">

        {/* ── HQ address ── */}
        <div className="px-6 py-5 border-b border-[#f3f4f6]">
          <SectionLabel icon={<MapPinIcon />} label="Head Office" />
          <div className="mt-3 rounded-[12px] bg-[#f9fafb] border border-[#eaecef] p-4 flex flex-col gap-3">
            <div>
              <p className="font-manrope font-bold text-[13px] text-[#007b85]">CTOS Data Systems Sdn Bhd</p>
              <p className="font-manrope text-[12.5px] text-[#374151] leading-relaxed mt-1">
                Level 18, Menara CelcomDigi,<br />
                No 6, Persiaran Barat, Seksyen 52,<br />
                Petaling Jaya, 46200, Selangor.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#eaecef]">
              <ClockIcon />
              <span className="font-manrope text-[12px] text-[#6b7280]">Service Centre (HQ):</span>
              <span className="font-manrope font-semibold text-[12px] text-[#102a2e]">Mon–Fri 8:30am–5:30pm</span>
            </div>
            {/* Embedded map */}
            <div className="rounded-[8px] overflow-hidden h-[140px]">
              <iframe
                title="CTOS HQ"
                src="https://maps.google.com/maps?q=Menara+CelcomDigi,+Petaling+Jaya,+Selangor&output=embed"
                width="100%" height="140"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ── Contact Centre ── */}
        <div className="px-6 py-5 border-b border-[#f3f4f6]">
          <SectionLabel icon={<PhoneIcon />} label="Contact Centre" />
          <div className="mt-3 flex flex-col gap-2">
            {/* Personal */}
            <div className="flex items-center justify-between rounded-[10px] bg-[#f9fafb] border border-[#eaecef] px-4 py-3">
              <div>
                <p className="font-manrope text-[10.5px] text-[#9ca3af] uppercase tracking-[0.6px] font-semibold">Personal</p>
                <a href="tel:+60327228833" className="font-manrope font-bold text-[16px] text-[#102a2e] hover:text-[#007b85] transition-colors">
                  +603 2722 8833
                </a>
              </div>
              <a href="tel:+60327228833" className="w-9 h-9 rounded-full bg-[#007b85] hover:bg-[#055157] flex items-center justify-center transition-colors shadow-[0_4px_12px_rgba(0,123,133,0.3)]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
              </a>
            </div>
            {/* Business */}
            <div className="flex items-center justify-between rounded-[10px] bg-[#f9fafb] border border-[#eaecef] px-4 py-3">
              <div>
                <p className="font-manrope text-[10.5px] text-[#9ca3af] uppercase tracking-[0.6px] font-semibold">Business</p>
                <a href="tel:+60327228882" className="font-manrope font-bold text-[16px] text-[#102a2e] hover:text-[#007b85] transition-colors">
                  +603 2722 8882
                </a>
              </div>
              <a href="tel:+60327228882" className="w-9 h-9 rounded-full bg-[#007b85] hover:bg-[#055157] flex items-center justify-center transition-colors shadow-[0_4px_12px_rgba(0,123,133,0.3)]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
              </a>
            </div>
            {/* Hours */}
            <div className="rounded-[10px] bg-[#f9fafb] border border-[#eaecef] px-4 py-3 grid grid-cols-2 gap-2">
              {[
                { day: 'Mon – Fri', hours: '8:00am – 7:00pm', color: 'text-[#102a2e]' },
                { day: 'Sat – Sun', hours: '9:00am – 5:00pm', color: 'text-[#102a2e]' },
                { day: 'Public Holiday', hours: 'Closed', color: 'text-[#f59e0b]' },
              ].map(({ day, hours, color }) => (
                <div key={day}>
                  <p className="font-manrope text-[10.5px] text-[#9ca3af]">{day}</p>
                  <p className={`font-manrope font-semibold text-[12px] ${color}`}>{hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Branch offices collapsible ── */}
        <div className="px-6 py-5 border-b border-[#f3f4f6]">
          <button
            onClick={() => setBranchOpen(v => !v)}
            className="w-full flex items-center justify-between"
          >
            <SectionLabel icon={<BranchIcon />} label="Branch Offices" noMargin />
            <svg
              className={`text-[#007b85] transition-transform duration-300 ${branchOpen ? 'rotate-180' : 'rotate-0'}`}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: branchOpen ? '600px' : '0px' }}
          >
            <div className="mt-3 flex flex-col gap-3">
              {branches.map(b => (
                <div key={b.name} className="rounded-[10px] border border-[#eaecef] overflow-hidden">
                  <img src={b.img} alt={b.name} className="w-full h-[90px] object-cover" />
                  <div className="px-3 py-2.5">
                    <p className="font-manrope font-semibold text-[12.5px] text-[#102a2e]">Service Centre ({b.name})</p>
                    <p className="font-manrope text-[11.5px] text-[#6b7280] leading-relaxed mt-0.5">{b.address}</p>
                    <p className="font-manrope text-[11px] text-[#9ca3af] mt-1">Mon – Fri, 8:30am – 5:30pm</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQs collapsible ── */}
        <div className="px-6 py-5">
          <button
            onClick={() => setFaqOpen(v => !v)}
            className="w-full flex items-center justify-between group"
          >
            <SectionLabel icon={<QuestionIcon />} label="FAQs" noMargin />
            <svg
              className={`text-[#007b85] transition-transform duration-300 ${faqOpen ? 'rotate-180' : 'rotate-0'}`}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: faqOpen ? `${faqs.length * 44}px` : '0px' }}
          >
            <div className="mt-3 flex flex-col gap-0.5">
              {faqs.map((q, i) => (
                <a
                  key={i}
                  href="https://ctoscredit.com.my/learn/faqs/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 px-3 py-2 rounded-[8px] hover:bg-[#f3f4f6] transition-colors group"
                >
                  <svg className="flex-shrink-0 mt-[3px] text-[#007b85]" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <span className="font-manrope text-[12.5px] text-[#374151] group-hover:text-[#102a2e] leading-snug transition-colors">{q}</span>
                </a>
              ))}
              <a
                href="https://ctoscredit.com.my/learn/faqs/"
                target="_blank" rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 px-3 font-manrope font-semibold text-[12px] text-[#007b85] hover:underline"
              >
                View all FAQs
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <div className="flex-shrink-0 border-t border-[#eaecef] px-6 py-4 flex items-center justify-between bg-white">
        <p className="font-manrope text-[11px] text-[#9ca3af]">© 2025 CTOS Data Systems Sdn Bhd</p>
        <a
          href="mailto:customerservice@ctos.com.my"
          className="font-manrope font-semibold text-[12px] text-[#007b85] hover:underline"
        >
          customerservice@ctos.com.my
        </a>
      </div>
    </div>
  )
}

/* ── Small reusable helpers ── */
function SectionLabel({ icon, label, noMargin }: { icon: React.ReactNode; label: string; noMargin?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${noMargin ? '' : 'mb-0'}`}>
      <span className="text-[#007b85]">{icon}</span>
      <p className="font-manrope font-bold text-[11px] uppercase tracking-[1px] text-[#6b7280]">{label}</p>
    </div>
  )
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  )
}
function QuestionIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
function BranchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
