import { Code2, Eye, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
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
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:kavinyakarthi140@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <AnimatedSection id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Kavinya-Karthikeyan-Portfolio/Kavinya_Karthikeyan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              View Resume
              <Eye size={18} />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ y: -3 }}
          className="gradient-border glass-panel rounded-[28px] p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm">
              <span className="text-[var(--text-muted)]">Your Name</span>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300/50"
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--text-muted)]">Email Address</span>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300/50"
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="text-[var(--text-muted)]">Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your internship, project, or idea"
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-300/50"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#8b5cf6_0%,#3b82f6_52%,#22d3ee_100%)] px-6 py-3 font-medium text-white shadow-glow transition hover:scale-[1.02]"
            >
              Send Message
              <Send size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </AnimatedSection>
  )
}

export default ContactSection
