/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
        '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.06em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.06em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.06em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.06em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.06em' }],
      },
      colors: {
        primary: {
          50: '#E6F0FA',
          100: '#CCE1F5',
          200: '#99C3EB',
          300: '#66A5E1',
          400: '#3387D7',
          500: '#0B72E7',
          600: '#095BB9',
          700: '#07448B',
          800: '#052D5C',
          900: '#03162E',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#1F1F1F',
        },
        accent: {
          green: '#00C389',
          purple: '#755DFF',
          red: '#EF4F4F',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};