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

/* ─── Admin types & storage ──────────────────────────────────────────────── */
const ADMIN_KEY = 'ctos_lc_admin'

type AdminSettings = {
  sourceMode:     'static' | 'api'
  apiUrlPersonal: string
  apiUrlBusiness: string
  imgOverrides:   Record<string, string>   // article.url → image URL
  descOverrides:  Record<string, string>   // article.url → description
}

const DEFAULT_ADMIN: AdminSettings = {
  sourceMode:     'static',
  apiUrlPersonal: '',
  apiUrlBusiness: '',
  imgOverrides:   {},
  descOverrides:  {},
}

function loadAdmin(): AdminSettings {
  try {
    const raw = localStorage.getItem(ADMIN_KEY)
    return raw ? { ...DEFAULT_ADMIN, ...JSON.parse(raw) } : DEFAULT_ADMIN
  } catch { return DEFAULT_ADMIN }
}

function saveAdmin(s: AdminSettings) {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(s))
}

/* ─── OG fetch utility ───────────────────────────────────────────────────── */
type OGData = { image: string; description: string; title: string }

function parseOG(html: string): OGData {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const m = (prop: string) =>
    doc.querySelector(`meta[property="${prop}"]`)?.getAttribute('content') ||
    doc.querySelector(`meta[name="${prop}"]`)?.getAttribute('content') || ''
  return {
    image:       m('og:image')       || m('twitter:image'),
    description: m('og:description') || m('description'),
    title:       m('og:title')       || doc.title,
  }
}

async function fetchOG(articleUrl: string): Promise<OGData> {
  const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(articleUrl)}`
  const res   = await fetch(proxy)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const { contents } = await res.json()
  return parseOG(contents)
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

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

/* article groups used by the admin images panel */
type ArticleGroup = { label: string; articles: Article[] }
const GROUPS: Record<'personal' | 'business', ArticleGroup[]> = {
  personal: [
    { label: 'Featured Slider', articles: P_FEATURED },
    { label: 'Side Cards',      articles: P_SIDE     },
    { label: 'Bottom Cards',    articles: P_BOTTOM   },
  ],
  business: [
    { label: 'Featured Slider', articles: B_FEATURED },
    { label: 'Side Cards',      articles: B_SIDE     },
    { label: 'Bottom Cards',    articles: B_BOTTOM   },
  ],
}

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

const CARD_SCRIMS = [
  'linear-gradient(to top, rgb(0 123 133) 0%, #408a6e 28%, transparent 95%)',
  'linear-gradient(to top, rgba(10,31,34,0.96) 0%, rgba(0,81,90,0.58) 38%, transparent 92%)',
  'linear-gradient(to top, rgba(155,70,8,0.90) 0%, rgba(212,140,30,0.52) 42%, transparent 92%)',
]

function CategoryBadge({ label, small }: { label: string; color?: string; small?: boolean }) {
  return (
    <span
      className={`self-start inline-block font-poppins font-bold uppercase tracking-[0.7px] text-white rounded-full ${small ? 'text-[9px] px-2 py-[3px]' : 'text-[10px] px-2.5 py-1'}`}
      style={{ backgroundColor: '#23211d' }}
    >
      {label}
    </span>
  )
}

function ArticleCard({ art, tall, gi = 0 }: { art: Article; tall?: boolean; gi?: number }) {
  return (
    <a
      href={art.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-[14px] border border-[#eaecef] bg-white overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200 h-full"
    >
      <div className={`relative overflow-hidden flex-shrink-0 ${tall ? 'h-[120px]' : 'h-[100px]'}`}>
        <img
          {...imgProps(art.image)}
          alt={art.title}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div className="absolute inset-0" style={{ background: CARD_SCRIMS[gi % CARD_SCRIMS.length] }} />
        <div className="absolute bottom-2 left-3">
          <CategoryBadge label={art.category} small />
        </div>
      </div>
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

/* ─── Admin Drawer ───────────────────────────────────────────────────────── */

type FetchState = 'idle' | 'loading' | 'ok' | 'err'

function AdminDrawer({
  open, onClose, settings, onSave,
}: {
  open:     boolean
  onClose:  () => void
  settings: AdminSettings
  onSave:   (s: AdminSettings) => void
}) {
  const [activeTab,  setActiveTab]  = useState<'source' | 'articles'>('source')
  const [artTab,     setArtTab]     = useState<'personal' | 'business'>('personal')
  const [draft,      setDraft]      = useState<AdminSettings>(settings)
  const [saved,      setSaved]      = useState(false)
  const [fetchState, setFetchState] = useState<Record<string, FetchState>>({})
  const [testStatus, setTestStatus] = useState<Record<string, 'idle' | 'ok' | 'err'>>({})

  useEffect(() => { if (open) setDraft(settings) }, [open, settings])

  function handleSave() {
    onSave(draft)
    setSaved(true)
    setTimeout(() => setSaved(false), 2200)
  }

  function handleReset() {
    setDraft(DEFAULT_ADMIN)
    onSave(DEFAULT_ADMIN)
    setSaved(true)
    setTimeout(() => setSaved(false), 2200)
  }

  /* ── Auto-fetch OG data for one article ── */
  async function fetchOne(art: Article) {
    setFetchState(s => ({ ...s, [art.url]: 'loading' }))
    try {
      const og = await fetchOG(art.url)
      setDraft(d => ({
        ...d,
        imgOverrides:  og.image       ? { ...d.imgOverrides,  [art.url]: og.image       } : d.imgOverrides,
        descOverrides: og.description ? { ...d.descOverrides, [art.url]: og.description } : d.descOverrides,
      }))
      setFetchState(s => ({ ...s, [art.url]: 'ok' }))
    } catch {
      setFetchState(s => ({ ...s, [art.url]: 'err' }))
    }
    setTimeout(() => setFetchState(s => ({ ...s, [art.url]: 'idle' })), 3000)
  }

  /* ── Fetch all articles in current sub-tab ── */
  async function fetchAll() {
    const groups = GROUPS[artTab]
    for (const g of groups) {
      for (const art of g.articles) {
        await fetchOne(art)
      }
    }
  }

  function clearOne(art: Article) {
    setDraft(d => {
      const img  = { ...d.imgOverrides  }
      const desc = { ...d.descOverrides }
      delete img[art.url]
      delete desc[art.url]
      return { ...d, imgOverrides: img, descOverrides: desc }
    })
  }

  async function testEndpoint(which: 'personal' | 'business') {
    const url = which === 'personal' ? draft.apiUrlPersonal : draft.apiUrlBusiness
    if (!url) return
    setTestStatus(s => ({ ...s, [which]: 'idle' }))
    try {
      const r = await fetch(url)
      setTestStatus(s => ({ ...s, [which]: r.ok ? 'ok' : 'err' }))
    } catch {
      setTestStatus(s => ({ ...s, [which]: 'err' }))
    }
    setTimeout(() => setTestStatus(s => ({ ...s, [which]: 'idle' })), 3000)
  }

  const inp = 'w-full bg-[#0d1117] border border-[#30363d] rounded-[8px] px-3 py-2 font-mono text-[12px] text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-[#007b85] transition-colors'

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[69] transition-all duration-300 ${open ? 'bg-black/60 backdrop-blur-[2px] pointer-events-auto' : 'bg-transparent pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-[70] w-[500px] max-w-[calc(100vw-32px)] flex flex-col shadow-[8px_0_56px_rgba(0,0,0,0.5)] transition-transform duration-[380ms] ${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)', background: '#0d1117', pointerEvents: open ? 'auto' : 'none' }}
      >

        {/* ── Header ── */}
        <div className="flex-shrink-0 px-5 py-4 flex items-center gap-3" style={{ background: '#010409', borderBottom: '1px solid #21262d' }}>
          <div className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#007b85,#0bb1be)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-poppins font-bold text-[14px] text-[#e6edf3] leading-none">Content Admin</p>
            <p className="font-mono text-[10px] text-[#484f58] mt-0.5">Knowledge Centre</p>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-full flex items-center justify-center text-[#484f58] hover:text-[#e6edf3] hover:bg-[#21262d] transition-colors flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* ── Tab bar ── */}
        <div className="flex-shrink-0 flex px-5 pt-4 pb-0" style={{ borderBottom: '1px solid #21262d' }}>
          {(['source', 'articles'] as const).map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 pb-3 font-poppins font-semibold text-[12px] capitalize border-b-2 transition-colors ${
                activeTab === t ? 'border-[#007b85] text-[#007b85]' : 'border-transparent text-[#484f58] hover:text-[#8b949e]'
              }`}
            >
              {t === 'source' ? '⚡ Article Source' : '🖼 Articles'}
            </button>
          ))}
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#30363d #0d1117' }}>

          {/* ══ SOURCE TAB ══ */}
          {activeTab === 'source' && (
            <div className="space-y-6">
              <div>
                <p className="font-poppins font-semibold text-[11px] text-[#8b949e] uppercase tracking-[1.5px] mb-3">Source Mode</p>
                <div className="grid grid-cols-2 gap-2">
                  {(['static', 'api'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setDraft(d => ({ ...d, sourceMode: mode }))}
                      className={`py-3 px-4 rounded-[10px] border text-left transition-all ${
                        draft.sourceMode === mode ? 'border-[#007b85] bg-[#007b85]/10' : 'border-[#30363d] bg-[#161b22] hover:border-[#484f58]'
                      }`}
                    >
                      <p className={`font-poppins font-bold text-[12px] ${draft.sourceMode === mode ? 'text-[#0bb1be]' : 'text-[#8b949e]'}`}>
                        {mode === 'static' ? '📦 Static' : '🌐 API'}
                      </p>
                      <p className="font-mono text-[10px] text-[#484f58] mt-0.5">
                        {mode === 'static' ? 'Built-in data' : 'Live endpoint'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`space-y-4 transition-opacity duration-200 ${draft.sourceMode === 'api' ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                <p className="font-poppins font-semibold text-[11px] text-[#8b949e] uppercase tracking-[1.5px]">API Endpoints</p>
                {(['personal', 'business'] as const).map(which => (
                  <div key={which}>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="font-poppins text-[12px] text-[#8b949e] capitalize">{which} Articles URL</label>
                      {testStatus[which] === 'ok'  && <span className="font-mono text-[10px] text-[#3fb950]">✓ Connected</span>}
                      {testStatus[which] === 'err' && <span className="font-mono text-[10px] text-[#f85149]">✗ Failed</span>}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder={`https://api.example.com/learn/${which}`}
                        value={which === 'personal' ? draft.apiUrlPersonal : draft.apiUrlBusiness}
                        onChange={e => setDraft(d => ({ ...d, [which === 'personal' ? 'apiUrlPersonal' : 'apiUrlBusiness']: e.target.value }))}
                        className={inp}
                      />
                      <button onClick={() => testEndpoint(which)} className="flex-shrink-0 px-3 py-2 rounded-[8px] border border-[#30363d] bg-[#161b22] font-poppins font-semibold text-[11px] text-[#8b949e] hover:border-[#007b85] hover:text-[#007b85] transition-colors">
                        Test
                      </button>
                    </div>
                  </div>
                ))}
                <div className="rounded-[10px] p-3" style={{ background: '#161b22', border: '1px solid #21262d' }}>
                  <p className="font-mono text-[10px] text-[#484f58] mb-2">Expected JSON schema:</p>
                  <pre className="font-mono text-[10px] text-[#8b949e] leading-relaxed whitespace-pre-wrap">{`{
  "featured": [ { "title", "category", "color",
                  "excerpt", "image", "url",
                  "readTime" }, ... ],
  "side":     [ ... ],
  "bottom":   [ ... ]
}`}</pre>
                </div>
              </div>
            </div>
          )}

          {/* ══ ARTICLES TAB ══ */}
          {activeTab === 'articles' && (
            <div className="space-y-5">

              {/* Personal / Business toggle */}
              <div className="flex gap-1 p-1 rounded-[10px]" style={{ background: '#161b22', border: '1px solid #21262d' }}>
                {(['personal', 'business'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setArtTab(t)}
                    className={`flex-1 py-1.5 rounded-[8px] font-poppins font-semibold text-[12px] capitalize transition-all ${artTab === t ? 'bg-[#007b85] text-white shadow-sm' : 'text-[#484f58] hover:text-[#8b949e]'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Fetch All button */}
              <button
                onClick={fetchAll}
                className="w-full py-2.5 rounded-[10px] border border-[#007b85]/40 bg-[#007b85]/10 font-poppins font-semibold text-[12px] text-[#0bb1be] hover:bg-[#007b85]/20 transition-colors flex items-center justify-center gap-2"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                Fetch All Images &amp; Descriptions
              </button>

              {/* Article groups */}
              {GROUPS[artTab].map(group => (
                <div key={group.label}>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="font-poppins font-semibold text-[10px] text-[#484f58] uppercase tracking-[1.5px]">{group.label}</p>
                    <div className="flex-1 h-px" style={{ background: '#21262d' }} />
                  </div>

                  <div className="space-y-3">
                    {group.articles.map((art, idx) => {
                      const imgOvr  = draft.imgOverrides[art.url]  ?? ''
                      const descOvr = draft.descOverrides[art.url] ?? ''
                      const thumb   = imgOvr || art.image
                      const state   = fetchState[art.url] ?? 'idle'
                      const hasData = !!(imgOvr || descOvr)

                      return (
                        <div key={idx} className="rounded-[10px] overflow-hidden" style={{ border: `1px solid ${hasData ? '#007b85' : '#21262d'}` }}>

                          {/* Top row — thumbnail + title + fetch btn */}
                          <div className="flex items-center gap-3 p-3" style={{ background: '#161b22' }}>
                            {/* Thumbnail */}
                            <div className="relative w-14 h-9 rounded-[6px] overflow-hidden flex-shrink-0 bg-[#21262d]">
                              <img
                                src={thumb}
                                alt=""
                                className="w-full h-full object-cover"
                                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                              />
                              {state === 'loading' && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                  <div className="w-3 h-3 border-2 border-[#007b85] border-t-transparent rounded-full animate-spin" />
                                </div>
                              )}
                            </div>

                            {/* Title + domain */}
                            <div className="flex-1 min-w-0">
                              <p className="font-poppins text-[11px] text-[#e6edf3] leading-tight line-clamp-1">{art.title}</p>
                              <p className="font-mono text-[9px] text-[#484f58] mt-0.5 truncate">{art.url.replace('https://', '')}</p>
                            </div>

                            {/* Fetch / status */}
                            <button
                              onClick={() => fetchOne(art)}
                              disabled={state === 'loading'}
                              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-[7px] font-poppins font-semibold text-[11px] transition-all ${
                                state === 'ok'      ? 'bg-[#3fb950]/20 text-[#3fb950] border border-[#3fb950]/30' :
                                state === 'err'     ? 'bg-[#f85149]/20 text-[#f85149] border border-[#f85149]/30' :
                                state === 'loading' ? 'bg-[#007b85]/10 text-[#484f58] border border-[#30363d]' :
                                'bg-[#007b85]/10 text-[#0bb1be] border border-[#007b85]/30 hover:bg-[#007b85]/20'
                              }`}
                            >
                              {state === 'loading' ? 'Fetching…' :
                               state === 'ok'      ? '✓ Done' :
                               state === 'err'     ? '✗ Error' :
                               <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/></svg>Fetch</>}
                            </button>

                            {/* Clear override */}
                            {hasData && (
                              <button
                                onClick={() => clearOne(art)}
                                title="Remove overrides"
                                className="flex-shrink-0 w-7 h-7 rounded-[6px] flex items-center justify-center text-[#484f58] hover:text-[#f85149] hover:bg-[#f85149]/10 transition-colors"
                              >
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                              </button>
                            )}
                          </div>

                          {/* Fetched data preview */}
                          {hasData && (
                            <div className="px-3 pb-3 pt-2 space-y-2" style={{ background: '#0d1117', borderTop: '1px solid #21262d' }}>
                              {imgOvr && (
                                <div>
                                  <p className="font-mono text-[9px] text-[#484f58] mb-1">OG IMAGE</p>
                                  <p className="font-mono text-[10px] text-[#007b85] break-all line-clamp-1">{imgOvr}</p>
                                </div>
                              )}
                              {descOvr && (
                                <div>
                                  <p className="font-mono text-[9px] text-[#484f58] mb-1">OG DESCRIPTION</p>
                                  <p className="font-lato text-[11px] text-[#8b949e] leading-relaxed line-clamp-2">{descOvr}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* ── Footer ── */}
        <div className="flex-shrink-0 px-5 py-4 flex items-center gap-3" style={{ borderTop: '1px solid #21262d', background: '#010409' }}>
          <button
            onClick={handleReset}
            className="flex-1 py-2.5 rounded-[10px] border border-[#30363d] font-poppins font-semibold text-[12px] text-[#484f58] hover:text-[#f85149] hover:border-[#f85149]/40 transition-colors"
          >
            Reset defaults
          </button>
          <button
            onClick={handleSave}
            className={`flex-[2] py-2.5 rounded-[10px] font-poppins font-bold text-[13px] text-white transition-all duration-200 ${
              saved ? 'bg-[#3fb950]' : 'bg-[#007b85] hover:bg-[#0bb1be] shadow-[0_0_20px_rgba(0,123,133,0.3)]'
            }`}
          >
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>

      </div>
    </>
  )
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function LearnCentre() {
  const [tab,         setTab]         = useState<'personal' | 'business'>('personal')
  const [slide,       setSlide]       = useState(0)
  const [fade,        setFade]        = useState(true)
  const [adminOpen,   setAdminOpen]   = useState(false)
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(DEFAULT_ADMIN)

  /* load admin settings from localStorage on mount */
  useEffect(() => { setAdminSettings(loadAdmin()) }, [])

  /* apply image + description overrides to an article array */
  function withOverrides(articles: Article[]): Article[] {
    return articles.map(a => ({
      ...a,
      image:   adminSettings.imgOverrides[a.url]  || a.image,
      excerpt: adminSettings.descOverrides[a.url] || a.excerpt,
    }))
  }

  const featured = withOverrides(tab === 'personal' ? P_FEATURED : B_FEATURED)
  const side     = withOverrides(tab === 'personal' ? P_SIDE     : B_SIDE)
  const bottom   = withOverrides(tab === 'personal' ? P_BOTTOM   : B_BOTTOM)
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

  useEffect(() => {
    const t = setInterval(() => advance(1), 5500)
    return () => clearInterval(t)
  }, [advance])

  useEffect(() => { setSlide(0); setFade(true) }, [tab])

  function handleSaveAdmin(s: AdminSettings) {
    saveAdmin(s)
    setAdminSettings(s)
  }

  /* secret trigger — select the letter 't' inside "Centre", or triple-click */
  function checkSecretTrigger() {
    // defer one frame so the browser finalises the selection text
    setTimeout(() => {
      const sel = window.getSelection()?.toString()
      if (sel && sel.toLowerCase() === 't') setAdminOpen(true)
    }, 0)
  }

  function handleCentreClick(e: React.MouseEvent) {
    if (e.detail >= 3) setAdminOpen(true)   // triple-click fallback
  }

  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10">

        {/* ── Admin drawer (Easter egg) ── */}
        <AdminDrawer
          open={adminOpen}
          onClose={() => setAdminOpen(false)}
          settings={adminSettings}
          onSave={handleSaveAdmin}
        />

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="font-poppins font-bold text-[12px] text-[#007b85] uppercase tracking-[2.4px] mb-3 select-text cursor-text">
              Knowledge{' '}
              <span onMouseUp={checkSecretTrigger} onClick={handleCentreClick} className="cursor-text select-text">Centre</span>
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
            <img
              key={slide + '-' + tab}
              {...imgProps(current.image)}
              alt={current.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 group-hover:scale-[1.02] transition-transform duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.60) 32%, transparent 72%)' }} />

            {/* Prev / Next */}
            <button onClick={e => { e.stopPropagation(); advance(-1) }} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={e => { e.stopPropagation(); advance(1) }} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Content pinned bottom */}
            <div className={`absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2 transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              <CategoryBadge label={current.category} color={current.color} />
              <h3 className="font-poppins font-bold text-[18px] md:text-[20px] text-white leading-[1.3] tracking-[-0.3px] line-clamp-2">{current.title}</h3>
              <p className="font-lato text-[12.5px] text-white/65 leading-relaxed line-clamp-2">{current.excerpt}</p>
              <div className="flex items-center justify-between pt-2 mt-1 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {featured.map((_, i) => (
                    <button key={i} onClick={e => { e.stopPropagation(); goSlide(i) }} className={`rounded-full transition-all duration-300 ${i === slide ? 'w-5 h-[6px] bg-[#007b85]' : 'w-[6px] h-[6px] bg-white/30 hover:bg-white/60'}`} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-poppins text-[11px] text-white/40">{current.readTime}</span>
                  <a href={current.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="font-poppins font-semibold text-[12px] text-[#0bb1be] hover:text-white inline-flex items-center gap-1 transition-colors">
                    Read <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 1 — 2 side boxes */}
          {side.map((art, i) => (
            <div key={i} style={{ minHeight: '320px' }} className="flex">
              <ArticleCard art={art} tall gi={i + 1} />
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════
            ROW 2 — 4 standard boxes
        ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bottom.map((art, i) => (
            <ArticleCard key={i} art={art} gi={i % CARD_SCRIMS.length} />
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
