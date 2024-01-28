/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**.html",
    "./src/js/**.js",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        BLACK: "#17191A",
        BLUE_500: "#0073FF",
        BLUE_600: "#254060",
        BLUE_700: "#111F2F",
        RED_NAVY: "#A71440",
        RED_500: "#E00043",
        OFF_WHITE: "#F6F8FB",
        WHITE: "#FFFFFFF",
        WHITE: "#FFFFFF",
        GRAY_200: "#212527",
        GRAY_300: "#70767C",
        GRAY_400: "#1C1F20",
        GRAY_500: "#282C2D",
        GRAY_800: "#1F2224",
        EMERALD_500: "#4EC68A",
        RED_PRICE: "#DD4B4B",

        BLUE_DARK_TRADINGPRO: "#052E64",
        BLUE_TRADINGPRO: "#164C94",
        EMERALD: "#31B573",
        GRAY_TEXT: "#797E82",
      },
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      fontFamily: {
        proximaNova: "proxima-nova",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
