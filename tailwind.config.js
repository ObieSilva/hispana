/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        xs: "576px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      // Primary: Main brand color for backgrounds, headers, and key sections
      primary: {
        DEFAULT: "#5d31ce", // Your main purple
        light: "#7e55e4", // A lighter tint for hover states or lighter backgrounds
        dark: "#4826a7", // A deeper shade for emphasis or active states
      },
      // Secondary: Ideal for body text, icons, and supporting elements
      secondary: {
        DEFAULT: "#000000", // Pure black for strong contrast
        light: "#333333", // A softer version when a less heavy tone is needed
        dark: "#000000", // Using black as the anchor dark tone
      },
      // Accent: Vibrant red for call-to-actions, buttons, and important highlights
      accent: {
        DEFAULT: "#c13636", // Your signature accent
        light: "#d65a5a", // A brighter version for hover or focus states
        dark: "#a12c2c", // A more subdued variant when needed
      },
      // Additional utility colors
      error: "#cc0000", // For error messages or alerts
      lightShade: "#f9fbff", // A soft background shade, great for sections or cards
      darkShade: "#d79f23", // Can be used for secondary highlights or backgrounds
      border: "#cbd5e0", // For borders or subtle dividers
      white: "#ffffff", // Pure white, for backgrounds or text on dark colors
      whiteShade: "#f5f5f5", // A softer white for backgrounds or text on dark colors
      black: "#000000", // Black, for text or icons where high contrast is needed
      text: {
        light: "#94a3b8", // Lighter text for secondary or muted copy
        DEFAULT: "#000000", // Standard text color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-custom": {
          background:
            "linear-gradient(90deg, #f3eaff 0%, #e0d1f7 25%, #c9a8f2 50%, #b38ff0 75%, #5d31ce 100%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
