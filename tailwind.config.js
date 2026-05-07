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
        link: '#0000AA',
      },
      fontFamily: {
        serif: ["'Iowan Old Style'", "'Source Serif Pro'", 'Charter', 'Georgia', "'Times New Roman'", 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(.2,.7,.2,1) forwards',
        'float-slow': 'float 7s ease-in-out infinite',
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
