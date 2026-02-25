function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-card bg-white p-6 shadow-sm border border-gray-200/60 ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default Card
