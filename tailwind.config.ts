import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        border: "#e5e5e5",
        muted: "#f5f5f5",
        // Dark mode colors will be handled via CSS variables
        primary: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#f0f0f0",
          400: "#e5e5e5",
          500: "#000000",
          600: "#171717",
          700: "#262626",
          800: "#404040",
          900: "#525252",
          950: "#737373",
        },
        secondary: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        accent: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#f0f0f0",
          400: "#e5e5e5",
          500: "#d4d4d4",
          600: "#a3a3a3",
          700: "#737373",
          800: "#525252",
          900: "#404040",
          950: "#262626",
        },
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
