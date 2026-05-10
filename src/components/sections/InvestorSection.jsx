import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

function InvestorSection() {
  const { eyebrow, sectionHeadline, visionPoints, closingStatement } =
    landingContent.investor

  return (
    <Section id="investor" background="dark" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute -right-[20%] top-0 h-[min(480px,70vw)] w-[min(480px,70vw)] rounded-full bg-brand-yellow/[0.08] blur-3xl motion-safe:animate-seo-float motion-reduce:animate-none" aria-hidden />
      <div className="pointer-events-none absolute -left-[15%] bottom-0 h-[min(380px,65vw)] w-[min(380px,65vw)] rounded-full bg-brand-coral/[0.07] blur-3xl motion-safe:animate-seo-float motion-reduce:animate-none [animation-delay:-5s]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-[min(100%,420px)] bg-gradient-to-t from-brand-yellow/[0.06] via-brand-coral/[0.04] to-transparent blur-2xl" aria-hidden />
      <Container className="relative">
        <Reveal delay={0}>
          <SectionEyebrow light className="!text-brand-warm-orange/85">{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-white md:text-section-desktop">
            {sectionHeadline}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
            {visionPoints.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-white/15 bg-white/[0.06] p-5 font-body text-base text-white/90 leading-relaxed backdrop-blur-sm transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.1] motion-reduce:hover:translate-y-0"
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={140} className="mt-10 lg:mt-12">
          <p className="max-w-2xl font-body text-lg text-white/90 leading-relaxed">{closingStatement}</p>
        </Reveal>
      </Container>
    </Section>
  )
}

export default InvestorSection
