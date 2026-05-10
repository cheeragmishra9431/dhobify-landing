import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

function WhyDhobify() {
  const { eyebrow, sectionHeadline, items, closingLine } = landingContent.benefits

  return (
    <Section background="white">
      <Container>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3">
          {items.map((benefit) => (
            <Card key={benefit} variant="soft">
              <p className="font-body text-base font-medium text-brand-black leading-relaxed">
                {benefit}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-10 border-t border-gray-100 pt-10 font-body text-lg font-semibold text-brand-black lg:mt-12">
          {closingLine}
        </p>
      </Container>
    </Section>
  )
}

export default WhyDhobify
