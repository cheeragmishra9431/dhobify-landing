# Dhobify Design System – Cursor Implementation Prompt

**Use this file as a prompt or reference in another Cursor project to apply the Dhobify design system consistently.**

---

## Quick Start Prompt (Copy & Paste to Cursor)

```
Apply the Dhobify design system to this project. Use these specifications:

**Colors (Tailwind theme):**
- brand.yellow: #FACC15 (primary CTA, highlights)
- brand.yellow-hover: #EAB308
- brand.black: #111111 (headings, nav)
- brand.deep-black: #0F0F0F (dark sections)
- brand.white: #FFFFFF
- brand.light-grey: #F5F5F5 (alternate sections)
- brand.body-grey: #4B5563 (paragraph text)

**Typography:**
- Headings: Poppins (weights 600–800), fallback Montserrat
- Body: Inter (weights 400–700)
- Hero: 48–64px desktop / 32px mobile, weight 800+
- Section heading: 32px desktop / 24px mobile, weight 700–800
- Body: 16–18px, line-height 1.6, color #4B5563

**Layout:**
- Max content width: 1200px
- Section padding: 80–100px desktop / 60px mobile
- Card radius: 12px

**Buttons:**
- Primary: bg #FACC15, text #111111, hover #EAB308, rounded-lg, min-h 44px
- Secondary: 2px border #111111, transparent bg, hover: bg #111111 text white

**Rules:** No gradients, no yellow full-section backgrounds, no red/orange in UI. Focus ring: 2px #FACC15. Keep it fast, bold, urban, tech-first.
```

---

## Full Implementation Guide

### 1. Tailwind Config (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#FACC15',
          'yellow-hover': '#EAB308',
          black: '#111111',
          'deep-black': '#0F0F0F',
          white: '#FFFFFF',
          'light-grey': '#F5F5F5',
          'body-grey': '#4B5563',
        },
      },
      fontSize: {
        'hero-desktop': ['3rem', { lineHeight: '1.2' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2' }],
        'section-desktop': ['2rem', { lineHeight: '1.3' }],
        'section-mobile': ['1.5rem', { lineHeight: '1.3' }],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
```

### 2. Fonts (add to `index.html` or equivalent)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

### 3. Global CSS Base Styles

```css
@layer base {
  body {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #4B5563;
    background-color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-weight: 700;
    color: #111111;
    line-height: 1.2;
  }

  :focus-visible {
    outline: 2px solid #FACC15;
    outline-offset: 2px;
  }
}
```

### 4. Component Patterns

**Button (primary & secondary):**
- Base: `font-heading font-semibold rounded-lg transition-colors duration-200 min-h-[44px]`
- Primary: `bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover hover:shadow-md`
- Secondary: `border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-white`
- Focus: `focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2`

**Card:**
- `rounded-card bg-white p-6 shadow-sm border border-gray-200/60`

**Container:**
- `mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8`

**Section backgrounds:**
- `bg-white` | `bg-brand-light-grey` | `bg-brand-deep-black`
- Padding: `py-[60px] md:py-20 lg:py-24`

**Input fields:**
- `min-h-[44px]`, `focus:ring-2 focus:ring-brand-yellow`, labels `text-brand-black`

### 5. Brand Personality (Design Decisions)

- **Feel:** Fast, bold, urban, tech-first, confident
- **Avoid:** Luxury softness, traditional laundry vibes, bright color overuse, bounce animations
- **Accessibility:** 4.5:1 contrast, 44px min tap targets, yellow never on white for text
- **Animation:** Subtle fade-in, slight upward motion, button hover only—no bounce or flashy effects

---

## File to Copy

You can also copy the source `design-system.md` from this project for the full brand guidelines. The Tailwind tokens and component patterns above are the implementation layer.

---

*Generated from Dhobify-frontend project. Use with Cursor to maintain visual consistency across landing, dashboard, customer app, and partner app.*
