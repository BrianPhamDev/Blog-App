/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { borderInactive: "var(border-inactive)", inactive: "inactive" },
      fontFamily: {},
    },
  },
  plugins: [],
};
