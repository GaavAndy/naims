/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#003600",
        "color-primary-light": "#037003",
        "color-primary-dark": "#002509",
        "color-secondary": "#010131",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#AA27DF",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [],
}

