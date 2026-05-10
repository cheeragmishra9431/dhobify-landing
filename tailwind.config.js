/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-l-brand-warm-orange',
    'border-l-brand-coral',
  ],
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
          coral: 'rgb(var(--brand-coral) / <alpha-value>)',
          'warm-orange': 'rgb(var(--brand-warm-orange) / <alpha-value>)',
          gold: 'rgb(var(--brand-gold) / <alpha-value>)',
          'glow-orange': 'rgb(var(--brand-glow-orange) / <alpha-value>)',
        },
        semantic: {
          success: '#15803d',
          'success-bg': '#f0fdf4',
          'success-border': '#bbf7d0',
          error: '#b91c1c',
          'error-bg': '#fef2f2',
          'error-border': '#fecaca',
        },
      },
      fontSize: {
        'hero-desktop': ['3rem', { lineHeight: '1.2' }],
        'hero-display': ['3.75rem', { lineHeight: '1.1' }],
        'hero-mobile': ['2rem', { lineHeight: '1.2' }],
        'section-desktop': ['2rem', { lineHeight: '1.3' }],
        'section-mobile': ['1.5rem', { lineHeight: '1.3' }],
      },
      keyframes: {
        seoFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        seoFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        seoFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2%, 3%) scale(1.03)' },
        },
        navBarSlide: {
          '0%': { opacity: '0', transform: 'translateY(-14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        navLogoIn: {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(6px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        navAccentPulse: {
          '0%, 100%': { opacity: '0.75', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.15)' },
        },
      },
      animation: {
        'seo-in': 'seoFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'seo-in-fast': 'seoFadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'seo-fade': 'seoFadeIn 0.8s ease-out both',
        'seo-float': 'seoFloat 18s ease-in-out infinite',
        'nav-bar-in': 'navBarSlide 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'nav-logo': 'navLogoIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) 75ms both',
        'nav-accent': 'navAccentPulse 2.8s ease-in-out infinite',
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
