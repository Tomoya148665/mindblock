/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        "1/2": "50%",
        "1/3": "30%",
      },
      backgroundPosition: {
        "center-top": "50% 0",
      },
      colors: {
        lightskyblue: "#83ccff",
        black: "#000",
        gainsboro: "#d9d9d9",
        darkslategray: "#4b4b4b",
      },
      spacing: {},
      fontFamily: {
        "a-p-otf-suiryuneoroman-stdn": "'A P-OTF SuiryuNeoroman StdN'",
        "hiragino-kaku-gothic-stdn": "'Hiragino Kaku Gothic StdN'",
        "pistilli-pro": "'Pistilli Pro'",
        "remipr6n-bold": "'ReimPr6N Bold'",
        "remipr6n-exbold": "'ReimPr6N ExBold'",
        "remipr6n-exheavy": "'ReimPr6N Heavy'",
        "remipr6n-light": "'ReimPr6N Light'",
        "remipr6n-medium": "'ReimPr6N Medium'",
        "remipr6n-regular": "'ReimPr6N Regular'",
        "remipr6n-ultra": "'ReimPr6N Ultra'",
      },
    },
    fontSize: {
      xl: "20px",
      "5xs": "8px",
      "3xs": "10px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: "1025px",
      md: "960px",
      sm: "600px",
      xs: "500px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
