import { useState } from 'react'

function AccordionItem({ item, isOpen, onToggle, index }) {
  const { id, question, answer } = item

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <h3 className="m-0 text-[inherit] font-[inherit]">
        <button
          type="button"
          id={`accordion-heading-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          onClick={() => onToggle(index)}
          className="flex min-h-[44px] w-full items-center justify-between px-5 py-6 text-left font-body text-base font-medium text-brand-black transition-[color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-light-grey/30 hover:text-brand-black focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-inset"
        >
          {question}
          <span
            className={`ml-4 shrink-0 text-brand-black transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-heading-${id}`}
        className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pt-1 font-body text-base text-brand-body-grey leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}

function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([])

  const handleToggle = (index) => {
    setOpenIndices((prev) => {
      if (allowMultiple) {
        return prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      }
      return prev.includes(index) ? [] : [index]
    })
  }

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`.trim()} role="list">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIndices.includes(index)}
          onToggle={handleToggle}
          index={index}
        />
      ))}
    </div>
  )
}

export default Accordion
