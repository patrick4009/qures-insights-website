const cols = [
  {
    icon: '◎',
    title: 'Age brackets',
    desc: 'Narrow to the exact generation that matters for your brief. Mix brackets to span an audience or isolate a single cohort.',
    tags: ['13–17', '18–24', '25–34', '35–44', '45–54', '55–64', '65+'],
  },
  {
    icon: '⬡',
    title: 'Location',
    desc: 'Target by country, city, or a radius drawn around a postcode. Multi-market briefs run as a single question with segmented results.',
    tags: ['Country', 'City', 'Radius (km)', 'Nationwide', 'Multi-market'],
  },
  {
    icon: '◈',
    title: 'Interests',
    desc: 'Reach respondents who opted into topic categories aligned with your category — from Fashion and Tech to Finance and Health.',
    tags: ['Fashion', 'Tech', 'Food & drink', 'Finance', 'Health', 'Travel', '+more'],
  },
]

export default function Targeting() {
  return (
    <section className="section" id="targeting">
      <div className="container">
        <span className="eyebrow">Targeting</span>
        <h2 className="h2">Ask the right people.<br />Every time.</h2>

        <div className="targeting-cols">
          {cols.map(c => (
            <div key={c.title} className="targeting-col">
              <span className="targeting-col-icon">{c.icon}</span>
              <h3 className="h3">{c.title}</h3>
              <p>{c.desc}</p>
              <div className="tag-cloud">
                {c.tags.map(t => <span key={t} className="tag-item">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
