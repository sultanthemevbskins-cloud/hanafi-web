import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactUs from './components/ContactUs'
import ContactForm from './components/ContactForm'
import LearnCentre from './components/LearnCentre'
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

      {/* ── ContactUs: fixed overlay — slides down from top of viewport ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[59] transition-all duration-400 ${contactOpen ? 'bg-black/40 backdrop-blur-[3px] pointer-events-auto' : 'bg-transparent backdrop-blur-none pointer-events-none'}`}
        onClick={() => setContactOpen(false)}
      />
      {/* Left drawer */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-[60] w-[460px] max-w-[calc(100vw-48px)] shadow-[8px_0_48px_rgba(0,0,0,0.18)] transition-transform duration-[380ms] ${contactOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)', pointerEvents: contactOpen ? 'auto' : 'none' }}
      >
        <ContactUs onClose={() => setContactOpen(false)} />
      </div>

      <Header onLogoClick={() => setContactOpen(v => !v)} onSupportClick={() => setContactOpen(v => !v)} />
      <main>
        <Hero onSubscribe={openPanel} />
        <Welcome />
        <ConsumerProducts onSubscribe={openPanel} onGetCreditReport={() => setCreditPanelOpen(true)} />
        <CommercialProducts />
        <AppPromo />
      </main>
      <LearnCentre />
      <ContactForm onOpenContact={() => setContactOpen(true)} />
      <Footer />
      <BackToTop />
      <SecureIDPanel open={panelOpen} onClose={() => setPanelOpen(false)} initialPlan={initialPlan} />
      <CreditReportPanel open={creditPanelOpen} onClose={() => setCreditPanelOpen(false)} />
    </div>
  )
}
