import type { Config } from "tailwindcss";

const token = (name: string) => ({ opacityValue }: { opacityValue?: string }) =>
  opacityValue === undefined ? `var(--${name})` : `color-mix(in srgb, var(--${name}) calc(${opacityValue} * 100%), transparent)`;

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
        serif: ['"PT Serif"', "Georgia", '"Times New Roman"', "serif"],
        display: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"PT Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        /* Journal palette */
        ivory: token("ivory"),
        "warm-ivory": token("warm-ivory"),
        "warm-white": token("warm-white"),
        camel: token("camel"),
        caramel: token("caramel"),
        charcoal: token("charcoal"),
        espresso: token("espresso"),
        chocolate: token("chocolate"),
        rust: token("rust"),
        gold: token("gold"),
        burgundy: token("burgundy"),
        forest: token("forest"),
        indigo: token("indigo"),
        taupe: token("taupe"),
        mushroom: token("mushroom"),
        olive: token("olive"),
        ink: token("ink"),

        /* Semantic tokens */
        background: token("background"),
        foreground: token("foreground"),
        border: token("border"),
        hairline: token("hairline"),
        input: token("input"),
        ring: token("caramel"),
        card: { DEFAULT: token("card"), foreground: token("card-foreground") },
        popover: { DEFAULT: token("ivory"), foreground: token("charcoal") },
        primary: { DEFAULT: token("rust"), foreground: token("warm-ivory") },
        secondary: { DEFAULT: token("warm-white"), foreground: token("charcoal") },
        muted: { DEFAULT: token("muted"), foreground: token("muted-foreground") },
        accent: { DEFAULT: token("accent"), foreground: token("accent-foreground") },
        destructive: { DEFAULT: token("rust"), foreground: token("warm-ivory") },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
