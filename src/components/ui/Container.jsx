function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  )
}

export default Container
