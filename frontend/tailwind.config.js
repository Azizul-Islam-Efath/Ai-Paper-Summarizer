/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#f3f0ff',
          100: '#e5deff',
          200: '#cbbfff',
          300: '#aa99ff',
          400: '#8b6fff',
          500: '#7c4dff',
          600: '#6c30f8',
          700: '#5b1de8',
          800: '#4a17c0',
          900: '#3a1299',
          950: '#1e0a5e',
        },
        accent: {
          50:  '#fdf4ff',
          100: '#fae8ff',
          200: '#f3d0fe',
          300: '#e9a8fb',
          400: '#d776f7',
          500: '#c44ef0',
          600: '#a832d8',
          700: '#8b25b0',
          800: '#71218f',
          900: '#5c1d74',
          950: '#3a0a50',
        },
        violet: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        surface: {
          DEFAULT: '#0f0a1e',
          50:  '#f8f7ff',
          100: '#f0eeff',
          200: '#e2dfff',
          300: '#c8c2ff',
          400: '#a69cff',
          800: '#1a1035',
          900: '#0f0a1e',
          950: '#07040f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-primary': 'radial-gradient(at 40% 20%, hsla(260,80%,60%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(290,60%,55%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240,80%,65%,0.2) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(260,80%,30%,0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(290,60%,25%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240,80%,25%,0.3) 0px, transparent 50%)',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 4px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 16px 48px -12px rgba(124, 77, 255, 0.25), 0 4px 16px -4px rgba(0,0,0,0.1)',
        'glow-sm': '0 0 16px 0 rgba(124,77,255,0.4)',
        'glow': '0 0 32px 0 rgba(124,77,255,0.35)',
        'glow-lg': '0 0 64px 0 rgba(124,77,255,0.3)',
        'glow-pink': '0 0 32px 0 rgba(196,78,240,0.35)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
        'neo': '6px 6px 12px rgba(0,0,0,0.15), -2px -2px 8px rgba(255,255,255,0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'orbit': 'orbit 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(124,77,255,0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(124,77,255,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}
