/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      primary: '#AD9551',
      accent: '#000000',
      },
    },
    fontFamily: {
      'primary' : ['primary', 'sans-serif'],
    },
  },
  plugins: [],
}