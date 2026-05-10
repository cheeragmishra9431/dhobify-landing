import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

function ProblemSection() {
  const { eyebrow, sectionHeadline, painPoints, transitionStatement } =
    landingContent.problem

  return (
    <Section background="grey">
      <Container>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {painPoints.map((point, index) => (
            <Card key={point} variant="emphasis">
              <p className="font-heading text-sm font-bold text-brand-black/50 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 font-body text-base text-brand-body-grey leading-relaxed">
                {point}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-10 max-w-2xl font-body text-lg text-brand-black leading-relaxed lg:mt-12">
          {transitionStatement}
        </p>
      </Container>
    </Section>
  )
}

export default ProblemSection
