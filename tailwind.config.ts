import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Dossier — light, print-inspired
        paper: "#FAFAF7", // warm off-white base
        "paper-tint": "#F3F2EB", // subtle raised block
        ink: "#141414", // primary text
        "ink-soft": "#2E2E2C", // secondary heading
        muted: "#6B6B66", // body secondary
        faint: "#9C9C94", // meta / captions
        line: "#E4E3DC", // hairline rule
        "line-strong": "#D6D5CC",
        // Single brand accent — sampled from the photo's red background
        red: {
          DEFAULT: "#D40E0F",
          deep: "#B00C0D", // darker, for small text on paper (contrast)
          plate: "#D40E0F", // photo-matching plate
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        page: "72rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
