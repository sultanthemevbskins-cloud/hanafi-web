import { useState, useEffect, useCallback } from 'react'

/* ─── Types ──────────────────────────────────────────────────────────────── */
type Article = {
  title:    string
  category: string
  color:    string
  excerpt:  string
  image:    string
  url:      string
  readTime: string
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

/* — Personal — */
const P_FEATURED: Article[] = [
  {
    title:    'How to Improve Your Credit Report in Malaysia: 7 Practical Steps',
    category: 'Credit Report', color: '#007b85',
    excerpt:  'Most Malaysians only think about their Credit Report after a loan gets rejected. The smarter move is to understand where you stand before you apply.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-6-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-to-improve-your-credit-report-in-malaysia-7-practical-steps-that-actually-help/',
    readTime: '6 min read',
  },
  {
    title:    'Why Your Loan Got Rejected in Malaysia — and What to Check First',
    category: 'Loans', color: '#f15d22',
    excerpt:  'A rejection does not happen for no reason. Most rejections stem from issues in your financial profile that lenders can clearly see.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/why-your-loan-got-rejected-in-malaysia-and-what-to-check-first/',
    readTime: '5 min read',
  },
  {
    title:    'CTOS vs CCRIS: What\'s the Difference and Why It Matters',
    category: 'Financial Literacy', color: '#f2b530',
    excerpt:  'Many Malaysians confuse these two systems. Here is the clear difference between Bank Negara\'s CCRIS and what CTOS provides.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn/ctos-vs-ccris-whats-the-difference-and-why-it-matters-in-malaysia/',
    readTime: '4 min read',
  },
]

/* Row 1 — right side (2 boxes) */
const P_SIDE: Article[] = [
  {
    title:    'Signs of Identity Theft in Malaysia and How to Protect Yourself',
    category: 'Identity Protection', color: '#10b981',
    excerpt:  'Most victims find out the same way — a loan they never applied for appears on their Credit Report.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/signs-of-identity-theft-in-malaysia-and-how-credit-monitoring-can-protect-you/',
    readTime: '4 min read',
  },
  {
    title:    'What Affects Your CTOS Score? A Simple Breakdown of the Key Factors',
    category: 'CTOS Score', color: '#3b82f6',
    excerpt:  'Most Malaysians know their score exists, but far fewer understand what actually goes into it.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/what-affects-your-ctos-score-in-malaysia-a-simple-breakdown-of-the-key-factors/',
    readTime: '5 min read',
  },
]

/* Row 2 — bottom (4 boxes) */
const P_BOTTOM: Article[] = [
  {
    title:    'How to Fix Wrong Information in Your Credit Report',
    category: 'Dispute', color: '#ef4444',
    excerpt:  'You have the right to dispute inaccuracies in your report — and you should act quickly.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/How-to-Fix-Wrong-Information-in-Your-Credit-Report-in-Malaysia-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-to-fix-wrong-information-in-your-credit-report-in-malaysia/',
    readTime: '5 min read',
  },
  {
    title:    'How to Build Credit History If You Have No Score Yet',
    category: 'Credit Building', color: '#8b5cf6',
    excerpt:  'Rejected not because of bad credit — but because you have no credit history at all.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-6-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-to-build-credit-history-in-malaysia-if-you-have-no-credit-score-yet/',
    readTime: '6 min read',
  },
  {
    title:    'How Often Should You Check Your Credit Report?',
    category: 'Credit Report', color: '#007b85',
    excerpt:  'Checking regularly means catching errors early and staying in control of your financial health.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/how-often-should-you-check-your-credit-report-in-malaysia/',
    readTime: '3 min read',
  },
  {
    title:    'Are You Really Ready to Retire on RM3,000 a Month?',
    category: 'Financial Planning', color: '#055157',
    excerpt:  'RM3,000 sounds comfortable — until you factor in healthcare, inflation, and a 20-year retirement.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn/are-you-really-ready-to-retire-on-rm3000-month/',
    readTime: '5 min read',
  },
]

/* — Business — */
const B_FEATURED: Article[] = [
  {
    title:    'Manufacturing Firm Reduces Overdue Payments by 30% with CTOS Credit Manager',
    category: 'Case Study', color: '#007b85',
    excerpt:  'A mid-sized manufacturing firm turned to CTOS Credit Manager to screen new customers — cutting overdue payments by nearly a third within a year.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn/manufacturing-firm-reduces-overdue-payments-by-30-with-ctos-credit-manager/',
    readTime: '4 min read',
  },
  {
    title:    '5 Signs a Business Is in Trouble Before It\'s Too Late',
    category: 'Risk Management', color: '#ef4444',
    excerpt:  'The warning signs are usually there months before a business fails. Knowing how to spot them gives you time to act.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/5-signs-a-business-is-in-trouble/',
    readTime: '5 min read',
  },
  {
    title:    'Can My Personal Credit Score Affect My Business?',
    category: 'Credit & Business', color: '#f15d22',
    excerpt:  'For sole proprietors and SME owners, the line between personal and business credit is thinner than most people realise.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/How-to-Fix-Wrong-Information-in-Your-Credit-Report-in-Malaysia-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/can-my-personal-credit-score-affect-my-business/',
    readTime: '4 min read',
  },
]

const B_SIDE: Article[] = [
  {
    title:    'Identifying and Solving Business Cash Flow Problems',
    category: 'Cash Flow', color: '#f2b530',
    excerpt:  'Cash flow problems are the leading cause of SME failure. Here is how to identify and fix them early.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-6-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/identifying-and-solving-business-cash-flow-problems/',
    readTime: '5 min read',
  },
  {
    title:    '5 Ways to Improve Your Company\'s Credit Score',
    category: 'Business Credit', color: '#3b82f6',
    excerpt:  'A stronger business credit profile opens doors to better financing terms and supplier agreements.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/ctos-vs-crris.jpg',
    url:      'https://ctoscredit.com.my/learn-business/5-ways-to-improve-your-companys-credit-score/',
    readTime: '4 min read',
  },
]

const B_BOTTOM: Article[] = [
  {
    title:    'Improve Your Business Loan Approval Odds',
    category: 'Financing', color: '#10b981',
    excerpt:  'There are specific things lenders look for that you can address before you apply.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/improve-your-business-loan-approval-odds/',
    readTime: '4 min read',
  },
  {
    title:    'What Are Trade References and Why Do They Matter?',
    category: 'Risk Management', color: '#8b5cf6',
    excerpt:  'One of the most overlooked tools for building business credibility with suppliers and lenders.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/04/why-loan-got-rejected-in-malaysia-2-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/what-are-trade-references-why-do-they-matter-to-my-business/',
    readTime: '3 min read',
  },
  {
    title:    'eKYC: What SMEs Need to Know',
    category: 'Compliance', color: '#055157',
    excerpt:  'Electronic Know-Your-Customer is fast becoming a requirement for any business managing customer identity.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/How-to-Fix-Wrong-Information-in-Your-Credit-Report-in-Malaysia-1200x480.png',
    url:      'https://ctoscredit.com.my/learn-business/ekyc-what-smes-need-to-know/',
    readTime: '4 min read',
  },
  {
    title:    'A Guide to Managing Cash Flow for SMEs',
    category: 'Cash Flow', color: '#f2b530',
    excerpt:  'Seven practical strategies every SME owner should use to keep cash flowing and avoid common traps.',
    image:    'https://ctoscredit.com.my/wp-content/uploads/2026/05/Membeli-belah-Musim-Perayaan-%E2%80%93-Berbelanja-dengan-Bijak-untuk-Kesihatan-Kredit-yang-Baik-1200x480.png',
    url:      'https://ctoscredit.com.my/learn/a-guide-to-managing-cash-flow-for-smes/',
    readTime: '6 min read',
  },
]

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function imgProps(src: string) {
  return {
    src,
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const el = e.currentTarget
      el.style.display = 'none'
      if (el.parentElement) el.parentElement.style.background = 'linear-gradient(135deg,#007b85,#0bb1be)'
    },
  }
}

function CategoryBadge({ label, color, small }: { label: string; color: string; small?: boolean }) {
  return (
    <span
      className={`self-start inline-block font-poppins font-bold uppercase tracking-[0.7px] text-white rounded-full ${small ? 'text-[9px] px-2 py-[3px]' : 'text-[10px] px-2.5 py-1'}`}
      style={{ backgroundColor: color }}
    >
      {label}
    </span>
  )
}

/* Standard box card — used for row-1 side boxes and row-2 boxes */
function ArticleCard({ art, tall }: { art: Article; tall?: boolean }) {
  return (
    <a
      href={art.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-[14px] border border-[#eaecef] bg-white overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200 h-full"
    >
      {/* Image */}
      <div className={`relative overflow-hidden flex-shrink-0 ${tall ? 'h-[120px]' : 'h-[100px]'}`}>
        <img
          {...imgProps(art.image)}
          alt={art.title}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%)' }} />
        <div className="absolute bottom-2 left-3">
          <CategoryBadge label={art.category} color={art.color} small />
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col flex-1 px-4 py-3 gap-1.5">
        <h4 className="font-poppins font-semibold text-[14.5px] text-[#102a2e] leading-[1.42] line-clamp-2 group-hover:text-[#007b85] transition-colors">
          {art.title}
        </h4>
        {tall && (
          <p className="font-lato text-[12px] text-[#6b7280] leading-relaxed line-clamp-2 flex-1">{art.excerpt}</p>
        )}
        <div className="flex items-center gap-1.5 mt-auto">
          <svg className="text-[#9ca3af]" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span className="font-poppins text-[10.5px] text-[#9ca3af]">{art.readTime}</span>
        </div>
      </div>
    </a>
  )
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function LearnCentre() {
  const [tab,   setTab]   = useState<'personal' | 'business'>('personal')
  const [slide, setSlide] = useState(0)
  const [fade,  setFade]  = useState(true)

  const featured = tab === 'personal' ? P_FEATURED : B_FEATURED
  const side     = tab === 'personal' ? P_SIDE     : B_SIDE
  const bottom   = tab === 'personal' ? P_BOTTOM   : B_BOTTOM
  const current  = featured[slide]

  const goSlide = useCallback((i: number) => {
    if (i === slide) return
    setFade(false)
    setTimeout(() => { setSlide(i); setFade(true) }, 160)
  }, [slide])

  const advance = useCallback((dir: 1 | -1) => {
    setFade(false)
    setTimeout(() => {
      setSlide(p => (p + dir + featured.length) % featured.length)
      setFade(true)
    }, 160)
  }, [featured.length])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => advance(1), 5500)
    return () => clearInterval(t)
  }, [advance])

  // Reset on tab switch
  useEffect(() => { setSlide(0); setFade(true) }, [tab])

  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
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

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-[#e9eaec] p-1 rounded-full self-start md:self-auto flex-shrink-0">
            {(['personal', 'business'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full font-poppins font-semibold text-[13px] capitalize transition-all duration-200 ${
                  tab === t ? 'bg-[#007b85] text-white shadow-[0_2px_8px_rgba(0,123,133,0.3)]' : 'text-[#6b7280] hover:text-[#102a2e]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            ROW 1 — 4-col grid: featured (col-span-2) + 2 side boxes
        ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

          {/* Featured slider — spans 2 cols */}
          <div
            className="lg:col-span-2 relative rounded-[16px] overflow-hidden bg-[#0a1f22] cursor-pointer group"
            style={{ minHeight: '320px' }}
            onClick={() => window.open(current.url, '_blank')}
          >
            {/* Image fill */}
            <img
              key={slide + '-' + tab}
              {...imgProps(current.image)}
              alt={current.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 group-hover:scale-[1.02] transition-transform duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Gradient overlay — strong at bottom */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 100%)' }} />

            {/* Prev / Next arrows */}
            <button
              onClick={e => { e.stopPropagation(); advance(-1) }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={e => { e.stopPropagation(); advance(1) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Content — pinned bottom */}
            <div className={`absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2 transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <CategoryBadge label={current.category} color={current.color} />
              <h3 className="font-poppins font-bold text-[18px] md:text-[20px] text-white leading-[1.3] tracking-[-0.3px] line-clamp-2">
                {current.title}
              </h3>
              <p className="font-lato text-[12.5px] text-white/65 leading-relaxed line-clamp-2">
                {current.excerpt}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-2 mt-1 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {/* Dots */}
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); goSlide(i) }}
                      className={`rounded-full transition-all duration-300 ${i === slide ? 'w-5 h-[6px] bg-[#007b85]' : 'w-[6px] h-[6px] bg-white/30 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-poppins text-[11px] text-white/40">{current.readTime}</span>
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="font-poppins font-semibold text-[12px] text-[#0bb1be] hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    Read
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1 — 2 side boxes */}
          {side.map((art, i) => (
            <div key={i} style={{ minHeight: '320px' }} className="flex">
              <ArticleCard art={art} tall />
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════
            ROW 2 — 4 standard boxes
        ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bottom.map((art, i) => (
            <ArticleCard key={i} art={art} />
          ))}
        </div>

        {/* ── View all CTA ── */}
        <div className="mt-8 flex justify-center">
          <a
            href={tab === 'personal' ? 'https://ctoscredit.com.my/learn/' : 'https://ctoscredit.com.my/learn-business/'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[46px] px-8 rounded-full border border-[#007b85]/30 bg-white text-[#007b85] font-poppins font-semibold text-[13.5px] hover:bg-[#007b85] hover:text-white hover:border-[#007b85] transition-all duration-200 shadow-sm hover:shadow-[0_6px_20px_rgba(0,123,133,0.25)]"
          >
            View all articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
