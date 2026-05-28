import { useState, useRef } from 'react'

// ─── Web3Forms access key ─────────────────────────────────────────────────────
// 1. Go to https://web3forms.com  →  Enter your email  →  Get Access Key
// 2. Paste the key into .env.local at the repo root:
//    VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
// 3. On Vercel: Settings → Environment Variables → add the same key
// The form still renders without the key; submissions will return an error
//  until a valid key is provided.
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

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
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

        {/* ── Header ── */}
        <div className="mb-10 md:mb-14">
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
          <p className="font-poppins text-[15px] text-[#374151] leading-relaxed max-w-[560px]">
            Fill in the form below and our team will get back to you within 1–2 business days.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">

          {/* ── Form ── */}
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Full name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ahmad bin Ibrahim"
                  className="h-[46px] px-4 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-[46px] px-4 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Phone Number
                  <span className="ml-1 text-[11px] font-normal text-[#9ca3af]">(optional)</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+60 12-345 6789"
                  className="h-[46px] px-4 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>

              {/* Topic */}
              <div className="flex flex-col gap-1.5">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Topic <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="topic"
                    required
                    defaultValue=""
                    className="appearance-none w-full h-[46px] px-4 pr-10 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select a topic…</option>
                    {topics.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {/* Chevron */}
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="font-poppins font-semibold text-[13px] text-[#102a2e]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help you…"
                  className="px-4 py-3 rounded-[10px] border border-[#d1d5db] bg-white font-poppins text-[14px] text-[#111827] placeholder:text-[#9ca3af] resize-none focus:outline-none focus:border-[#007b85] focus:ring-2 focus:ring-[rgba(0,123,133,0.15)] transition-all"
                />
              </div>
            </div>

            {/* Status messages */}
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
                type="submit"
                disabled={status === 'sending'}
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

          {/* ── Right sidebar: contact info cards ── */}
          <div className="flex flex-col gap-4">

            {/* Card: HQ */}
            <div className="rounded-[14px] border border-[#e5e7eb] bg-white p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(0,123,133,0.10)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-[13px] text-[#102a2e] mb-1">Head Office</p>
                <p className="font-poppins text-[12.5px] text-[#374151] leading-relaxed">
                  Tower 3, Avenue 7, The Horizon,<br />
                  Bangsar South, No. 8,<br />
                  Jalan Kerinchi, 59200 Kuala Lumpur
                </p>
              </div>
            </div>

            {/* Card: Phone */}
            <div className="rounded-[14px] border border-[#e5e7eb] bg-white p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(0,123,133,0.10)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-[13px] text-[#102a2e] mb-1">Contact Centre</p>
                <p className="font-poppins text-[12.5px] text-[#374151]">+603-2722 8811</p>
                <p className="font-poppins text-[11.5px] text-[#6b7280] mt-0.5">Mon – Fri, 9am – 6pm</p>
              </div>
            </div>

            {/* Card: Email */}
            <div className="rounded-[14px] border border-[#e5e7eb] bg-white p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(0,123,133,0.10)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007b85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-[13px] text-[#102a2e] mb-1">Email Us</p>
                <a href="mailto:customerservice@ctos.com.my" className="font-poppins text-[12.5px] text-[#007b85] hover:underline">
                  customerservice@ctos.com.my
                </a>
                <p className="font-poppins text-[11.5px] text-[#6b7280] mt-0.5">We reply within 1–2 business days</p>
              </div>
            </div>

            {/* Card: Response time badge */}
            <div className="rounded-[14px] border border-[#007b85]/20 bg-[rgba(0,123,133,0.05)] p-5 flex gap-4 items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#007b85] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-[13px] text-[#102a2e]">Avg. response time</p>
                <p className="font-poppins font-bold text-[22px] text-[#007b85] leading-tight">&lt; 24 hrs</p>
                <p className="font-poppins text-[11.5px] text-[#6b7280]">During business hours</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
