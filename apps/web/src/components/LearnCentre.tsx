import { useState, useEffect, useCallback } from 'react'

/* ─── Data ───────────────────────────────────────────────────────────────── */

type Article = {
  title:    string
  category: string
  color:    string          // badge bg
  excerpt:  string
  image:    string
  url:      string
  readTime: string
}

const PERSONAL_FEATURED: Article[] = [
  {
    title:    'How to Improve Your Credit Report in Malaysia: 7 Practical Steps',
    category: 'Credit Report',
    color:    '#007b85',
    excerpt:  'Most Malaysians only think about their Credit Report after a loan gets rejected. The smarter move is to understand where you stand before you apply — and build habits that work in your favour.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-6-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-to-improve-your-credit-report-in-malaysia-7-practical-steps-that-actually-help/',
    readTime: '6 min read',
  },
  {
    title:    'Why Your Loan Got Rejected in Malaysia — and What to Check First',
    category: 'Loans',
    color:    '#f15d22',
    excerpt:  'A rejection does not happen for no reason. Most rejections stem from issues in your financial profile or repayment behaviour that lenders can clearly see in your credit data.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/why-your-loan-got-rejected-in-malaysia-and-what-to-check-first/',
    readTime: '5 min read',
  },
  {
    title:    'CTOS vs CCRIS: What\'s the Difference and Why It Matters',
    category: 'Financial Literacy',
    color:    '#f2b530',
    excerpt:  'Many Malaysians confuse these two systems. CCRIS is Bank Negara\'s data system. CTOS is a credit reporting agency that offers a broader financial health picture — including your CTOS Score.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn/ctos-vs-ccris-whats-the-difference-and-why-it-matters-in-malaysia/',
    readTime: '4 min read',
  },
]

const PERSONAL_GRID: Article[] = [
  {
    title:    'Signs of Identity Theft in Malaysia',
    category: 'Identity Protection',
    color:    '#10b981',
    excerpt:  'Most victims find out the same way — a loan they never applied for, or a card they never owned.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/signs-of-identity-theft-in-malaysia-and-how-credit-monitoring-can-protect-you/',
    readTime: '4 min read',
  },
  {
    title:    'What Affects Your CTOS Score? A Simple Breakdown',
    category: 'CTOS Score',
    color:    '#3b82f6',
    excerpt:  'Most Malaysians know their score exists, but far fewer understand what actually goes into it.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/what-affects-your-ctos-score-in-malaysia-a-simple-breakdown-of-the-key-factors/',
    readTime: '5 min read',
  },
  {
    title:    'How to Fix Wrong Information in Your Credit Report',
    category: 'Dispute',
    color:    '#ef4444',
    excerpt:  'Finding something wrong in your Credit Report can be unsettling. You have the right to dispute it — and you should act quickly.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/How-to-Fix-Wrong-Information-in-Your-Credit-Report-in-Malaysia-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-to-fix-wrong-information-in-your-credit-report-in-malaysia/',
    readTime: '5 min read',
  },
  {
    title:    'How to Build Credit History If You Have No Score Yet',
    category: 'Credit Building',
    color:    '#8b5cf6',
    excerpt:  'You apply for your first credit card and get rejected — not because of bad credit, but because you have no credit history at all.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-6-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-to-build-credit-history-in-malaysia-if-you-have-no-credit-score-yet/',
    readTime: '6 min read',
  },
  {
    title:    'How Often Should You Check Your Credit Report?',
    category: 'Credit Report',
    color:    '#007b85',
    excerpt:  'Checking regularly means catching errors, spotting fraud early, and staying in control of your financial health.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-often-should-you-check-your-credit-report-in-malaysia/',
    readTime: '3 min read',
  },
  {
    title:    'Are You Really Ready to Retire on RM3,000/Month?',
    category: 'Financial Planning',
    color:    '#055157',
    excerpt:  'RM3,000 a month sounds comfortable — until you factor in healthcare, inflation, and a 20-year retirement.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn/are-you-really-ready-to-retire-on-rm3000-month/',
    readTime: '5 min read',
  },
]

const BUSINESS_FEATURED: Article[] = [
  {
    title:    'Manufacturing Firm Reduces Overdue Payments by 30% with CTOS Credit Manager',
    category: 'Case Study',
    color:    '#007b85',
    excerpt:  'A mid-sized manufacturing firm turned to CTOS Credit Manager to screen new customers and monitor existing ones — cutting overdue payments by nearly a third within a year.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn/manufacturing-firm-reduces-overdue-payments-by-30-with-ctos-credit-manager/',
    readTime: '4 min read',
  },
  {
    title:    '5 Signs a Business Is in Trouble (Before It\'s Too Late)',
    category: 'Risk Management',
    color:    '#ef4444',
    excerpt:  'The warning signs are usually there months before a business fails. Knowing how to spot them — in your own business or a partner\'s — gives you time to act.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/5-signs-a-business-is-in-trouble/',
    readTime: '5 min read',
  },
  {
    title:    'Can My Personal Credit Score Affect My Business?',
    category: 'Credit & Business',
    color:    '#f15d22',
    excerpt:  'For sole proprietors and SME owners, the line between personal and business credit is thinner than most people realise.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/How-to-Fix-Wrong-Information-in-Your-Credit-Report-in-Malaysia-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/can-my-personal-credit-score-affect-my-business/',
    readTime: '4 min read',
  },
]

const BUSINESS_GRID: Article[] = [
  {
    title:    'Identifying and Solving Business Cash Flow Problems',
    category: 'Cash Flow',
    color:    '#f2b530',
    excerpt:  'Cash flow problems are the leading cause of SME failure. Here is how to identify and fix them before they become critical.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-6-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/identifying-and-solving-business-cash-flow-problems/',
    readTime: '5 min read',
  },
  {
    title:    '5 Ways to Improve Your Company\'s Credit Score',
    category: 'Business Credit',
    color:    '#3b82f6',
    excerpt:  'A stronger business credit profile opens doors to better financing terms, supplier agreements, and partner trust.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn-business/5-ways-to-improve-your-companys-credit-score/',
    readTime: '4 min read',
  },
  {
    title:    'Improve Your Business Loan Approval Odds',
    category: 'Financing',
    color:    '#10b981',
    excerpt:  'Before you apply, there are specific things lenders look for that you can address in advance to significantly improve your approval chances.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/improve-your-business-loan-approval-odds/',
    readTime: '4 min read',
  },
  {
    title:    'What Are Trade References and Why Do They Matter?',
    category: 'Risk Management',
    color:    '#8b5cf6',
    excerpt:  'Trade references are one of the most overlooked tools for building business credibility with suppliers and lenders.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/what-are-trade-references-why-do-they-matter-to-my-business/',
    readTime: '3 min read',
  },
  {
    title:    'eKYC: What SMEs Need to Know',
    category: 'Compliance',
    color:    '#055157',
    excerpt:  'Electronic Know-Your-Customer is fast becoming a requirement — not just for banks, but for any business managing customer identity.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/How-to-Fix-Wrong-Information-in-Your-Credit-Report-in-Malaysia-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/ekyc-what-smes-need-to-know/',
    readTime: '4 min read',
  },
  {
    title:    'A Guide to Managing Cash Flow for SMEs',
    category: 'Cash Flow',
    color:    '#f2b530',
    excerpt:  'Seven practical strategies every SME owner should be using to keep cash flowing and avoid the traps that sink small businesses.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/a-guide-to-managing-cash-flow-for-smes/',
    readTime: '6 min read',
  },
]

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function LearnCentre() {
  const [tab,   setTab]   = useState<'personal' | 'business'>('personal')
  const [slide, setSlide] = useState(0)
  const [fade,  setFade]  = useState(true)

  const featured = tab === 'personal' ? PERSONAL_FEATURED : BUSINESS_FEATURED
  const grid     = tab === 'personal' ? PERSONAL_GRID     : BUSINESS_GRID

  // Auto-advance slide
  useEffect(() => {
    const t = setInterval(() => advanceSlide(1), 5500)
    return () => clearInterval(t)
  }, [tab, slide]) // eslint-disable-line

  // Reset on tab change
  useEffect(() => { setSlide(0); setFade(true) }, [tab])

  const advanceSlide = useCallback((dir: number) => {
    setFade(false)
    setTimeout(() => {
      setSlide(prev => (prev + dir + featured.length) % featured.length)
      setFade(true)
    }, 180)
  }, [featured.length])

  const goSlide = (i: number) => {
    if (i === slide) return
    setFade(false)
    setTimeout(() => { setSlide(i); setFade(true) }, 180)
  }

  const current = featured[slide]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* ── Header row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="font-poppins font-bold text-[12px] text-[#007b85] uppercase tracking-[2.4px] mb-3">
              Knowledge Centre
            </p>
            <h2 className="font-poppins font-bold text-[32px] md:text-[42px] leading-tight tracking-[-1px]">
              <span className="text-[#5c5c5c]">Learn & </span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#007b85 0%,#f2b530 100%)' }}>
                Stay Informed
              </span>
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center gap-1 bg-[#f3f4f6] p-1 rounded-full self-start md:self-auto flex-shrink-0">
            {(['personal', 'business'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full font-poppins font-semibold text-[13px] transition-all duration-200 capitalize ${
                  tab === t
                    ? 'bg-[#007b85] text-white shadow-[0_2px_8px_rgba(0,123,133,0.3)]'
                    : 'text-[#6b7280] hover:text-[#102a2e]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main grid: featured left + cards right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5 xl:gap-7">

          {/* ── FEATURED CARD (left) ── */}
          <div className="relative rounded-[18px] overflow-hidden bg-[#0a1f22] flex flex-col group cursor-pointer"
            onClick={() => window.open(current.url, '_blank')}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: '260px' }}>
              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 0.18s ease, transform 0.7s ease' }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(10,31,34,0.85) 100%)' }} />
              {/* Category badge over image */}
              <div className="absolute bottom-3 left-4">
                <span
                  className="font-poppins font-bold text-[10px] uppercase tracking-[1px] text-white px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: current.color }}
                >
                  {current.category}
                </span>
              </div>
              {/* Prev/Next arrows */}
              <button
                onClick={e => { e.stopPropagation(); advanceSlide(-1) }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={e => { e.stopPropagation(); advanceSlide(1) }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 py-5 gap-3">
              <h3
                className={`font-poppins font-bold text-[20px] md:text-[22px] text-white leading-[1.3] tracking-[-0.4px] transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                {current.title}
              </h3>
              <p
                className={`font-lato text-[13.5px] text-white/65 leading-relaxed line-clamp-3 transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                {current.excerpt}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="text-white/40" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span className="font-poppins text-[11.5px] text-white/40">{current.readTime}</span>
                </div>

                {/* Slide dots */}
                <div className="flex items-center gap-1.5">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); goSlide(i) }}
                      className={`rounded-full transition-all duration-300 ${i === slide ? 'w-5 h-2 bg-[#007b85]' : 'w-2 h-2 bg-white/25 hover:bg-white/50'}`}
                    />
                  ))}
                </div>

                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="font-poppins font-semibold text-[12.5px] text-[#0bb1be] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  Read article
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── GRID of 6 smaller cards (right) ── */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 xl:gap-4 content-start">
            {grid.map((art, i) => (
              <a
                key={i}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[14px] border border-[#eaecef] bg-white overflow-hidden hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ height: '96px' }}>
                  <img
                    src={art.image}
                    alt={art.title}
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                      el.parentElement!.style.background = 'linear-gradient(135deg,#007b85,#0bb1be)'
                    }}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)' }} />
                  <div className="absolute bottom-2 left-2.5">
                    <span
                      className="font-poppins font-bold text-[9px] uppercase tracking-[0.8px] text-white px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: art.color + 'dd' }}
                    >
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="px-3 py-3 flex flex-col flex-1 gap-1.5">
                  <h4 className="font-poppins font-semibold text-[12.5px] text-[#102a2e] leading-[1.4] line-clamp-2 group-hover:text-[#007b85] transition-colors">
                    {art.title}
                  </h4>
                  <div className="mt-auto flex items-center gap-1.5">
                    <svg className="text-[#9ca3af]" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span className="font-poppins text-[10.5px] text-[#9ca3af]">{art.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── View all CTA ── */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://ctoscredit.com.my/learn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[46px] px-7 rounded-full border border-[#007b85]/30 bg-white text-[#007b85] font-poppins font-semibold text-[13.5px] hover:bg-[#007b85] hover:text-white hover:border-[#007b85] transition-all duration-200 shadow-sm hover:shadow-[0_6px_20px_rgba(0,123,133,0.25)]"
          >
            View all articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
