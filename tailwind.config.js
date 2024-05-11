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
      'main': '#5d31ce',
      // headers, text, icons
      secondary: '#000000',
      // call to actions
      accent: '#c13636',
      // others
      error: '#cc0000',
      lightShade: '#f9fbff',
      darkShade: '#d79f23',
      borderColor: '#cbd5e0',
      white: '#ffffff',
      lightText: '#94a3b8',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
