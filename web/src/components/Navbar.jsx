import { useState, useEffect } from 'react'
import { BRAND_NAME } from '../data/content'

const navLinks = [
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'About',    href: '#about'    },
  { label: 'Bouquets', href: '#bouquets' },
  { label: 'Order',    href: '#order'    },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize ≥ md
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={e => handleLink(e, '#hero')}
            className="font-display text-xl md:text-2xl text-bark-dark font-semibold tracking-tight hover:text-rose transition-colors"
            aria-label={`${BRAND_NAME} — go to top`}
          >
            {BRAND_NAME}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={e => handleLink(e, href)}
                className="text-sm font-medium text-bark hover:text-rose transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-rose transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </a>
            ))}
            <a
              href={`https://wa.me/6591234567`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-rose text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-rose-dark transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 min-h-[44px] flex items-center"
            >
              Order Now
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 rounded-xl hover:bg-blush-light transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-0.5 bg-bark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-bark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-bark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-bark/30 backdrop-blur-sm transition-opacity duration-400 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer */}
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-cream shadow-hover pt-24 pb-10 px-8 flex flex-col gap-2 transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={e => handleLink(e, href)}
              className="font-display text-2xl text-bark-dark py-3 border-b border-blush hover:text-rose transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={`https://wa.me/6591234567`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-rose text-white font-medium text-base px-6 py-4 rounded-full text-center hover:bg-rose-dark transition-colors min-h-[44px] flex items-center justify-center"
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </>
  )
}
