/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0px 0px 5px theme(colors.pink.200)",
          },
          "50%": {
            boxShadow: "0px 0px 10px theme(colors.pink.200)",
          },
        },
      },
      animation: { glow: "glow 2s ease-in-out infinite" },
      colors: {
        pink: {
          100: "#ffe5ec",
          200: "#ff4d6d",
        },
        maroon: "#590d22",
      },
    },
  },
  plugins: [],
};

module.exports = config;
