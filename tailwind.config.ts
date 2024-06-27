/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textSizes: {
        xxs: "0.688rem",
        "1.5xl": "1.375rem",
        "2.5xl": "1.75rem",
        "4.5xl": "2.81rem",
        "5.5xl": "3.563rem",
      },
      colors: {
        "white-main": "#FCFCFC",
        // blue
        "blue-50": "#F2F4FF",
        "blue-100": "#E8EEFF",
        "blue-200": "#D4DEFF",
        "blue-300": "#B2C2FF",
        "blue-400": "#8699FF",
        "blue-500": "#5568FD",
        "blue-600": "#323BF5",
        "blue-700": "#2025E1",
        "blue-800": "#1A1EBD",
        "blue-900": "#181B9A",
        "blue-950": "#0F1680",
        // green
        "green-50": "#F9FEE7",
        "green-100": "#F0FDCA",
        "green-200": "#E1FB9B",
        "green-300": "#C5F34E",
        "green-400": "#B4E932",
        "green-500": "#95CF13",
        "green-600": "#72A50B",
        "green-700": "#577E0D",
        "green-800": "#466311",
        "green-900": "#3C5413",
        "green-950": "#1E2F04",
        // danger
        "danger-50": "#FFFBFB",
        "danger-100": "#FEF2F2",
        "danger-200": "#FFEBEE",
        "danger-300": "#FFCCD2",
        "danger-400": "#F49898",
        "danger-500": "#EB6F70",
        "danger-600": "#F64C4C",
        "danger-700": "#EC2D30",

        // other
        dashboard: "#F5F6FA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dubai: "url('/assets/images/dubai.webp')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        proxima: ["Proxima Nova", "sans-serif"],
      },
      screens: {
        // se: "320px",
        // s8: "360px",
        // xx: "375px",
        // xs: "390px",
        // x: "412px",
        // "14x": "430px",
        // "sur-duo": "540px",
        // "ipad-air": "820px",
        xs: "320px",
        ms: "350px",
        is: "390px",
        ma: "1440px",
        // Bxl: "1640px",
        "2.5xl": "1920px",
        "3xl": "2560px",
        // "mac-pro-15": "2880px",
        // "mac-pro-16": "3072px",
        // "4xl": "3840px",
        // "5xl": "5000px",
      },
    },
  },
  plugins: [],
};
