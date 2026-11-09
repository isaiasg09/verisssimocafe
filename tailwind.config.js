/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#140D09",
        roast: "#1F1510",
        crema: "#F3E7D3",
        latte: "#C9B08A",
        ember: "#D9622B",
        copper: "#B8743A",
        olive: "#6B7A4B",
        brand: {
          green: "#234A45",
          blush: "#F2D4D1",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        label: ['"Barlow Condensed"', "Arial Narrow", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3rem, 8.5vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        display: ["clamp(2.5rem, 5.5vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        title: ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        label: "0.18em",
      },
      lineHeight: {
        body: "1.65",
      },
      transitionTimingFunction: {
        cinema: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        warm: "0 30px 80px -20px rgba(217, 98, 43, 0.25), 0 12px 30px -12px rgba(0, 0, 0, 0.6)",
        card: "0 24px 60px -24px rgba(0, 0, 0, 0.75)",
        "copper-glow": "0 0 0 1px rgba(184, 116, 58, 0.45), 0 20px 60px -10px rgba(184, 116, 58, 0.35)",
      },
      maxWidth: {
        editorial: "88rem",
      },
      keyframes: {
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(18px)", opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-dot": "scroll-dot 2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
