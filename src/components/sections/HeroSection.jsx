import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

import heroImage from '../../assets/images/hero-mockup.jpg'

function HeroSection() {
  const { headline, subheadline, supportingLine, primaryCta, secondaryCta } =
    landingContent.hero

  return (
    <Section
      background="white"
      className="hero-section hero-grain relative overflow-hidden scroll-mt-20 pt-8 pb-12 md:pt-12 md:pb-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="motion-safe:animate-seo-float absolute -right-[20%] top-[-10%] h-[min(420px,50vw)] w-[min(420px,90vw)] rounded-full bg-brand-yellow/[0.11] blur-2xl md:blur-3xl motion-reduce:animate-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-brand-light-grey/25" />
      </div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal className="order-1" delay={0}>
            <h1 className="font-heading text-hero-mobile font-extrabold text-brand-black leading-[1.08] tracking-tight md:text-hero-desktop lg:text-hero-display lg:leading-[1.06]">
              {headline}
            </h1>
            <p className="mt-4 font-body text-base text-brand-body-grey leading-relaxed max-w-xl md:mt-7 md:text-lg md:leading-relaxed">
              {subheadline}
            </p>
            <p className="mt-4 md:mt-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-brand-light-grey/90 px-3 py-2 font-body text-sm font-medium text-brand-black shadow-sm transition-shadow duration-300 hover:shadow-md">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow ring-2 ring-brand-yellow/40 motion-safe:animate-pulse motion-reduce:animate-none"
                  aria-hidden
                />
                {supportingLine}
              </span>
            </p>
            <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <Button href={primaryCta.href} variant="primary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary" size="lg" className="w-full min-h-[48px] sm:w-auto sm:min-w-[200px]">
                {secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal className="order-2 flex items-center justify-center px-2 sm:px-4 lg:justify-end" delay={110} rootMargin="-6%">
            <figure className="relative m-0 w-full max-w-[min(100%,280px)] shrink-0">
              <div
                className="pointer-events-none absolute left-0 top-[26%] z-20 flex -translate-x-[2px] flex-col gap-2"
                aria-hidden
              >
                <div className="h-9 w-[3px] rounded-l-[3px] bg-[#3a3a3c] shadow-[inset_-1px_0_0_rgba(0,0,0,0.35)]" />
                <div className="h-9 w-[3px] rounded-l-[3px] bg-[#3a3a3c] shadow-[inset_-1px_0_0_rgba(0,0,0,0.35)]" />
              </div>
              <div
                className="pointer-events-none absolute right-0 top-[22%] z-20 translate-x-[2px]"
                aria-hidden
              >
                <div className="h-16 w-[3px] rounded-r-[3px] bg-[#3a3a3c] shadow-[inset_1px_0_0_rgba(255,255,255,0.06)]" />
              </div>

              <div
                className="relative rounded-[2.85rem] border border-[#2c2c2e] bg-[#1c1c1e] p-[10px] pb-[11px] pt-[18px] shadow-[0_36px_72px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_44px_80px_-24px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)] motion-reduce:hover:translate-y-0"
              >
                <div
                  className="pointer-events-none absolute left-1/2 top-[11px] z-10 h-[27px] w-[min(34%,88px)] -translate-x-1/2 rounded-[13px] bg-black shadow-[inset_0_-1px_2px_rgba(255,255,255,0.06)]"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2.2rem] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09)]">
                  <img
                    src={heroImage}
                    alt="Dhobify app home screen on an iPhone"
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    className="h-auto w-full object-cover object-top"
                    width={473}
                    height={1024}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[2.2rem] shadow-[inset_0_1px_3px_rgba(255,255,255,0.07),inset_0_-2px_4px_rgba(0,0,0,0.2)]"
                    aria-hidden
                  />
                </div>
              </div>
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
