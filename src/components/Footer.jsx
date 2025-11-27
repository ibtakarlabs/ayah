import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span className="logo-text">AMK</span>
            <span className="logo-subtext">Artistry</span>
          </div>
          <p className="footer-tagline">
            All of the glam, none of the heavy feel
          </p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="footer-title">Quick Links</h3>
          <nav className="footer-nav">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#gallery" className="footer-link">Gallery</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="footer-title">Services</h3>
          <div className="footer-services">
            <p>Bridal Makeup</p>
            <p>Glam Looks</p>
            <p>Editorial</p>
            <p>Special Events</p>
          </div>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="footer-title">Connect</h3>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/amkartistrystudio/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">📱</span>
              Instagram
            </a>
            <a
              href="https://shopmy.us/ayahkawsara"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">🛍️</span>
              Shop My Picks
            </a>
            <a
              href="mailto:contact@amkartistry.com"
              className="social-link"
            >
              <span className="social-icon">💌</span>
              Email Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="footer-divider"></div>
        <p className="footer-copyright">
          © {currentYear} AMK Artistry. All rights reserved.
        </p>
        <p className="footer-credit">
          Made with love and sparkle ✨
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
