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
        'brand': {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9ddff',
          300: '#d7c2ff',
          400: '#c099ff',
          500: '#a66eff',
          600: '#9347f7',
          700: '#8234e3',
          800: '#6c2bbf',
          900: '#59269c',
          950: '#390f6a',
        },
        'accent': {
          50: '#fff0f7',
          100: '#ffe3f1',
          200: '#ffc6e3',
          300: '#ff99cc',
          400: '#ff5ca3',
          500: '#ff3385',
          600: '#f0115c',
          700: '#d1004a',
          800: '#ad043e',
          900: '#8f0a36',
          950: '#57001b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-soft': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}