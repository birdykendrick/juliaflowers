/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans:  ['Jost', 'sans-serif'],
      },
      colors: {
        blush:       '#f0cdd8',
        rose:        '#d9a0b4',
        'deep-rose': '#b85c7a',
        petal:       '#f5e6ec',
        cream:       '#f0e8df',
        ivory:       '#f7ede8',
        'bg-section':'#ede0d4',
        sage:        '#a8b89e',
        'sage-light':'#d8e5d2',
        'text-dark':  '#2e1a24',
        'text-mid':   '#6b4459',
        'text-light': '#9e7088',
        gold:         '#b8935a',
      },
      borderRadius: { '3xl': '1.5rem', '4xl': '2rem' },
      keyframes: {
        fadeUp:   { '0%': { opacity:'0', transform:'translateY(24px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        slowSpin: { to: { transform:'rotate(360deg)' } },
        float:    { '0%,100%': { transform:'translateY(0px)' }, '50%': { transform:'translateY(-10px)' } },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'slow-spin': 'slowSpin 30s linear infinite',
        'float':     'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
