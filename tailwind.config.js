import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1b769f",
              50: "#eefafd",
              100: "#d4f2f9",
              200: "#afe3f2",
              300: "#77cee9",
              400: "#39b0d7",
              500: "#1d93bd",
              600: "#1b769f",
              700: "#1d6081",
              800: "#204f6a",
              900: "#1f435a",
            },
          },
        },
      },
    }),
  ],
};
