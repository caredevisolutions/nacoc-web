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
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        gold: {
          DEFAULT: '#D4AF37', // Genuine Metallic Gold
          light: '#F2D680',   // Champagne Gold
          dark: '#AA882C',    // Antique Gold
          muted: '#8A7638',   // Bronze-ish for subdued text
        },
        black: {
          rich: '#1C1C1E', // Apple Dark Gray - Softer than pure black
          card: '#2C2C2E', // Slightly lighter card background
          light: '#3A3A3C', // Even lighter for borders/hovers
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
