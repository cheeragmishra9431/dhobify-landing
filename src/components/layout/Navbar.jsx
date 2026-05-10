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

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ease-out ${hasScrolled ? 'shadow-[0_8px_32px_-14px_rgba(0,0,0,0.18)]' : 'shadow-none'}`}
    >
      <div className="motion-safe:animate-nav-bar-in motion-reduce:animate-none relative border-b border-black/[0.08] bg-brand-yellow pt-[max(0px,env(safe-area-inset-top))]">
        <Container className="min-w-0">
          <div className="flex min-h-[3.75rem] min-w-0 items-center justify-between gap-3 py-2.5 md:min-h-[4rem] md:py-3">
            <Link
              to="/"
              className="motion-safe:animate-nav-logo motion-reduce:animate-none flex min-w-0 shrink-0 items-center rounded-lg outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-brand-black/35 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-yellow"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="Dhobify"
                width={176}
                height={56}
                loading="eager"
                decoding="async"
                className="pointer-events-none h-10 w-auto max-w-[min(100%,200px)] object-contain object-left sm:h-11 md:h-12 md:max-w-none"
              />
            </Link>

            {navLinks.length > 0 && (
              <>
                <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
                  {navLinks.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className="font-body text-sm font-semibold text-brand-black transition-colors hover:text-brand-coral md:text-[15px]"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-brand-black transition-colors hover:bg-black/[0.06] active:bg-black/[0.1] md:hidden motion-reduce:active:opacity-85"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
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
                    className={`transition-transform duration-200 ease-out motion-reduce:transition-none ${
                      isMenuOpen ? 'rotate-90 scale-95' : 'rotate-0 scale-100'
                    }`}
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
              className={`grid overflow-hidden border-t border-black/10 transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
                isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
              aria-hidden={!isMenuOpen}
            >
              <div className="min-h-0 overflow-hidden">
                <nav
                  className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto overscroll-contain pb-4 pt-2"
                  aria-label="Mobile navigation"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      onClick={closeMenu}
                      className="min-h-[48px] rounded-xl px-2 py-3 font-body text-base font-semibold text-brand-black transition-colors hover:bg-black/[0.06] active:bg-black/[0.08]"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </Container>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5 bg-gradient-to-r from-brand-coral via-brand-glow-orange to-brand-yellow motion-safe:animate-nav-accent motion-reduce:animate-none"
          aria-hidden
        />
      </div>
    </header>
  )
}

export default Navbar
