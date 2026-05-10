import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

function InvestorSection() {
  const { eyebrow, sectionHeadline, visionPoints, closingStatement } =
    landingContent.investor

  return (
    <Section id="investor" background="dark" className="scroll-mt-20">
      <Container>
        <SectionEyebrow light>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-section-mobile font-bold text-white md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {visionPoints.map((point) => (
            <li
              key={point}
              className="rounded-lg border border-white/15 bg-white/[0.06] p-5 font-body text-base text-white/90 leading-relaxed backdrop-blur-sm"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl font-body text-lg text-white/90 leading-relaxed lg:mt-12">
          {closingStatement}
        </p>
      </Container>
    </Section>
  )
}

export default InvestorSection
