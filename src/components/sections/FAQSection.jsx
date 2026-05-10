import Section from '../ui/Section'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

function FAQSection() {
  const { eyebrow, sectionHeadline, items } = landingContent.faq

  return (
    <Section background="white">
      <Container>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-8 max-w-3xl md:mt-10">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  )
}

export default FAQSection
