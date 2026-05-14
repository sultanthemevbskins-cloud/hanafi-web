import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactUs from './components/ContactUs'
import ConsumerProducts from './components/ConsumerProducts'
import AppPromo from './components/AppPromo'
import Welcome from './components/Welcome'
import CommercialProducts from './components/CommercialProducts'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SecureIDPanel from './components/SecureIDPanel'
import CreditReportPanel from './components/CreditReportPanel'

export default function App() {
  const [panelOpen, setPanelOpen]         = useState(false)
  const [initialPlan, setInitialPlan]     = useState<'monthly' | 'yearly'>('monthly')
  const [creditPanelOpen, setCreditPanelOpen] = useState(false)
  const [contactOpen, setContactOpen]     = useState(false)

  function openPanel(plan: 'monthly' | 'yearly') {
    setInitialPlan(plan)
    setPanelOpen(true)
  }

  return (
    <div className="min-h-screen font-manrope">
      {/* Click-outside backdrop — sits below the hero slot (z-31) but above page content */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-500 ${contactOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setContactOpen(false)}
      />

      <Header onLogoClick={() => setContactOpen(v => !v)} onSupportClick={() => setContactOpen(v => !v)} />
      <main>
        {/* overflow-hidden clips the ContactUs as it slides out above */}
        <div
          className="relative h-[335px] md:h-[600px] overflow-hidden"
          style={{ zIndex: contactOpen ? 31 : undefined }}
        >
          <div className="absolute inset-0">
            <Hero onSubscribe={openPanel} />
          </div>
          <div
            className={`absolute inset-0 z-[30] transition-transform duration-500 ease-in-out ${contactOpen ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ pointerEvents: contactOpen ? 'auto' : 'none' }}
          >
            <ContactUs onClose={() => setContactOpen(false)} />
          </div>
        </div>
        <Welcome />
        <ConsumerProducts onSubscribe={openPanel} onGetCreditReport={() => setCreditPanelOpen(true)} />
        <CommercialProducts />
        <AppPromo />
      </main>
      <Footer />
      <BackToTop />
      <SecureIDPanel open={panelOpen} onClose={() => setPanelOpen(false)} initialPlan={initialPlan} />
      <CreditReportPanel open={creditPanelOpen} onClose={() => setCreditPanelOpen(false)} />
    </div>
  )
}
