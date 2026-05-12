import { useState } from 'react'
import { Button } from '@ctos/ui'

const checkIcon = 'https://www.figma.com/api/mcp/asset/a1d019ad-248e-4eb9-94c7-beb2564fe313'

const consumerPhoto = 'https://www.figma.com/api/mcp/asset/5f47b93e-275a-4a9b-9b31-bda9a64edea4'
const commercialPhoto = 'https://www.figma.com/api/mcp/asset/e7ee0a63-443e-4082-99fc-cae1c7e9c94e'
const corporatePhoto = 'https://www.figma.com/api/mcp/asset/8556467b-2863-43f2-b47e-8040d642e4a3'
const fibanksPhoto = 'https://www.figma.com/api/mcp/asset/7a5e1fe9-44f2-4e6e-a260-ce706a685898'
const globalPhoto = 'https://www.figma.com/api/mcp/asset/bbcbcae4-462c-4ae8-84ca-238aa8a50ee2'

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

const platformCards = [
  { title: 'Consumer',   desc: 'Check your CTOS Score, monitor identity theft, compare matched loans, and dispute errors on your credit record.', cta: 'Get free report â†’',   ctaColor: 'text-[#007b85]', bg: 'linear-gradient(135deg, #e5deff 0%, #d2efe0 100%)', photo: consumerPhoto,   imgAnim: 'anim-consumer'   },
  { title: 'Commercial', desc: 'SMEs and traders, search 1.3M+ companies, run litigation checks, and screen partners for compliance risk.',      cta: 'Search companies â†’', ctaColor: 'text-[#f15d22]', bg: 'linear-gradient(135deg, #ffe9d0 0%, #fcd0ab 100%)', photo: commercialPhoto, imgAnim: 'anim-commercial' },
  { title: 'Corporate',  desc: 'Bulk credit decisioning, KYC, AML screening, and portfolio monitoring for large enterprises and conglomerates.', cta: 'Talk to sales â†’',    ctaColor: 'text-[#007b85]', bg: 'linear-gradient(135deg, #e5deff 0%, #d6ccfa 100%)', photo: corporatePhoto,  imgAnim: 'anim-corporate'  },
  { title: 'FI / Banks', desc: 'CCRIS integration, real-time API data services, score analytics, and end-to-end loan origination workflows.',    cta: 'Request a demo â†’',  ctaColor: 'text-[#007b85]', bg: 'linear-gradient(135deg, #eaecef 0%, #c8d5f8 100%)', photo: fibanksPhoto,   imgAnim: 'anim-fibanks'   },
  { title: 'Global',     desc: 'Cross-border credit intelligence across ASEAN, sanctions, PEP screening, and international business reports.',    cta: 'Explore markets â†’', ctaColor: 'text-[#007b85]', bg: 'linear-gradient(135deg, #d7efe2 0%, #bce3ce 100%)', photo: globalPhoto,    imgAnim: 'anim-global'    },
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 py-[5px]">
          <div className="flex-shrink-0 w-4 h-[19px] flex items-start pt-[3px]">
            <img src={checkIcon} alt="" className="size-4" />
          </div>
          <span className="text-[#374151] text-[14px] leading-[21px] font-manrope">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Pricing({ onSubscribe, onGetCreditReport }: { onSubscribe?: (plan: 'monthly' | 'yearly') => void; onGetCreditReport?: () => void }) {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="py-16" style={{ background: 'radial-gradient(ellipse at 90% 0%, rgba(0,123,133,0.05) 0%, rgba(0,123,133,0) 40%), linear-gradient(90deg, #fafbfc 0%, #fafbfc 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* Welcome heading */}
        <div className="mb-11">
          <h2 className="font-extrabold text-[36px] md:text-[54px] leading-tight md:leading-[56.7px] tracking-[-1px] md:tracking-[-1.5px] bg-clip-text text-transparent font-jakarta pb-2 gradient-animate"
            style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #0bb1be 20%, #F15D22 60%, #2d9f4e 80%, #007b85 100%)', backgroundSize: '300% 100%' }}>
            Welcome to CTOS Digital.
          </h2>
          <p className="mt-5 text-[#374151] text-[15px] md:text-[17px] leading-[26.35px] font-manrope max-w-[900px]">
            Whether you're an everyday consumer or part of a large financial institution, CTOS provides credit insights designed to support every level of decision-making. Take a moment to check your credit health today!
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

        {/* Platform section */}
        <div className="mt-16">
          <p className="text-[#007b85] text-[12px] font-extrabold uppercase tracking-[2.4px] font-manrope mb-9">Trusted Intelligence</p>
          <h2 className="font-extrabold text-[36px] md:text-[54px] leading-tight md:leading-[56.7px] tracking-[-1px] md:tracking-[-1.5px] font-jakarta pb-2 gradient-animate"
            style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #0bb1be 20%, #F15D22 60%, #2d9f4e 80%, #007b85 100%)', backgroundSize: '300% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
            CTOS Digital.{' '}
            <span style={{ WebkitTextFillColor: '#5c5c5c', color: '#5c5c5c' }}>One trusted platform.</span>
          </h2>
          <p className="mt-5 text-[#374151] text-[15px] md:text-[17px] leading-[26.35px] font-manrope max-w-[720px]">
            From individual consumers to global financial institutions, CTOS delivers credit intelligence tailored to every scale of decision-making.
          </p>

          {/* Platform cards */}
          <div className="mt-[60px] -mx-6 md:mx-0">
            <div className="flex md:grid gap-[14px] md:gap-[18px] px-6 md:px-0 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scroll-smooth scrollbar-hide"
              style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}>
              {platformCards.map((card) => (
                <a key={card.title} href="#"
                  className="group flex-shrink-0 w-[220px] md:w-auto snap-start bg-white border border-[#eaecef] rounded-[14px] overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out">
                  <div className="relative h-[150px] md:h-[160px] overflow-hidden rounded-t-[14px]">
                    <img src={card.photo} alt={card.title} className={`absolute inset-0 w-full h-full object-cover ${card.imgAnim}`} />
                    <div className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-t-[14px]" style={{ background: card.bg }} />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="font-extrabold text-[16px] md:text-[18px] leading-[28px] tracking-[-0.3px] text-[#102a2e] font-jakarta mb-2">{card.title}</h3>
                    <p className="text-[#374151] text-[12px] md:text-[13px] leading-[20px] font-manrope flex-1">{card.desc}</p>
                    <span className={`mt-3 text-[12px] md:text-[13px] font-bold font-manrope leading-[20px] ${card.ctaColor}`}>{card.cta}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

