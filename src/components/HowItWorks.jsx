const steps = [
  {
    num: '01',
    icon: '✍',
    title: 'Write your question',
    desc: 'Pick from 10 question formats — multiple choice, rating scales, brand comparisons, open text, and more. Add up to 6 options.',
  },
  {
    num: '02',
    icon: '◎',
    title: 'Target your audience',
    desc: 'Filter by age bracket, country, city radius, and interest category. Reach the exact segment your brief demands.',
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Get results in hours',
    desc: 'Real consumers answer via the QuRes app for reward points. You get clean distributions, breakdowns, and an exportable report.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ How it works ]</span>
          <h2 className="h2">From brief to insight<br />in three steps.</h2>
          <p className="body-lg">No recruitment. No waiting weeks. No wasted spend on low-quality panels.</p>
        </div>
        <div className="how-steps">
          {steps.map(s => (
            <div key={s.num} className="how-step">
              <span className="how-step-num">{s.num}</span>
              <span className="how-step-icon">{s.icon}</span>
              <h3 className="h3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
