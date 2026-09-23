/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#0A0C10',
        surface: '#12151C',
        elevated: '#1A1E27',
        gold: {
          DEFAULT: '#D4A94A',
          bright: '#F2CC7B',
          dim: '#8A6F2E',
        },
        ink: {
          DEFAULT: '#F5F3EE',
          muted: '#9AA0AC',
        },
        teal: {
          DEFAULT: '#3FBFA8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        gold: '0 20px 60px -20px rgba(212, 169, 74, 0.35)',
        card: '0 24px 70px -32px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(6deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'pulse-soft': 'pulseSoft 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
