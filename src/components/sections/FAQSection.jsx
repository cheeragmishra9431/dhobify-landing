import Section from '../ui/Section'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function FAQSection() {
  const { eyebrow, sectionHeadline, items } = landingContent.faq

  return (
    <Section background="white" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-brand-gold/[0.04]"
        aria-hidden
      />
      <Container className="relative">
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
