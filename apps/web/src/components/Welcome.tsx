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
    cta: 'Get free report',
  },
  {
    name: 'Commercial',
    image: imgCommercial,
    gradient: 'linear-gradient(144deg, #ffe9d0 0%, #fcd0ab 100%)',
    desc: 'SMEs and traders, search 1.3M+ companies, run litigation checks, and screen partners for compliance risk.',
    cta: 'Search companies',
  },
  {
    name: 'Corporate',
    image: imgCorporate,
    gradient: 'linear-gradient(144deg, #e5deff 0%, #d6ccfa 100%)',
    desc: 'Bulk credit decisioning, KYC, AML screening, and portfolio monitoring for large enterprises and conglomerates.',
    cta: 'Talk to sales',
  },
  {
    name: 'FI / Banks',
    image: imgFiBanks,
    gradient: 'linear-gradient(144deg, #eaecef 0%, #c8d5f8 100%)',
    desc: 'CCRIS integration, real-time API data services, score analytics, and end-to-end loan origination workflows.',
    cta: 'Request a demo',
  },
  {
    name: 'Global',
    image: imgGlobal,
    gradient: 'linear-gradient(144deg, #d7efe2 0%, #bce3ce 100%)',
    desc: 'Cross-border credit intelligence across ASEAN, sanctions, PEP screening, and international business reports.',
    cta: 'Explore markets',
  },
]

export default function Welcome() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* Section label */}
        <p className="font-poppins font-bold text-[12px] text-[#007b85] uppercase tracking-[2.4px] mb-[54px]">
          Trusted Intelligence
        </p>

        {/* Heading */}
        <h2 className="font-poppins font-bold text-[54px] leading-[56.7px] tracking-[-1.5px] mb-5">
          <span className="text-[#5c5c5c]">Welcome to </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #007b85 0%, #f2b530 100%)' }}
          >
            CTOS Digital.
          </span>
        </h2>

        {/* Sub-description */}
        <p className="font-poppins font-normal text-[17px] text-[#374151] leading-[26.35px] mb-16">
          Whether you're an everyday consumer or part of a large financial institution, CTOS provides credit insights designed to support every level of decision-making. Take a moment to check your credit health today!
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[18px]">
          {segments.map((seg) => (
            <a
              key={seg.name}
              href={seg.name === 'Consumer' ? '#pricing' : seg.name === 'Commercial' ? '#commercial' : '#'}
              onClick={
                seg.name === 'Consumer'
                  ? (e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }
                  : seg.name === 'Commercial'
                    ? (e) => { e.preventDefault(); document.getElementById('commercial')?.scrollIntoView({ behavior: 'smooth' }) }
                    : undefined
              }
              className="group bg-white border border-[#eaecef] rounded-[14px] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image area */}
              <div className="relative h-[160px] overflow-hidden rounded-t-[14px]">
                <img
                  src={seg.image}
                  alt={seg.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-t-[14px]"
                  style={{ backgroundImage: seg.gradient }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-5 py-5 gap-0">
                {/* Card title */}
                <h3 className="font-poppins font-bold text-[18px] text-[#102a2e] leading-[28px] tracking-[-0.3px] mb-3">
                  {seg.name}
                </h3>

                {/* Card description */}
                <p className="font-lato font-normal text-[13px] text-[#374151] leading-[20px] flex-1 mb-4">
                  {seg.desc}
                </p>

                {/* CTA link -- matches Learn More btn-link style in ConsumerProducts */}
                <span className="btn-link text-[13px] inline-flex items-center gap-1">
                  {seg.cta}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
