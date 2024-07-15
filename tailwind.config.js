/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': {'max': '412px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'sm': {'min': '412px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    extend: {
      fontFamily: {
        'Archivo-Black': ["Archivo Black", 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif'],
      },
      backgroundImage: {
      'vignette': 'radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(2,0,36,0.5) 100%);',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out',
      fadeOut: 'fadeOut 0.5s ease-in-out',
    },
  },
  },
  plugins: [],
}