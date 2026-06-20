import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Logo />
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#types">Formats</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact" style={{ opacity: 1, fontWeight: 700, color: 'var(--ink)' }}>Request a demo</a></li>
      </ul>
    </nav>
  )
}
