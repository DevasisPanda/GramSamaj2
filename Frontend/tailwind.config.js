/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        // AIRD design system — prompt §2
        saffron: {
          50: '#FFF8EB',
          100: '#FEEFC7',
          200: '#FDDF8A',
          300: '#FCC74D',
          400: '#FBB126',
          500: '#F59E0B', // primary
          600: '#D97706', // primary-dark
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        ember: {
          50: '#FDF6E8',
          100: '#FAE6BF',
          300: '#F0BD5C',
          500: '#E08D2B',
          700: '#A35D11',
        },
        forest: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#15803D', // secondary
          800: '#065F46', // secondary-dark
          900: '#064E3B',
        },
        cream: '#FFFDF9',
        ink: '#1F2937',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Fraunces"', '"Plus Jakarta Sans"', 'serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-y': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        'marquee-y': 'marquee-y 30s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
