/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        main: "80%",
      },
      backgroundColor: {
        main: "#d9ae65",
      },
      colors: {
        hover: "#d9ae65",
      },
    },
  },
  plugins: [],
};
