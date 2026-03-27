import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import JourneySection from './sections/JourneySection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1650)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500"
        >
          <ScrollProgress />
          <div className="fixed inset-x-0 top-0 -z-10 h-[32rem] bg-hero-grid blur-3xl" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(255,78,205,0.12),transparent_24%)]" />

          <Navbar
            sections={sections}
            theme={theme}
            onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          />

          <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-10 pt-24 sm:px-8 lg:px-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <JourneySection />
            <ContactSection />
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
