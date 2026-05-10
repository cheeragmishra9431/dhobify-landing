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
    'inline-flex items-center justify-center font-heading font-semibold rounded-lg min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 transition-[color,background-color,box-shadow,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-colors'

  const variantStyles = {
    primary:
      'bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover hover:shadow-[0_12px_36px_-8px_rgba(250,204,21,0.45),0_8px_24px_-6px_rgba(214,71,58,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-md motion-reduce:hover:translate-y-0',
    secondary:
      'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-white active:bg-brand-black hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0',
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
