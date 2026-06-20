const cards = [
  {
    icon: '▦',
    title: 'Response distributions',
    desc: 'See exactly how answers split across options — with counts, percentages, and visual breakdowns updated in real time.',
  },
  {
    icon: '⏱',
    title: 'Answer-time analysis',
    desc: 'Track response velocity and median answer time to understand how quickly your audience engages.',
  },
  {
    icon: '🗺',
    title: 'Geo heatmap',
    desc: 'Plot where respondents are located and filter results by region to surface local vs. national differences.',
  },
  {
    icon: '◑',
    title: 'Audience breakdown',
    desc: 'Cross-tab responses by age group and interest category so you can spot segment-level patterns instantly.',
  },
  {
    icon: '↓',
    title: 'Exportable PDF report',
    desc: 'Download a clean, presentation-ready PDF of your results — charts, tables, and summary all included.',
    full: true,
  },
]

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ What you get ]</span>
          <h2 className="h2">Data you can<br />act on immediately.</h2>
          <p className="body-lg">No analyst needed. QuRes turns raw responses into a clean insight dashboard the moment answers start coming in.</p>
        </div>
        <div className="results-grid">
          {cards.map(c => (
            <div key={c.title} className={`result-card ${c.full ? 'full' : ''}`}>
              <span className="result-card-icon">{c.icon}</span>
              <h3 className="h3">{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
