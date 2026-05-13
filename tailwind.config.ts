import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b1d33",
          800: "#122a45",
          700: "#193756",
        },
        gold: {
          500: "#c9a14a",
          400: "#d8b869",
          300: "#ead292",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(7, 17, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
