import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',          label: 'Home'            },
  { to: '/gallery',   label: 'Gallery'         },
  { to: '/builder',   label: 'Build Bouquet'   },
  { to: '/delivery',  label: 'Delivery & Info' },
  { to: '/contact',   label: 'Contact'         },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-sm shadow-rose/15'
          : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(237,224,212,0.92)'
          : 'rgba(237,224,212,0.78)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(217,160,180,0.22)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="font-serif text-[1.55rem] font-semibold text-text-dark tracking-wide hover:text-deep-rose transition-colors"
        >
          Mystic<span className="text-deep-rose">Bloom</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[0.76rem] tracking-[0.11em] uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-deep-rose'
                      : 'text-text-mid opacity-75 hover:text-deep-rose hover:opacity-100'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="hidden md:block btn-primary !py-2 !px-5 !text-xs"
          onClick={() => navigate('/builder')}
        >
          Build Yours
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-text-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
          <span className={`block w-5 h-px bg-text-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-text-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'rgba(237,224,212,0.97)',
          borderTop: '1px solid rgba(217,160,180,0.2)',
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive ? 'text-deep-rose font-medium' : 'text-text-mid opacity-80'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="btn-primary w-full !py-2.5 !text-xs mt-2"
              onClick={() => { navigate('/builder'); setMenuOpen(false) }}
            >
              Build Your Bouquet
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
