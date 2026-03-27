import { BrainCircuit, Code2, Sparkles } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  {
    icon: Code2,
    title: 'Programming Foundation',
    text: 'I am building confidence in Java, Python, SQL, HTML, and CSS through academic work and practical exercises.',
  },
  {
    icon: BrainCircuit,
    title: 'Analytical Mindset',
    text: 'I enjoy understanding problems clearly, breaking them down, and applying structured thinking to solve them.',
  },
  {
    icon: Sparkles,
    title: 'Growth Through Practice',
    text: 'Internships, projects, and certifications help me keep improving my technical depth and real-world readiness.',
  },
]

function AboutSection() {
  return (
    <AnimatedSection id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Building a strong foundation in software, business systems, and practical problem solving."
        description="I'm Kavinya Karthikeyan, a B.Tech Computer Science and Business Systems student with a strong academic record and a growing interest in web development and data visualization. I enjoy learning by building, and I'm actively seeking opportunities to apply my technical knowledge in real-world environments."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="gradient-border glass-panel rounded-[24px] p-5 transition hover:-translate-y-1 hover:shadow-glow">
            <div className="inline-flex rounded-2xl bg-white/10 p-3 text-cyan-300">
              <Icon size={22} />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{text}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default AboutSection
