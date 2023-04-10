module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_900_ce: "#390202ce",
        gray_51: "#f9f9f9",
        gray_900_54: "#24242454",
        blue_A400: "#1877f2",
        blue_A200: "#4285f4",
        red_500: "#ea4335",
        black_900_3f: "#0000003f",
        green_600: "#34a853",
        gray_50: "#fafafa",
        black_900: "#000000",
        gray_900_e5: "#390202e5",
        black_901: "#110d0d",
        bluegray_100_6c: "#d9d9d96c",
        pink_500: "#ee2b63",
        pink_50: "#fadae5",
        bluegray_100_c9: "#d9d9d9c9",
        gray_500: "#9e9e9e",
        amber_500: "#fbbc04",
        orange_A700: "#ff5f00",
        bluegray_100: "#d9d9d9",
        gray_101: "#f8f7f7",
        gray_300: "#d8dfe5",
        gray_102: "#f7f7f7",
        gray_100: "#f3f3f3",
        bluegray_900: "#313131",
        gray_300_7f: "#d8dfe57f",
        black_900_99: "#00000099",
        bluegray_400: "#8a8a8a",
        bluegray_200: "#a7c2cb",
        indigo_900: "#04397d",
        bluegray_100_7f: "#c6cdd37f",
        white_A700: "#ffffff",
        white_A700_f2: "#fffffff2",
      },
      fontFamily: {
        karla: "Karla",
        abrilfatface: "Abril Fatface",
        dosis: "Dosis",
        hahmlet: "Hahmlet",
        inter: "Inter",
        cormorantgaramond: "Cormorant Garamond",
        poppins: "Poppins",
        lato: "Lato",
        librebodoni: "Libre Bodoni",
        cabin: "Cabin",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
