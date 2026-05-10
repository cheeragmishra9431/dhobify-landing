import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../motion/Reveal'
import OrderFlowDemo from '../order-flow/OrderFlowDemo'
import { landingContent } from '../../data/landingContent'
import { orderFlowShowcaseCopy } from '../../data/orderFlowShowcase'

function HeroSection() {
  const { headline, subheadline, supportingLine, primaryCta, secondaryCta } =
    landingContent.hero

  return (
    <Section
      id="order-flow"
      background="white"
      className="hero-section hero-grain relative overflow-hidden scroll-mt-20 pt-10 pb-14 md:pt-14 md:pb-20 lg:py-[5.5rem]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="motion-safe:animate-seo-float absolute -right-[18%] top-[-8%] h-[min(380px,48vw)] w-[min(380px,85vw)] rounded-full bg-brand-yellow/[0.09] blur-3xl motion-reduce:animate-none" />
        <div className="absolute -left-[16%] bottom-[-12%] h-[min(300px,50vw)] w-[min(320px,52vw)] rounded-full bg-[radial-gradient(circle,rgba(214,71,58,0.07)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fafafa]" />
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-14 xl:gap-20">
          <Reveal className="order-1 max-w-xl lg:max-w-none xl:max-w-[34rem]" delay={0}>
            <h1 className="font-heading text-hero-mobile font-extrabold leading-[1.07] tracking-[-0.02em] text-brand-black md:text-hero-desktop lg:text-hero-display lg:leading-[1.05]">
              {headline}
            </h1>
            <p className="mt-6 max-w-xl border-l-[3px] border-[#d6473a] pl-5 font-body text-base leading-relaxed text-brand-body-grey md:mt-8 md:text-lg md:leading-[1.7]">
              {subheadline}
            </p>
            <p className="mt-5 md:mt-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(214,71,58,0.18)] bg-white px-4 py-2.5 font-body text-sm font-medium text-brand-black shadow-[0_2px_12px_-4px_rgba(17,17,17,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_20px_-6px_rgba(214,71,58,0.12)]">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#d6473a] opacity-90"
                  aria-hidden
                />
                {supportingLine}
              </span>
            </p>
            <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3">
              <Button href={primaryCta.href} variant="primary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
                {secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal
            className="order-2 flex w-full justify-center lg:justify-end"
            delay={90}
            rootMargin="-6%"
          >
            <div className="w-full max-w-[min(100%,420px)] rounded-[1.875rem] border border-[rgba(214,71,58,0.15)] bg-white/75 p-6 shadow-[0_32px_64px_-40px_rgba(17,17,17,0.18)] ring-1 ring-black/[0.03] backdrop-blur-[8px] sm:p-7 md:p-8">
              <header className="border-b border-gray-100/90 pb-6 text-center lg:text-left">
                <p className="font-body text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[#d6473a]/95 sm:text-xs">
                  {orderFlowShowcaseCopy.eyebrow}
                </p>
                <p className="mt-3 font-heading text-lg font-semibold leading-snug tracking-tight text-brand-black sm:text-xl">
                  {orderFlowShowcaseCopy.title}
                </p>
                <p className="mx-auto mt-2.5 max-w-[20rem] font-body text-sm leading-relaxed text-brand-body-grey lg:mx-0 md:text-[0.9375rem] md:leading-relaxed">
                  {orderFlowShowcaseCopy.subtitle}
                </p>
              </header>

              <div className="pt-7 md:pt-8">
                <OrderFlowDemo variant="hero" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
