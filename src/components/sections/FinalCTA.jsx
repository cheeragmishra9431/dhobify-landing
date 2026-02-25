import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { landingContent } from '../../data/landingContent'
import logo from '../../assets/logo/logo.svg'

function FinalCTA() {
  const { headline, subheadline, buttons } = landingContent.finalCTA

  return (
    <Section background="dark">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <img
            src={logo}
            alt="Dhobify logo"
            className="mx-auto h-20 w-auto object-contain"
          />
          <h2 className="mt-6 font-heading text-section-mobile font-bold text-white md:text-section-desktop">
            {headline}
          </h2>
          <p className="mt-6 font-body text-lg text-white/90 leading-relaxed">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button variant="primary" size="lg">
              {buttons[0]}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-deep-black"
            >
              {buttons[1]}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-deep-black"
            >
              {buttons[2]}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default FinalCTA
