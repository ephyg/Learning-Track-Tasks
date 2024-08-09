import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      fontSize: {
        headertext1: "var(--header-text-1)",
        headertext2: "var(--header-text-2)",
        headertext3: "var(--header-text-3)",
        smalltext: "var(--small-text)",
        normaltext: "var(--normal-text)",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        icon: "var(--icon)",
        gray: "var(--gray)",
        green: "var(--green)",
        orange: "var(--orange)",
        blue: "var(--blue)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        bordercolor: "var(--b-color)",
        pr: "var(--pr)",
        foreground: "hsl(var(--foreground))",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
