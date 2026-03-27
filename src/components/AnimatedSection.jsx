import { motion } from 'framer-motion'

function AnimatedSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      viewport={{ once: true, amount: 0.2 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
