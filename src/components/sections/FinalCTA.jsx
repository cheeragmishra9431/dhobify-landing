import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { landingContent } from '../../data/landingContent'

function FinalCTA() {
  const { headline, subheadline, listStoreCta } = landingContent.finalCTA

  return (
    <Section background="dark">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-section-mobile font-bold text-white md:text-section-desktop">
            {headline}
          </h2>
          <p className="mt-6 font-body text-lg text-white/90 leading-relaxed">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button href="#partner" variant="primary" size="lg">
              {listStoreCta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default FinalCTA
