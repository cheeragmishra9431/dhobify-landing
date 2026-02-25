import Section from '../ui/Section'
import Container from '../ui/Container'
import { landingContent } from '../../data/landingContent'

function ServicesSection() {
  const { sectionHeadline, servicesList, highlightLine } =
    landingContent.services

  return (
    <Section background="grey">
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service) => (
            <li
              key={service}
              className="font-body text-base font-medium text-brand-black"
            >
              {service}
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base font-semibold text-brand-black">
          {highlightLine}
        </p>
      </Container>
    </Section>
  )
}

export default ServicesSection
