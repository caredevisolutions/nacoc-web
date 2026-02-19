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
        // Accent palette
        accent: {
          indigo: '#6366F1',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
          sky: '#0EA5E9',
          violet: '#8B5CF6',
        },
        // Dark Theme Palette
        theme: {
            bg: '#0F1117',        // Deep navy-black
            bgAlt: '#161B27',     // Slightly lighter dark
            surface: '#1C2333',   // Card surface (dark navy)
            surfaceHigh: '#232B3E', // Elevated card
            text: {
                main: '#F4F6FA',  // Near-white
                body: '#A8B3CF',  // Muted blue-grey
                light: '#5C6B8A', // Dim
            },
            border: '#2A3347',    // Subtle dark border
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
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.5)',
        'gold': '0 8px 35px -4px rgba(212,175,55,0.40)',
        'gold-lg': '0 12px 50px -6px rgba(212,175,55,0.55)',
        'colored': '0 8px 30px -4px rgba(99,102,241,0.30)',
        'card': '0 4px 30px rgba(0,0,0,0.40)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
