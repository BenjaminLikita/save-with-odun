/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-light": "#C6FCC9",
        "theme-lighter": "#329F38",
        "theme-color": "#074C0B"
      }
    },
  },
  plugins: [],
}