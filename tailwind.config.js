/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'xs': '576px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
    colors: {
      // background, main elements
      'main': '#ffffff',
      // headers, text, icons
      secondary: '#000000',
      // call to actions
      accent: '#c13636',
      // others
      error: '#cc0000',
      darkShade: '#5d31ce',
      lightShade: '#f5f5f5',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
