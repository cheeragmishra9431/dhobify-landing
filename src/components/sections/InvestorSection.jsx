import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { landingContent } from '../../data/landingContent'

function InvestorSection() {
  const { sectionHeadline, visionPoints, closingStatement, cta } =
    landingContent.investor

  return (
    <Section background="dark">
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-white md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visionPoints.map((point) => (
            <li
              key={point}
              className="font-body text-base text-white/90 leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl font-body text-lg text-white/90 leading-relaxed">
          {closingStatement}
        </p>
        <div className="mt-8">
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-brand-deep-black">
            {cta}
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export default InvestorSection
