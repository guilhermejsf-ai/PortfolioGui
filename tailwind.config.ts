import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        panel: "var(--panel)",
        "panel-alt": "var(--panel-alt)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-deep": "var(--accent-deep)",
      },
      boxShadow: {
        card: "0 20px 50px -32px rgba(15, 23, 42, 0.18)",
        float: "0 24px 60px -36px rgba(30, 41, 59, 0.22)",
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Iowan Old Style",
          "Baskerville",
          "Palatino",
          "Times New Roman",
          "serif",
        ],
      },
      backgroundImage: {
        haze:
          "radial-gradient(circle at top, rgba(112, 146, 186, 0.16), transparent 36%)",
      },
    },
  },
  plugins: [],
};

export default config;
