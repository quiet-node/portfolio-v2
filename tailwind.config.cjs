/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      textColor: {
        primary: '#2dd4bf',
      },
      backgroundColor: {
        primary: '#2dd4bf',
      },
      screens: {
        xxsm: '340px',
        xsm: '445px',
      },
    },
  },
  plugins: [],
};
