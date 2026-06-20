const stats = [
  { number: '10,000+', label: 'Active respondents\nin the panel' },
  { number: '<48 hrs', label: 'Average time\nto full results' },
  { number: '10', label: 'Question formats\nto choose from' },
  { number: '30+', label: 'Countries\ncovered' },
  { number: '4.8★', label: 'App store rating\nfrom respondents' },
  { number: '94%', label: 'Completion rate\nacross all question types' },
]

export default function SocialProof() {
  return (
    <section className="section" id="proof">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ By the numbers ]</span>
          <h2 className="h2">Research that moves<br />at business speed.</h2>
        </div>
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.number} className="stat-cell">
              <span className="stat-number mono-stat">{s.number}</span>
              <span className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
