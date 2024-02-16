/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 1px 10px",
      },
    },
    screens: {
      sm: "390px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1700px",

      "4xl": "1900px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "black"],
  },
};
