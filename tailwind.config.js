module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "h-blue": "#676FA3",
        "b-blue": "#CDDEFF",
        "b2-blue": "#EEF2FF",
        "t-red": "#FF5959",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
