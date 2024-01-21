/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container:{
      center:true,
      padding:'0.1rem'
    },
    extend: {
      fontFamily:{
        "vazir":"vazir",
        "vazirLight":"vazir light",
        "vazirBold":"vazir bold",
      }
    },
  },
  plugins: [],
}

