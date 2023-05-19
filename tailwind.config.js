/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#FAFAFB",
        accent: "#2F80ED",
        "grayish-blue": "#97BEF4",
        gray: "#4F4F4F",
        "light-gray": "#F6F8FB",
        "very-light-gray": "#BDBDBD",
        "loader-bg": "#F2F2F2",
      },
      keyframes: {
        side: {
          "0, 100%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        side: "side 2s linear infinite",
      },
    },
  },
  plugins: [],
};
