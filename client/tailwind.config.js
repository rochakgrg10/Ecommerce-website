const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7E33E0",
        "primary-light": "#E7E6EF",
        "primary-dark": "#0D0E43",
        secondary: "#FB2E86",
      },
      backgroundImage: {
        banner1: "url('/assets/banner1.png')",
        banner2: "url('/assets/banner2.jpg')",
        banner3: "url('/assets/banner3.jpg')",
      },
    },
  },
  plugins: [],
};
