/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette ──────────────────────────────────────────────
        // Replace these hex values to retheme the whole site instantly.
        blush:   { DEFAULT: '#F4C2C2', light: '#FAEAEA', dark: '#E8939A' },
        rose:    { DEFAULT: '#D4788A', light: '#E8A0AD', dark: '#B85A6C' },
        cream:   { DEFAULT: '#FDF6F0', light: '#FFFCFA', dark: '#F0E6DC' },
        bark:    { DEFAULT: '#7A5C4F', light: '#A07868', dark: '#5A3C30' },
        sage:    { DEFAULT: '#B5C4B1', light: '#D5E0D1', dark: '#8FA88A' },
        stone:   { DEFAULT: '#C8BEB6', light: '#E4E0DC', dark: '#A0948C' },
      },
      fontFamily: {
        // Display: elegant serif for headlines
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        // Body: refined humanist sans
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Accent: light italic for quotes / taglines
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-hero':  ['clamp(2.4rem, 6vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h2':   ['clamp(1.8rem, 4vw, 3rem)',   { lineHeight: '1.2' }],
        'fluid-h3':   ['clamp(1.2rem, 2.5vw, 1.8rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        section: '6rem',
      },
      borderRadius: {
        card: '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 30px rgba(180,100,120,0.08)',
        card: '0 8px 40px rgba(180,100,120,0.12)',
        hover:'0 16px 50px rgba(180,100,120,0.20)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.7s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in':   'fade-in 0.6s ease both',
        float:       'float 5s ease-in-out infinite',
        'float-slow':'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
