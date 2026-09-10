import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PortfolioGrid from '@/components/PortfolioGrid'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bg">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
