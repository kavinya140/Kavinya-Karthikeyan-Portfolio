import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { icon: Github, href: 'https://github.com/kavinya140', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kavinya-karthikeyan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kavinyakarthi140@gmail.com', label: 'Email' },
]

function Footer() {
  return (
    <footer className="px-5 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-[28px] border border-white/10 bg-[var(--bg-elevated)] px-6 py-6 text-center shadow-soft backdrop-blur-xl md:flex-row md:text-left">
        <p className="text-sm text-[var(--text-muted)]">© 2026 Kavinya Karthikeyan. Learning, building, and growing through every opportunity.</p>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              aria-label={label}
              className="rounded-full border border-white/10 p-3 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
