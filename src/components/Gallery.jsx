import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Gallery.css'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'bridal', 'glam', 'editorial']

  const galleryImages = [
    {
      category: 'bridal',
      title: 'Elegant Bridal',
      instagram: 'https://www.instagram.com/p/CiI-peTO8iW/?hl=en&img_index=1'
    },
    {
      category: 'glam',
      title: 'Red Carpet Glam',
      instagram: 'https://www.instagram.com/p/CiI8BD5uJSm/?hl=en&img_index=1'
    },
    {
      category: 'editorial',
      title: 'Editorial Beauty',
      instagram: 'https://www.instagram.com/p/CeiLg0iO8sc/?hl=en'
    },
    {
      category: 'bridal',
      title: 'Soft Bridal Glam'
    },
    {
      category: 'glam',
      title: 'Full Glam'
    },
    {
      category: 'editorial',
      title: 'High Fashion'
    },
    {
      category: 'bridal',
      title: 'Natural Bridal'
    },
    {
      category: 'glam',
      title: 'Evening Glam'
    }
  ]

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="gallery section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h2>

        <motion.p
          className="gallery-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A glimpse into my artistry
        </motion.p>

        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="gallery-grid"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.category}-${index}`}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.4 }
              }}
              whileHover={{ y: -10 }}
            >
              <div className="gallery-image-wrapper">
                <div className="gallery-placeholder">
                  <span className="placeholder-text">{image.category}</span>
                </div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                  {image.instagram && (
                    <a
                      href={image.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Instagram →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="gallery-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="cta-text">See my full portfolio on Instagram</p>
          <motion.a
            href="https://www.instagram.com/amkartistrystudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            @amkartistrystudio
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
