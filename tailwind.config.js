/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#270D3D',
        normalPurple: '#532667',
        lightPurple: '#B9A1CC',
        whiteNormal: '#FFFFFF',
        whiteCream: '#F3E9E0',
        darkCream: '#FFEAD8',
        lightBlue: '#9FA8D1',
        darkBlack: '#000000',
      },
      backgroundColor: theme => ({
        whiteCream: theme('colors.whiteCream'),
      }),
      fontFamily: {
        body: ['BodyFont', 'sans-serif'],
        header: ['HeaderFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
