/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderInactive: "var(--border-inactive)",
        inactive: "var(--inactive)",
        backgroundInactive: "var(--background-inactive)",
      },
      fontFamily: {},
      gridTemplateColumns: {
        "grid-dashboard-main": "300px minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
