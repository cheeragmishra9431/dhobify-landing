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
      <div className="bg-brand-yellow text-brand-black text-center py-2 px-4 font-body text-sm font-semibold tracking-wide">
        Launching on 1st May 2026
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
