/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-Red': '#FF0000',
        'd-dark': '#1a202c', 
        'c-white': '#ffffff', 
        'light-bg': '#F6F8FF',
        'c-light-gray' : '#486A9B',
        'm-dark' : '#1E2A47'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

