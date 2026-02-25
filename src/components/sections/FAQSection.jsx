import Section from '../ui/Section'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'
import { landingContent } from '../../data/landingContent'

function FAQSection() {
  const { sectionHeadline, items } = landingContent.faq

  return (
    <Section background="white">
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-12 max-w-3xl">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  )
}

export default FAQSection
