/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tv-teal': '#26A69A',
        'tv-blue': '#2962FF',
        'tv-bg': '#0F1420',
        'tv-panel': '#161B27',
        'tv-border': '#242938',
      },
    },
  },
  plugins: [],
}
