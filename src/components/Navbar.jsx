import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar({ sections, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[var(--bg-elevated)] px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <a href="#home" className="font-display text-lg font-semibold tracking-wide">
          Kavinya<span className="gradient-text">.dev</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/15"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[24px] border border-white/10 bg-[var(--bg-elevated)] p-4 shadow-soft backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]"
              >
                {section.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
