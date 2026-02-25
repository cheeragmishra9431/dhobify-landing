import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { landingContent } from '../../data/landingContent'

function WhyDhobify() {
  const { sectionHeadline, items, closingLine } = landingContent.benefits

  return (
    <Section background="white">
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((benefit) => (
            <Card key={benefit}>
              <p className="font-body text-base font-medium text-brand-black leading-relaxed">
                {benefit}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-12 font-body text-lg font-semibold text-brand-black">
          {closingLine}
        </p>
      </Container>
    </Section>
  )
}

export default WhyDhobify
