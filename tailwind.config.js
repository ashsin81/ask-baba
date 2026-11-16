/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF3F5',
          100: '#FBE8EB',
          200: '#F5C6CE',
          600: '#8A2C3F',
          700: '#711D35', // Primary Brand Deep Maroon
          800: '#5A1428',
          900: '#420D1C',
          950: '#2A0611',
          DEFAULT: '#711D35'
        },
        gold: {
          50: '#FCF9F2',
          100: '#F7F2E2',
          200: '#EDE0BF',
          300: '#DFC896',
          400: '#C5A866',
          500: '#B68A45', // Highlights Antique Gold
          600: '#9E7434',
          700: '#7B5A24',
          800: '#583F16',
          900: '#34240A',
          DEFAULT: '#B68A45'
        },
        ivory: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F8EEE4', // Main Background Warm Ivory
          300: '#EFE2D3',
          400: '#E4D3C0',
          DEFAULT: '#F8EEE4'
        },
        midnight: {
          DEFAULT: '#27223B', // Meditation Mode Midnight
          card: '#1E192F',
          surface: '#332C4D',
          border: '#453C66',
          glow: '#F6B73C'
        },
        rosebeige: {
          DEFAULT: '#D9B8A5', // Secondary Surfaces
          light: '#EAD7CA',
          dark: '#C49E89'
        },
        charcoal: {
          DEFAULT: '#302B2B', // Primary Text Charcoal
          muted: '#6B6363',
          light: '#8E8686'
        },
        spiritual: {
          dark: '#302B2B',
          muted: '#6B6363',
          success: '#4A7C59',
          warning: '#C28236',
          accent: '#711D35'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Devanagari', 'Noto Sans Gurmukhi', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
        punjabi: ['Noto Sans Gurmukhi', 'sans-serif']
      },
      boxShadow: {
        'royal': '0 4px 20px -2px rgba(112, 35, 51, 0.08), 0 2px 6px -1px rgba(148, 114, 59, 0.06)',
        'royal-lg': '0 10px 30px -4px rgba(112, 35, 51, 0.12), 0 4px 12px -2px rgba(148, 114, 59, 0.1)',
        'stamp': 'inset 0 0 0 2px rgba(112, 35, 51, 0.8), 0 4px 12px rgba(112, 35, 51, 0.15)',
        'stamp-gold': 'inset 0 0 0 2px rgba(148, 114, 59, 0.9), 0 4px 12px rgba(148, 114, 59, 0.2)',
        'divine-glow': '0 0 35px rgba(212, 175, 55, 0.35)',
        'celestial-glow': '0 0 45px rgba(229, 169, 60, 0.25)',
      }
    },
  },
  plugins: [],
}
