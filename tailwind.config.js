module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E5E9F2",
        secondary: "#34364A",
        tertiary: "#0B1622",
        gray: "#999AA4",
        abuza: "#0b1622",
        primaryLight: "#f6f8fd",
        primaryDark: "#171717",
        secondaryDark: "#201f1f",
        fontDark: "#bfbfbf"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
