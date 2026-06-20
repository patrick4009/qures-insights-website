import { useState } from 'react'
import { supabase } from '../lib/supabase'

const EMPTY = { name: '', company: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  function set(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name: form.name, company: form.company, email: form.email, message: form.message }])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('done')
      setForm(EMPTY)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ Request a demo ]</span>
          <h2 className="h2">Let's talk about<br />your next brief.</h2>
          <p className="body-lg">Tell us what you're trying to learn and we'll show you how QuRes can get you there faster.</p>
        </div>
        <div className="contact-form-wrap">
          {status === 'done' ? (
            <div className="card" style={{ padding: '48px 40px', textAlign: 'center' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%', background: '#0A0A0A',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Message received.</p>
              <p style={{ color: 'var(--faint)', fontSize: 15 }}>We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" className="input" placeholder="Your name" required value={form.name} onChange={set('name')} />
                </div>
                <div className="field">
                  <label htmlFor="cf-company">Company</label>
                  <input id="cf-company" className="input" placeholder="Acme Inc." required value={form.company} onChange={set('company')} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-email">Work email</label>
                <input id="cf-email" type="email" className="input" placeholder="you@company.com" required value={form.email} onChange={set('email')} />
              </div>
              <div className="field">
                <label htmlFor="cf-message">What are you trying to learn?</label>
                <textarea id="cf-message" className="textarea" placeholder="Tell us about your research goals — the audience, the questions, the timeline." rows={4} value={form.message} onChange={set('message')} />
              </div>
              {status === 'error' && (
                <p style={{ color: '#c0392b', fontSize: 13 }}>Something went wrong — please try again.</p>
              )}
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.6 : 1 }}>
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
