import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        /* Editorial palette */
        ivory: "#F8F5F1",
        "warm-ivory": "#F7F4EF",
        "warm-white": "#F5F2ED",
        camel: "#C6A37A",
        caramel: "#A9692F",
        charcoal: "#2F2F2F",
        espresso: "#1A1512",
        rust: "#A8471F",
        gold: "#D9A75C",
        burgundy: "#6A3134",
        "forest-green": "#3E5743",
        chocolate: "#4A372D",

        /* Semantic tokens */
        background: "#F8F5F1",
        foreground: "#2F2F2F",
        border: "rgb(198 163 122 / 0.35)",
        hairline: "rgb(198 163 122 / 0.35)",
        input: "rgb(198 163 122 / 0.4)",
        ring: "#A8471F",
        card: { DEFAULT: "#F5F2ED", foreground: "#2F2F2F" },
        popover: { DEFAULT: "#F8F5F1", foreground: "#2F2F2F" },
        primary: { DEFAULT: "#2F2F2F", foreground: "#F8F5F1" },
        secondary: { DEFAULT: "#F5F2ED", foreground: "#2F2F2F" },
        muted: { DEFAULT: "#EFEBE4", foreground: "#5C5854" },
        accent: { DEFAULT: "#A8471F", foreground: "#F8F5F1" },
        destructive: { DEFAULT: "#A8471F", foreground: "#F8F5F1" },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "rk-fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "none" },
        },
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
        "rk-fade-in": "rk-fade-in 700ms ease both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
