/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
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
