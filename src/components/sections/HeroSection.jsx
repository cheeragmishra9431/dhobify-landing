import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { landingContent } from '../../data/landingContent'

// Replace with hero-mockup.png or hero-mockup.jpg when real image is added
import heroImage from '../../assets/images/hero-mockup.svg'

function HeroSection() {
  const { headline, subheadline, supportingLine, primaryCta, secondaryCtas } =
    landingContent.hero

  return (
    <Section background="white" className="pt-10 pb-12 md:pt-16 md:pb-20 lg:py-24">
      <Container>
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
              {supportingLine}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-8 md:gap-4">
              <Button variant="primary" size="lg">
                {primaryCta}
              </Button>
              {secondaryCtas.map((cta) => (
                <Button key={cta} variant="secondary" size="lg">
                  {cta}
                </Button>
              ))}
            </div>
          </div>

          {/* Hero image - below content on mobile, right on desktop */}
          <div className="order-2 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Dhobify app on phone"
              decoding="async"
              className="h-auto w-full max-w-[280px] object-contain object-center"
              width={280}
              height={500}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
