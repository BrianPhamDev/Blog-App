/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderInactive: "var(--border-inactive)",
        inactive: "var(--inactive)",
        backgroundInactive: "var(--background-inactive)", textPrimary: "background-image: linear-gradient(
          45deg,
          var(--primary) 0%,
          var(--primary-grad2) 80%,
          var(--primary-grad3) 100%
        );
        background-clip: text;
        color: transparent;"
      },
      fontFamily: {},
      gridTemplateColumns: {
        "dashboard-main": "300px minmax(0, 1fr)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(45deg, var(--primary) 0%, var(--primary-grad2) 80%, var(--primary-grad3) 100%)",
      },
    },
  },
  plugins: [],
};
