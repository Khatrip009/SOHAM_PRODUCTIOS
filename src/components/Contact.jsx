import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    if (!name || !email || !message) {
      setStatus('Please fill in all required fields.'); return
    }
    setStatus('Thanks! We will get back to you shortly.')
    form.reset()
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-detail"><i className="fas fa-phone"></i> <a href="tel:+918046069996">+91-8046069996</a></div>
              <div className="contact-detail"><i className="fas fa-envelope"></i> <a href="mailto:info@sohamproduction.com">info@sohamproduction.com</a></div>
              <div className="contact-detail"><i className="fas fa-map-marker-alt"></i> Minubhai ni Uladi, Navsari, Gujarat - 396445</div>
            </div>
          </div>

          <div className="contact-card map-card">
            <h3>Find Us</h3>
            <div className="map-container">
              <iframe title="Google Map - Soham Productions"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789!2d72.9241164!3d20.9467019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f795909b2c77%3A0x1494cfa5f558f3dd!2sNavsari%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1695654321000!5m2!1sen!2sin"
                width="100%" height="250" style={{ border: 0, borderRadius: 12 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="contact-card">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 am - 6:00 pm</p>
            <p>Saturday: 10:00 am - 4:00 pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" id="contactForm" onSubmit={submit}>
          <h3>Send us a message</h3>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" id="name" name="name" className="form-input" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" id="email" name="email" className="form-input" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="form-input" inputMode="tel" autoComplete="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" className="form-input" required></textarea>
          </div>
          <button type="submit" className="btn btn--primary">Send Message</button>
          <p role="status" aria-live="polite" style={{ marginTop: 8 }}>{status}</p>
        </form>
      </div>
    </section>
  )
}
