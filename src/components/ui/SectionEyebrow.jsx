function SectionEyebrow({ children, light = false, className = '' }) {
  return (
    <p
      className={`mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] sm:mb-4 ${
        light ? 'text-white/55' : 'text-brand-body-grey'
      } ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export default SectionEyebrow
