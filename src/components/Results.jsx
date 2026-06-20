const items = [
  {
    num: '01',
    icon: '▦',
    title: 'Response distributions',
    desc: 'See exactly how answers split across options — with counts, percentages, and visual breakdowns updated in real time as responses come in.',
  },
  {
    num: '02',
    icon: '⏱',
    title: 'Answer-time analysis',
    desc: 'Track response velocity and median answer time to understand how quickly your audience engages with the question.',
  },
  {
    num: '03',
    icon: '⬡',
    title: 'Geo heatmap',
    desc: 'Plot where respondents are located and filter results by region to surface local versus national differences instantly.',
  },
  {
    num: '04',
    icon: '◑',
    title: 'Audience breakdown',
    desc: 'Cross-tab responses by age group and interest category so you can spot segment-level patterns without any manual slicing.',
  },
  {
    num: '05',
    icon: '↓',
    title: 'Exportable PDF report',
    desc: 'Download a clean, presentation-ready PDF — charts, tables, and an executive summary all formatted and ready to share.',
  },
]

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="container">
        <span className="eyebrow">What you get</span>
        <h2 className="h2">Data you can<br />act on immediately.</h2>

        <div className="results-list">
          {items.map(item => (
            <div key={item.num} className="result-row">
              <div className="result-num">{item.num}</div>
              <div className="result-right">
                <span className="result-icon">{item.icon}</span>
                <h3 className="h3">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
