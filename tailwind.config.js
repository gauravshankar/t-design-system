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
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
