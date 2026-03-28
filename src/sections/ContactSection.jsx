import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const socials = [
  { label: 'Email', value: 'kavinyakarthi140@gmail.com', href: 'mailto:kavinyakarthi140@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 6383650561', href: 'tel:+916383650561', icon: Phone },
  { label: 'GitHub', value: 'github.com/kavinya140', href: 'https://github.com/kavinya140', icon: Github },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kavinya-karthikeyan',
    href: 'https://linkedin.com/in/kavinya-karthikeyan',
    icon: Linkedin,
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/kavinya-karthi',
    href: 'https://leetcode.com/kavinya-karthi/',
    icon: Code2,
  },
]

function ContactSection() {
  return (
    <AnimatedSection id="contact" className="section-shell">
      <div className="grid gap-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect for internships, projects, and learning opportunities."
            description="I'm open to internship opportunities, collaborations, and conversations around software development, business systems, and data visualization."
          />

          <div className="mt-8 space-y-4">
            {socials.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' || label === 'Phone' ? undefined : '_blank'}
                rel={label === 'Email' || label === 'Phone' ? undefined : 'noreferrer'}
                className="gradient-border glass-panel flex items-center gap-4 rounded-[22px] px-5 py-4 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="rounded-2xl bg-white/10 p-3 text-cyan-300">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-sm text-[var(--text-muted)]">{label}</span>
                  <span className="font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default ContactSection
