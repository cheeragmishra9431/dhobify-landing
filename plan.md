Perfect. These are clean, contained tasks.  
Now you should **assign them to Cursor in the correct order with strict instructions**.

Do NOT say “complete everything.”  
Give structured commands.

---

# ✅ ORDER OF EXECUTION

Build in this order:

1. Add Logo asset
2. Update landingContent.js with footer data
3. Build Navbar properly
4. Build Footer properly
5. Add real Hero mockup image
6. Polish responsive behavior

---

# 🔒 First — Remind Cursor of Rules

Start with:

> Follow .[ai-rules.md](http://ai-rules.md) strictly.  
> Do not change existing architecture.  
> Modify only the required components.

---

# 🟡 TASK 1 — Add Logo Asset

Tell Cursor:

> Create folder `src/assets/logo/`.  
> Add Dhobify logo file there (I will manually place the image).
>
> Update Navbar and Footer to import logo from this folder.
>
> Logo rules:
>
> - Maintain aspect ratio
> - Height 32–40px in navbar
> - Slightly smaller in footer
> - Do not distort
> - Add proper alt text

Keep it simple.

---

# 🟡 TASK 2 — Add Footer Content to landingContent.js

Tell Cursor:

> Update `data/landingContent.js` to include:
>
> - about text
> - location (Currently serving HSR Layout, Bengaluru)
> - contact email ([hello@dhobify.com](mailto:hello@dhobify.com))
> - links array (Privacy Policy, Terms of Service)
>
> Do not hardcode footer content inside Footer.jsx.

This maintains separation of concerns.

---

# 🟡 TASK 3 — Build Proper Navbar

Tell Cursor:

> Refactor Navbar.jsx.
>
> Requirements:
>
> - Left: Dhobify logo
> - Right (desktop): optional nav links + Download App CTA
> - Mobile: hamburger menu
> - Sticky on scroll
> - White background
> - Subtle shadow on scroll
> - Download CTA must use Primary Button component
> - Mobile-first implementation
> - Clean state handling for menu toggle
> - No heavy libraries

Important:  
Ask for clean responsive behavior using Tailwind breakpoints.

---

# 🟡 TASK 4 — Build Proper Footer

Tell Cursor:

> Refactor Footer.jsx.
>
> Requirements:
>
> - Background: #0F0F0F
> - Text: white or light grey
> - Logo on top
> - About text
> - Location
> - Contact email
> - Policy links
> - Clean spacing
> - Mobile responsive
> - No inline styles
> - Use Container component

Keep it minimal and bold.

---

# 🟡 TASK 5 — Replace Hero Placeholder Mockup

Tell Cursor:

> In HeroSection.jsx:
>
> - Replace placeholder image with real image from `assets/images/`
> - Make image responsive
> - Desktop: right side of hero
> - Mobile: stacked below content
> - Use optimized image loading
> - Do not stretch image
> - Maintain clean spacing

Also tell it:

> Lazy load image if possible.

---

# 🟡 TASK 6 — Final Polishing Rules

After all that, tell Cursor:

> Review:
>
> - Navbar responsiveness (320px width)
> - Footer spacing
> - Hero layout alignment
> - CTA visibility above fold
> - Accessibility contrast
> - No console errors
> - No unused imports

---

# ⚠️ Critical Rules To Reinforce

Tell Cursor:

- Do not modify [design-system.md](http://design-system.md)
- Do not introduce new colors
- Do not add new dependencies
- Do not change component structure
- Keep files clean and modular

---

# 🧠 Founder Advice

This is where discipline matters.

Don’t let Cursor:

- Redesign navbar creatively
- Add animations
- Add gradients
- Add random spacing

Keep it tight.

---

# 🚀 What This Completes

After these tasks:

✅ Landing page structure complete  
✅ Branding consistent  
✅ Conversion CTAs visible  
✅ Professional navbar & footer  
✅ Ready for deployment

Then next stage becomes:

- SEO meta tags
- Open Graph image
- Favicon
- Performance optimization
- Vercel deployment

---

If you want, next I can give you:

- A pre-deployment checklist
- Or SEO optimization guide
- Or conversion optimization improvements

You're operating like a real founder now.