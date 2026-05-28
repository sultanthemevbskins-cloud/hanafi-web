import { useState, useRef } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? ''

type Status = 'idle' | 'sending' | 'success' | 'error'

const topics = [
  'General Enquiry',
  'Credit Report',
  'Credit Score',
  'Dispute / Correction',
  'Business / Commercial',
  'Technical Support',
  'Partnership',
  'Other',
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

const PHONE_PATH = "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"

type Props = { onOpenContact?: () => void }

export default function ContactForm({ onOpenContact }: Props) {
  const [status, setStatus]     = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [faqOpen, setFaqOpen]   = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const data = new FormData(e.currentTarget)
    const payload = {
      access_key: ACCESS_KEY,
      subject: `[CTOS Web] ${data.get('topic') ?? 'Enquiry'} from ${data.get('name')}`,
      from_name: 'CTOS Website Contact Form',
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone') || 'Not provided',
      topic: data.get('topic'),
      message: data.get('message'),
      botcheck: '',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
        setErrorMsg(json.message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* ══════════════════════════════════════════════════════════════════
            TOP ROW — "Get in Touch" heading (left) + Call Us card (right)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-end mb-10 md:mb-12">

          {/* Heading */}
          <div>
            <p className="font-poppins font-bold text-[12px] text-[#007b85] uppercase tracking-[2.4px] mb-4">
              Get in Touch
            </p>
            <h2 className="font-poppins font-bold text-[32px] md:text-[42px] leading-tight tracking-[-1px] mb-4">
              <span className="text-[#5c5c5c]">How can we </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #f2b530 100%)' }}
              >
                help you?
              </span>
            </h2>
            <p className="font-poppins text-[15px] text-[#374151] leading-relaxed max-w-[520px]">
              Fill in the form below and our team will get back to you within 1–2 business days.
            </p>
          </div>

          {/* ── Call Us card ── */}
          <div className="rounded-[16px] border border-[#e5e7eb] bg-white overflow-hidden shadow-sm">
            {/* Teal header */}
            <div className="bg-[#007b85] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={PHONE_PATH} />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-bold text-[15px] text-white">Call Us</p>
                <p className="font-poppins text-[11px] text-white/70">Mon – Fri, 8am – 7pm</p>
              </div>
            </div>

            {/* Numbers */}
            <div className="px-5 py-4 flex flex-col gap-3">
              {/* Personal */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-poppins text-[11px] text-[#6b7280] uppercase tracking-[0.6px] font-semibold">Personal</p>
                  <a href="tel:+60327228833" className="font-poppins font-bold text-[18px] text-[#102a2e] hover:text-[#007b85] transition-colors tracking-[-0.3px]">
                    +603 2722 8833
                  </a>
                </div>
                <a href="tel:+60327228833" className="w-9 h-9 rounded-full bg-[rgba(0,123,133,0.08)] hover:bg-[rgba(0,123,133,0.15)] flex items-center justify-center transition-colors flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={PHONE_PATH} /></svg>
                </a>
              </div>

              <div className="border-t border-[#f3f4f6]" />

              {/* Business */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-poppins text-[11px] text-[#6b7280] uppercase tracking-[0.6px] font-semibold">Business</p>
                  <a href="tel:+60327228882" className="font-poppins font-bold text-[18px] text-[#102a2e] hover:text-[#007b85] transition-colors tracking-[-0.3px]">
                    +603 2722 8882
                  </a>
                </div>
                <a href="tel:+60327228882" className="w-9 h-9 rounded-full bg-[rgba(0,123,133,0.08)] hover:bg-[rgba(0,123,133,0.15)] flex items-center justify-center transition-colors flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={PHONE_PATH} /></svg>
                </a>
              </div>

              {/* More options */}
              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  className="mt-1 w-full flex items-center justify-center gap-2 h-[40px] rounded-[10px] border border-[#007b85]/30 bg-[rgba(0,123,133,0.04)] hover:bg-[rgba(0,123,133,0.08)] text-[#007b85] font-poppins font-semibold text-[13px] transition-all"
                >
                  More contact options
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            BOTTOM ROW — Form (left) + FAQs (right)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">

          {/* ── Form ── */}
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name" type="text" required placeholder="e.g. Ahmad bin Ibrahim"
                  className="h-[46px] px-4 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email" type="email" required placeholder="you@example.com"
                  className="h-[46px] px-4 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Phone Number
                  <span className="ml-1 text-[11px] font-normal text-[#9ca3af]">(optional)</span>
                </label>
                <input
                  name="phone" type="tel" placeholder="+60 12-345 6789"
                  className="h-[46px] px-4 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Topic <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="topic" required defaultValue=""
                    className="appearance-none w-full h-[46px] px-4 pr-10 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select a topic…</option>
                    {topics.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message" required rows={5} placeholder="Tell us how we can help you…"
                  className="px-4 py-3 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] resize-none focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>
            </div>

            {/* Status banners */}
            {status === 'success' && (
              <div className="mt-5 flex items-start gap-3 p-4 rounded-[10px] bg-[#ecfdf5] border border-[#6ee7b7]">
                <svg className="flex-shrink-0 mt-0.5 text-[#059669]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <p className="font-poppins font-semibold text-[13px] text-[#065f46]">Message sent successfully!</p>
                  <p className="font-poppins text-[12px] text-[#047857] mt-0.5">Our team will get back to you within 1–2 business days.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 flex items-start gap-3 p-4 rounded-[10px] bg-[#fef2f2] border border-[#fca5a5]">
                <svg className="flex-shrink-0 mt-0.5 text-[#dc2626]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div>
                  <p className="font-poppins font-semibold text-[13px] text-[#991b1b]">Submission failed</p>
                  <p className="font-poppins text-[12px] text-[#b91c1c] mt-0.5">{errorMsg}</p>
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit" disabled={status === 'sending'}
                className="inline-flex items-center gap-2 h-[48px] px-8 rounded-full bg-[#007b85] hover:bg-[#055157] disabled:bg-[#007b85]/60 text-white font-poppins font-semibold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(0,123,133,0.28)] hover:shadow-[0_8px_28px_rgba(0,123,133,0.38)] hover:-translate-y-0.5"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
              <p className="mt-3 font-poppins text-[12px] text-[#9ca3af]">
                By submitting, you agree to our{' '}
                <a href="#" className="text-[#007b85] hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </form>

          {/* ── FAQs with collapse ── */}
          <div className="rounded-[16px] border border-[#e5e7eb] bg-white overflow-hidden shadow-sm">
            {/* Header */}
            <div className="px-5 py-4 border-b border-[#f3f4f6] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[rgba(0,123,133,0.10)] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <p className="font-poppins font-semibold text-[13px] text-[#102a2e]">Frequently Asked Questions</p>
            </div>

            {/* Always-visible first 3 */}
            <div className="flex flex-col divide-y divide-[#f3f4f6]">
              {faqs.slice(0, 3).map((q, i) => (
                <FaqRow key={i} question={q} />
              ))}
            </div>

            {/* Collapsible remaining 7 */}
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: faqOpen ? `${(faqs.length - 3) * 56}px` : '0px' }}
            >
              <div className="flex flex-col divide-y divide-[#f3f4f6] border-t border-[#f3f4f6]">
                {faqs.slice(3).map((q, i) => (
                  <FaqRow key={i + 3} question={q} />
                ))}
              </div>
            </div>

            {/* Expand / collapse toggle */}
            <button
              onClick={() => setFaqOpen(v => !v)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 border-t border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors group"
            >
              <span className="font-poppins font-semibold text-[12px] text-[#007b85]">
                {faqOpen ? 'Show less' : `Show ${faqs.length - 3} more`}
              </span>
              <svg
                className={`text-[#007b85] transition-transform duration-300 ${faqOpen ? 'rotate-180' : 'rotate-0'}`}
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[#f3f4f6]">
              <a
                href="https://ctoscredit.com.my/learn/faqs/"
                target="_blank" rel="noopener noreferrer"
                className="font-poppins font-semibold text-[12px] text-[#007b85] hover:underline inline-flex items-center gap-1"
              >
                View all FAQs
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Small helper so each FAQ row isn't repeated inline ── */
function FaqRow({ question }: { question: string }) {
  return (
    <a
      href="https://ctoscredit.com.my/learn/faqs/"
      target="_blank" rel="noopener noreferrer"
      className="flex items-start gap-2.5 px-5 py-3 hover:bg-[#f9fafb] transition-colors group"
    >
      <svg className="flex-shrink-0 mt-[3px] text-[#007b85]" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
      <span className="font-poppins text-[12.5px] text-[#374151] group-hover:text-[#102a2e] leading-snug transition-colors">{question}</span>
    </a>
  )
}
