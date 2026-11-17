/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          coral: '#ff6b6b',
          amber: '#f59e0b',
          emerald: '#10b981',
          cyan: '#06b6d4',
          violet: '#8b5cf6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'glow-accent': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
      }
    },
  },
  plugins: [],
}
