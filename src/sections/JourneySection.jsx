import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const journey = [
  {
    year: '2026',
    title: 'B.Tech in Computer Science and Business Systems',
    subtitle: 'V.S.B Engineering College • Current CGPA: 9.51',
    text: 'Continuing my undergraduate studies with a strong focus on software fundamentals, problem solving, and technology-driven business systems.',
  },
  {
    year: '2025',
    title: 'Infosys Virtual Internship 6.0',
    subtitle: 'Data Visualization Intern',
    text: 'Learned how to analyze datasets, create reports, and communicate insights visually for more informed decision making.',
  },
  {
    year: '2024',
    title: 'Web Application Internship',
    subtitle: 'NLC India Limited • Tamil Nadu',
    text: 'Gained industry exposure to web application development, enterprise workflows, and the basics of software deployment and implementation.',
  },
  {
    year: '2023',
    title: 'Higher Secondary Education',
    subtitle: 'S.M.B.M Matric Higher Secondary School • 90.16%',
    text: 'Completed higher secondary education with strong academic performance and a growing interest in computer science and technology.',
  },
]

function JourneySection() {
  return (
    <AnimatedSection id="journey" className="section-shell">
      <SectionHeading
        eyebrow="Experience & Education"
        title="An academic and practical journey shaped by learning, discipline, and curiosity."
        description="From strong academic performance to internship exposure and project work, each step has helped me grow more confident in applying technology to real problems."
      />

      <div className="relative mt-10">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-fuchsia-400 via-blue-400 to-cyan-300 md:block" />
        <div className="space-y-6">
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative md:pl-14"
            >
              <div className="absolute left-[9px] top-7 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.7)] md:block" />
              <div className="gradient-border glass-panel rounded-[24px] p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">{item.year}</span>
                  <span className="text-sm text-[var(--text-muted)]">{item.subtitle}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default JourneySection
