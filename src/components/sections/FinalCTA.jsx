import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function FinalCTA() {
  const { eyebrow, headline, subheadline, listStoreCta } = landingContent.finalCTA

  return (
    <Section background="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(250,204,21,0.14),transparent_55%)]" aria-hidden />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow light>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-white md:text-section-desktop">
            {headline}
          </h2>
          <p className="mt-5 font-body text-base text-white/90 leading-relaxed sm:mt-6 sm:text-lg">{subheadline}</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Button href="#partner" variant="primary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
              {listStoreCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

export default FinalCTA
