import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { landingContent } from '../../data/landingContent'

import heroImage from '../../assets/images/hero-mockup.jpg'

function HeroSection() {
  const { headline, subheadline, supportingLine, secondaryCtas } =
    landingContent.hero

  return (
    <Section background="white" className="relative overflow-hidden pt-10 pb-12 md:pt-16 md:pb-20 lg:py-24">
      {/* Background: subtle gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-brand-light-grey/30" aria-hidden />
      </div>

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content column - first on mobile, left on desktop */}
          <div className="order-1">
            <h1 className="font-heading text-hero-mobile font-extrabold text-brand-black leading-tight md:text-hero-desktop lg:text-[4rem]">
              {headline}
            </h1>
            <p className="mt-4 font-body text-base text-brand-body-grey leading-relaxed max-w-xl md:mt-6 md:text-lg">
              {subheadline}
            </p>
            <p className="mt-3 font-body text-sm text-brand-body-grey md:mt-4">
              <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 font-semibold text-brand-black">
                {supportingLine}
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-8 md:gap-4">
              {secondaryCtas.map((cta) => (
                <Button
                  key={cta}
                  href={cta === 'Become a Partner' ? '#partner' : undefined}
                  variant="primary"
                  size="lg"
                >
                  {cta}
                </Button>
              ))}
            </div>
          </div>

          <div className="order-2 flex items-center justify-center px-3 sm:px-4 lg:justify-end">
            <figure className="relative m-0 w-full max-w-[min(100%,280px)] shrink-0">
              {/* Side controls (iPhone-style) */}
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

              {/* Chassis + display */}
              <div
                className="relative rounded-[2.85rem] border border-[#2c2c2e] bg-[#1c1c1e] p-[10px] pb-[11px] pt-[18px] shadow-[0_36px_72px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
              >
                {/* Dynamic Island (Pro / modern iPhone) */}
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
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
