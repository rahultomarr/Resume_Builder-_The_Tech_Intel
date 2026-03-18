/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        // Light-mode surface tokens
        surface: {
          DEFAULT: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
        // Text hierarchy
        ink: {
          DEFAULT: '#0f172a',
          secondary: '#475569',
          muted: '#94a3b8',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f5f3ff 100%)',
        'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)',
        'card-hover': '0 8px 32px rgba(37,99,235,0.12), 0 2px 8px rgba(15,23,42,0.06)',
        blue: '0 4px 24px rgba(37,99,235,0.2)',
        'blue-lg': '0 8px 40px rgba(37,99,235,0.3)',
      },
    },
  },
  plugins: [],
}
