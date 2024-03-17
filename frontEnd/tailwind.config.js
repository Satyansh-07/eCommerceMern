module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", 
  "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_82: "#ffffff82" },
        gray: { 50: "#f6f7fb", 500: "#9f9f9f", 800: "#393d46", "500_87": "#9f9f9f87" },
        blue_gray: { 100: "#cdcfd1", "100_87": "#cdcfd187" },
        yellow: { 400: "#fae952" },
      },
      boxShadow: { xs: "0px 16px  50px 0px #0000000c", sm: "0px 16px  25px 0px #0000000c" },
      fontFamily: { poppins: "Poppins", playfairdisplay: "Playfair Display" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/line-clamp')],
};
