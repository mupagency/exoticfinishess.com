/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["pages/**/*.{js,jsx,mdx}", "components/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        century: ["CenturyGothic", "sans-serif"],
        acuminpro: ["AcuminProWide", "sans-serif"],
        myriadpro: ["MyriadPro", "sans-serif"],
      },
      colors: {
        primary: "#fcd700",
      },
      letterSpacing: {
        extrawide: "0.6rem",
      },
    },
  },
  plugins: [],
};
