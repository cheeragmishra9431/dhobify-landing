function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  type = 'button',
  disabled,
  className = '',
  href,
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-colors duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary:
      'bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover hover:shadow-md active:shadow-sm',
    secondary:
      'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-white active:bg-brand-black active:text-white',
  }

  const sizeStyles = {
    sm: 'px-4 py-2.5 text-sm min-h-[44px]',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const composed = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} className={composed}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={composed}>
      {children}
    </button>
  )
}

export default Button
