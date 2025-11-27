import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Bridal Looks',
      description: 'Your special day deserves a flawless, long-lasting look that photographs beautifully and makes you feel like the most radiant version of yourself.',
      features: ['Bridal trials', 'On-location service', 'Touch-up kit', 'Lash application']
    },
    {
      title: 'Glam Looks',
      description: 'From photoshoots to special events, get camera-ready glam that makes a statement while feeling weightless and comfortable.',
      features: ['Full glam', 'Soft glam', 'Natural glam', 'Custom looks']
    },
    {
      title: 'Editorial',
      description: 'Bold, creative makeup for photoshoots, fashion shows, and artistic projects that push boundaries and create stunning visuals.',
      features: ['Creative concepts', 'High-fashion', 'Avant-garde', 'Collaborative styling']
    },
    {
      title: 'Special Events',
      description: 'Look picture-perfect for any occasion, whether it\'s a gala, prom, graduation, or celebration that calls for professional makeup.',
      features: ['Proms & formals', 'Galas', 'Parties', 'Graduations']
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="services" className="services section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Specialized makeup artistry for every occasion
        </motion.p>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) + (idx * 0.05) }}
                  >
                    <span className="feature-bullet">→</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="service-card-glow"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="cta-text">Ready to get glammed up?</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
