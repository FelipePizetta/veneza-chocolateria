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
        mono: "--font-yanone-kaffeesatz",
        sans: "--font-open-sans",
        variable: "--font-pt-sans"
      },
    },
  },
  plugins: [],
};
export default config;
