import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9', // Professional Blue
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        gold: {
          DEFAULT: '#C6A45C', // Elegant Warm Gold from reference
          light: '#DEBC72',   // Lighter Gold accent
          dark: '#9A7E3E',    // Darker Gold for depth
          muted: '#5C4D2B',   // Muted gold for backgrounds
        },
        black: {
          rich: '#0F0E0A', // Warm Black/Brown from reference
          card: '#16140E', // Slightly lighter for cards
          light: '#26241C', // Soft Black for borders etc
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [
    typography,
  ],
}
