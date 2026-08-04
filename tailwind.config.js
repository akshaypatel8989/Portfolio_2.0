/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        glow: '0 0 24px 0 rgba(37, 99, 235, 0.45)',
        'glow-lg': '0 0 60px 0 rgba(37, 99, 235, 0.35)',
        card: '0 10px 30px -10px rgba(2, 6, 23, 0.15)',
        'card-hover': '0 20px 50px -12px rgba(37, 99, 235, 0.25)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(2,6,23,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.04) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.14), transparent 40%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(6deg)' },
        },
        'floaty-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(18px) translateX(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'floaty-slow': 'floaty-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
  plugins: [],
};
