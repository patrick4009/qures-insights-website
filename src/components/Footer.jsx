import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Logo size="sm" />
        <span className="footer-copy">© QuRes 2026. All rights reserved.</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <a href="mailto:hello@qures-insights.com" className="footer-email">
          hello@qures-insights.com
        </a>
        <span className="footer-copy" style={{ opacity: 0.5 }}>qures-insights.com</span>
      </div>
    </footer>
  )
}
