import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'Climate Scope',
    description:
      'Built a climate-focused data visualization project to study environmental trends and present information in a clear, decision-friendly format.',
    stack: ['Data Visualization', 'Power BI', 'Analytics', 'Reporting'],
    github: 'https://github.com/kavinya140',
    category: 'Project',
    meta: 'Infosys Internship Project - 2025',
  },
  {
    title: 'Supermarket Billing System',
    description:
      'Developed an academic billing system to manage product entries, pricing, and automated invoice generation using core programming logic.',
    stack: ['Java', 'Programming Logic', 'Problem Solving', 'Academic Project'],
    github: 'https://github.com/kavinya140',
    category: 'Project',
    meta: 'Academic Project - 2024',
  },
  {
    title: 'Data Visualization Internship',
    description:
      'Learned how to transform raw datasets into meaningful visual insights and created basic reports that support data-driven decision making.',
    stack: ['Infosys Virtual Internship', 'Data Analysis', 'Visualization', 'Business Insight'],
    category: 'Internship',
    meta: 'August 2025 - October 2025',
  },
]

function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Project and internship experiences that reflect my learning journey."
        description="These experiences helped me strengthen programming fundamentals, data interpretation, and practical exposure to software development workflows."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ProjectsSection
