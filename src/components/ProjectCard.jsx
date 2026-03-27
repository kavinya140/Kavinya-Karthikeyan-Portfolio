import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="gradient-border glass-panel group relative flex h-full flex-col rounded-[24px] p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
          {project.category ?? 'Featured'}
        </span>
        <div className="flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              className="rounded-full border border-white/10 p-2 transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <Github size={16} />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} external link`}
              className="rounded-full border border-white/10 p-2 transition hover:border-fuchsia-400/40 hover:text-fuchsia-400"
            >
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>

      <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
      {project.meta ? <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cyan-300">{project.meta}</p> : null}
      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition group-hover:text-[var(--text)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default ProjectCard
