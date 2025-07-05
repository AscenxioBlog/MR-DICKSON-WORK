/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:[ "Yrsa", 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Logo font
        montserrat: ['Montserrat', 'sans-serif'], // Nav/body font
      },
      colors:{
        textc: '#2c8cd0',
        bodybg: '#ecf0f1',
        boldtext:'#092f6b'
      },
      screens:{
        'md': '768px',   // Tablets (iPad included)
      'lg': '1024px',  // Laptops (all sizes)
      'xl': '1440px',  // Large screens (desktops)
      '2xl': '1920px',
      }
    },
  },

  plugins: [
    require('daisyui'),
  ],
}

