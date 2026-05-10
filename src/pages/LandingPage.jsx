import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SeoHead from '../lib/SeoHead'
import HeroSection from '../components/sections/HeroSection'
import HomepageSeoSection from '../components/sections/HomepageSeoSection'
import ProblemSection from '../components/sections/ProblemSection'
import HowItWorks from '../components/sections/HowItWorks'
import ServicesSection from '../components/sections/ServicesSection'
import WhyDhobify from '../components/sections/WhyDhobify'
import PartnerSection from '../components/sections/PartnerSection'
import InvestorSection from '../components/sections/InvestorSection'
import FAQSection from '../components/sections/FAQSection'
import FinalCTA from '../components/sections/FinalCTA'

const HOME_TITLE = 'Dhobify | Compare Laundry and Dry Cleaning in Bangalore'
const HOME_DESC =
  'Compare laundry stores, schedule pickup and delivery at times that work for you, in HSR Layout and across Bangalore. Transparent pricing, trusted partners, and one simple app with Dhobify.'

function LandingPage() {
  return (
    <>
      <SeoHead title={HOME_TITLE} description={HOME_DESC} path="/" />
      <div className="announcement-banner bg-brand-black text-center py-2.5 px-4 relative overflow-hidden">
        <span className="relative z-10 font-heading text-sm md:text-base font-bold tracking-widest uppercase">
          <span className="banner-text">🚀 Launching in MAY 2026</span>
        </span>
      </div>
      <Navbar />
      <HeroSection />
      <HomepageSeoSection />
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
