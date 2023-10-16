/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#1f8f7c",
        "color-primary-light": "#0a682d",
        "color-primary-dark": "#002509",
        "color-secondary": "#024b33",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#AA27DF",
      },
      backgroundImage: {
        'hero-background': "url('/img/plaintain.jpg')",  
        'card': 'url(img/goat.jpg)',   
      },
      fontFamily: {
        'rubik-gemstones': ['"Rubik Gemstones"', 'sans'],
      },
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

