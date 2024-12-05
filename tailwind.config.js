// tailwind.config.js
const colors = require('tailwindcss/colors')

// module.exports = {
//  theme: {
//    colors: {
//      transparent: 'transparent',
//      current: 'currentColor',
//      black: colors.black,
//     white: colors.white,
//     gray: colors.trueGray,
//      indigo: colors.indigo,
//      red: colors.rose,
//      yellow: colors.amber,
//      orange: colors.orange,
//    }
//  }
//}

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: '#FFA500',  // Customize the value as you want
        // You can add more colors here
      }
    }
  },
  variants: {},
  plugins: [],
}
