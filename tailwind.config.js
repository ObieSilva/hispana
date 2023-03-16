/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      red: "#c13636",
      blue: "#5d31ce",
      whiteSmoke: "#f5f5f5",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
