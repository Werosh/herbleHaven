/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leafGreen: "#88B04B",
        earthyBrown: "#6B4226",
        creamyWhite: "#F4F1EA",
        rusticOrange: "#D49A6A",
        softBeige: "#E6D8C3",
        darkForestGreen: "#2F5233",
        herbalLavender: "#A78BFA",
        charcoalGray: "#333333",
        slateGray: "#6E6E6E",
      },
    },
  },
  plugins: [],
};
