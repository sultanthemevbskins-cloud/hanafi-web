import { useEffect, useRef } from 'react'

const appScreenshot = 'https://www.figma.com/api/mcp/asset/1af255cb-accd-48f2-9abc-8f4126218830'
const qrAndroid = 'https://www.figma.com/api/mcp/asset/42b0bb2d-c587-466d-843a-49f67fbdb356'
const qrIos     = 'https://www.figma.com/api/mcp/asset/42b0bb2d-c587-466d-843a-49f67fbdb356'
const qrHuawei  = 'https://www.figma.com/api/mcp/asset/42b0bb2d-c587-466d-843a-49f67fbdb356'
const bgLarge   = 'https://www.figma.com/api/mcp/asset/62accd08-a86f-43e4-9b7e-ba9d6859dc2d'

function AndroidIcon() {
  // Android Bugdroid — Font Awesome path, official green
  return (
    <svg width="22" height="20" viewBox="0 0 576 512" fill="#3DDC84">
      <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a8.34,8.34,0,1,0-14.48-8.23h0l-48.51,84.07a301.3,301.3,0,0,0-246.56,0L119.09,66.22a8.35,8.35,0,1,0-14.48,8.23h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
    </svg>
  )
}

function AppleIcon() {
  // Apple logo — bitten apple + leaf
  return (
    <svg width="19" height="22" viewBox="0 0 24 24" fill="#0F2123">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z" />
      <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function HuaweiIcon() {
  // Huawei 8-petal flower — narrow leaf paths rotated every 45°
  const petal = "M12,3.5 C11.2,5.5 10.7,8 10.8,9.8 C10.9,11.2 11.5,12 12,12 C12.5,12 13.1,11.2 13.2,9.8 C13.3,8 12.8,5.5 12,3.5 Z"
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path key={deg} d={petal} fill="#CF0A2C" transform={`rotate(${deg} 12 12)`} />
      ))}
    </svg>
  )
}

const stores = [
  {
    label: 'Android',
    store: 'Google Play',
    qr: qrAndroid,
    icon: <AndroidIcon />,
    accent: '#01875F',
    accentBg: 'rgba(1,135,95,0.08)',
  },
  {
    label: 'iOS',
    store: 'App Store',
    qr: qrIos,
    icon: <AppleIcon />,
    accent: '#0F2123',
    accentBg: 'rgba(15,33,35,0.06)',
  },
  {
    label: 'Huawei',
    store: 'AppGallery',
    qr: qrHuawei,
    icon: <HuaweiIcon />,
    accent: '#CF0A2C',
    accentBg: 'rgba(207,10,44,0.07)',
  },
]

export default function AppPromo() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      bgRef.current.style.transform = `translateY(${rect.top * 0.3}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#e8e8e8]" style={{ minHeight: '500px' }}>
      {/* Background with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img ref={bgRef} src={bgLarge} alt="" style={{ position: 'absolute', left: 0, width: '100%', height: '370.68%', top: '-219.64%', maxWidth: 'none', objectFit: 'cover', willChange: 'transform' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(171.59deg, rgba(191,191,191,0.68) 28.34%, rgba(255,255,255,0.68) 89.3%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — App mockup */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="relative bg-[#0a0a0a] rounded-[36px] p-2 w-[260px] md:w-[368px]" style={{ boxShadow: '-5px -15px 30.85px white, 0px 30px 80px rgba(0,0,0,0.45)' }}>
              <img src={appScreenshot} alt="CTOS App" className="w-full rounded-[28px]" />
            </div>
          </div>

          {/* Right — Copy + QR codes */}
          <div className="flex flex-col gap-5 max-w-[540px] order-1 md:order-2">
            <h2 className="font-extrabold text-[36px] md:text-[48px] leading-tight md:leading-[52.8px] tracking-[-1px] md:tracking-[-1.2px] font-jakarta">
              <span className="text-[#5c5c5c]">Your credit,</span>
              <br />
              <span className="bg-clip-text text-transparent pb-1 inline-block" style={{ backgroundImage: 'linear-gradient(90deg, #39a7b1 0%, #007b85 100%)' }}>
                in your pocket.
              </span>
            </h2>
            <p className="text-[#102a2e] text-[14px] md:text-[16px] leading-[25.6px] font-manrope">
              Track your CTOS Score, monitor your accounts, and act on alerts the moment they happen. Everything you need to stay on top of your credit, right on your home screen.
            </p>

            {/* QR trio */}
            <div className="mt-4 border-t border-[rgba(0,0,0,0.08)] pt-6">
              <p className="text-[12px] font-semibold text-[rgba(15,33,35,0.45)] font-manrope uppercase tracking-[1.5px] mb-4">Scan to download</p>
              <div className="grid grid-cols-3 gap-3">
                {stores.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-3 bg-white/80 backdrop-blur-sm rounded-[16px] p-4 border border-[rgba(15,33,35,0.07)] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-200">
                    {/* Platform badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ backgroundColor: s.accentBg }}>
                      {s.icon}
                      <span className="font-bold text-[11px] font-manrope" style={{ color: s.accent }}>{s.label}</span>
                    </div>
                    {/* QR code */}
                    <div className="bg-white rounded-[10px] p-1.5 size-[80px] md:size-[90px] flex-shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                      <img src={s.qr} alt={`QR code for ${s.store}`} className="size-full" />
                    </div>
                    {/* Store name */}
                    <span className="text-[11px] text-[rgba(15,33,35,0.5)] font-manrope font-medium text-center leading-tight">{s.store}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
