/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        background: '#f8fafc',
        surface: {
          DEFAULT: '#ffffff',
          light: '#f1f5f9',
          dark: '#e2e8f0',
        },
        accent: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          fuchsia: '#d946ef',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          orange: '#f97316',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        slate: {
          850: '#1e293b',
          950: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(139,92,246,0.08), rgba(217,70,239,0.08))',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6,182,212,0.25), 0 4px 16px rgba(6,182,212,0.15)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.25), 0 4px 16px rgba(139,92,246,0.15)',
        'glow-fuchsia': '0 0 20px rgba(217,70,239,0.25), 0 4px 16px rgba(217,70,239,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.08)',
        'card': '0 4px 24px rgba(0,0,0,0.06)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,0.25)' },
          '50%':     { boxShadow: '0 0 40px rgba(99,102,241,0.45), 0 0 80px rgba(139,92,246,0.2)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'typing': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        float:      'float 4s ease-in-out infinite',
        shimmer:    'shimmer 3s linear infinite',
        pulseGlow:  'pulseGlow 3s ease-in-out infinite',
        fadeUp:     'fadeUp 0.6s ease forwards',
        scaleIn:    'scaleIn 0.5s ease forwards',
        'slide-in-right': 'slide-in-right 0.6s ease forwards',
        'slide-in-left': 'slide-in-left 0.6s ease forwards',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'typing': 'typing 1s ease-in-out infinite',
      },
      transitionDuration: {
        '500': '500ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}
