import Section from '../ui/Section'
import Container from '../ui/Container'
import SectionEyebrow from '../ui/SectionEyebrow'
import Reveal from '../motion/Reveal'
import { landingContent } from '../../data/landingContent'

const serviceIcons = {
  shirt: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 shrink-0"
      aria-hidden
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  ),
  iron: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 shrink-0"
      aria-hidden
    >
      <path d="M4 18v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <path d="M4 14h16" />
      <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <path d="M10 10h4" />
    </svg>
  ),
  droplets: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 shrink-0"
      aria-hidden
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  ),
  steam: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 shrink-0"
      aria-hidden
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
}

function ServicesSection() {
  const { eyebrow, sectionHeadline, servicesList, highlightLine } =
    landingContent.services

  return (
    <Section background="grey">
      <Container>
        <Reveal delay={0}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
            {sectionHeadline}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-4">
            {servicesList.map((service) => (
              <li
                key={service.name}
                className="flex min-h-[52px] items-center gap-3 rounded-xl border border-gray-200/80 bg-white px-4 py-3 font-body text-base font-medium text-brand-black shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-yellow/35 hover:shadow-md motion-reduce:hover:translate-y-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-light-grey text-brand-black transition-colors duration-300">
                  {serviceIcons[service.icon]}
                </span>
                <span className="leading-snug">{service.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-3xl rounded-xl border border-brand-yellow/25 bg-brand-yellow/10 px-4 py-3 font-body text-base font-semibold leading-relaxed text-brand-black shadow-sm backdrop-blur-sm md:px-5 md:py-4">
            {highlightLine}
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}

export default ServicesSection
