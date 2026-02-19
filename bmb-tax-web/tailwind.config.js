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
          light: '#F5E6BE',   // Soft Champagne Gold for backgrounds
          dark: '#B4942B',    // Darker Gold for text/borders
          muted: '#E5D5A0',   // Muted Gold for subtle elements
        },
        // Modern Light Theme Palette
        theme: {
            bg: '#FAFAFA',       // Main background (Off-white)
            surface: '#FFFFFF',  // Card background (White)
            text: {
                main: '#18181B', // Zinc-900 (Almost Black)
                body: '#52525B', // Zinc-600 (Dark Gray)
                light: '#A1A1AA', // Zinc-400 (Light Gray)
            },
            border: '#E4E4E7',   // Zinc-200 (Light Gray Border)
        },
        // Keeping legacy names momentarily to prevent immediate crash, but will replace usage
        black: {
          rich: '#18181B', // Replacing with Dark Charcoal for dark mode sections if needed
          card: '#27272A', 
          light: '#3F3F46',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [
    typography,
  ],
}
