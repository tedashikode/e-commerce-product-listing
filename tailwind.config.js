/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'raisin-black': '#1f2125',
      },
      
    },
  },
  plugins: [],
}

