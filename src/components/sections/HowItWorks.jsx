import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import { landingContent } from '../../data/landingContent'

function StepIcon({ number }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-heading text-lg font-bold text-brand-black shadow-sm ring-1 ring-brand-black/5"
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
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4 rounded-card border border-gray-100 bg-brand-light-grey/30 p-5 md:flex-col md:p-6">
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
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default HowItWorks
