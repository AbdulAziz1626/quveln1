import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1116",
        "ink-soft": "#4B5563",
        "ink-faint": "#8B93A1",
        accent: "#2563EB",
        "accent-ink": "#1D4ED8",
        "accent-bg": "#EEF3FE",
        line: "#E7EAF0",
        "bg-alt": "#F6F7F9",
        "dark-panel": "#0B0F17",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: { wrap: "1240px" },
      boxShadow: {
        card: "0 1px 3px rgba(16,24,40,0.06), 0 12px 32px rgba(16,24,40,0.06)",
        hover: "0 4px 8px rgba(16,24,40,0.06), 0 20px 48px rgba(16,24,40,0.10)",
      },
      keyframes: {
        cardFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wavebar: {
          "0%,100%": { height: "5px" },
          "50%": { height: "20px" },
        },
        pulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.45)" },
          "50%": { boxShadow: "0 0 0 6px rgba(37,99,235,0)" },
        },
        tileFloat: {
          "0%,100%": { transform: "translateY(0) rotate(var(--tilt,0deg))" },
          "50%": { transform: "translateY(-12px) rotate(var(--tilt,0deg))" },
        },
      },
      animation: {
        cardFloat: "cardFloat 7s ease-in-out infinite",
        wavebar: "wavebar 1.1s ease-in-out infinite",
        pulse2: "pulse 2s ease-in-out infinite",
        tileFloat: "tileFloat 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
