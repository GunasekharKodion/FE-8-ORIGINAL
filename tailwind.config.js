/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}

