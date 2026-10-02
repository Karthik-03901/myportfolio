import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
      },
      fontFamily: {
        display: ["var(--font-clash-display)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
        body: ["var(--font-general-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "hero": "clamp(3.5rem, 11vw, 11rem)",
        "h2": "clamp(2.25rem, 6vw, 5rem)",
        "h3": "clamp(1.5rem, 3vw, 2.25rem)",
        "body": "1.0625rem",
        "mono-label": "0.75rem",
      },
      letterSpacing: {
        "display": "-0.03em",
        "mono-label": "0.08em",
      },
      lineHeight: {
        "hero": "0.9",
        "body": "1.65",
      },
      borderRadius: {
        "panel": "2px",
        "pill": "999px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-custom": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        "micro": "200ms",
        "reveal": "800ms",
        "page": "700ms",
      },
      animation: {
        "scramble": "scramble 0.6s ease-in-out",
        "reveal-up": "reveal-up 0.8s var(--ease-out-expo) forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        "reveal-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scramble: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        counter: {
          from: { "--num": "0" },
          to: { "--num": "100" },
        },
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      maxWidth: {
        "container": "1440px",
      },
      spacing: {
        "section-y": "clamp(6rem, 14vw, 12rem)",
      },
    },
  },
  plugins: [],
};

export default config;
