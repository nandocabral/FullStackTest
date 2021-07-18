module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'tiny': '.575rem',
      },
      backgroundColor: {
        grayflix: '#141414'
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover'],
      height: ['hover'],
      width: ['hover'],
    },
  },
  plugins: [],
}
