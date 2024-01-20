/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#07203A",
        light: "#F8F8FF",
        background: "#F7F8FA",
        primary: "#005CE7",
        secondary: "#6C5DD4",
        tertiery: "#FF9A27",
        success: "#12B76A",
        danger: "#F04438",
        green100: "#B6E9D1",
        red100: "#FAC5C1",
        blue50: "#E9F1FB",
        blue100: "#BAD5F2",
        blue800: "#114175",
      },
      fontFamily: {
        poppins: "'Poppins'",
      },
    },
  },
  plugins: [],
};
