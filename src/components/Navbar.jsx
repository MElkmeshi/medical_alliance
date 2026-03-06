import { useState, useEffect } from 'react'
import logoWhite from '/assets/logo-white.svg'
import logoDark from '/assets/logo-dark.svg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-burg shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="opacity-100 hover:opacity-85 transition-opacity">
          <img
            src={scrolled ? logoDark : logoWhite}
            alt="Medical Alliance"
            className="h-11 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-9 items-center">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white text-sm font-semibold tracking-widest uppercase relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1.5"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-dark-burg border-t border-white/10 py-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="block px-7 py-3.5 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/5 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
