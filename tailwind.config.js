/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a365d',
        'primary-medium': '#2d4a7a',
        'accent-gold': '#d4af37',
        'accent-gold-light': '#e8c76d',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'serif-display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1a365d 0%, #2d4a7a 100%)',
      }
    },
  },
  plugins: [],
}
