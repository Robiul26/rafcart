module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '479px' },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        'primary': '#fd3d57'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
