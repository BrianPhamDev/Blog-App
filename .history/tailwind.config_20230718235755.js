/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { borderinactive: "var(border-inactive)" },
      fontFamily: {},
    },
  },
  plugins: [],
};
