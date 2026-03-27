import { MoonStar, SunMedium } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-300/30 hover:text-cyan-300"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
