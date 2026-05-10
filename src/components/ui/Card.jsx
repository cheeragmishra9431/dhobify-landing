const variantStyles = {
  default: 'rounded-card bg-white p-6 shadow-sm border border-gray-200/60',
  emphasis:
    'rounded-card bg-white p-6 shadow-sm border border-gray-200/60 border-l-[3px] border-l-brand-yellow',
  soft: 'rounded-card bg-white/90 p-6 border border-gray-200/70 shadow-sm md:bg-brand-light-grey/40',
}

function Card({ children, className = '', variant = 'default' }) {
  return (
    <div className={`${variantStyles[variant] ?? variantStyles.default} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Card
