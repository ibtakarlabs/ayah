import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Ayah!
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-frame">
              <img
                src="/aboutme.avif"
                alt="Ayah Kawsara"
                className={`about-image ${imageLoaded ? 'loaded' : ''}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="image-border"></div>
            </div>

            <motion.div
              className="experience-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
            >
              <div className="badge-content">
                <span className="badge-number">8+</span>
                <span className="badge-text">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="about-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm independently employed and hired by you. My goal as your makeup artist is to ensure you feel confident, beautiful, and satisfied with your glam.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              My passion for makeup has given me the knowledge of understanding different skin types, skin tones, and facial structures that underlies my makeup techniques. It is a passion of mine learning new techniques and staying current with all the great new products that come out on the market.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              My creativity, skill-set, and product knowledge allows me to provide my clients with unforgettable looks for any event. I have been practicing professionally as a makeup artist since 2016.
            </motion.p>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="stat-item">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-number">1000+</h3>
                <p className="stat-label">Looks Created</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Satisfaction</p>
              </div>
            </motion.div>

            <motion.a
              href="https://shopmy.us/ayahkawsara"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop My Favorites
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
