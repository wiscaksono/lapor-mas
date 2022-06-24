/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.svg')",
      },

      colors: {
        primary: "#365C7F",
        secondary: "#00B1FF",
      },
    },
  },
  plugins: [],
};
