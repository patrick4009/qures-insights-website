const cards = [
  {
    icon: '👤',
    title: 'Age brackets',
    desc: 'Narrow to the exact generation that matters for your brief.',
    tags: ['13–17', '18–24', '25–34', '35–44', '45–54', '55–64', '65+'],
  },
  {
    icon: '📍',
    title: 'Location',
    desc: 'Target by country, city, or radius around a postcode.',
    tags: ['Country', 'City', 'Radius (km)', 'Nationwide', 'Multi-market'],
  },
  {
    icon: '◈',
    title: 'Interests & topics',
    desc: 'Reach respondents who have opted into categories relevant to your brand.',
    tags: ['Fashion', 'Tech', 'Food & drink', 'Finance', 'Health', 'Travel', 'Sport', '+more'],
  },
]

export default function Targeting() {
  return (
    <section className="section" id="targeting">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ Targeting ]</span>
          <h2 className="h2">Ask the right people.<br />Every time.</h2>
          <p className="body-lg">Combine filters to build an audience that matches your real customer — not a generic panel.</p>
        </div>
        <div className="targeting-grid">
          {cards.map(c => (
            <div key={c.title} className="targeting-card">
              <span className="targeting-card-icon">{c.icon}</span>
              <h3 className="h3">{c.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--faint)', lineHeight: 1.6 }}>{c.desc}</p>
              <div className="targeting-tag-list">
                {c.tags.map(tag => <span key={tag} className="targeting-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
