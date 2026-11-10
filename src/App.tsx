import { useState } from 'react'
import { About } from './components/sections/About'
import { Clinic } from './components/sections/Clinic'
import { Differentiators } from './components/sections/Differentiators'
import { FinalCta } from './components/sections/FinalCta'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { SocialProof } from './components/sections/SocialProof'
import { Specialties } from './components/sections/Specialties'
import { TrustBar } from './components/sections/TrustBar'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { WhatsAppFab } from './components/layout/WhatsAppFab'
import { PrivacyModal } from './components/modals/PrivacyModal'
import { ServiceModal } from './components/modals/ServiceModal'
import { TrajectoryModal } from './components/modals/TrajectoryModal'
import type { Service } from './data/site'

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [trajectoryOpen, setTrajectoryOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-[10px] focus:font-semibold focus:tracking-[0.18em] focus:text-cream focus:uppercase"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <SocialProof />
        <TrustBar />
        <About onOpenTrajectory={() => setTrajectoryOpen(true)} />
        <Specialties onOpenService={setSelectedService} />
        <Differentiators />
        <Journey />
        <Clinic />
        <FinalCta />
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <WhatsAppFab />

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      <TrajectoryModal open={trajectoryOpen} onClose={() => setTrajectoryOpen(false)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  )
}
