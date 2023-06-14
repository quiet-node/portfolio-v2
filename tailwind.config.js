/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#2dd4bf',
      },
      screens: {
        xxsm: '340px',
        xsm: '444px',
        xssm: '520px',
        xmd: '880px',
        xmmd: '976px',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
