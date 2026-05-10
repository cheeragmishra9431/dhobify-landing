import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

const HSR_PATH = '/laundry-in-hsr-layout'

/**
 * Home (below-hero) SEO block: local discovery, internal link to the HSR area page, CTA to #book-pickup.
 */
function HomepageSeoSection() {
  const { homepageSeo } = landingContent
  const { eyebrow, trustPoints } = homepageSeo

  return (
    <Section
      id="book-pickup"
      background="grey"
      className="scroll-mt-20 border-y border-gray-200/80"
    >
      <Container>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          Laundry &amp; dry cleaning services in Bangalore
        </h2>

        <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="space-y-4 font-body text-base leading-relaxed text-brand-body-grey">
            <p>
              Dhobify is a one-stop platform to discover and book the best laundry services in Bangalore.
              From everyday washing to premium dry cleaning, we connect you with trusted local laundry
              providers offering doorstep pickup and delivery—with the option to schedule your return
              delivery when you book.
            </p>
            <p>
              Whether you are in HSR Layout, Bellandur, or nearby areas, Dhobify helps you compare services,
              check pricing, and schedule pickup and delivery in just a few clicks.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-card border border-gray-200/80 bg-white p-5 shadow-sm sm:p-6">
              <p className="font-body text-base leading-relaxed text-brand-body-grey">
                Looking for laundry in HSR specifically? See stores, sample pricing, and answers to common
                questions on our local guide.{' '}
                <Link
                  to={HSR_PATH}
                  className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-2 hover:text-brand-body-grey"
                >
                  Laundry in HSR Layout — open the area page
                </Link>
                .
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3" role="list">
              {trustPoints.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-gray-200/70 bg-brand-light-grey/50 px-4 py-3 sm:min-h-[100px] md:px-4 md:py-4"
                >
                  <p className="font-heading text-sm font-bold text-brand-black">{item.title}</p>
                  <p className="mt-1 font-body text-sm leading-snug text-brand-body-grey">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 lg:mt-10">
          <Button href={HSR_PATH} variant="primary" size="lg" className="w-full min-h-[48px] sm:w-auto">
            Book pickup &amp; delivery
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default HomepageSeoSection
