const types = [
  { icon: '◉', name: 'Multiple Choice', desc: 'Single answer from a list' },
  { icon: '☑', name: 'Multi-Select', desc: 'Pick all that apply' },
  { icon: '★', name: 'Rating Scale', desc: '1–5, 1–7, or 1–10' },
  { icon: '⟨Y/N⟩', name: 'Yes / No', desc: 'Binary quick answer' },
  { icon: '0→10', name: 'NPS Score', desc: 'Net Promoter Score' },
  { icon: '¶', name: 'Open Text', desc: 'Free-form response' },
  { icon: '1→3', name: 'Ranking', desc: 'Order items by preference' },
  { icon: 'A vs B', name: 'Brand Compare', desc: 'Head-to-head brand pick' },
  { icon: '←→', name: 'Likert Scale', desc: 'Agree / disagree spectrum' },
  { icon: '⬛', name: 'Image Choice', desc: 'Visual option selection' },
]

export default function QuestionTypes() {
  return (
    <section className="section" id="types">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ Question formats ]</span>
          <h2 className="h2">Ten ways to ask.<br />One platform.</h2>
          <p className="body-lg">Every question type is optimised for mobile-first completion and real-time result aggregation.</p>
        </div>
        <div className="qtypes-section-grid">
          {types.map(t => (
            <div key={t.name} className="qtype-card">
              <span className="qtype-icon">{t.icon}</span>
              <div className="qtype-name">{t.name}</div>
              <div className="qtype-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
