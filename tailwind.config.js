/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./nacoc-theme/**/*.{php,html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#112D55', // Rich Royal Blue
          light: '#2C5282',
          dark: '#0A1C36',
          50: '#EBF8FF',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Metallic Gold - More vibrant
          light: '#F4E5BC',    
          dark: '#B4941F',
        },
        accent: {
          DEFAULT: '#C53030', // Richer Red
          hover: '#9B2C2C',
        },
        surface: {
          50: '#FAFAFA',
          100: '#F5F7FA',
          200: '#E2E8F0',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
        'mesh': "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(340,100%,76%,1) 0px, transparent 50%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      }
    },
  },
  plugins: [],
}
