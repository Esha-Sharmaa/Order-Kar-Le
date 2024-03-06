/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
    theme: {
    extend: {
      colors: {
        custom: {
          default: '#e23f58', // Define your custom color
          defaultLight: '#f2abb5',
        },
        },
        backgroundImage: {
          'cart': "url('../images/png/cart.avif')",
        },
    },
  },
}

