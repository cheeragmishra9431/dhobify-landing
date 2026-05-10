import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'

const TRUST = [
  { title: 'Vetted partners', body: 'Stores are onboarded with clear handling and service standards.' },
  { title: 'Pricing before you pay', body: 'See indicative rates on area and store pages, then confirm in app.' },
  { title: 'Scheduled handoffs', body: 'Pickup and delivery windows you choose—built for apartment access in Bangalore.' },
]

/**
 * Trust strip + delivery promise (conversion + E-E-A-T signals on the homepage).
 */
function TrustDeliverySection() {
  return (
    <Section background="white" className="relative overflow-hidden border-y border-gray-100">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-light-grey/40 via-transparent to-brand-yellow/[0.06]" aria-hidden />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal delay={0}>
            <div>
              <SectionEyebrow>Trust</SectionEyebrow>
              <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
                Why Bangalore renters book on Dhobify
              </h2>
              <ul className="mt-8 space-y-6">
                {TRUST.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow ring-2 ring-brand-yellow/35"
                      aria-hidden
                    />
                    <div>
                      <p className="font-heading font-bold text-brand-black">{item.title}</p>
                      <p className="mt-1 font-body text-sm leading-relaxed text-brand-body-grey md:text-base">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} rootMargin="-8%">
            <div className="rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white via-white to-brand-light-grey/50 p-6 shadow-[0_20px_50px_-28px_rgba(17,17,17,0.12)] ring-1 ring-gray-900/[0.04] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-28px_rgba(17,17,17,0.18)] motion-reduce:hover:translate-y-0 md:p-8">
              <SectionEyebrow>Delivery promise</SectionEyebrow>
              <h2 className="mt-3 font-heading text-xl font-bold text-brand-black md:text-2xl">
                Coordinated pickup &amp; return
              </h2>
              <p className="mt-4 font-body text-brand-body-grey leading-relaxed">
                Laundry marketplaces fail when riders and store capacity fall out of sync. Dhobify focuses on predictable
                slotting: you choose when bags leave your doorstep and when clean clothes come back—rain delays and tower
                access notes travel with your order instead of requiring another phone call.
              </p>
              <p className="mt-4 font-body text-sm text-brand-body-grey leading-relaxed">
                If something changes, we prioritize transparent updates inside the booking flow rather than silently
                moving your slot. Launch offers may apply—everything you owe is confirmed at checkout.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export default TrustDeliverySection
