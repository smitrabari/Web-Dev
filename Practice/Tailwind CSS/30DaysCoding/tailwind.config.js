/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato Light', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  }, 
  plugins: [],
}