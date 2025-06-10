export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBrown: "#8C391B",
        parchment: "#eae0c8",
        bronze: "#8b6f47",
        charcoal: "#4a3d2f",
      },
      fontFamily: {
        viaoda: ['"Viaoda Libre"', "cursive"],
        sans: ['"Poppins"', "sans-serif"],
        serif: ['"Merriweather"', "serif"],
        roboto: ['"Roboto"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        nunito: ['"Nunito"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
