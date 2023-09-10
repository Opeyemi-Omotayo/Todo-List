/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors:{
        "grey": " #475467",
        "blue": "#3F5BF6",
      },
      fontFamily:{
        workSans:['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
  require("tailwind-scrollbar")({ nocompatible: true }),
  ],
}

