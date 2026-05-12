const ctosLogo = 'https://www.figma.com/api/mcp/asset/bf1f4170-46b5-4154-92b0-81d24cdfb213'
const appQrCode = 'https://www.figma.com/api/mcp/asset/8546187c-1ff0-4fd3-9704-9aa224ef47b1'
const facebookIcon = 'https://www.figma.com/api/mcp/asset/fddfe13d-0a51-4ac1-8d6b-cc4d92985758'
const youtubeIcon = 'https://www.figma.com/api/mcp/asset/9aa31b2c-42b5-47b9-99c9-acfb01a15289'
const linkedinIcon = 'https://www.figma.com/api/mcp/asset/92f605ca-1d47-4a34-98be-f75844ee7e7d'
const tiktokIcon = 'https://www.figma.com/api/mcp/asset/8e3c2560-b8a5-4c4c-bdcb-2a23748e7c2d'

const footerLinks = [
  { label: 'FAQs', col: 1 },
  { label: 'Disclaimer Clause', col: 2 },
  { label: 'Terms and Conditions', col: 1 },
  { label: 'Security Disclaimer', col: 2 },
  { label: 'Privacy Policy', col: 1 },
  { label: 'Terms of Use', col: 2 },
  { label: 'Declaration of Consent', col: 1 },
  { label: 'Contact Us', col: 2 },
]

const socialLinks = [
  { icon: facebookIcon, label: 'Facebook' },
  { icon: youtubeIcon, label: 'YouTube' },
  { icon: linkedinIcon, label: 'LinkedIn' },
  { icon: tiktokIcon, label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f7a82] pt-[37px] pb-7">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1.2fr_1.6fr] gap-10 md:gap-14 pb-10 md:pb-14">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-7">
            <img src={ctosLogo} alt="CTOS" className="h-[50px] w-auto object-contain object-left" />
            <div className="flex flex-col gap-[17px]">
              <p className="text-white/[0.85] text-[14px] leading-[23.1px] font-poppins">
                Established in 1990, CTOS is Malaysia's leading Credit Reporting Agency (CRA) under
                the ambit of the Credit Reporting Agencies Act 2010.
              </p>
              <p className="text-white/[0.85] text-[14px] leading-[23.1px] font-poppins">
                At CTOS, we facilitate credit extensions by empowering individuals and businesses
                with access to crucial information at greater ease and speed.
              </p>
            </div>
          </div>

          {/* Column 2: Nav links */}
          <div className="py-0 md:py-[22px]">
            <p className="text-white font-semibold text-[14px] leading-[21px] font-poppins mb-3">
              General
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="text-white/[0.85] text-[14px] leading-[21px] font-poppins hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: App download */}
          <div className="flex items-center py-0 md:py-[86px]">
            <div className="flex items-start gap-[18px]">
              <div className="bg-white rounded-[4px] size-[78px] p-1.5 flex-shrink-0">
                <img src={appQrCode} alt="Download CTOS App QR" className="size-full" />
              </div>
              <div className="flex flex-col gap-[3px]">
                <p className="text-white font-semibold text-[14px] leading-[21px] font-poppins">
                  Download the CTOS App!
                </p>
                <p className="text-white/[0.85] text-[13.5px] leading-[20.25px] font-poppins max-w-[260px]">
                  View your credit details, track score changes and manage your CTOS account on
                  mobile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.18] pt-[23px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="size-[30px] rounded-[6px] bg-white/[0.14] flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <img src={social.icon} alt={social.label} className="size-3.5" />
              </a>
            ))}
          </div>
          <p className="text-white/[0.85] text-[13.5px] leading-[20.25px] font-poppins">
            © Copyright CTOS Data Systems.
          </p>
        </div>
      </div>
    </footer>
  )
}
