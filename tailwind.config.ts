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
      },
      colors: {
        "del-rio": "rgb(177, 154, 140)",
        "carnation": "rgb(255, 110, 110)",
        "sweet-pink": "rgb(255, 160, 160)",
      },
      backgroundImage: {
        "hero": "url('../public/backgroundImage.png')"
      },
    },
  },
  plugins: [],
};
export default config;
