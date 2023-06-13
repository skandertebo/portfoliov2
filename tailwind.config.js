/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#251D3A',
        darkOrange: '#E04D01',
        lightOrange: '#FF7700',
        darkBlue: '#251D3A',
        blue: '#2A2550'
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      screens: {
        xs: '475px'
      }
    }
  },
  plugins: []
};
