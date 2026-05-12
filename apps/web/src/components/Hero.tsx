import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@ctos/ui'

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

const stats = [
  { value: '5M', label: 'Consumer Profiles' },
  { value: '1K', label: 'Partner Institutions' },
  { value: '30', label: 'Years of Data' },
]

const creditFactors = [
  { label: 'Payment history', detail: 'Missed: 4', progress: 32, color: '#f2a0a0', icon: 'payment' },
  { label: 'Amount of debt', detail: 'Utilisation: 90%', progress: 90, color: '#f2a0a0', icon: 'debt' },
  { label: 'Length of credit history', detail: 'Avg: 2 yrs', progress: 45, color: '#e8c547', icon: 'history' },
  { label: 'New credit applications', detail: '1 this year', progress: 75, color: '#7fc97f', icon: 'application' },
  { label: 'Credit mix', detail: '4 accounts', progress: 88, color: '#2d9f4e', icon: 'mix' },
]

const bankStats = [
  { value: '95', suffix: '%', label: 'of MY banks use CTOS' },
  { value: '2M', suffix: '+', label: 'Loan checks / month' },
]

type BankLogo = { name: string; color: string; mark: React.ReactNode }
const bankLogos: BankLogo[] = [
  { name: 'Maybank',     color: '#FFC629', mark: <span className="size-2.5 rounded-full bg-[#FFC629] flex-shrink-0" /> },
  { name: 'CIMB',        color: '#DC2828', mark: <span className="size-2 bg-[#DC2828] flex-shrink-0" /> },
  { name: 'PUBLIC BANK', color: '#C8102E', mark: <span className="relative size-3 rounded-full bg-[#C8102E] flex-shrink-0 flex items-center justify-center"><span className="size-1 rounded-full bg-white" /></span> },
  { name: 'RHB',         color: '#144A9B', mark: <span className="w-[4px] h-3 bg-[#144A9B] flex-shrink-0" style={{ transform: 'skewX(-12deg)' }} /> },
  { name: 'Hong Leong',  color: '#006847', mark: <span className="size-2.5 bg-[#006847] flex-shrink-0" style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' }} /> },
  { name: 'AmBank',      color: '#ED1C24', mark: <span className="font-black text-[14px] text-[#ED1C24] leading-none">Î›</span> },
]

function ScoreGauge() {
  const min = 300, max = 850, score = 735
  const cx = 215, cy = 200, r = 128

  const segments = [
    { min: 300, max: 528, color: '#C9302C', label: 'Poor',      range: '300-528', lx: 67,  ly: 159, anchor: 'end'    as const },
    { min: 529, max: 650, color: '#D9821F', label: 'Low',       range: '529-650', lx: 90,  ly: 68,  anchor: 'start'  as const },
    { min: 651, max: 696, color: '#C9A60E', label: 'Fair',      range: '651-696', lx: 215, ly: 42,  anchor: 'middle' as const },
    { min: 697, max: 717, color: '#8BA526', label: 'Good',      range: '697-717', lx: 282, ly: 55,  anchor: 'start'  as const },
    { min: 718, max: 743, color: '#3FA84A', label: 'Very Good', range: '718-743', lx: 336, ly: 102, anchor: 'start'  as const },
    { min: 744, max: 850, color: '#2D9F4E', label: 'Excellent', range: '744-850', lx: 364, ly: 154, anchor: 'start'  as const },
  ]

  const toRad = (s: number) => Math.PI * (1 - (s - min) / (max - min))

  const colorStops = [
    { score: 300, r: 201, g: 48,  b: 44  },
    { score: 414, r: 231, g: 76,  b: 60  },
    { score: 528, r: 217, g: 130, b: 31  },
    { score: 589, r: 243, g: 160, b: 42  },
    { score: 628, r: 241, g: 197, b: 24  },
    { score: 650, r: 221, g: 199, b: 29  },
    { score: 673, r: 181, g: 202, b: 38  },
    { score: 696, r: 152, g: 202, b: 50  },
    { score: 707, r: 139, g: 165, b: 38  },
    { score: 718, r: 63,  g: 168, b: 74  },
    { score: 850, r: 45,  g: 159, b: 78  },
  ]

  const getTickColor = (val: number) => {
    let lo = colorStops[0], hi = colorStops[colorStops.length - 1]
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (val >= colorStops[i].score && val <= colorStops[i + 1].score) {
        lo = colorStops[i]; hi = colorStops[i + 1]; break
      }
    }
    const t = lo.score === hi.score ? 0 : (val - lo.score) / (hi.score - lo.score)
    const rv = Math.round(lo.r + t * (hi.r - lo.r))
    const gv = Math.round(lo.g + t * (hi.g - lo.g))
    const bv = Math.round(lo.b + t * (hi.b - lo.b))
    return `rgb(${rv},${gv},${bv})`
  }

  const numTicks = 72
  const tickOuter = r
  const tickInner = r - 14
  const needleRad = toRad(score)
  const nx = cx + (r - 22) * Math.cos(needleRad)
  const ny = cy - (r - 22) * Math.sin(needleRad)

  return (
    <svg viewBox="0 0 430 300" className="w-full" aria-hidden="true">
      {Array.from({ length: numTicks + 1 }, (_, i) => {
        const val = min + (i / numTicks) * (max - min)
        const rad = toRad(val)
        const active = val <= score
        const color = active ? getTickColor(val) : 'rgba(15,33,35,0.1)'
        const ix = cx + tickInner * Math.cos(rad)
        const iy = cy - tickInner * Math.sin(rad)
        const ox = cx + tickOuter * Math.cos(rad)
        const oy = cy - tickOuter * Math.sin(rad)
        return <line key={i} x1={ix} y1={iy} x2={ox} y2={oy} stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      })}
      <circle cx={nx} cy={ny} r="8" fill="#3FA84A" />
      <circle cx={nx} cy={ny} r="3.5" fill="white" />
      {segments.map(seg => (
        <g key={seg.label}>
          <text x={seg.lx} y={seg.ly} textAnchor={seg.anchor} fill={seg.color} fontSize="9" fontWeight="700" fontFamily="Poppins, sans-serif">{seg.label}</text>
          <text x={seg.lx} y={seg.ly + 11} textAnchor={seg.anchor} fill="rgba(15,33,35,0.5)" fontSize="7.5" fontFamily="Poppins, sans-serif">{seg.range}</text>
        </g>
      ))}
      <text x={cx - r + 2} y={cy + 26} textAnchor="middle" fill="rgba(15,33,35,0.6)" fontSize="10.5" fontFamily="Poppins, sans-serif">300</text>
      <text x={cx + r - 2} y={cy + 26} textAnchor="middle" fill="rgba(15,33,35,0.6)" fontSize="10.5" fontFamily="Poppins, sans-serif">850</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill="#0F2123" fontSize="38" fontWeight="700" fontFamily="Poppins, sans-serif">735</text>
      <text x={cx} y={cy + 34} textAnchor="middle" fill="#2D9F4E" fontSize="12" fontWeight="600" fontFamily="Poppins, sans-serif">Very Good</text>
      <text x={cx} y={cy + 49} textAnchor="middle" fill="rgba(15,33,35,0.55)" fontSize="10" fontFamily="Poppins, sans-serif">718â€“743</text>
    </svg>
  )
}

function FactorIcon({ type }: { type: string }) {
  const cls = 'size-[18px] text-[#374151]'
  if (type === 'payment') return (
    <svg className={cls} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <rect x="1.5" y="3" width="13" height="9" rx="1.5" /><path d="M1.5 6h13M4 9.5h2.5" />
    </svg>
  )
  if (type === 'debt') return (
    <svg className={cls} viewBox="0 0 16 16" fill="currentColor">
      <rect x="2" y="8.5" width="2.5" height="5" rx="0.7" /><rect x="6.5" y="5.5" width="2.5" height="8" rx="0.7" /><rect x="11" y="7" width="2.5" height="6.5" rx="0.7" />
    </svg>
  )
  if (type === 'history') return (
    <svg className={cls} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="5.5" /><path d="M8 5.5V8l1.5 1.5" />
    </svg>
  )
  if (type === 'application') return (
    <svg className={cls} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7A1.5 1.5 0 0 0 13 12.5V5.5L9.5 2Z" /><path d="M9.5 2v3.5H13M6.5 9.5h3M8 8v3" />
    </svg>
  )
  return (
    <svg className={cls} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" /><rect x="2" y="9" width="5" height="5" rx="1" /><rect x="9" y="9" width="5" height="5" rx="1" />
    </svg>
  )
}

// â”€â”€ Individual slide content components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Slide1() {
  return (
    <div className="min-w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:gap-[40px] lg:gap-[65px] items-start pt-3 md:pt-[65px]">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex items-center gap-1 text-[9px] md:text-[12px] tracking-[0.48px] font-poppins">
              <span className="font-bold text-white">#1</span>
              <span className="font-medium text-white">People's Choice for Credit Report</span>
            </div>
            <div className="font-bold text-[18px] md:text-[26px] lg:text-[58px] leading-tight lg:leading-[60.9px] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-2.03px] font-poppins">
              <p className="bg-clip-text text-transparent pb-1" style={{ backgroundImage: 'linear-gradient(90deg, #ffc28e 0%, #1feeff 100%)' }}>Smarter credit</p>
              <p className="text-white">Stronger decisions.</p>
            </div>
            <p className="text-white/[0.78] text-[13px] lg:text-[15px] leading-6 font-poppins max-w-[460px]">
              See your credit score in seconds, spot what's hurting it, and unlock the financial moves that actually move the needle, all in one place.
            </p>
            <div className="pt-0 md:pt-2">
              <Button variant="hero">
                Get Free Report
                <ArrowRight className="size-4 arrow-animate flex-shrink-0" />
              </Button>
            </div>
            <div className="hidden md:flex items-start gap-8 lg:gap-12 pt-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-bold text-[22px] md:text-[26px] tracking-[-0.52px] font-poppins">
                    <span className="text-white">{stat.value}</span>
                    <span className="text-[#2de1ea]">+</span>
                  </span>
                  <span className="text-white/[0.55] text-[11px] md:text-[12px] leading-[18px] font-poppins">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-dashboard-wrap md:flex md:justify-end">
            <div className="hero-dashboard-inner w-full max-w-[460px] rounded-[22px] border border-white/60 p-5 lg:p-6 flex flex-col gap-1" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f1f4f6 100%)' }}>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[13.5px] text-[#102a2e] font-poppins">Credit Health</span>
              </div>
              <div className="py-1"><ScoreGauge /></div>
              <div className="border-t border-[rgba(15,33,35,0.08)] pt-3 flex flex-col">
                {creditFactors.map((factor) => (
                  <div key={factor.label} className="flex items-center gap-3 py-[7px] border-b border-[rgba(15,33,35,0.06)] last:border-0">
                    <div className="size-8 rounded-lg border border-[rgba(15,33,35,0.08)] bg-white flex-shrink-0 flex items-center justify-center">
                      <FactorIcon type={factor.icon} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex items-baseline justify-between">
                        <span className="font-semibold text-[12.5px] text-[#102a2e] font-poppins leading-[18px]">{factor.label}</span>
                        <span className="text-[10.5px] text-[rgba(15,33,35,0.6)] font-poppins leading-[15.75px]">{factor.detail}</span>
                      </div>
                      <div className="h-1 rounded-full bg-[rgba(15,33,35,0.08)] overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${factor.progress}%`, backgroundColor: factor.color }} />
                      </div>
                    </div>
                    <svg className="w-3 h-3.5 flex-shrink-0 opacity-40" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 3l5 4-5 4" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between border border-[rgba(255,122,26,0.25)] rounded-[10px] bg-gradient-to-r from-[rgba(255,122,26,0.12)] to-[rgba(255,122,26,0.04)] px-3 py-2.5">
                <span className="text-[11px] text-[#102a2e] font-poppins opacity-60">Improve your score</span>
                <button className="bg-white border border-[rgba(0,123,133,0.2)] rounded-[7px] h-[31px] px-3 text-[12px] text-[#007b85] font-semibold font-poppins">View Tips</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide2() {
  return (
    <div className="min-w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:gap-[40px] lg:gap-[65px] items-start pt-3 md:pt-[65px]">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex items-center gap-1 text-[9px] md:text-[12px] tracking-[0.48px] font-poppins">
              <span className="font-bold text-white">#1</span>
              <span className="font-medium text-white">Bank's choice for Credit Report</span>
            </div>
            <div className="font-bold text-[18px] md:text-[26px] lg:text-[58px] leading-tight lg:leading-[60.9px] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-2.03px] font-poppins">
              <p className="text-white">See what</p>
              <p className="bg-clip-text text-transparent pb-1" style={{ backgroundImage: 'linear-gradient(90deg, #ffc28e 0%, #1feeff 100%)' }}>your bank sees.</p>
            </div>
            <p className="text-white/[0.78] text-[13px] lg:text-[15px] leading-6 font-poppins max-w-[460px]">
              The same CTOS report your bank pulls when evaluating your loan, now in your hands. Know exactly where you stand before you apply.
            </p>
            <div className="pt-0 md:pt-2">
              <Button variant="hero">
                View My Report
                <ArrowRight className="size-4 arrow-animate flex-shrink-0" />
              </Button>
            </div>
            <div className="hidden md:flex items-start gap-8 lg:gap-12 pt-5">
              {bankStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-bold text-[22px] md:text-[26px] tracking-[-0.52px] font-poppins">
                    <span className="text-white">{stat.value}</span>
                    <span className="text-[#2de1ea]">{stat.suffix}</span>
                  </span>
                  <span className="text-white/[0.55] text-[11px] md:text-[12px] leading-[18px] font-poppins">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-dashboard-wrap md:flex md:justify-end">
            <div className="hero-dashboard-inner w-full max-w-[460px] rounded-[22px] border border-white/60 flex flex-col" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f1f4f6 100%)', boxShadow: '0 30px 80px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.6)', padding: '22px 22px 20px' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-[13.5px] text-[#0F2123] font-poppins">Loan Application Review</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold font-poppins text-[#2D9F4E] px-[10px] py-1 rounded-full bg-[rgba(45,159,78,0.1)]">
                  <span className="size-1.5 rounded-full bg-[#2D9F4E] shadow-[0_0_6px_#2D9F4E]" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {bankLogos.map((bank) => (
                  <div key={bank.name} className="bg-white border border-[rgba(15,33,35,0.08)] rounded-[10px] flex items-center justify-center gap-1.5 font-poppins font-extrabold text-[11px] tracking-[-0.01em] px-2 py-[7px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,123,133,0.3)] hover:shadow-[0_6px_16px_rgba(0,123,133,0.12)]">
                    {bank.mark}
                    <span style={{ color: bank.color }}>{bank.name}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(15,33,35,0.08)] pt-3.5 mb-3.5 flex flex-col">
                <div className="grid items-center gap-3 py-2 px-1" style={{ gridTemplateColumns: '28px 1fr auto' }}>
                  <div className="size-7 rounded-[7px] bg-[rgba(0,123,133,0.12)] text-[#007B85] flex items-center justify-center shadow-[0_0_0_4px_rgba(0,123,133,0.08)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#0F2123] font-medium font-poppins">RM 50,000 Personal Loan</p>
                    <p className="text-[10.5px] text-[rgba(15,33,35,0.55)] font-poppins">Maybank Â· 2 min ago</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold font-poppins px-[9px] py-1 rounded-full text-[#007B85] bg-[rgba(0,123,133,0.10)] border border-[rgba(0,123,133,0.22)] whitespace-nowrap">
                    <span className="size-[5px] rounded-full bg-[#14C5CE] animate-pulse" />
                    Pending Review
                  </span>
                </div>
                <div className="grid items-center gap-3 py-2 px-1 border-t border-[rgba(15,33,35,0.05)]" style={{ gridTemplateColumns: '28px 1fr auto' }}>
                  <div className="size-7 rounded-[7px] bg-[rgba(232,130,31,0.12)] text-[#E8821F] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#0F2123] font-medium font-poppins">RM 320,000 Home Loan</p>
                    <p className="text-[10.5px] text-[rgba(15,33,35,0.55)] font-poppins">CIMB Â· 1 day ago</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold font-poppins px-[9px] py-1 rounded-full text-[#B86A14] bg-[rgba(232,130,31,0.10)] border border-[rgba(232,130,31,0.22)] whitespace-nowrap">
                    <span className="size-[5px] rounded-full bg-[#E8821F]" />
                    Pending Acceptance
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 rounded-[10px] border border-[rgba(0,123,133,0.22)]" style={{ background: 'linear-gradient(90deg, rgba(0,123,133,0.1), rgba(0,123,133,0.04))' }}>
                <div className="flex items-center gap-2 text-[12px] text-[#1F3133] font-medium font-poppins">
                  <svg className="text-[#007b85] flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
                  Pull the same report your bank sees
                </div>
                <button className="bg-white border border-[rgba(0,123,133,0.2)] rounded-[7px] h-[31px] px-3 text-[12px] text-[#007b85] font-semibold font-poppins flex-shrink-0">Try Now â†’</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide3({ mouse, onSubscribe }: { mouse: { x: number; y: number }; onSubscribe?: (plan: 'monthly' | 'yearly') => void }) {
  return (
    <div className="min-w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:gap-[40px] items-start pt-3 md:pt-[65px]">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="font-bold text-[18px] md:text-[26px] lg:text-[60px] leading-tight lg:leading-[63.6px] tracking-[-0.5px] md:tracking-[-1px] font-poppins">
              <p className="text-white">Stay ahead with</p>
              <p className="text-white">
                <span className="bg-clip-text text-transparent inline-block pb-1" style={{ backgroundImage: 'linear-gradient(90deg, #ffa53f 0%, #8bffde 100%)' }}>CTOS SecureID</span>
                .
              </p>
            </div>
            <p className="text-white/[0.82] text-[13px] lg:text-[17px] leading-[26px] font-poppins max-w-[520px]">
              Credit monitoring, dark web scanning, and 4 Score Reports yearly, one plan that watches your identity.
            </p>
            <p className="hidden md:block text-white/[0.65] text-[13px] font-poppins">
              From RM9.90 / month. Cancel anytime; no partial month refunds.<sup>1</sup>
            </p>
            <div className="pt-0 md:pt-2">
              <Button variant="hero" onClick={() => onSubscribe?.('monthly')}>
                Subscribe Now
                <ArrowRight className="size-4 arrow-animate flex-shrink-0" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative flex items-start justify-center w-full">
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[30px] size-[480px] rounded-[240px] border border-dashed border-white/[0.12] pointer-events-none" />
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[70px] size-[400px] rounded-[200px] border border-white/[0.06] pointer-events-none" />
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[110px] size-[320px] rounded-[160px] border border-dashed border-[rgba(245,130,32,0.18)] pointer-events-none" />
              <div className="relative mt-2 md:mt-4 lg:mt-6 drop-shadow-[0px_30px_30px_rgba(0,0,0,0.45)] w-[130px] h-[270px] md:w-[200px] md:h-[420px] lg:w-[280px] lg:h-[580px] rounded-[24px] md:rounded-[36px] overflow-hidden mx-auto">
                <img
                  src="https://www.figma.com/api/mcp/asset/6294a179-bd1f-48b2-846a-0ef56596a4d5"
                  alt="CTOS SecureID app"
                  className="absolute top-0 left-0 w-full"
                  style={{ borderRadius: '36px' }}
                />
              </div>
              <div className="hidden lg:flex absolute left-0 top-[260px] bg-white/[0.96] items-center gap-[10px] px-4 py-3 rounded-[14px] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.25)]"
                style={{ transform: `translate(${mouse.x * -10}px, ${mouse.y * -7}px)`, transition: 'transform 0.25s ease-out' }}>
                <div className="size-7 rounded-[8px] bg-[#0bb1be] flex items-center justify-center text-[14px] flex-shrink-0">ðŸ›¡</div>
                <div>
                  <p className="text-[#888] text-[10px] font-semibold font-poppins leading-none tracking-[0.5px]">PROTECTED</p>
                  <p className="text-[#102a2e] text-[12px] font-bold font-poppins leading-none mt-1">24/7 Monitoring</p>
                </div>
              </div>
              <div className="hidden lg:flex absolute right-0 top-[340px] bg-white/[0.96] items-center gap-[10px] px-4 py-3 rounded-[14px] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.25)]"
                style={{ transform: `translate(${mouse.x * 14}px, ${mouse.y * 10}px)`, transition: 'transform 0.25s ease-out' }}>
                <div className="size-7 rounded-[8px] bg-[#f15d22] flex items-center justify-center text-[14px] flex-shrink-0">ðŸ””</div>
                <div>
                  <p className="text-[#888] text-[10px] font-semibold font-poppins leading-none tracking-[0.5px]">REAL-TIME</p>
                  <p className="text-[#102a2e] text-[12px] font-bold font-poppins leading-none mt-1">Instant Alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// â”€â”€ Main Hero component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const SLIDE_COUNT = 3

export default function Hero({ onSubscribe }: { onSubscribe?: (plan: 'monthly' | 'yearly') => void }) {
  // index 0 = clone of last, 1..SLIDE_COUNT = real slides, SLIDE_COUNT+1 = clone of first
  const [index, setIndex] = useState(1)
  const [animated, setAnimated] = useState(true)
  const [pointerStart, setPointerStart] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = React.useRef<HTMLElement>(null)

  // After a silent (no-transition) position reset, re-enable the transition
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [animated])

  // When the CSS transition ends, detect if we landed on a clone and silently jump to the real slide
  const handleTransitionEnd = useCallback(() => {
    if (index === 0) {
      setAnimated(false)
      setIndex(SLIDE_COUNT)
    } else if (index === SLIDE_COUNT + 1) {
      setAnimated(false)
      setIndex(1)
    }
  }, [index])

  const goNext = useCallback(() => setIndex(i => i + 1), [])
  const goPrev = useCallback(() => setIndex(i => i - 1), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(goNext, 5000)
    return () => clearInterval(t)
  }, [paused, goNext])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    })
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setPointerStart(e.clientX)
    setPaused(true)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStart === null) return
    const delta = pointerStart - e.clientX
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev()
    setPointerStart(null)
    setTimeout(() => setPaused(false), 3000)
  }

  // Active dot: map real index (1-based) to 0-based dot index
  const activeDot = (index - 1 + SLIDE_COUNT) % SLIDE_COUNT

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-[335px] md:h-[600px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, #007b85 0%, #055157 99%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(11,177,190,0.25) 0%, rgba(11,177,190,0) 45%)' }} />

      <div
        className="relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Track: [clone-last][slide1][slide2][slide3][clone-first] */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animated ? 'transform 500ms ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <Slide3 mouse={mouse} onSubscribe={onSubscribe} />   {/* clone of last */}
          <Slide1 />
          <Slide2 />
          <Slide3 mouse={mouse} onSubscribe={onSubscribe} />
          <Slide1 />                 {/* clone of first */}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => { setIndex(i + 1); setPaused(true); setTimeout(() => setPaused(false), 3000) }}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ease-in-out focus:outline-none ${activeDot === i ? 'w-10 h-2.5 bg-[#2de1ea] shadow-[0_0_10px_rgba(45,225,234,0.7)]' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </section>
  )
}

