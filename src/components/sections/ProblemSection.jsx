import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { landingContent } from '../../data/landingContent'

function ProblemSection() {
  const { sectionHeadline, painPoints, transitionStatement } =
    landingContent.problem

  return (
    <Section background="grey">
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <Card key={point}>
              <p className="font-body text-base text-brand-body-grey leading-relaxed">
                {point}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-12 max-w-2xl font-body text-lg text-brand-black leading-relaxed">
          {transitionStatement}
        </p>
      </Container>
    </Section>
  )
}

export default ProblemSection
