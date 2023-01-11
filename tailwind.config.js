/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
  
      fontFamily: {
        trispace: "'Trispace', serif"
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
