import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SeoHead from '../lib/SeoHead'
import JsonLd from '../components/seo/JsonLd'
import { buildHomeJsonLd } from '../data/homeJsonLd'
import { landingContent } from '../data/landingContent'
import HeroSection from '../components/sections/HeroSection'
import HomepageSeoSection from '../components/sections/HomepageSeoSection'
import TrustDeliverySection from '../components/sections/TrustDeliverySection'
import ProblemSection from '../components/sections/ProblemSection'
import HowItWorks from '../components/sections/HowItWorks'
import OrderFlowShowcase from '../components/sections/OrderFlowShowcase'
import ServicesSection from '../components/sections/ServicesSection'
import WhyDhobify from '../components/sections/WhyDhobify'
import FeaturedPartnersSection from '../components/sections/FeaturedPartnersSection'
import PartnerSection from '../components/sections/PartnerSection'
import InvestorSection from '../components/sections/InvestorSection'
import FAQSection from '../components/sections/FAQSection'
import FinalCTA from '../components/sections/FinalCTA'
import MobileConversionBar from '../components/conversion/MobileConversionBar'
import WhatsAppDeskFab from '../components/conversion/WhatsAppDeskFab'

const HOME_TITLE =
  'Dhobify | Laundry Near Me Bangalore — Compare Laundry & Dry Cleaning with Pickup'
const HOME_DESC =
  'Compare laundry services Bangalore trusts: HSR Layout, Bellandur, Koramangala. Book laundry pickup, schedule dry cleaning delivery, and browse Cleanz24, UrbanClean Premium & more on Dhobify.'

function LandingPage() {
  const homeJsonLd = buildHomeJsonLd(landingContent.faq.items)

  return (
    <>
      <SeoHead title={HOME_TITLE} description={HOME_DESC} path="/" />
      <JsonLd id="jsonld-home" data={homeJsonLd} />
      <div className="pb-[5.5rem] md:pb-0">
        <div className="announcement-banner announcement-banner--subtle-shine relative overflow-hidden bg-brand-black px-4 py-2.5 text-center md:py-3">
          <span className="relative z-10 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/90 sm:text-sm md:text-base md:tracking-widest">
            <span className="banner-text">Launching in MAY 2026</span>
          </span>
        </div>
        <Navbar />
        <HeroSection />
        <HomepageSeoSection />
        <TrustDeliverySection />
        <ProblemSection />
        <HowItWorks />
        <OrderFlowShowcase />
        <ServicesSection />
        <WhyDhobify />
        <FeaturedPartnersSection />
        <PartnerSection />
        <InvestorSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
      <MobileConversionBar />
      <WhatsAppDeskFab />
    </>
  )
}

export default LandingPage
