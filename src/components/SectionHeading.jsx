function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
