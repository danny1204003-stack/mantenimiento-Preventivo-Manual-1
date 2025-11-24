import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MaintenanceSection } from "@/components/maintenance-section"
import { GlossarySection } from "@/components/glossary-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MaintenanceSection />
      <GlossarySection />
      <TeamSection />
      <Footer />
    </main>
  )
}
