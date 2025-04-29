/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: '#242B33',
        cta: '#EAFF74',
      },
      fontFamily: {
        sans: ['Alexandria', 'sans-serif'],
        heading: ['Gilda Display', 'serif'],
      },
    },
  },
  plugins: [],
}
