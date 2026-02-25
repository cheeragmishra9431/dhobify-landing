function InputField({
  label,
  type = 'text',
  placeholder,
  required = false,
  id,
  name,
  value,
  onChange,
  className = '',
  ...rest
}) {
  const inputId = id || name || `input-${label?.replace(/\s/g, '-') || 'field'}`

  return (
    <div className={`space-y-2 ${className}`.trim()}>
      {label && (
        <label
          htmlFor={inputId}
          className="block font-body text-sm font-medium text-brand-black"
        >
          {label}
          {required && <span className="text-brand-body-grey ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full min-h-[44px] px-4 py-3 font-body text-base text-brand-black bg-white border border-gray-300 rounded-lg placeholder:text-brand-body-grey focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-shadow duration-200"
        aria-required={required}
        aria-invalid={rest['aria-invalid']}
        {...rest}
      />
    </div>
  )
}

export default InputField
