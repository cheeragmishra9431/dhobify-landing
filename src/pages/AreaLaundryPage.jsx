import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SeoHead from '../lib/SeoHead'
import { buildAreaJsonLd } from '../data/areaLaundryData'

function AreaLaundryPage({ area }) {
  const navigate = useNavigate()
  const jsonLd = buildAreaJsonLd(area)

  return (
    <>
      <SeoHead
        title={area.title}
        description={area.metaDescription}
        path={area.path}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="announcement-banner announcement-banner--subtle-shine relative overflow-hidden bg-brand-black px-4 py-2.5 text-center md:py-3">
        <span className="relative z-10 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/90 sm:text-sm md:text-base md:tracking-widest">
          <span className="banner-text">Launching in MAY 2026</span>
        </span>
      </div>
      <Navbar />
      <main>
        <Section
          background="white"
          className="relative overflow-hidden border-b border-gray-100 pt-6 pb-12 md:pt-10 md:pb-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-light-grey/50 to-white" aria-hidden />
          <Container className="relative">
            <nav className="mb-6 text-sm text-brand-body-grey" aria-label="Breadcrumb">
              <Link to="/" className="text-brand-black underline-offset-2 hover:underline">
                Home
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span className="text-brand-black/80">Laundry in {area.name}</span>
            </nav>
            <h1 className="font-heading text-hero-mobile font-extrabold leading-tight text-brand-black md:text-hero-desktop">
              {area.h1}
            </h1>
            <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-brand-body-grey md:mt-6 md:text-lg">
              {area.introParagraphs[0]}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={area.bookPickupHref} variant="primary" size="lg">
                {area.bookCtaLabel ?? 'Book pickup & delivery'}
              </Button>
              <a
                href={`${area.path}#our-stores`}
                className="min-h-[44px] text-center text-sm font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-body-grey"
                onClick={(e) => {
                  e.preventDefault()
                  navigate({ pathname: area.path, hash: 'our-stores' })
                }}
              >
                View partner stores
              </a>
            </div>
          </Container>
        </Section>

        <Section background="white" id="local-guide" aria-labelledby="local-guide-heading">
          <Container>
            <h2
              id="local-guide-heading"
              className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop"
            >
              {`Local laundry, dry cleaning, and laundry pickup ${area.name} residents use`}
            </h2>
            <div className="prose-article mt-6 max-w-3xl space-y-4 font-body text-base leading-relaxed text-brand-body-grey">
              {area.introParagraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 font-body text-base text-brand-black">
              <a
                href={`#${area.stores[0]?.id || 'our-stores'}`}
                className="font-semibold underline decoration-brand-yellow decoration-2 underline-offset-2 hover:text-brand-body-grey"
              >
                Compare partner stores for wash and fold, dry clean, and ironing
              </a>
              {` — or jump to the `}
              <a
                href="#our-stores"
                className="font-semibold underline decoration-brand-yellow decoration-2 underline-offset-2 hover:text-brand-body-grey"
              >
                full store list
              </a>
              .
            </p>
          </Container>
        </Section>

        <Section
          id="our-stores"
          background="grey"
          className="scroll-mt-24 md:scroll-mt-28"
        >
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              Our partner laundry stores in {area.name}
            </h2>
            <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-brand-body-grey">
              Compare trusted partners for laundry in {area.name}, including {area.stores.map((s) => s.name).join(', ')}. Each
              listing includes core services you can book after you schedule pickup and choose a delivery time.
            </p>
            <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2">
              {area.stores.map((store) => (
                <li
                  key={store.id}
                  id={store.id}
                  className="scroll-mt-28 rounded-card border border-gray-200 bg-white p-5 shadow-sm md:scroll-mt-32"
                >
                  <h3 className="font-heading text-lg font-bold text-brand-black">
                    {store.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-brand-body-grey md:text-base">
                    {store.shortDescription}
                  </p>
                  <h4 className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-brand-black/70">
                    Services
                  </h4>
                  <ul className="mt-2 list-disc pl-5 font-body text-sm text-brand-body-grey md:text-base">
                    {store.services.map((s) => (
                      <li key={s.id}>{s.name}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-body text-sm text-brand-body-grey">
              <Link to="/" className="font-semibold text-brand-black underline-offset-2 hover:underline">
                Return to the Dhobify homepage
              </Link>
              {` — see how we support scheduled pickup and delivery in ${area.name} and nearby areas.`}
            </p>
          </Container>
        </Section>

        <Section background="white">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              {area.pricing.headline}
            </h2>
            <p className="mt-3 font-body text-brand-body-grey">Typical local ranges; confirm at checkout in the app.</p>
            <div className="mt-8 overflow-x-auto rounded-card border border-gray-200">
              <table className="w-full min-w-[280px] border-collapse text-left text-sm md:text-base">
                <caption className="sr-only">Price ranges for common laundry services in {area.name}</caption>
                <thead>
                  <tr className="bg-brand-light-grey/80">
                    <th className="px-4 py-3 font-heading font-semibold text-brand-black" scope="col">
                      Service
                    </th>
                    <th className="px-4 py-3 font-heading font-semibold text-brand-black" scope="col">
                      Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {area.pricing.rows.map((row) => (
                    <tr key={row.service} className="border-t border-gray-200">
                      <th className="px-4 py-3 font-body font-medium text-brand-black" scope="row">
                        {row.service}
                      </th>
                      <td className="px-4 py-3 font-body text-brand-body-grey">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-brand-body-grey">{area.pricing.note}</p>
          </Container>
        </Section>

        <Section background="grey" id="how-it-works">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              {area.howItWorks.headline}
            </h2>
            <ol className="mt-10 grid list-decimal gap-6 pl-5 marker:font-heading marker:font-bold marker:text-brand-black md:grid-cols-2">
              {area.howItWorks.steps.map((step) => (
                <li key={step.title} className="pl-2 font-body text-brand-body-grey">
                  <h3 className="font-heading text-base font-bold text-brand-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed md:text-base">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section background="white" id="faq">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-8">
              {area.faq.map((item) => (
                <section key={item.question} className="max-w-3xl">
                  <h3 className="font-heading text-lg font-bold text-brand-black">{item.question}</h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-brand-body-grey">{item.answer}</p>
                </section>
              ))}
            </div>
            <p className="mt-10 text-center font-heading text-lg text-brand-black md:text-xl">{area.cta}</p>
            <div className="mt-6 flex justify-center">
              <Button href={area.bookPickupHref} variant="primary" size="lg">
                {area.bookCtaLabel ?? 'Book pickup & delivery'}
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default AreaLaundryPage
