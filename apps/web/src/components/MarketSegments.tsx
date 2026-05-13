const imgConsumer   = 'https://www.figma.com/api/mcp/asset/ae2f7ba8-ce86-4ff6-9f44-4982be5c92a2'
const imgCommercial = 'https://www.figma.com/api/mcp/asset/903a9637-a41b-4161-a1e5-faf941fb5a90'
const imgCorporate  = 'https://www.figma.com/api/mcp/asset/f66eee15-9964-4755-b552-968dbc7ecfff'
const imgFiBanks    = 'https://www.figma.com/api/mcp/asset/80cdb8c7-c939-47bd-b40d-627fb9922ca9'
const imgGlobal     = 'https://www.figma.com/api/mcp/asset/c1e6fee0-6a3d-46d6-9929-e17293fd7bef'

const segments = [
  {
    name: 'Consumer',
    image: imgConsumer,
    gradient: 'linear-gradient(144deg, #e5deff 0%, #d2efe0 100%)',
    desc: 'Check your CTOS Score, monitor identity theft, compare matched loans, and dispute errors on your credit record.',
    cta: 'Get free report →',
    ctaColor: 'text-[#007b85]',
  },
  {
    name: 'Commercial',
    image: imgCommercial,
    gradient: 'linear-gradient(144deg, #ffe9d0 0%, #fcd0ab 100%)',
    desc: 'SMEs and traders, search 1.3M+ companies, run litigation checks, and screen partners for compliance risk.',
    cta: 'Search companies →',
    ctaColor: 'text-[#f15d22]',
  },
  {
    name: 'Corporate',
    image: imgCorporate,
    gradient: 'linear-gradient(144deg, #e5deff 0%, #d6ccfa 100%)',
    desc: 'Bulk credit decisioning, KYC, AML screening, and portfolio monitoring for large enterprises and conglomerates.',
    cta: 'Talk to sales →',
    ctaColor: 'text-[#007b85]',
  },
  {
    name: 'FI / Banks',
    image: imgFiBanks,
    gradient: 'linear-gradient(144deg, #eaecef 0%, #c8d5f8 100%)',
    desc: 'CCRIS integration, real-time API data services, score analytics, and end-to-end loan origination workflows.',
    cta: 'Request a demo →',
    ctaColor: 'text-[#007b85]',
  },
  {
    name: 'Global',
    image: imgGlobal,
    gradient: 'linear-gradient(144deg, #d7efe2 0%, #bce3ce 100%)',
    desc: 'Cross-border credit intelligence across ASEAN, sanctions, PEP screening, and international business reports.',
    cta: 'Explore markets →',
    ctaColor: 'text-[#007b85]',
  },
]

export default function MarketSegments() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <p className="font-poppins font-bold text-[12px] text-[#007b85] uppercase tracking-[2.4px] mb-[54px]">
          Trusted Intelligence
        </p>

        {/* Heading */}
        <h2 className="font-poppins font-bold text-[54px] leading-[56.7px] tracking-[-1.5px] mb-5">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #0bb1be 20%, #f15d22 60%, #2d9f4e 80%, #007b85 100%)' }}
          >
            CTOS Digital.{' '}
          </span>
          <span className="text-[#5c5c5c]">One trusted platform.</span>
        </h2>

        {/* Sub-description */}
        <p className="font-poppins font-normal text-[17px] text-[#374151] leading-[26.35px] max-w-[720px] mb-16">
          From individual consumers to global financial institutions, CTOS delivers credit intelligence tailored to every scale of decision-making.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[18px]">
          {segments.map((seg) => (
            <a
              key={seg.name}
              href="#"
              className="bg-white border border-[#eaecef] rounded-[14px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image area */}
              <div className="relative h-[160px] overflow-hidden rounded-t-[14px]">
                <img
                  src={seg.image}
                  alt={seg.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-50 rounded-t-[14px]"
                  style={{ backgroundImage: seg.gradient }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-5 py-5 gap-0">
                {/* Card title â€” Poppins Bold 18px */}
                <h3 className="font-poppins font-bold text-[18px] text-[#102a2e] leading-[28px] tracking-[-0.3px] mb-3">
                  {seg.name}
                </h3>

                {/* Card description â€” Parkinsans Regular 13px (design change from Figma node 171:533) */}
                <p className="font-lato font-normal text-[13px] text-[#374151] leading-[20px] flex-1 mb-4">
                  {seg.desc}
                </p>

                {/* CTA link â€” Poppins SemiBold 13px */}
                <span className={`font-poppins font-semibold text-[13px] leading-[20px] ${seg.ctaColor}`}>
                  {seg.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

