
---

# 📄 `component-structure.md`

---

# Dhobify Landing Page – Component Architecture

Version: 1.0
Tech Stack: React + Vite + Tailwind CSS
Architecture Style: Modular, reusable, scalable

---

# 1. High-Level Structure

```
src/
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── Section.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── InputField.jsx
│   │   └── Accordion.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── WhyDhobify.jsx
│   │   ├── PartnerSection.jsx
│   │   ├── InvestorSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── FinalCTA.jsx
│
├── pages/
│   └── LandingPage.jsx
│
├── assets/
│   ├── logo/
│   ├── icons/
│   └── images/
│
├── data/
│   └── landingContent.js
│
├── styles/
│   └── globals.css
│
└── App.jsx
```

---

# 2. Architectural Principles

* No inline styling
* All styling via Tailwind
* Reusable UI components
* Clear separation between:

  * UI components
  * Sections
  * Layout
  * Page composition
* Content separated from components (stored in `data/`)

Landing page should be composable, not hardcoded.

---

# 3. Page Composition

## `LandingPage.jsx`

Responsible only for assembling sections in order:

```
<Navbar />
<HeroSection />
<ProblemSection />
<HowItWorks />
<ServicesSection />
<WhyDhobify />
<PartnerSection />
<InvestorSection />
<FAQSection />
<FinalCTA />
<Footer />
```

No heavy logic here.

---

# 4. UI Components (Reusable Layer)

## 4.1 Button.jsx

Props:

* variant: "primary" | "secondary"
* size: "sm" | "md" | "lg"
* onClick
* children

Variants:
Primary:

* bg-yellow (#FACC15)
* text-black
* hover darker yellow

Secondary:

* border-black
* text-black
* hover invert

---

## 4.2 Container.jsx

Purpose:

* Wrap content
* Apply max-width (1200px)
* Horizontal padding
* Center alignment

Usage:
Every section must use Container.

---

## 4.3 Section.jsx

Purpose:

* Apply vertical spacing
* Optional background prop
* Consistent section padding

Props:

* background: "white" | "grey" | "dark"

---

## 4.4 Card.jsx

Used for:

* Problem cards
* Benefits
* Services
* Vision points

Features:

* Rounded corners
* Soft shadow
* Consistent padding

---

## 4.5 InputField.jsx

Used in Partner form.

Props:

* label
* type
* placeholder
* required

Must follow brand spacing rules.

---

## 4.6 Accordion.jsx

Used in FAQ section.

Features:

* Smooth expand/collapse
* Accessible
* Clean animation
* No flashy effects

---

# 5. Layout Components

## Navbar.jsx

Features:

* Logo (left)
* Navigation links (optional)
* Download CTA button (right)
* Sticky on scroll
* Mobile hamburger menu

Must prioritize Download App CTA.

---

## Footer.jsx

Contains:

* About text
* Location (HSR Layout)
* Contact email
* Policy links

Simple. Clean. Dark background (#0F0F0F).

---

# 6. Section Responsibilities

## HeroSection.jsx

Includes:

* Headline
* Subheadline
* 3 CTAs
* App mockup image
* Serving HSR text

Layout:
Two-column desktop
Stacked mobile

---

## ProblemSection.jsx

Grid of 4 cards.
Simple headline.
Strong contrast spacing.

---

## HowItWorks.jsx

3-step layout.
Icon + heading + short description.

---

## ServicesSection.jsx

Grid or list.
Minimal text.
Highlight line for free pickup.

---

## WhyDhobify.jsx

Grid of benefits.
Strong typography.
Confident tone.

---

## PartnerSection.jsx

Two-column:
Left → Content
Right → Form

Must feel conversion-focused.

---

## InvestorSection.jsx

Clean layout.
Slightly premium feel.
Dark or grey background.

---

## FAQSection.jsx

Accordion-based.
Minimal.
Clear spacing.

---

## FinalCTA.jsx

Dark background.
Bold headline.
Prominent Download button.

High contrast.

---

# 7. Content Management Strategy

Create:

`data/landingContent.js`

Store:

* Headlines
* Paragraphs
* Lists
* FAQ array

Sections import content from data file.

Avoid hardcoding strings inside components.

---

# 8. Styling Rules

* Use Tailwind utility classes
* No custom CSS unless absolutely required
* Follow design-system.md strictly
* Maintain spacing consistency

---

# 9. Performance Requirements

* Lazy load images
* Optimize hero image
* No heavy animation libraries
* Minimal dependencies
* Lighthouse score target: 90+

---

# 10. Future Scalability

Architecture must support:

* Adding App Store links
* Connecting partner form to backend
* Adding analytics
* Multi-city expansion
* Reusing components in dashboard

No tightly coupled logic.

---

# 11. Code Quality Standards

* Functional components only
* Clean prop types
* No unnecessary state
* Descriptive naming
* Organized imports
* No massive files

Each section under 200 lines.

---

# End of Component Structure

---


