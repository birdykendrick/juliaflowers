/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        blush: "rgb(var(--blush) / <alpha-value>)",
        blush2: "rgb(var(--blush2) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(15, 23, 42, .35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
};