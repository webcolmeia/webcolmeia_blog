module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF6600',
          dark: '#CC5200'
        },
        secondary: {
          light: '#04151F',
          dark: '#030C12'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
