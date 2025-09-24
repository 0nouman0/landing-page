import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import BenefitsSection from '@/components/BenefitsSection'
import DemoSection from '@/components/DemoSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <DemoSection />
      <CTASection />
      <Footer />
      <FloatingActionButton />
    </main>
  )
}
