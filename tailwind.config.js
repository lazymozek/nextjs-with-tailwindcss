/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Custom fonts here
        default: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Custom colors here eg: primary, secondary etc
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
