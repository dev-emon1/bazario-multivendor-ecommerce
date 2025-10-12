/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🟧 Brand Colors
        main: "#E07D42",
        mainHover: "#CF6A2A",
        mainActive: "#B6551E",
        mainSoft: "#ff6d2f11", // subtle translucent orange accent

        // 🟪 Secondary Colors
        secondary: "#3A2767",
        secondaryHover: "#2F1F54",
        secondaryActive: "#24173F",

        // 🩶 Neutral & Text Colors (Light)
        bgPage: "#F9F7FB",
        bgSurface: "#FFFFFF",
        textPrimary: "#0F1724",
        textSecondary: "#475569",
        textLight: "#888f9e",
        textWhite: "#FFFFFF",
        border: "#E6E9EE",

        // 🟢 Status Colors
        green: "#22C55E",
        red: "#EF4444",
        yellow: "#EAB308",

        // 🌙 Dark Mode Palette
        bgDark: "#0B0712", // main dark background
        bgSurfaceDark: "#141022", // surface (cards, panels)
        textPrimaryDark: "#E9E7F6", // main text
        textSecondaryDark: "#BFB7E6", // muted text
        textLightDark: "#8E85BA", // optional softer text
        borderDark: "#1B1629", // darker subtle border (updated)
        borderSoftDark: "#231C35", // slightly lighter border (optional)
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "1080px" },
      "md-lg": { max: "991px" },
      md: { max: "768px" },
      sm: { max: "576px" },
      xs: { max: "480px" },
      "2xs": { max: "340px" },
    },
  },
  plugins: [],
};
