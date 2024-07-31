/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D6D3F0",
        secondary: "#0F5257",
        accent: "#C6B9CD",
        background:"#0B3142"
      },
    },
  },
  plugins: [],
};
