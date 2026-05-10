import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'

const HSR_PATH = '/laundry-in-hsr-layout'

/**
 * Home (below-hero) SEO block: local discovery, internal link to the HSR area page, CTA to #book-pickup.
 */
function HomepageSeoSection() {
  return (
    <Section
      id="book-pickup"
      background="grey"
      className="border-y border-gray-200/80 scroll-mt-24 md:scroll-mt-28"
    >
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {'Laundry & dry cleaning services in Bangalore'}
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 font-body text-base leading-relaxed text-brand-body-grey">
          <p>
            Dhobify is a one-stop platform to discover and book the best laundry services in Bangalore. From everyday
            washing to premium dry cleaning, we connect you with trusted local laundry providers offering doorstep pickup
            and delivery—with the option to schedule your return delivery when you book.
          </p>
          <p>
            Whether you are in HSR Layout, Bellandur, or nearby areas, Dhobify helps you compare services, check pricing, and
            schedule pickup and delivery in just a few clicks.
          </p>
          <p>
            Looking for laundry in HSR specifically? See stores, sample pricing, and answers to common questions on our
            local guide.{' '}
            <Link
              to={HSR_PATH}
              className="font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-2 hover:text-brand-body-grey"
            >
              Laundry in HSR Layout — open the area page
            </Link>
            .
          </p>
        </div>
        <div className="mt-8">
          <Button href={HSR_PATH} variant="primary" size="lg">
            {'Book pickup & delivery'}
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default HomepageSeoSection
