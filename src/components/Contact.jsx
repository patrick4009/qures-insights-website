export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">[ Request a demo ]</span>
          <h2 className="h2">Let's talk about<br />your next brief.</h2>
          <p className="body-lg">Tell us what you're trying to learn and we'll show you how QuRes can get you there faster.</p>
        </div>
        <div className="contact-form-wrap">
          <form
            className="contact-form"
            action="https://formspree.io/f/REPLACE_WITH_ID"
            method="POST"
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" className="input" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-company">Company</label>
                <input id="cf-company" name="company" className="input" placeholder="Acme Inc." required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-email">Work email</label>
              <input id="cf-email" name="email" type="email" className="input" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="cf-message">What are you trying to learn?</label>
              <textarea id="cf-message" name="message" className="textarea" placeholder="Tell us about your research goals — the audience, the questions, the timeline." rows={4} />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
