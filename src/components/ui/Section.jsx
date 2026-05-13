function Section({ background = 'white', children, className = '', id, padded = true }) {
  const bgStyles = {
    white: 'bg-white',
    grey: 'bg-brand-light-grey',
    dark: 'bg-brand-deep-black',
  }

  const paddingClass = padded ? 'py-[60px] md:py-20 lg:py-24' : ''

  return (
    <section
      id={id}
      className={`${paddingClass} ${bgStyles[background]} ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export default Section
