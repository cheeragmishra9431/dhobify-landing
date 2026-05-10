import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function ProblemSection() {
  const { eyebrow, sectionHeadline, painPoints, transitionStatement } =
    landingContent.problem

  return (
    <Section background="grey">
      <Container>
        <Reveal delay={0}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            {sectionHeadline}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {painPoints.map((point, index) => (
            <Reveal key={point} delay={80 + index * 70} rootMargin="-6%">
              <Card
                variant="emphasis"
                className={
                  index % 3 === 1
                    ? 'border-l-brand-warm-orange'
                    : index % 3 === 2
                      ? 'border-l-brand-coral'
                      : ''
                }
              >
                <p className="font-heading text-sm font-bold text-brand-black/50 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 font-body text-base text-brand-body-grey leading-relaxed">
                  {point}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10 lg:mt-12">
          <p className="max-w-2xl border-l-[3px] border-brand-warm-orange bg-brand-warm-orange/5 py-4 pl-5 pr-4 font-body text-lg leading-relaxed text-brand-black md:pr-6">
            {transitionStatement}
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}

export default ProblemSection
