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
          // primary: `var(--color-primary)`,
          primary: withOpacity('--color-primary'),
          secondary:  withOpacity('--color-secondary'),
          dark: `var(--color-text-base)`,
          danger: withOpacity('--color-danger'),
          white: `var(--color-white)`,
          gray:withOpacity('--color-gray-400')
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
