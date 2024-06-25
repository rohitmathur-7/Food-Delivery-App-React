/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      screens: {
        sm: "769px", // => @media (min-width: 769px) { ... }
        smt: "768px",
        mob: { max: "639px" },
        tb: { max: "1024px" },
        smx: { max: "768px" },
      },
    },
  },
  plugins: [],
};
