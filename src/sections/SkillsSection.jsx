import { Binary, Coffee, FileCode2, GitBranch, MonitorCog, ServerCog } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const skills = [
  { title: 'Java Programming', icon: Coffee, tone: 'from-orange-400/20 to-amber-400/10' },
  { title: 'Python Basics', icon: FileCode2, tone: 'from-blue-400/20 to-cyan-400/10' },
  { title: 'Web Development', icon: MonitorCog, tone: 'from-cyan-400/20 to-sky-400/10' },
  { title: 'Software Fundamentals', icon: ServerCog, tone: 'from-emerald-400/20 to-lime-400/10' },
  { title: 'Git & GitHub', icon: GitBranch, tone: 'from-fuchsia-400/20 to-pink-400/10' },
  { title: 'Data Visualization', icon: Binary, tone: 'from-violet-400/20 to-blue-400/10' },
]

function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A growing toolkit shaped by coursework, internships, and consistent practice."
        description="My current strengths span programming fundamentals, web technologies, data visualization tools, and collaboration skills that help me contribute effectively in team environments."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ title, icon: Icon, tone }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="gradient-border glass-panel rounded-[24px] p-5 hover:shadow-glow"
          >
            <div className={`inline-flex rounded-2xl bg-gradient-to-br ${tone} p-3 text-cyan-200`}>
              <Icon size={24} />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Built through academic learning, guided practice, and hands-on exposure to real implementation workflows.
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default SkillsSection
