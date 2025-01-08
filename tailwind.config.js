/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-out-down-fade-in-up': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)', opacity: 0 }
        },
        'fade-out-left-fade-in-left': {
          '0%, 100%': { transform: 'translateX(0)', opacity: 1 },
          '50%': { transform: 'translateX(-100%)', opacity: 0 },
          '51%': { transform: 'translateX(100%)', opacity: 0 }
        },
        'fade-out-right-fade-in-right': {
          '0%, 100%': { transform: 'translateX(0)', opacity: 1 },
          '50%': { transform: 'translateX(100%)', opacity: 0 },
          '51%': { transform: 'translateX(-100%)', opacity: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-out-down-fade-in-up': 'fade-out-down-fade-in-up 1.3s ease-in-out',
        'fade-out-left-fade-in-left':
          'fade-out-left-fade-in-left 1.3s ease-in-out',
        'fade-out-right-fade-in-right':
          'fade-out-right-fade-in-right 1.3s ease-in-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
