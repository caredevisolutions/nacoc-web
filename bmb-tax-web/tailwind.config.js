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
            bg: '#0D1117',        // Rich dark (GitHub-style charcoal, not washed-out navy)
            bgAlt: '#111827',     // Tailwind gray-900 — warm, accessible dark
            surface: '#1E293B',   // Slate-800 — clear card lift over bg
            surfaceHigh: '#263348', // Elevated card / hover state
            text: {
                main: '#F1F5F9',  // Slate-100 — crisp near-white
                body: '#CBD5E1',  // Slate-300 — high-contrast readable body text
                light: '#94A3B8', // Slate-400 — tertiary / labels
            },
            border: '#334155',    // Slate-700 — clearly visible dividers
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
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'glow': '0 0 25px rgba(212, 175, 55, 0.55)',
        'gold': '0 8px 35px -4px rgba(212,175,55,0.45)',
        'gold-lg': '0 14px 55px -6px rgba(212,175,55,0.65)',
        'colored': '0 8px 30px -4px rgba(99,102,241,0.35)',
        'card': '0 4px 30px rgba(0,0,0,0.50)',
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
