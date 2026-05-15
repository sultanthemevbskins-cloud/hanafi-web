import { Icon } from '@ctos/ui'
import ctosFooterLogo from '../assets/ctos-footer-logo.png'

// Stable hosted QR code pointing to the CTOS app download page
const APP_QR_URL =
  'https://api.qrserver.com/v1/create-qr-code/?size=156x156&data=https%3A%2F%2Fapps.ctos.com.my&margin=10&format=png'

const footerLinks = [
  { label: 'FAQs',                   col: 1 },
  { label: 'Disclaimer Clause',      col: 2 },
  { label: 'Terms and Conditions',   col: 1 },
  { label: 'Security Disclaimer',    col: 2 },
  { label: 'Privacy Policy',         col: 1 },
  { label: 'Terms of Use',           col: 2 },
  { label: 'Declaration of Consent', col: 1 },
  { label: 'Contact Us',             col: 2 },
]

const socialLinks: Array<{ name: 'social-facebook' | 'social-youtube' | 'social-linkedin' | 'social-tiktok'; label: string; href: string }> = [
  { name: 'social-facebook', label: 'Facebook', href: 'https://www.facebook.com/CTOSMalaysia' },
  { name: 'social-youtube',  label: 'YouTube',  href: 'https://www.youtube.com/@CTOSMalaysia' },
  { name: 'social-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/ctos-data-systems' },
  { name: 'social-tiktok',   label: 'TikTok',   href: 'https://www.tiktok.com/@ctos.my' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f7a82] pt-[37px] pb-7">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1.2fr_1.6fr] gap-10 md:gap-14 pb-10 md:pb-14">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-7">
            <img src={ctosFooterLogo} alt="CTOS Digital" className="h-[44px] w-auto" />
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
              {/* QR code — hosted via qrserver.com, no auth required */}
              <div className="bg-white rounded-[4px] size-[78px] p-1.5 flex-shrink-0 overflow-hidden">
                <img
                  src={APP_QR_URL}
                  alt="Scan to download the CTOS app"
                  className="size-full object-contain"
                  loading="lazy"
                />
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
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="size-[30px] rounded-[6px] bg-white/[0.14] flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                {/* Inline SVG via Icon DS component — no external image deps */}
                <Icon
                  name={social.name}
                  size={15}
                  color="white"
                  fill="white"
                  stroke="none"
                  strokeWidth={0}
                />
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
