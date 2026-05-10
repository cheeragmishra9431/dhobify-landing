import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function WhyDhobify() {
  const { eyebrow, sectionHeadline, items, closingLine } = landingContent.benefits

  return (
    <Section background="white" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-[20%] top-[10%] h-[min(440px,70vw)] w-[min(440px,70vw)] rounded-full bg-gradient-to-bl from-brand-gold/[0.12] via-transparent to-brand-coral/[0.05] blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <Reveal delay={0}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            {sectionHeadline}
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3">
            {items.map((benefit) => (
              <Card
                key={benefit}
                variant="soft"
                className="border-brand-coral/0 transition-[box-shadow,border-color] duration-300 hover:border-brand-warm-orange/25 hover:shadow-md hover:shadow-brand-gold/10"
              >
                <p className="font-body text-base font-medium text-brand-black leading-relaxed">{benefit}</p>
              </Card>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="mt-10 lg:mt-12">
          <p className="border-t border-brand-warm-orange/25 pt-10 font-body text-lg font-semibold text-brand-warm-orange lg:pt-12">
            {closingLine}
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}

export default WhyDhobify
