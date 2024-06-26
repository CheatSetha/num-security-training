const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  rippleui: {
    defaultStyle: false,
    removeTheme:["dark"]
  },
  theme: {
    themeMode:"manual",
    extend: {
     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor:{
        primary:"#153743",
        secondary:"#05a9df",
      },
      backgroundColor:{
        primary:"#05a9df",
        secondary:"#edf6ff"
      }

    },
  },
  darkMode:'class',
  plugins: [require("rippleui"),nextui()],
};
