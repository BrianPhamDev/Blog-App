/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderInactive: "var(--border-inactive)",
        backgroundInactive: "var(--background-inactive)",
        inactive: "var(--inactive)",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
