import type { Config } from "tailwindcss";
import { Inter, Poppins } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['"Epilogue"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      fontWeight: {
        epilogue100: "100",
        epilogue200: "200",
        epilogue300: "300",
        epilogue400: "400",
        epilogue500: "500",
        epilogue600: "600",
        epilogue700: "700",
        epilogue800: "800",
        epilogue900: "900",
        poppins100: "100", // Thin
        poppins200: "200", // Extra Light
        poppins300: "300", // Light
        poppins400: "400", // Regular
        poppins500: "500", // Medium
        poppins600: "600", // Semi Bold
        poppins700: "700", // Bold
        poppins800: "800", // Extra Bold
        poppins900: "900", // Black
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        icon: "var(--icon)",
        gray: "var(--gray)",
        green: "var(--green)",
        orange: "var(--orange)",
        blue: "var(--blue)",
      },
      fontSize: {
        normaltext: "var(--normal-text)",
        smalltext: "var(--small-text)",
        headertext1: "var(--header-text-1)",
        headertext2: "var(--header-text-2)",
        headertext3: "var(--header-text-3)",
      },
    },
  },
  plugins: [],
};
export default config;
