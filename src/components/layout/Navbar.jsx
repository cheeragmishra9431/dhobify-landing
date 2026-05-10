import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import Container from '../ui/Container'
import { landingContent } from '../../data/landingContent'

function Navbar() {
  const { navLinks } = landingContent.navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-200 ${
        hasScrolled ? 'border-gray-100 shadow-sm' : ''
      }`}
    >
      <Container className="min-w-0">
        <div className="flex min-h-[4.25rem] min-w-0 items-center justify-between gap-3 py-2.5 md:min-h-[4.5rem] md:py-3">
          <Link to="/" className="flex min-w-0 shrink-0 items-center" onClick={closeMenu}>
            <img
              src={logo}
              alt="Dhobify logo"
              className="h-11 w-auto max-w-[min(100%,220px)] object-contain object-left sm:h-12 md:h-14 md:max-w-none"
            />
          </Link>

          {navLinks.length > 0 && (
            <>
              <div className="hidden items-center gap-8 md:flex">
                <nav className="flex gap-6" aria-label="Main navigation">
                  {navLinks.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className="font-body text-sm font-medium text-brand-black hover:text-brand-black/80 transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-black hover:bg-brand-light-grey focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {isMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </>
          )}
        </div>

        {navLinks.length > 0 && (
          <div
            id="mobile-menu"
            className={`overflow-hidden transition-all duration-200 ease-out md:hidden ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!isMenuOpen}
          >
            <nav
              className="flex flex-col gap-4 border-t border-gray-200 py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-body text-base font-medium text-brand-black hover:text-brand-black/80"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar
