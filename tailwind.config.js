/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcfeff",
        secondary: "#333333",
        thirdary: "#888888",
        blue: "#3158F9",
        lightblue: "#02BFFA",
        hoverblue: "#7bd1f7",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #02BFFA, #3158F9)",
      },
    },
  },
  plugins: [],
};
