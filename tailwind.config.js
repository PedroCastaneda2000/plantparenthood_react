/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      
      },
    },
    extend: {
      colors: {
        // Background
        'primary-500': '#877EFF',
        'primary-solid': 'rgba(255, 252, 249, 1)',
        'primary-shade': 'rgba(209, 210, 212, 0.5)',
        'secondary-solid': '#151823',
        'primary-white': '#FFFFFF',
        // Text
        'light':'#FFFFFF',
        'lightgray': '#D1D2D4',
        'dark': '#151823',
        // Product Colors 
        'tangerine': '#A3523A',
        'camel': '#A58B70',
        'emerald': '#455C4C',
        'cobalt': '#505E6D',
        'charcoal': '#232324',
        // other
        'light': '#FFFFFF',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, rgba(41,65,61,1) 0%, rgba(21,24,35,1) 100%);',
        'secondary-gradient': 'linear-gradient(90deg, rgba(92,45,24,1) 0%, rgba(56,23,9,1) 100%);',
        'hover-gradient': 'linear-gradient(90deg, rgba(115,10,49,1) 0%, rgba(130,65,94,1) 100%);',
        'solid-gradient': 'linear-gradient(90deg, rgba(255,252,249,1) 0%, rgba(255,252,249,1) 100%);'
      },
      boxShadow: {
        // Product Colors
        'clicked-stroke': 'inset 0 0 0 2px #151823',
        'hover-stroke': 'inset 0 0 0 2px #D1D2D4',
        // Product Dropdown
        'primary-drop': '0 4px 8px rgba(0, 0, 0, 0.1)',
        // Footer Email
        'light-stroke': 'inset 0 0 0 2px #FFFFFF',
      },
      borderColor: {
        // Product Dropdown
        'primary-stroke': 'rgba(209, 210, 212, 0.5)'
      },
      zIndex: {
        '1minus': '-1',
      },
      transitionDuration: {
        '300':'300ms',
        '500':'500ms'
      },
      screens: {
        'xs': '390px',
        'md': '920px',
        'lg': '1280px'
      
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif']
      },
      fontWeight: {
        'bold':'700',
        'semibold':'600',
        'medium' : '500',
        'regular':'400'
      },
      fontSize: {
        // [font-size, line-height, letter-spacing]
        '72lg': ['4.5rem','1.2','-0.025rem'],
        '60lg': ['3.75rem','1.2','-0.025rem'],
        '48lg': ['3rem','1.2','-0.025rem'],

        '32md': ['2rem','1.3','-0.02rem'],
        '28md': ['1.75rem','1.3','-0.02rem'], 
        '24md': ['1.5rem','1.3','-0.02rem'], 
        '20md': ['1.25rem','1.3','-0.02rem'],
        
        '18sm': ['1.125rem','1.5','0rem'], 
        '16sm': ['1rem','1.5','0rem'], 
        '14sm': ['0.875rem','1.5','0rem'], 
        
        '18lk': ['1.125rem','1.5','0rem'], 
        '16lk': ['1rem','1.5','0rem'], 
        '14lk': ['0.875rem','1.5','0rem'],
        
        '14lb': ['0.875rem','1.5','0.03rem']
      },
      gridTemplateColumns: {
        'custom': '768px 360px',
        'custom-md': '60% 28.125%',
        'custom-ed': '1fr 360px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
};
