/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian-black': '#0B0B0F',
        'pure-white': '#FFFFFF',
        'electric-violet': '#7C3AED',
        'aqua-cyan': '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
