import { Link } from 'react-router-dom'
import SeoHead from '../lib/SeoHead'
import Container from '../components/ui/Container'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function NotFound() {
  return (
    <>
      <SeoHead
        title="Page not found | Dhobify"
        description="The page you are looking for could not be found."
        noIndex
      />
      <Navbar />
      <div className="min-h-[50vh] py-20">
        <Container>
          <h1 className="font-heading text-2xl font-bold text-brand-black md:text-3xl">Page not found</h1>
          <p className="mt-4 max-w-md font-body text-brand-warm-orange/95">
            This URL is not on Dhobify yet. Head back to the homepage to explore laundry services in Bangalore.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block min-h-[44px] font-heading text-base font-semibold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-4"
          >
            Go to homepage
          </Link>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
