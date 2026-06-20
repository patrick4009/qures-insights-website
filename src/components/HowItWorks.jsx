const steps = [
  {
    num: '01',
    title: 'Write your question',
    body: 'Pick from 10 question formats — multiple choice, rating scales, brand comparisons, open text, and more. Add up to 6 options.',
  },
  {
    num: '02',
    title: 'Target your audience',
    body: 'Filter by age bracket, country, city radius, and interest category. Reach the exact segment your brief demands.',
  },
  {
    num: '03',
    title: 'Get results in hours',
    body: 'Real consumers answer via the QuRes app for reward points. You get clean distributions, breakdowns, and an exportable report.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className="h2">From brief to insight<br />in three steps.</h2>

        <div style={{ marginTop: 80 }}>
          {steps.map(s => (
            <div key={s.num} className="how-row">
              <div className="how-num">{s.num}</div>
              <div className="how-content">
                <h3 className="h3">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
