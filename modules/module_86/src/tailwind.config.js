/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./marketplace_builder/**/*.{html,js,min.js,liquid}",
    "./modules/**/*.{html,js,min.js,liquid}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // custom colors
          50: "#eff6ff",
          100: "#E1EFFE",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1A56DB",
          800: "#39B54A",
          900: "#1e3a8a",
          1: "#1C64F2",
          2: "#111928",
        },
        secondary: {
          1: "#FFFFFF",
          2: "#F0F0F0",
          3: "#E1EFFE",
        },
        accent: "yellow",
        info: colors.blue,
        success: "green",
        danger: colors.red,
        warning: colors.yellow,
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin"), require("flowbite-typography")],
  darkMode: "class",
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
};
