/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: {
        primary: { DEFAULT: "#202938", dark: "#ffb347" },
        secondary: { DEFAULT: "#333a4d", dark: "#ffa533" },
      },
      background: { DEFAULT: "#f3f3f3", dark: "#1c1c1c" },
      foreground: { DEFAULT: "#ffffff", dark: "#3a3a3a" },
      font: {
        primary: { DEFAULT: "#1c1c1c", dark: "#fdfdfd" },
        secondary: "#989898",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
