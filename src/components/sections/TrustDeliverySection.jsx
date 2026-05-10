import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'

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
    <Section background="white" className="border-y border-gray-100">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
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

          <div className="rounded-card border border-gray-200 bg-gradient-to-br from-brand-light-grey/80 to-white p-6 shadow-sm md:p-8">
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
        </div>
      </Container>
    </Section>
  )
}

export default TrustDeliverySection
