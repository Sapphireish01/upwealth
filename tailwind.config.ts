import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        brand: {
          navy: "#1B1F3B",       // Logo navy / primary text
          orange: "#E87722",     // Headline accent (UPWEALTH highlight)
          purple: "#6B5B9E",     // Secondary accent (MAGAZINE highlight)
          grey: {
            50: "#F5F5F7",       // Page background
            100: "#EBEBED",      // Grid/card backgrounds
            200: "#D1D1D6",      // Borders
            500: "#8E8E93",      // Placeholder / muted text
            900: "#1C1C1E",      // Body text
          },
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],  // Bold condensed headings
        body: ["var(--font-inter)", "sans-serif"],                 // Clean body
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1" }],
        "card": ["1.125rem", { lineHeight: "1.4" }],
      },
      backgroundImage: {
        // CSS grid dot pattern matching the design
        "grid-pattern": `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "orbit": "orbit 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "cover": "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        "card": "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
