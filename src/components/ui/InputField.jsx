function InputField({
  label,
  type = 'text',
  placeholder,
  hint,
  required = false,
  id,
  name,
  value,
  onChange,
  className = '',
  ...rest
}) {
  const inputId = id || name || `input-${label?.replace(/\s/g, '-') || 'field'}`
  const hintId = hint ? `${inputId}-hint` : undefined

  return (
    <div className={`space-y-2 ${className}`.trim()}>
      {label && (
        <label
          htmlFor={inputId}
          className="block font-body text-sm font-medium text-brand-black"
        >
          {label}
          {required && <span className="ml-0.5 font-semibold text-[#d6473a]">*</span>}
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
        className="min-h-[44px] w-full rounded-lg border border-[rgba(214,71,58,0.28)] bg-white px-4 py-3 font-body text-base text-brand-black caret-[#d6473a] transition-[border-color,box-shadow] duration-200 placeholder:text-brand-body-grey hover:border-[rgba(214,71,58,0.45)] focus:border-[#d6473a] focus:outline-none focus:shadow-[0_0_0_3px_rgba(214,71,58,0.28)]"
        aria-required={required}
        aria-invalid={rest['aria-invalid']}
        aria-describedby={hintId}
        {...rest}
      />
      {hint && (
        <p id={hintId} className="font-body text-sm leading-snug text-[#d6473a]/80">
          {hint}
        </p>
      )}
    </div>
  )
}

export default InputField
