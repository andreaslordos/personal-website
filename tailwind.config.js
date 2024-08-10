/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f6f2e9',
        link: '#0000AA', // Traditional hyperlink blue color
      },
      textDecoration: ['hover'],
    },
  },
  plugins: [],
  variants: {
    extend: {
      textDecoration: ['hover'],
    },
  },
}