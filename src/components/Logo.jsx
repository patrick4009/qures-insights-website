export default function Logo({ size = 'md' }) {
  const scale = size === 'sm' ? 0.8 : 1

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 * scale + 'px' }}>
      <div style={{
        width: 36 * scale, height: 36 * scale,
        background: '#0A0A0A',
        borderRadius: 8 * scale,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 13 * scale,
          color: '#fff',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>Qu</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 15 * scale,
          color: '#0A0A0A',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
        }}>QURES</span>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 400,
          fontSize: 9 * scale,
          color: '#8A8A86',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          lineHeight: 1.4,
        }}>INSIGHTS</span>
      </div>
    </div>
  )
}
