/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl':  '1209px',
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md':  '813px',
      // => @media (max-width: 767px) { ... }

      'sm': '767px',
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

