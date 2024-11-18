/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-Red': '#FF0000', // Name your color and set the hex value
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

