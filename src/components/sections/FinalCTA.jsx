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
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(214,71,58,0.12),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(241,152,37,0.08),transparent_45%)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow light className="!text-brand-glow-orange/75">{eyebrow}</SectionEyebrow>
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
