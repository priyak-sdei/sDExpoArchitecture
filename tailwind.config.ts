// /** @type {import('tailwindcss').Config} */

const fonts = require("./src/theme/fonts");
const theme = require("./src/theme/theme");
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: `hsl(${theme.light.background})`,
          foreground: {
            DEFAULT: `hsl(${theme.light.foreground})`,
            500: `hsl(${theme.light.foreground_500})`,
          },
          primary: {
            DEFAULT: `hsl(${theme.light.primary})`,
            500: `hsl(${theme.light.primary_500})`,
          },
          secondary: {
            DEFAULT: `hsl(${theme.light.secondary})`,
            200: `hsl(${theme.light.secondary_200})`,
            800: `hsl(${theme.light.secondary_800})`,
            900: `hsl(${theme.light.secondary_900})`,
          },
        },
        dark: {
          background: `hsl(${theme.dark.background})`,
          foreground: {
            DEFAULT: `hsl(${theme.dark.foreground})`,
            500: `hsl(${theme.dark.foreground_500})`,
          },
          primary: {
            DEFAULT: `hsl(${theme.dark.primary})`,
            500: `hsl(${theme.dark.primary_500})`,
          },
          secondary: {
            DEFAULT: `hsl(${theme.dark.secondary})`,
            200: `hsl(${theme.dark.secondary_200})`,
            800: `hsl(${theme.dark.secondary_800})`,
            900: `hsl(${theme.dark.secondary_900})`,
          },
        },
      },
      fontFamily: {
        "text-black": [fonts.PoppinsBlack, "sans-serif"],
        "text-bold": [fonts.PoppinsBold, "sans-serif"],
        "text-light": [fonts.PoppinsLight, "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"], // Enable dark mode variant for text color
      backgroundColor: ["dark"], // Enable dark mode variant for background color
    },
  },
  plugins: [],
};
