import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import Container from '../ui/Container'
import Footer from './Footer'
import SeoHead from '../../lib/SeoHead'

function InfoPageLayout({ title, lastUpdated, seo, children }) {
  const pageTitle = seo?.title ?? `${title} | Dhobify`
  const pageDescription =
    seo?.description ??
    `Dhobify laundry marketplace in Bangalore — ${title.toLowerCase()} and related policies.`

  return (
    <>
      <SeoHead title={pageTitle} description={pageDescription} path={seo?.path} />
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex shrink-0">
              <img
                src={logo}
                alt="Dhobify logo"
                width={180}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-20 w-auto max-w-[400px] object-contain sm:max-w-none"
              />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-1.5 font-body text-sm font-medium text-brand-black transition-colors hover:text-brand-yellow"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Home
            </Link>
          </div>
        </Container>
      </header>

      <main className="py-12 md:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-brand-black md:text-4xl">{title}</h1>
          {lastUpdated && (
            <p className="mt-2 font-body text-sm text-brand-body-grey">Last updated: {lastUpdated}</p>
          )}
          <div className="mt-10 space-y-8 font-body text-base leading-relaxed text-brand-body-grey">{children}</div>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default InfoPageLayout
