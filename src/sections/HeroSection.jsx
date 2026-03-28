import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight, Eye, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const roles = ['CSBS Undergraduate', 'Aspiring Java Developer', 'Data Visualization Learner']

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let pauseTimer
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, displayedText.length + 1)
          setDisplayedText(nextText)

          if (nextText === currentRole) {
            pauseTimer = window.setTimeout(() => setIsDeleting(true), 1000)
          }
        } else {
          const nextText = currentRole.slice(0, displayedText.length - 1)
          setDisplayedText(nextText)

          if (!nextText) {
            setIsDeleting(false)
            setRoleIndex((current) => (current + 1) % roles.length)
          }
        }
      },
      isDeleting ? 55 : 100,
    )

    return () => {
      window.clearTimeout(timeout)
      if (pauseTimer) {
        window.clearTimeout(pauseTimer)
      }
    }
  }, [displayedText, isDeleting, roleIndex])

  return (
    <AnimatedSection id="home" className="section-shell relative overflow-hidden pt-8 sm:pt-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,78,205,0.16),transparent_24%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
          >
            <Sparkles size={16} />
            Computer Science and Business Systems Undergraduate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">Kavinya</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="mt-5 text-xl text-[var(--text-muted)] sm:text-2xl"
          >
            <span className="mr-2">I&apos;m growing as a</span>
            <span className="font-semibold text-[var(--text)]">{displayedText}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-300 align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.7 }}
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg"
          >
            Motivated B.Tech student with strong analytical and problem-solving abilities, building a foundation in Java,
            Python, web development, and data visualization. Based in Dindigul, Tamil Nadu, and looking for internship
            opportunities where I can learn fast and contribute to real technology-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#8b5cf6_0%,#3b82f6_52%,#22d3ee_100%)] px-6 py-3 font-medium text-white shadow-glow transition hover:scale-[1.02]"
            >
              View Experience
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:border-fuchsia-400/40 hover:text-fuchsia-300"
            >
              Contact Me
            </a>
            <a
              href="/Kavinya-Karthikeyan-Portfolio/Kavinya_Karthikeyan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              View Resume
              <Eye size={18} />
            </a>
            <a
              href="/Kavinya-Karthikeyan-Portfolio/Kavinya_Karthikeyan_Resume.pdf"
              download="Kavinya_Karthikeyan_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              Download Resume
              <ArrowDownToLine size={18} />
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 font-medium text-[var(--text-muted)] transition hover:border-cyan-300/30 hover:text-cyan-300"
            >
              Explore Journey
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.85 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="gradient-border glass-panel relative w-full rounded-[32px] p-6">
            <div className="rounded-[28px] border border-white/10 bg-[var(--surface-strong)] p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
              </div>

              <div className="space-y-4 text-sm text-[var(--text-muted)]">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="font-medium text-[var(--text)]">Current Focus</p>
                  <p className="mt-2">
                    Strengthening fundamentals in software development, data visualization, and web application building
                    through coursework, internships, and hands-on projects.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">CGPA</p>
                    <p className="mt-3 font-medium text-[var(--text)]">9.51</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">Location</p>
                    <p className="mt-3 font-medium text-[var(--text)]">Dindigul, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default HeroSection
