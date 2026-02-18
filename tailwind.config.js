import {heroui} from '@heroui/theme';
import {color} from 'framer-motion';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '2560px',
    },
    extend: {
      fontFamily: {
        kanit: ['kanit', 'sans-serif'],
      },
      colors: {
        common: {
          black: '#000',
          white: '#fff',
        },
        initial: '#CCCCCC',
        prime: '#465670',
        primary: '#7EA1FF',
        default: '#8DC1EF',
        secondary: '#A14686',
        warning: '#F6B969',
        error: '#F24C44',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
