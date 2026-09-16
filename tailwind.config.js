/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/**/*.{js,css}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
