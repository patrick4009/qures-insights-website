import { useState, useRef } from 'react'

const AGE_GROUPS = ['13 – 17', '18 – 24', '25 – 34', '35 – 44', '45 – 54', '55 – 64', '65+']

const LOCATIONS = ['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'France', 'Spain', 'Netherlands', 'Ireland', 'Other']

const QUESTION_TYPES = [
  { id: 'multiple-choice', icon: '◉', label: 'Multiple Choice', needsOptions: true },
  { id: 'multi-select', icon: '☑', label: 'Multi-Select', needsOptions: true },
  { id: 'rating', icon: '★', label: 'Rating Scale', needsScale: true },
  { id: 'yes-no', icon: '⟨Y/N⟩', label: 'Yes / No', skip: true },
  { id: 'nps', icon: '0→10', label: 'NPS Score', needsScale: true },
  { id: 'open-text', icon: '¶', label: 'Open Text', skip: true },
  { id: 'ranking', icon: '1→3', label: 'Ranking', needsOptions: true },
  { id: 'brand-compare', icon: 'A vs B', label: 'Brand Compare', needsOptions: true },
  { id: 'likert', icon: '←→', label: 'Likert Scale', needsOptions: false, isLikert: true },
  { id: 'image-choice', icon: '⬛', label: 'Image Choice', needsOptions: true },
]

const TOTAL_STEPS = 6

function validate(step, answers) {
  switch (step) {
    case 0: return answers.ages.length > 0
    case 1: return answers.location.trim().length > 0
    case 2: return answers.question.trim().length > 5
    case 3: return answers.questionType !== null
    case 4: {
      const t = QUESTION_TYPES.find(t => t.id === answers.questionType)
      if (!t || t.skip) return true
      if (t.needsScale) return answers.scale !== ''
      if (t.isLikert) return answers.options.every(o => o.trim() !== '')
      return answers.options.filter(o => o.trim() !== '').length >= 2
    }
    case 5: {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email) && answers.company.trim().length > 1
    }
    default: return true
  }
}

function getNextStep(currentStep, answers) {
  if (currentStep === 3) {
    const t = QUESTION_TYPES.find(t => t.id === answers.questionType)
    if (t?.skip) return 5
  }
  return currentStep + 1
}

function getPrevStep(currentStep, answers) {
  if (currentStep === 5) {
    const t = QUESTION_TYPES.find(t => t.id === answers.questionType)
    if (t?.skip) return 3
  }
  return currentStep - 1
}

function getProgressPct(step, answers) {
  if (step === 3) {
    const t = QUESTION_TYPES.find(t => t.id === answers.questionType)
    if (t?.skip) return Math.round(((step + 1) / TOTAL_STEPS) * 100)
  }
  return Math.round(((step + 1) / TOTAL_STEPS) * 100)
}

export default function HeroFlow() {
  const [step, setStep] = useState(0)
  const [animClass, setAnimClass] = useState('step-enter')
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState({
    ages: [],
    location: '',
    question: '',
    questionType: null,
    options: ['', ''],
    scale: '1-5',
    likertLow: 'Strongly disagree',
    likertHigh: 'Strongly agree',
    email: '',
    company: '',
  })

  const contentRef = useRef(null)

  function transition(nextStep, direction = 'forward') {
    const exitClass = direction === 'forward' ? 'step-exit-left' : 'step-exit-right'
    const enterClass = direction === 'forward' ? 'step-enter' : 'step-enter-back'

    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = direction === 'forward' ? 'translateX(-18px)' : 'translateX(18px)'
    }
    setTimeout(() => {
      setStep(nextStep)
      setAnimClass(enterClass)
      if (contentRef.current) {
        contentRef.current.style.opacity = ''
        contentRef.current.style.transform = ''
      }
    }, 180)
  }

  function goNext() {
    const next = getNextStep(step, answers)
    if (next > TOTAL_STEPS - 1) {
      setSubmitted(true)
      return
    }
    transition(next, 'forward')
  }

  function goBack() {
    if (step === 0) return
    transition(getPrevStep(step, answers), 'back')
  }

  function toggleAge(age) {
    setAnswers(a => ({
      ...a,
      ages: a.ages.includes(age) ? a.ages.filter(x => x !== age) : [...a.ages, age],
    }))
  }

  function setOption(idx, val) {
    setAnswers(a => {
      const opts = [...a.options]
      opts[idx] = val
      return { ...a, options: opts }
    })
  }

  function addOption() {
    if (answers.options.length >= 6) return
    setAnswers(a => ({ ...a, options: [...a.options, ''] }))
  }

  function removeOption(idx) {
    if (answers.options.length <= 2) return
    setAnswers(a => ({ ...a, options: a.options.filter((_, i) => i !== idx) }))
  }

  const selectedType = QUESTION_TYPES.find(t => t.id === answers.questionType)
  const canContinue = validate(step, answers)
  const progress = submitted ? 100 : getProgressPct(step, answers)

  function renderStep() {
    if (submitted) {
      return (
        <div className="wizard-confirm">
          <div className="confirm-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="confirm-title">Your brief is in.</p>
          <p className="confirm-body">
            We'll put together a sample report based on your question and send it to{' '}
            <span className="confirm-email-highlight">{answers.email}</span>{' '}
            within 24 hours. No commitment, no card required.
          </p>
          <a href="#contact" className="btn btn-primary">
            Request a full demo →
          </a>
        </div>
      )
    }

    switch (step) {
      case 0:
        return (
          <div>
            <div className="pill-group">
              {AGE_GROUPS.map(age => (
                <button
                  key={age}
                  className={`pill ${answers.ages.includes(age) ? 'active' : ''}`}
                  onClick={() => toggleAge(age)}
                  type="button"
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        )

      case 1:
        return (
          <div>
            <div className="pill-group" style={{ marginBottom: 16 }}>
              {LOCATIONS.map(loc => (
                <button
                  key={loc}
                  className={`pill ${answers.location === loc ? 'active' : ''}`}
                  onClick={() => setAnswers(a => ({ ...a, location: loc }))}
                  type="button"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            <textarea
              className="textarea"
              style={{ minHeight: 112, fontSize: 16 }}
              placeholder="e.g. Which of these brands do you associate with quality?"
              value={answers.question}
              onChange={e => setAnswers(a => ({ ...a, question: e.target.value }))}
              maxLength={280}
            />
            <div style={{ fontSize: 12, color: 'var(--faint)', textAlign: 'right', marginTop: 6, fontFamily: 'var(--mono)' }}>
              {answers.question.length}/280
            </div>
          </div>
        )

      case 3:
        return (
          <div className="type-grid">
            {QUESTION_TYPES.map(t => (
              <button
                key={t.id}
                className={`type-card ${answers.questionType === t.id ? 'active' : ''}`}
                onClick={() => setAnswers(a => ({ ...a, questionType: t.id, options: ['', ''] }))}
                type="button"
              >
                <span className="type-icon">{t.icon}</span>
                <span className="type-label">{t.label}</span>
              </button>
            ))}
          </div>
        )

      case 4:
        if (!selectedType) return null

        if (selectedType.needsScale) {
          return (
            <div>
              <div className="scale-group">
                {['1 – 5', '1 – 7', '1 – 10'].map(s => (
                  <button
                    key={s}
                    className={`scale-option ${answers.scale === s ? 'active' : ''}`}
                    onClick={() => setAnswers(a => ({ ...a, scale: s }))}
                    type="button"
                  >
                    <span className="scale-label">{s}</span>
                    <span className="scale-desc">
                      {s === '1 – 5' ? 'Simple & fast' : s === '1 – 7' ? 'Balanced' : 'High precision'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )
        }

        if (selectedType.isLikert) {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="field">
                <label>Low end label</label>
                <input
                  className="input"
                  value={answers.likertLow}
                  onChange={e => setAnswers(a => ({ ...a, likertLow: e.target.value }))}
                  placeholder="e.g. Strongly disagree"
                />
              </div>
              <div className="field">
                <label>High end label</label>
                <input
                  className="input"
                  value={answers.likertHigh}
                  onChange={e => setAnswers(a => ({ ...a, likertHigh: e.target.value }))}
                  placeholder="e.g. Strongly agree"
                />
              </div>
            </div>
          )
        }

        return (
          <div>
            <div className="option-list">
              {answers.options.map((opt, idx) => (
                <div key={idx} className="option-row">
                  <input
                    className="input"
                    placeholder={`Option ${idx + 1}`}
                    value={opt}
                    onChange={e => setOption(idx, e.target.value)}
                  />
                  {answers.options.length > 2 && (
                    <button className="option-remove" onClick={() => removeOption(idx)} type="button">×</button>
                  )}
                </div>
              ))}
            </div>
            {answers.options.length < 6 && (
              <button className="add-option-btn" onClick={addOption} type="button">
                + Add option
              </button>
            )}
          </div>
        )

      case 5:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="field">
              <label>Work email</label>
              <input
                className="input"
                type="email"
                placeholder="you@company.com"
                value={answers.email}
                onChange={e => setAnswers(a => ({ ...a, email: e.target.value }))}
              />
            </div>
            <div className="field">
              <label>Company / brand</label>
              <input
                className="input"
                placeholder="Acme Inc."
                value={answers.company}
                onChange={e => setAnswers(a => ({ ...a, company: e.target.value }))}
              />
            </div>
            <p style={{ fontSize: 12, color: 'var(--faint)', lineHeight: 1.5 }}>
              We'll send a sample report to your inbox. No spam, no sales calls — just data.
            </p>
          </div>
        )

      default: return null
    }
  }

  const stepLabels = ['Age', 'Location', 'Question', 'Format', 'Options', 'Details']
  const currentLabel = submitted ? 'Done' : stepLabels[step]

  const stepTitles = [
    'Who do you want to hear from?',
    'Where are they based?',
    'What do you want to ask?',
    'How should they answer?',
    selectedType?.needsScale ? 'Choose your scale.' : 'Set your answer options.',
    'Where should we send the results?',
  ]
  const stepDescs = [
    'Select one or more age groups.',
    'Pick a market or region.',
    'Type your research question — be specific.',
    'Choose one question format.',
    selectedType?.needsScale ? 'Pick the range that fits your question.' : 'Add the choices respondents will see.',
    'We\'ll send a free preview report here.',
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero-eyebrow">Try it free — no account needed</div>

      <div className="wizard-wrap">
        <div className="wizard-card">
          <div className="wizard-progress">
            <div className="wizard-progress-bar" style={{ width: progress + '%' }} />
          </div>

          <div className="wizard-body">
            {!submitted && (
              <div className="wizard-header">
                <span className="wizard-step-label">
                  Step {step + 1} of {TOTAL_STEPS} — {currentLabel}
                </span>
                <h2 className="wizard-title">{stepTitles[step]}</h2>
                <p className="wizard-desc">{stepDescs[step]}</p>
              </div>
            )}

            <div
              ref={contentRef}
              className={`wizard-content ${animClass}`}
              style={{ transition: 'opacity 0.18s ease, transform 0.18s ease' }}
            >
              {renderStep()}
            </div>

            {!submitted && (
              <div className="wizard-footer">
                <button
                  className="btn btn-ghost"
                  onClick={goBack}
                  disabled={step === 0}
                  style={{ opacity: step === 0 ? 0 : 1, pointerEvents: step === 0 ? 'none' : 'auto' }}
                  type="button"
                >
                  ← Back
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={goNext}
                  disabled={!canContinue}
                  style={{ opacity: canContinue ? 1 : 0.35 }}
                  type="button"
                >
                  {step === TOTAL_STEPS - 1 ? 'Send my brief →' : 'Continue →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <h1 className="display hero-headline">
        Real answers.<br />Real people.<br />Right now.
      </h1>
      <p className="hero-sub">
        Fast, incentivised consumer research for brands that can't wait on traditional panels.
      </p>
      <div className="hero-ctas">
        <a href="#contact" className="btn btn-primary">Request a demo</a>
        <a href="#how" className="btn btn-secondary">See how it works ↓</a>
      </div>
    </section>
  )
}
