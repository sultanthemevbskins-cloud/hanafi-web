import { useState } from 'react'
import { Button } from '@ctos/ui'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-[2px]">
    <circle cx="8" cy="8" r="7" fill="#007b8518" />
    <path d="M5 8l2 2 4-4" stroke="#007b85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const creditReportFeatures = [
  'CTOS Score',
  'CCRIS Records (BNM)',
  'Everything in MyCTOS Basic Report',
]

const secureIdFeatures = [
  'Credit Monitoring alerts',
  'Dark web & data breach monitoring',
  '4 MyCTOS Score reports yearly',
  'Fraud & Takaful Coverage',
]

const basicReportFeatures = [
  'Personal Info (NRD)',
  'Business and Directorship (SSM)',
  'Litigation & Bankruptcy records',
  'Non Banking (eTR)',
  '2 Free MyCTOS Basic Reports a year',
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 py-[5px]">
          <CheckIcon />
          <span className="text-[#374151] text-[14px] leading-[21px] font-manrope">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ConsumerProducts({ onSubscribe, onGetCreditReport }: { onSubscribe?: (plan: 'monthly' | 'yearly') => void; onGetCreditReport?: () => void }) {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-16" style={{ background: 'radial-gradient(ellipse at 90% 0%, rgba(0,123,133,0.05) 0%, rgba(0,123,133,0) 40%), linear-gradient(90deg, #fafbfc 0%, #fafbfc 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* Welcome heading */}
        <div className="mb-11">
          <h2 className="font-poppins font-bold text-[54px] leading-[56.7px] tracking-[-1.5px] mb-5">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #f2b530 100%)' }}
            >
              For Consumers.{' '}
            </span>
            <span className="text-[#5c5c5c]">Check. Protect. Find.</span>
          </h2>
          <p className="mt-5 text-[#374151] text-[15px] md:text-[17px] leading-[26.35px] font-manrope max-w-[900px]">
            Get your full CTOS Score report, safeguard your identity around the clock with SecureID, and discover the best loan matched to your profile, three ways to take control of your financial health.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">

          {/* Card 1: Credit Report */}
          <div className="group relative overflow-hidden bg-white rounded-[10px] shadow-[0px_1px_0px_rgba(17,24,39,0.04),0px_8px_12px_rgba(17,24,39,0.06)] flex flex-col items-center pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#0bb1be] md:bg-[#0bb1be]/20">
              <div className="absolute inset-0 bg-[#0bb1be] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
            <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] text-center font-jakarta">Credit Report</h3>
            <p className="mt-5 text-[#374151] text-[14.5px] leading-[22.48px] text-center font-manrope">
              Credit report and score with CCRIS records,<br />your complete credit snapshot for one adult.
            </p>
            <div className="mt-5 w-full px-6">
              <FeatureList items={creditReportFeatures} />
              <Button variant="link" as="a" href="#" className="text-[12px] underline mt-3 block leading-[18.6px]">
                View Sample Report
              </Button>
            </div>
            <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-6">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-[22px] leading-[34.1px] text-[#102a2e] font-jakarta">RM27.90</span>
                <span className="font-semibold text-[14px] leading-[21.7px] text-[#6b7280] font-jakarta">/ report</span>
              </div>
              <p className="text-[12px] text-[#6b7280] font-manrope text-center">All prices are inclusive of SST.</p>
              <Button variant="primary" className="w-full py-3.5 btn-cta-pricing" onClick={onGetCreditReport}>Get it now</Button>
              <Button variant="link" as="a" href="#" className="pt-2.5">Learn More</Button>
            </div>
          </div>

          {/* Card 2: SecureID */}
          <div className="group relative overflow-hidden bg-white rounded-[10px] shadow-[0px_1px_0px_rgba(17,24,39,0.04),0px_8px_12px_rgba(17,24,39,0.06)] flex flex-col items-start pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#f15d22] md:bg-[#f15d22]/20">
              <div className="absolute inset-0 bg-[#f15d22] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
            <div className="w-full">
              <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] text-center w-full font-jakarta">SecureID</h3>
              <p className="mt-5 text-[#374151] text-[14.5px] leading-[22.48px] text-center font-manrope px-4">
                Real-time fraud alerts, dark web monitoring &amp; takaful coverage for one adult.
              </p>
              <div className="mt-5 px-6">
                <FeatureList items={secureIdFeatures} />
              </div>
            </div>
            <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-6">
              <div className="flex items-center gap-2.5">
                <span className={`text-[13px] font-semibold font-manrope ${!yearly ? 'text-[#102a2e]' : 'text-[#6b7280]'}`}>Monthly</span>
                <button onClick={() => setYearly(!yearly)} className="w-11 h-[22px] rounded-full bg-[#007b85] relative flex items-center px-0.5">
                  <span className={`size-[18px] rounded-[9px] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] transition-transform ${yearly ? 'translate-x-[22px]' : 'translate-x-0'}`} />
                </button>
                <span className={`text-[13px] font-semibold font-manrope ${yearly ? 'text-[#102a2e]' : 'text-[#6b7280]'}`}>Yearly</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-[22px] leading-[34.1px] text-[#102a2e] font-jakarta">{yearly ? 'RM8.25' : 'RM9.90'}</span>
                <span className="font-semibold text-[14px] leading-[21.7px] text-[#6b7280] font-jakarta">/ month</span>
              </div>
              <p className="text-[12px] text-[#6b7280] font-manrope text-center">3-month lock-in for monthly. Inclusive of SST.</p>
              <Button variant="primary" className="w-full py-3.5 btn-cta-pricing" onClick={() => onSubscribe?.(yearly ? 'yearly' : 'monthly')}>Subscribe now</Button>
              <Button variant="link" as="a" href="#" className="pt-2.5">Learn More</Button>
            </div>
          </div>

          {/* Card 3: Free Basic Report */}
          <div className="group relative overflow-hidden bg-white rounded-[10px] shadow-[0px_1px_0px_rgba(17,24,39,0.04),0px_8px_12px_rgba(17,24,39,0.06)] flex flex-col items-start pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#f2b530] md:bg-[#f2b530]/20">
              <div className="absolute inset-0 bg-[#f2b530] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
            <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] w-full font-jakarta">Free Basic Report</h3>
            <p className="mt-5 text-[#374151] text-[14.5px] leading-[22.48px] font-manrope">Free essential credit and identity report, without CCRIS &amp; Score.</p>
            <div className="mt-5 w-full px-6">
              <FeatureList items={basicReportFeatures} />
            </div>
            <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-6">
              <Button variant="primary" className="w-full py-3.5 btn-cta-pricing">Sign up now</Button>
              <Button variant="link" as="a" href="#" className="pt-2.5">Learn More</Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

