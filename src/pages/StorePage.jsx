import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SeoHead from '../lib/SeoHead'
import JsonLd from '../components/seo/JsonLd'
import MobileConversionBar from '../components/conversion/MobileConversionBar'
import WhatsAppDeskFab from '../components/conversion/WhatsAppDeskFab'
import { getStoreBySlug, buildStoreJsonLd } from '../data/storePagesData'
import { getWhatsAppBookingUrl } from '../lib/seoConstants'
import NotFound from './NotFound'

function StorePageBody({ store }) {
  const jsonLd = buildStoreJsonLd(store)
  const wa = getWhatsAppBookingUrl(`Hi Dhobify — I'd like to book ${store.name} (${store.areaLabel}).`)

  return (
    <>
      <SeoHead title={store.title} description={store.metaDescription} path={store.path} />
      <JsonLd id="schema-store-page" data={jsonLd} />
      <div className="pb-[5.5rem] md:pb-0">
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
              {store.linkedAreaPaths?.[0] && (
                <>
                  <Link
                    to={store.linkedAreaPaths[0]}
                    className="text-brand-black underline-offset-2 hover:underline"
                  >
                    Laundry in {store.areaLabel.split(',')[0]?.trim()}
                  </Link>
                  <span className="mx-2" aria-hidden>
                    /
                  </span>
                </>
              )}
              <span className="text-brand-black/80">{store.name}</span>
            </nav>
            <h1 className="font-heading text-hero-mobile font-extrabold leading-tight text-brand-black md:text-hero-desktop">
              {store.name}
            </h1>
            <p className="mt-2 font-body text-sm font-medium text-brand-black/70 md:text-base">{store.areaLabel}</p>
            <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-brand-body-grey md:mt-6 md:text-lg">
              {store.heroTagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/#book-pickup" variant="primary" size="lg">
                Book pickup
              </Button>
              <Button href={wa} variant="secondary" size="lg">
                WhatsApp us
              </Button>
            </div>
          </Container>
        </Section>

        <Section background="white" aria-labelledby="store-about-heading">
          <Container>
            <h2 id="store-about-heading" className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              About this partner
            </h2>
            <div className="prose-article mt-6 max-w-3xl space-y-4 font-body text-base leading-relaxed text-brand-body-grey">
              {store.descriptions.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Container>
        </Section>

        <Section background="grey">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">Services</h2>
            <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2">
              {store.services.map((s) => (
                <li key={s.id} className="rounded-card border border-gray-200 bg-white p-5">
                  <h3 className="font-heading text-lg font-bold text-brand-black">{s.name}</h3>
                  <p className="mt-2 font-body text-sm text-brand-body-grey md:text-base">{s.detail}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section background="white">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              {store.pickup.headline}
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 font-body text-brand-body-grey">
              {store.pickup.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section background="grey">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              {store.pricing.headline}
            </h2>
            <div className="mt-8 overflow-x-auto rounded-card border border-gray-200 bg-white">
              <table className="w-full min-w-[280px] border-collapse text-left text-sm md:text-base">
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
                  {store.pricing.rows.map((row) => (
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
            <p className="mt-4 font-body text-sm text-brand-body-grey">{store.pricing.note}</p>
          </Container>
        </Section>

        <Section background="white">
          <Container>
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              Customer reviews
            </h2>
            <ul className="mt-8 grid list-none gap-4 p-0 md:grid-cols-2">
              {store.reviews.map((r, i) => (
                <li key={i} className="rounded-card border border-gray-200 p-5">
                  <p className="font-heading text-sm font-bold text-brand-black">
                    {r.author}{' '}
                    <span className="font-body font-normal text-brand-body-grey">— {r.rating}/5</span>
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-brand-body-grey md:text-base">{r.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section background="grey" className="pb-16 md:pb-20">
          <Container className="text-center">
            <h2 className="font-heading text-section-mobile font-bold text-brand-black md:text-section-desktop">
              Book {store.name} on Dhobify
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-brand-body-grey">
              Compare slots, confirm pricing, and schedule pickup &amp; delivery in a few taps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/#book-pickup" variant="primary" size="lg">
                Book pickup
              </Button>
              <Button href={wa} variant="secondary" size="lg">
                Chat on WhatsApp
              </Button>
            </div>
            <p className="mt-10 font-body text-sm text-brand-body-grey">
              {store.linkedAreaPaths?.map((p) => (
                <span key={p} className="mx-2 inline-block">
                  <Link to={p} className="font-semibold text-brand-black underline-offset-2 hover:underline">
                    {p.includes('dry-cleaning') ? 'Dry cleaning area guide' : 'Laundry area guide'}
                  </Link>
                </span>
              ))}
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
      </div>
      <MobileConversionBar />
      <WhatsAppDeskFab />
    </>
  )
}

function StorePage() {
  const { storeSlug } = useParams()
  const store = getStoreBySlug(storeSlug)
  if (!store) return <NotFound />
  return <StorePageBody store={store} />
}

export default StorePage
