// tailwind.config.js
const colors = require('tailwindcss/colors')

function withOpacity(variableName){
  return ({opacityValue}) => {
    if(opacityValue !== 'undefinded'){
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          bodyColor: withOpacity('--color-text-base'),
          primary: withOpacity('--color-primary'),
          secondary:  withOpacity('--color-secondary'),
          danger: withOpacity('--color-danger'),
          success:withOpacity('--color-success'),
          warning:withOpacity('--color-warning'),
          info:withOpacity('--color-info'),
          white: withOpacity('--color-white'),
          gray:withOpacity('--color-gray-400'),
          dark: withOpacity('--color-text-base'),
      },
      },
    boxShadow: ['active'],
  },
  stroke: {
    current: 'currentColor',
  }
  },
  variants: {
    extend: {},
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
  },
  plugins: [require("@tailwindcss/forms"),],
}
