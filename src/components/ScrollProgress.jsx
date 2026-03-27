import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed left-0 right-0 top-0 z-[60] h-1 bg-[linear-gradient(90deg,#8b5cf6_0%,#3b82f6_50%,#22d3ee_100%)]"
    />
  )
}

export default ScrollProgress
