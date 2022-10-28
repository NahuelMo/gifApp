/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#00A7E1',
      'secondary': '#FF9B42',
      'hover': '#29339B',
      'white': '#f9f9f9',
      'slave': '#cacaca85'
    },
    extend: {},
  },
  plugins: [],
}
