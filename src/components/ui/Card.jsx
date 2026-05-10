const variantStyles = {
  default:
    'rounded-card bg-white p-6 shadow-sm border border-gray-200/60 transition-[box-shadow,transform,border-color] duration-300 ease-out motion-reduce:transition-none hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
  emphasis:
    'rounded-card bg-white p-6 shadow-sm border border-gray-200/60 border-l-[3px] border-l-brand-yellow transition-[box-shadow,transform,border-color] duration-300 ease-out motion-reduce:transition-none hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0',
  soft: 'rounded-card bg-white/90 p-6 border border-gray-200/70 shadow-sm md:bg-brand-light-grey/40 transition-[box-shadow,transform] duration-300 ease-out hover:shadow-md hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
}

function Card({ children, className = '', variant = 'default' }) {
  return (
    <div className={`${variantStyles[variant] ?? variantStyles.default} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Card
