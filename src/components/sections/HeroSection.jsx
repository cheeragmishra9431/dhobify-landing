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
      padded={false}
      className="hero-grain relative scroll-mt-20 pt-6 pb-10 sm:pt-10 sm:pb-14 md:pt-14 md:pb-20 lg:py-[5.5rem]"
    >
      {/* Decorative layers: overflow hidden on this layer only (clips blur bleed; avoids section-level clip hiding copy). */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="motion-safe:animate-seo-float absolute -right-[18%] top-[-8%] h-[min(380px,48vw)] w-[min(380px,85vw)] rounded-full bg-brand-yellow/[0.09] blur-3xl motion-reduce:animate-none" />
        <div className="absolute -left-[16%] bottom-[-12%] h-[min(300px,50vw)] w-[min(320px,52vw)] rounded-full bg-[radial-gradient(circle,rgba(214,71,58,0.07)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fafafa]" />
      </div>

      <Container className="relative z-10 max-w-full">
        {/* Flex + shrink-0 columns (no 1fr) so copy and mock stay grouped—centered on wide screens */}
        <div className="grid min-w-0 w-full grid-cols-1 items-center justify-items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:justify-items-stretch lg:gap-x-8 lg:gap-y-10 xl:gap-x-12 2xl:gap-x-16">
          <Reveal
            className="order-1 w-full min-w-0 max-w-xl text-center [overflow-wrap:anywhere] lg:max-w-[min(100%,40rem)] lg:justify-self-start lg:text-left"
            delay={0}
          >
            <h1 className="font-heading text-[clamp(1.375rem,4.2vw+0.65rem,2rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-brand-black text-balance [overflow-wrap:anywhere] md:text-hero-desktop md:leading-[1.07] lg:text-hero-display lg:leading-[1.05]">
              {headline}
            </h1>
            <p className="mx-auto mt-5 max-w-xl border-l-[3px] border-[#d6473a] pl-4 font-body text-[0.9375rem] leading-relaxed text-brand-body-grey sm:pl-5 sm:text-base md:mt-8 md:text-lg md:leading-[1.7] lg:mx-0">
              {subheadline}
            </p>
            <p className="mt-4 flex justify-center md:mt-6 lg:justify-start">
              <span className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[rgba(214,71,58,0.18)] bg-white px-3 py-2 font-body text-xs font-medium text-brand-black shadow-[0_2px_12px_-4px_rgba(17,17,17,0.06)] transition-shadow duration-300 hover:shadow-[0_4px_20px_-6px_rgba(214,71,58,0.12)] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-sm">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#d6473a] opacity-90"
                  aria-hidden
                />
                {supportingLine}
              </span>
            </p>
            <div className="mx-auto mt-6 flex w-full max-w-xl flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start lg:gap-3">
              <Button href={primaryCta.href} variant="primary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
                {secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal
            className="order-2 flex w-full min-w-0 justify-center lg:w-auto lg:max-w-[min(100%,420px)] lg:justify-self-center"
            delay={90}
            rootMargin="-6%"
          >
            <div className="w-full max-w-[min(100%,420px)] rounded-2xl border border-[rgba(214,71,58,0.15)] bg-white/90 p-3 shadow-[0_32px_64px_-40px_rgba(17,17,17,0.18)] ring-1 ring-black/[0.03] backdrop-blur-[10px] supports-[backdrop-filter]:bg-white/75 sm:rounded-[1.875rem] sm:p-6 md:p-8">
              <header className="border-b border-gray-100/90 pb-4 text-center sm:pb-6 lg:text-left">
                <p className="font-body text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-[#d6473a]/95 sm:text-xs">
                  {orderFlowShowcaseCopy.eyebrow}
                </p>
                <p className="mt-2 font-heading text-base font-semibold leading-snug tracking-tight text-brand-black sm:mt-3 sm:text-lg md:text-xl">
                  {orderFlowShowcaseCopy.title}
                </p>
                <p className="mx-auto mt-2 max-w-[20rem] font-body text-[0.8125rem] leading-relaxed text-brand-body-grey sm:mt-2.5 sm:text-sm lg:mx-0 md:text-[0.9375rem] md:leading-relaxed">
                  {orderFlowShowcaseCopy.subtitle}
                </p>
              </header>

              <div className="pt-5 sm:pt-7 md:pt-8">
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
