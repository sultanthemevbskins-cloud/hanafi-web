import { Button } from '@ctos/ui'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-[2px]">
    <circle cx="8" cy="8" r="7" fill="#007b8518" />
    <path d="M5 8l2 2 4-4" stroke="#007b85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const creditManagerFeatures = [
  'Comprehensive client credit reports',
  'Automated monitoring & profile alerts',
  'Advanced business credit scoring',
  'CTOS eTR electronic trade reference',
]

const singleReportFeatures = [
  'SSM filings & company CCRIS data',
  'Litigation & bankruptcy records',
  'Directorship & ownership links',
  'Pay per report, no commitment',
]

const bizSecureFeatures = [
  '24/7 monitoring & threat detection',
  'Expert-led rapid incident response',
  'Ransomware & data breach protection',
  'PDPA & Cyber Act 2024 compliant',
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

export default function CommercialProducts() {
  return (
    <section id="commercial" className="py-16" style={{ background: 'radial-gradient(ellipse at 10% 0%, rgba(0,123,133,0.05) 0%, rgba(0,123,133,0) 40%), linear-gradient(90deg, #fafbfc 0%, #fafbfc 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* Heading */}
        <div className="mb-11">
          <h2 className="font-poppins font-bold text-[54px] leading-[56.7px] tracking-[-1.5px] mb-5">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #f2b530 100%)' }}
            >
              For Business.{' '}
            </span>
            <span className="text-[#5c5c5c]">Evaluate. Monitor. Protect.</span>
          </h2>
          <p className="mt-5 text-[#374151] text-[15px] md:text-[17px] leading-[26.35px] font-manrope max-w-[900px]">
            Manage business credit risk, run instant company checks, and secure your operations, three essential tools for every Malaysian business.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">

          {/* Card 1: Credit Manager */}
          <div className="group relative overflow-hidden bg-white rounded-[10px] shadow-[0px_1px_0px_rgba(17,24,39,0.04),0px_8px_12px_rgba(17,24,39,0.06)] flex flex-col items-center pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#0bb1be] md:bg-[#0bb1be]/20">
              <div className="absolute inset-0 bg-[#0bb1be] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
            <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] text-center font-jakarta">Credit Manager</h3>
            <p className="mt-5 text-[#374151] text-[14.5px] leading-[22.48px] text-center font-manrope">
              Evaluate, monitor, and manage business credit risk on one interactive platform.
            </p>
            <div className="mt-5 w-full px-6">
              <FeatureList items={creditManagerFeatures} />
            </div>
            <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-6">
              <span className="font-extrabold text-[22px] leading-[34.1px] text-[#102a2e] font-jakarta">Subscription plan</span>
              <p className="text-[12px] text-[#6b7280] font-manrope text-center">Flexible plans for teams of all sizes.</p>
              <Button variant="primary" className="w-full py-3.5 btn-cta-pricing">Get Started</Button>
              <Button variant="link" as="a" href="#" className="pt-2.5">Learn More</Button>
            </div>
          </div>

          {/* Card 2: Single Report */}
          <div className="group relative overflow-hidden bg-white rounded-[10px] shadow-[0px_1px_0px_rgba(17,24,39,0.04),0px_8px_12px_rgba(17,24,39,0.06)] flex flex-col items-center pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#f15d22] md:bg-[#f15d22]/20">
              <div className="absolute inset-0 bg-[#f15d22] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
            <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] text-center font-jakarta">Single Report</h3>
            <p className="mt-5 text-[#374151] text-[14.5px] leading-[22.48px] text-center font-manrope">
              Buy a single comprehensive business credit report for any Malaysian company. No subscription required.
            </p>
            <div className="mt-5 w-full px-6">
              <FeatureList items={singleReportFeatures} />
            </div>
            <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-6">
              <span className="font-extrabold text-[22px] leading-[34.1px] text-[#102a2e] font-jakarta">Pay per report</span>
              <p className="text-[12px] text-[#6b7280] font-manrope text-center">No commitment, buy only what you need.</p>
              <Button variant="primary" className="w-full py-3.5 btn-cta-pricing">Buy Report</Button>
              <Button variant="link" as="a" href="#" className="pt-2.5">Learn More</Button>
            </div>
          </div>

          {/* Card 3: CTOS BizSecure */}
          <div className="group relative overflow-hidden bg-white rounded-[10px] shadow-[0px_1px_0px_rgba(17,24,39,0.04),0px_8px_12px_rgba(17,24,39,0.06)] flex flex-col items-center pt-8 pb-7 px-7 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#007b85] md:bg-[#007b85]/20">
              <div className="absolute inset-0 bg-[#007b85] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
            </div>
            <h3 className="font-extrabold text-[22px] leading-[25.3px] text-[#102a2e] text-center font-jakarta">CTOS BizSecure</h3>
            <p className="mt-5 text-[#374151] text-[14.5px] leading-[22.48px] text-center font-manrope">
              Always-on threat detection and rapid expert response, no in-house security team required.
            </p>
            <div className="mt-5 w-full px-6">
              <FeatureList items={bizSecureFeatures} />
            </div>
            <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-6">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-[22px] leading-[34.1px] text-[#102a2e] font-jakarta">RM100</span>
                <span className="font-semibold text-[14px] leading-[21.7px] text-[#6b7280] font-jakarta">/ device / month</span>
              </div>
              <p className="text-[12px] text-[#6b7280] font-manrope text-center">Protects up to 200 devices.</p>
              <Button variant="primary" className="w-full py-3.5 btn-cta-pricing">Get Protected</Button>
              <Button variant="link" as="a" href="#" className="pt-2.5">Learn More</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
