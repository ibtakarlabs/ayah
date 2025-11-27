import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! I\'ll get back to you soon!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: ''
      })

      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's create something beautiful together
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="info-card">
              <h3>Email Me</h3>
              <p>For bookings and inquiries</p>
              <a href="mailto:contact@amkartistry.com" className="info-link">
                contact@amkartistry.com
              </a>
            </div>

            <div className="info-card">
              <h3>Follow Me</h3>
              <p>Stay updated on Instagram</p>
              <a
                href="https://www.instagram.com/amkartistrystudio/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                @amkartistrystudio
              </a>
            </div>

            <div className="info-card">
              <h3>Shop My Picks</h3>
              <p>Browse my favorite products</p>
              <a
                href="https://shopmy.us/ayahkawsara"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                View Collection
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  placeholder="Event Date"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Event Type</option>
                  <option value="bridal">Bridal</option>
                  <option value="glam">Glam</option>
                  <option value="editorial">Editorial</option>
                  <option value="special-event">Special Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your vision... *"
                required
                rows="6"
                className="form-input form-textarea"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitMessage && (
              <motion.p
                className="submit-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
