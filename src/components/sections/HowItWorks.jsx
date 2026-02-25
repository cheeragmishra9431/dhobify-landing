import Section from '../ui/Section'
import Container from '../ui/Container'
import { landingContent } from '../../data/landingContent'

function StepIcon({ number }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-heading text-lg font-bold text-brand-black"
      aria-hidden
    >
      {number}
    </div>
  )
}

function HowItWorks() {
  const { sectionHeadline, steps } = landingContent.howItWorks

  return (
    <Section background="white">
      <Container>
        <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
          {sectionHeadline}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <StepIcon number={index + 1} />
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-black">
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
