import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import Container from '../ui/Container'
import { landingContent } from '../../data/landingContent'

function Footer() {
  const { about, location, contactEmail, links } = landingContent.footer

  return (
    <footer className="bg-brand-deep-black py-12 text-white md:py-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          {/* Logo and info */}
          <div className="flex flex-col gap-5 max-w-md md:gap-6">
            <img
              src={logo}
              alt="Dhobify logo"
              className="h-20 w-auto object-contain"
            />
            <p className="font-body text-sm text-white/90 leading-relaxed">
              {about}
            </p>
            <div className="space-y-2">
              <p className="font-body text-sm text-white/90">{location}</p>
              <a
                href={`mailto:${contactEmail}`}
                className="font-body text-sm text-white/90 hover:text-white transition-colors inline-block"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          {/* Policy links */}
          <nav
            className="flex flex-col gap-3 md:items-end"
            aria-label="Footer links"
          >
            {links.map((link) =>
              link.native ? (
                <a
                  key={link.text}
                  href={link.href}
                  className="font-body text-sm text-white/90 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  key={link.text}
                  to={link.href}
                  className="font-body text-sm text-white/90 hover:text-white transition-colors"
                >
                  {link.text}
                </Link>
              ),
            )}
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
