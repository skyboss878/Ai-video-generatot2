/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          900: '#0f0f23',
          800: '#1a1a2e',
          700: '#2d2d44'
        }
      }
    },
  },
  plugins: [],
}
