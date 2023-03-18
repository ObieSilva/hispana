/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#5d31ce",
      red: "#c13636",
      whiteSmoke: "#f5f5f5",
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
