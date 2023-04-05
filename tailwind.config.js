/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      patua: ["Patua One", "cursive"],
    },
    extend: {
      colors: {
        primary: "#FE5E44",
        abu: "#6F6F6F",
      },
    },
  },
  plugins: [],
};
