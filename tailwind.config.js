/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightskyblue: "#83ccff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "a-p-otf-suiryuneoroman-stdn": "'A P-OTF SuiryuNeoroman StdN'",
        "hiragino-kaku-gothic-stdn": "'Hiragino Kaku Gothic StdN'",
        "pistilli-pro": "'Pistilli Pro'",
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
      lg: "1200px",
      md: "960px",
      sm: "600px",
      xs: "420px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
