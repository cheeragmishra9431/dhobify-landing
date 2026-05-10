import Section from '../ui/Section'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function FAQSection() {
  const { eyebrow, sectionHeadline, items } = landingContent.faq

  return (
    <Section background="white" className="relative">
      <Container>
        <Reveal delay={0}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            {sectionHeadline}
          </h2>
        </Reveal>
        <Reveal delay={90} className="mt-8 max-w-3xl md:mt-10">
          <Accordion items={items} className="shadow-sm transition-shadow duration-300 hover:shadow-md" />
        </Reveal>
      </Container>
    </Section>
  )
}

export default FAQSection
