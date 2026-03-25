function Section({ background = 'white', children, className = '', id }) {
  const bgStyles = {
    white: 'bg-white',
    grey: 'bg-brand-light-grey',
    dark: 'bg-brand-deep-black',
  }

  return (
    <section
      id={id}
      className={`py-[60px] md:py-20 lg:py-24 ${bgStyles[background]} ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export default Section
