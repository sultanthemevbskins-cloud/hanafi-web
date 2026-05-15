import { useState } from 'react'
import ctosLogo from '../assets/ctos-logo-circle.png'

const branches = [
  {
    name: 'Service Centre (Penang)',
    img: 'https://www.figma.com/api/mcp/asset/8d0b14a2-85ee-4d7f-a19f-b7343f84c195',
    address: 'Unit G-17-3, Lorong Bayan Indah 1, Bay Avenue, 11900 Penang.',
  },
  {
    name: 'Service Centre (Pahang)',
    img: 'https://www.figma.com/api/mcp/asset/012446bb-0775-47b2-b050-151dac052d73',
    address: 'A133, 1st Floor, Jalan Haji Abdul Aziz, 25000 Kuantan, Pahang.',
  },
  {
    name: 'Service Centre (Johor)',
    img: 'https://www.figma.com/api/mcp/asset/140eda4b-75fa-4abc-ab2c-3fbc1244e800',
    address: "72-01, Jalan Setia Tropika 1/14, Setia Tropika, 81200 Johor Bahru, Johor Darul Ta'zim.",
  },
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

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[1px]">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[1px]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const MapPinIcon = () => (
  <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[2px]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const ChevronRight = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[3px]">
    <path d="M9 18l6-6-6-6" />
  </svg>
)
const QuestionMarkIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

export default function ContactUs({ onClose }: { onClose: () => void }) {
  const [faqOpen, setFaqOpen] = useState(false)

  return (
    <section
      className="relative flex overflow-hidden"
      style={{
        height: '100%',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
        borderBottom: '3px solid #007b85',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(11,177,190,0.07) 0%, transparent 50%)' }} />

      {/* ── Column 1: Logo — black background, doubled width ── */}
      <div className="bg-black border-r border-gray-800 flex-shrink-0 w-[320px] md:w-[480px] lg:w-[480px] flex flex-col items-center px-4 md:px-8">
        {/* Centered logo + title */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6">
          <div className="size-[90px] md:size-[150px] lg:size-[190px] rounded-full overflow-hidden shadow-[0_12px_48px_rgba(0,123,133,0.3)] flex-shrink-0">
            <img src={ctosLogo} alt="CTOS Digital" className="size-full object-cover" />
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-[14px] md:text-[18px] lg:text-[20px] font-manrope tracking-tight">CTOS Digital</p>
            <p className="text-gray-400 text-[11px] md:text-[12px] font-manrope mt-1 leading-snug">Malaysia's #1 Credit<br />Intelligence Platform</p>
          </div>
        </div>
        {/* Close button pinned to bottom center */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-[#007b85] hover:bg-[#006570] text-white text-[13px] font-semibold font-manrope px-8 py-2.5 transition-colors"
          style={{ borderRadius: '10px 10px 0 0' }}
          aria-label="Close contact us"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          Close
        </button>
      </div>

      {/* ── Column 2: Title bar + contact details + map ── */}
      <div className="flex-1 flex flex-col border-r border-gray-200 min-w-0">

        {/* Title bar */}
        <div className="flex items-center justify-between px-5 md:px-7 pt-4 pb-3 border-b border-gray-200 flex-shrink-0">
          <h2 className="font-semibold text-[16px] font-manrope text-gray-500">
            Contact us
          </h2>
        </div>

        {/* Body: stacked boxes */}
        <div className="flex-1 flex flex-col gap-3 px-5 md:px-6 py-4 overflow-y-auto">

          {/* ── Box 1: HQ address + map ── */}
          <div className="rounded-[12px] border border-gray-200 bg-white shadow-sm p-4 flex gap-4 flex-shrink-0">
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <p
                className="font-extrabold text-[18px] md:text-[27px] leading-tight tracking-[-0.5px] font-manrope bg-clip-text text-transparent gradient-animate pb-1"
                style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #0bb1be 20%, #F15D22 60%, #2d9f4e 80%, #007b85 100%)', backgroundSize: '300% 100%' }}
              >
                CTOS Data Systems Sdn Bhd
              </p>
              <div className="flex items-start gap-1.5">
                <MapPinIcon />
                <p className="text-[13px] md:text-[14px] font-manrope leading-[1.6] text-gray-500">
                  Level 18, Menara CelcomDigi, No 6,<br />Persiaran Barat, Seksyen 52,<br />Petaling Jaya, 46200, Selangor.
                </p>
              </div>
              <div className="mt-1 pt-2 border-t border-gray-200">
                <p className="text-gray-700 text-[11px] font-manrope font-bold tracking-[0.6px] mb-1">Service Centre (HQ)</p>
                <div className="flex items-center gap-1.5">
                  <ClockIcon />
                  <span className="text-gray-500 text-[13px] md:text-[14px] font-manrope">Mon – Fri</span>
                  <span className="text-gray-900 text-[13px] md:text-[14px] font-manrope font-semibold">8:30am – 5:30pm</span>
                </div>
              </div>
            </div>
            {/* Right: Google Map */}
            <div className="hidden md:block flex-shrink-0 rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)]" style={{ width: 400, height: 180 }}>
              <iframe
                title="CTOS HQ Location"
                src="https://maps.google.com/maps?q=Menara+CelcomDigi,+Petaling+Jaya,+Selangor&output=embed"
                width="400"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Box 2: Contact Centre ── */}
          <div className="rounded-[12px] border border-gray-200 bg-white shadow-sm p-4 flex-shrink-0">
            <div className="flex gap-6">
              {/* Phones */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-700 text-[11px] font-manrope font-bold tracking-[0.6px] mb-2">Contact centre</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <PhoneIcon />
                    <span className="text-gray-500 text-[13px] md:text-[14px] font-manrope">Personal</span>
                    <a href="tel:+60327228833" className="text-[#007b85] text-[13px] md:text-[14px] font-manrope font-semibold hover:underline">+603 2722 8833</a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <PhoneIcon />
                    <span className="text-gray-500 text-[13px] md:text-[14px] font-manrope">Business</span>
                    <a href="tel:+60327228882" className="text-[#007b85] text-[13px] md:text-[14px] font-manrope font-semibold hover:underline">+603 2722 8882</a>
                  </div>
                </div>
              </div>
              {/* Hours */}
              <div className="flex-1 min-w-0">
                <p className="text-gray-700 text-[11px] font-manrope font-bold tracking-[0.6px] mb-2">Contact centre hours</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <ClockIcon />
                    <span className="text-gray-500 text-[13px] md:text-[14px] font-manrope whitespace-nowrap w-[58px]">Mon – Fri</span>
                    <span className="text-gray-900 text-[13px] md:text-[14px] font-manrope font-semibold whitespace-nowrap">8:00am – 7:00pm</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon />
                    <span className="text-gray-500 text-[13px] md:text-[14px] font-manrope whitespace-nowrap w-[58px]">Sat – Sun</span>
                    <span className="text-gray-900 text-[13px] md:text-[14px] font-manrope font-semibold whitespace-nowrap">9:00am – 5:00pm</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon />
                    <span className="text-gray-500 text-[13px] md:text-[14px] font-manrope">Public holidays</span>
                    <span className="text-[#f59e0b] text-[13px] md:text-[14px] font-manrope font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Box 3: FAQ prompt ── */}
          <div className="rounded-[12px] border border-[#007b85]/20 bg-[#007b85]/5 p-4 flex-shrink-0">
            <div className="flex items-start gap-3">
              <QuestionMarkIcon />
              <div className="flex-1 min-w-0">
                <p className="text-gray-700 text-[13px] md:text-[14px] font-manrope leading-[1.6]">
                  Before you contact us, do you want to read some frequently asked questions?{' '}
                  <button
                    onClick={() => setFaqOpen(true)}
                    className="text-[#007b85] font-semibold hover:underline underline-offset-2 transition-colors"
                  >
                    Browse our FAQs →
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Column 3: Branch offices ── */}
      <div className="hidden xl:flex flex-col flex-shrink-0 w-[300px] 2xl:w-[360px] border-r border-gray-200 overflow-y-auto">
        <div className="px-4 pt-4 pb-2 flex-shrink-0">
          <p className="text-gray-700 text-[11px] font-manrope font-bold tracking-[0.6px]">
            Branch offices
          </p>
        </div>
        <div className="flex flex-col divide-y divide-gray-200">
          {branches.map((branch) => (
            <div key={branch.name} className="px-4 py-3 flex flex-col gap-2">
              <div className="w-full h-[70px] rounded-[8px] overflow-hidden flex-shrink-0">
                <img src={branch.img} alt={branch.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-900 font-semibold text-[13px] font-manrope leading-tight">{branch.name}</p>
              <div className="flex items-start gap-1.5">
                <MapPinIcon />
                <p className="text-gray-500 text-[10px] font-manrope leading-[1.5]">{branch.address}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon />
                <p className="text-gray-500 text-[10px] font-manrope">Mon – Fri, 8:30am – 5:30pm</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ slide panel (hidden by default, slides in from right) ── */}
      <div
        className={`absolute top-0 right-0 h-full w-[300px] xl:w-[320px] bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.1)] flex flex-col z-30 transition-transform duration-300 ease-in-out ${faqOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 flex-shrink-0">
          <p className="text-gray-900 text-[13px] font-manrope font-bold tracking-[0.4px]">Credit report FAQs</p>
          <button
            onClick={() => setFaqOpen(false)}
            className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
            aria-label="Close FAQs"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* FAQ list */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          <div className="flex flex-col gap-0.5">
            {faqs.map((q, i) => (
              <a
                key={i}
                href="https://ctoscredit.com.my/learn/faqs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 px-2 py-2 rounded-[6px] hover:bg-gray-50 transition-colors group"
              >
                <ChevronRight />
                <span className="text-gray-500 group-hover:text-gray-900 text-[13px] font-manrope leading-[1.5] transition-colors">{q}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Panel footer CTA */}
        <div className="px-5 pt-3 pb-10 border-t border-gray-200 flex-shrink-0">
          <a
            href="https://ctoscredit.com.my/learn/faqs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#007b85] hover:bg-[#006570] text-white text-[13px] font-semibold font-manrope transition-colors"
          >
            Read more
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  )
}
