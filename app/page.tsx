import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DownloadSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
