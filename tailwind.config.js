const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "multi-denim": "#022959",
        "multi-skyblue": "#BEE2FD",
        "multi-bg": "#EFF5FF",
        "multi-gray": "#9699AA",
        "multi-purple": "#483EFF",
        "multi-lightgray": "#D6D9E6",
        "multi-very-lightgray": "#F8F9FF",
        "multi-red-error": "#EE374A",
      },
    },
  },
  plugins: [],
};
