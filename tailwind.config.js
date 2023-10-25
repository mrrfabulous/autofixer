/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    colors: {
      "primary-color": "#FC0000",
      "accent-color": "#F6F6F6",
      "secondary-color": "#FFFFFF"

      
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      bai: ['Bai Jamjuree', 'sans-serif'],

    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}

