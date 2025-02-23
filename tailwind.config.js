const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merry': ['Merriweather',  ...defaultTheme.fontFamily.serif],
        // 'custom': ['Grand Hotel',  ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
