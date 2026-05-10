import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'

const PARTNERS = [
  {
    name: 'Cleanz24',
    description: 'Consistent everyday laundry with dependable wash & fold volume handling.',
    href: '/store/cleanz24-hsr',
  },
  {
    name: 'UrbanClean Premium',
    description: 'Premium dry cleaning and finishing for suits, silks, and occasion wear.',
    href: '/store/urbanclean-premium',
  },
  {
    name: 'Shyam Sundar Laundry',
    description: 'Neighbourhood-friendly rates for families who need weekly reliability.',
    href: '/store/shyam-sundar-hsr',
  },
  {
    name: 'Express Laundry',
    description: 'Faster cycles when your calendar suddenly compresses—subject to fabric safety.',
    href: '/store/express-laundry-hsr',
  },
]

/**
 * Featured partners with internal links to dedicated store pages (Local SEO + crawl paths).
 */
function FeaturedPartnersSection() {
  return (
    <Section id="featured-partners" background="white" className="scroll-mt-20 border-t border-gray-100">
      <Container>
        <Reveal delay={0}>
          <SectionEyebrow>Partners</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            Featured laundry partners
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base text-brand-body-grey leading-relaxed">
            Each profile opens a full store page with services, pickup notes, and indicative pricing so you can compare
            before you book on Dhobify.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <ul className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:gap-6">
            {PARTNERS.map((p) => (
              <li
                key={p.name}
                className="rounded-card border border-gray-200 bg-brand-light-grey/25 p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand-yellow/40 hover:bg-white hover:shadow-lg motion-reduce:hover:translate-y-0 md:p-6"
              >
                <h3 className="font-heading text-lg font-bold text-brand-black">
                  <Link to={p.href} className="hover:underline hover:decoration-brand-yellow hover:underline-offset-4">
                    {p.name}
                  </Link>
                </h3>
                <p className="mt-2 font-body text-sm text-brand-body-grey leading-relaxed md:text-base">{p.description}</p>
                <Link
                  to={p.href}
                  className="mt-4 inline-block text-sm font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-4 transition-colors hover:text-brand-body-grey"
                >
                  View {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={40} className="mt-10">
          <p className="font-body text-sm text-brand-body-grey">
            Browsing by area? Start with{' '}
            <Link to="/laundry-in-hsr-layout" className="font-semibold text-brand-black underline-offset-2 hover:underline">
              laundry in HSR Layout
            </Link>
            ,{' '}
            <Link to="/laundry-in-bellandur" className="font-semibold text-brand-black underline-offset-2 hover:underline">
              laundry in Bellandur
            </Link>
            , or{' '}
            <Link
              to="/dry-cleaning-in-hsr-layout"
              className="font-semibold text-brand-black underline-offset-2 hover:underline"
            >
              dry cleaning in HSR Layout
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}

export default FeaturedPartnersSection
