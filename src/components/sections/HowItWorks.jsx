import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function StepIcon({ number }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-heading text-lg font-bold text-brand-black shadow-md ring-1 ring-brand-black/5 transition-transform duration-300 ease-out motion-safe:group-hover:scale-105"
      aria-hidden
    >
      {number}
    </div>
  )
}

function HowItWorks() {
  const { eyebrow, sectionHeadline, steps } = landingContent.howItWorks

  return (
    <Section background="white">
      <Container>
        <Reveal delay={0}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            {sectionHeadline}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={75 + index * 70}>
              <div className="group flex gap-4 rounded-card border border-gray-100 bg-brand-light-grey/30 p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand-yellow/35 hover:bg-white hover:shadow-lg motion-reduce:hover:translate-y-0 md:flex-col md:p-6">
                <StepIcon number={index + 1} />
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-bold text-brand-black leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-base text-brand-body-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default HowItWorks
