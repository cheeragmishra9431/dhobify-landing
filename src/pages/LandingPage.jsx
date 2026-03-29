import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ProblemSection from '../components/sections/ProblemSection'
import HowItWorks from '../components/sections/HowItWorks'
import ServicesSection from '../components/sections/ServicesSection'
import WhyDhobify from '../components/sections/WhyDhobify'
import PartnerSection from '../components/sections/PartnerSection'
import InvestorSection from '../components/sections/InvestorSection'
import FAQSection from '../components/sections/FAQSection'
import FinalCTA from '../components/sections/FinalCTA'

function LandingPage() {
  return (
    <>
      <div className="announcement-banner bg-brand-black text-center py-2.5 px-4 relative overflow-hidden">
        <span className="relative z-10 font-heading text-sm md:text-base font-bold tracking-widest uppercase">
          <span className="banner-text">🚀 Launching on 1st May 2026</span>
        </span>
      </div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <ServicesSection />
      <WhyDhobify />
      <PartnerSection />
      <InvestorSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default LandingPage
