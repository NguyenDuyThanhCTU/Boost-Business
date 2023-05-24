/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "rgba(69,29,160,1) ",
        privaryhover: "rgba(52,22,120)",
        button: "#f6f9fc4d",
      },

      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        primary: "#341678",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        colortopdownBlue1: "#e5f2ff",
        colortopdownGray2: "#441d9f14",
        colorBlueBold: "#451da0",
        colorBlueBoldHover: "#391888",
        colorGrayThin: "#b6b6b8",
      },
    },
  },
  plugins: [],
};
