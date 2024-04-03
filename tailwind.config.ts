import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-yanone-kaffeesatz)"],
        sans: ["var(--font-open-sans)"],
        serif: ["var(--font-pt-sans)"],
        lato: ["var(--font-lato)"],
      },
      backgroundColor: {
        "red-orange": "rgb(255, 36, 36)",
        "bridal-heath": "rgba(255, 250, 244, 0.01)",
        "nero": "rgba(54, 28, 18,0.1)",
        "tamarillo": "rgb(237, 21, 21)",
        "stiletto": "rgb(157, 33, 52)",
      },
      colors: {
        "del-rio": "rgb(177, 154, 140)",
        "carnation": "rgb(255, 110, 110)",
        "sweet-pink": "rgb(255, 160, 160)",
      },
      backgroundImage: {
        "hero": "url('../public/backgroundImage.png')"
      },
      borderColor: {
        "oil": "rgba(47, 36, 32)",
      },
      dropShadow: {
        "mexican": "0 5px 10px rgba(170, 24, 24, 0.25)"
      },
    },
  },
  plugins: [],
};
export default config;
