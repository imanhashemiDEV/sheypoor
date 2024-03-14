const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '0.1rem'
    },
    extend: {
      fontFamily: {
        "vazir": "vazir",
        "vazirLight": "vazir light",
        "vazirBold": "vazir bold",
      },
      colors: {
        "color-main": "#3e7bfa",
        "color-main-darker": "#004fc4",
        "color-main-lighter": "#6698fa",
        "color-dark-0": "#1c1c28",
        "color-dark-1": "#28293d",
        "color-dark-2": "#555770",
        "color-dark-3": "#8f90a6",
        "color-dark-4": "#c7c9d9",
        "color-light-0": "#e4e4eb",
        "color-light-1": "#ebebf0",
        "color-light-2": "#f2f2f5",
        "color-light-3": "#fafafc",
        "color-light-4": "#fff",
        "color-red-0": "#e63535",
        "color-red-1": "#ff3b3b",
        "color-red-2": "#ff5c5c",
        "color-red-3": "#ff8080",
        "color-red-4": "#ffe6e6",
        "color-green-0": "#05a660",
        "color-green-1": "#06c270",
        "color-green-2": "#39d98a",
        "color-green-3": "#57eba1",
        "color-green-4": "#e3fff1",
        "color-teal-0": "#00b7c4",
        "color-teal-1": "#00cfde",
        "color-teal-2": "#73dfe7",
        "color-teal-3": "#a9eff2",
        "color-teal-4": "#e5ffff",
        "color-blue-0": "#004fc4",
        "color-blue-1": "#0063f7",
        "color-blue-2": "#5b8def",
        "color-blue-3": "#9dbff9",
        "color-blue-4": "#e5f0ff",
        "color-yellow-0": "#e5b800",
        "color-yellow-1": "#fc0",
        "color-yellow-2": "#fddd48",
        "color-yellow-3": "#fded72",
        "color-yellow-4": "#fffee5",
        "color-orange-0": "#e57a00",
        "color-orange-1": "#f80",
        "color-orange-2": "#fdac42",
        "color-orange-3": "#fccc75",
        "color-orange-4": "#fff8e5",
        "color-purple-0": "#4d0099",
        "color-purple-1": "#60c",
        "color-purple-2": "#ac5dd9",
        "color-purple-3": "#dda5e9",
        "color-purple-4": "#ffe5ff",
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('input-focused', '&:focus ~ label')
      addVariant('radio-checked', '&:checked ~ label')
      addVariant('child', '& > *')
    })
  ],
}

