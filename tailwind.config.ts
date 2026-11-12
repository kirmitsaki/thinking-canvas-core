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
        display: ['"Cormorant Garamond"', '"Times New Roman"', "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        /* Journal palette */
        ivory: "#F8F5F1",
        "warm-ivory": "#F7F4EF",
        "warm-white": "#F5F2ED",
        camel: "#C6A37A",
        caramel: "#A9692F",
        charcoal: "#2F2F2F",
        espresso: "#1A1512",
        chocolate: "#4A372D",
        rust: "#A8471F",
        gold: "#D9A75C",
        burgundy: "#4A1F22",
        forest: "#3E5743",
        indigo: "#23324A",
        taupe: "#8B7F72",
        mushroom: "#A99C8D",
        olive: "#4F5138",
        ink: "#111111",

        /* Semantic tokens */
        background: "#F8F5F1",
        foreground: "#2F2F2F",
        border: "rgb(198 163 122 / 0.35)",
        hairline: "rgb(198 163 122 / 0.35)",
        input: "rgb(198 163 122 / 0.4)",
        ring: "#A9692F",
        card: { DEFAULT: "#F5F2ED", foreground: "#2F2F2F" },
        popover: { DEFAULT: "#F8F5F1", foreground: "#2F2F2F" },
        primary: { DEFAULT: "#A8471F", foreground: "#F7F4EF" },
        secondary: { DEFAULT: "#F5F2ED", foreground: "#2F2F2F" },
        muted: { DEFAULT: "#F5F2ED", foreground: "#5C5854" },
        accent: { DEFAULT: "#A8471F", foreground: "#F7F4EF" },
        destructive: { DEFAULT: "#A8471F", foreground: "#F7F4EF" },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "0.5rem",
        sm: "0.375rem",
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
