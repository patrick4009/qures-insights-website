const types = [
  { icon: '◉', name: 'Multiple Choice', desc: 'Single answer selected from a list of options' },
  { icon: '☑', name: 'Multi-Select', desc: 'Choose all answers that apply' },
  { icon: '★', name: 'Rating Scale', desc: '1–5, 1–7, or 1–10 numeric range' },
  { icon: '⟨Y/N⟩', name: 'Yes / No', desc: 'A simple binary quick-fire answer' },
  { icon: '0→10', name: 'NPS Score', desc: 'Net Promoter Score question format' },
  { icon: '¶', name: 'Open Text', desc: 'Free-form written response from respondents' },
  { icon: '1→3', name: 'Ranking', desc: 'Drag to order items by preference' },
  { icon: 'A|B', name: 'Brand Compare', desc: 'Head-to-head pick between two brands or products' },
  { icon: '←→', name: 'Likert Scale', desc: 'Five-point agree-to-disagree spectrum' },
  { icon: '⬛', name: 'Image Choice', desc: 'Visual option selection using images' },
]

export default function QuestionTypes() {
  return (
    <section className="section" id="types">
      <div className="container">
        <span className="eyebrow">Question formats</span>
        <h2 className="h2">Ten ways to ask.<br />One platform.</h2>

        <div className="qtype-list">
          {types.map((t, i) => (
            <div key={t.name} className="qtype-row">
              <div className="qtype-left">
                <span className="qtype-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="qtype-icon-sm">{t.icon}</span>
                <span className="qtype-name-lg">{t.name}</span>
              </div>
              <div className="qtype-desc-lg">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
