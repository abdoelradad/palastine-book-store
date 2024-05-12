import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgHero: "url(/hero.webp)",
        bgBest: "url(/best.webp)",
      },
      colors: {
        primary: "#58A399",
      },
    },
  },
  plugins: [],
};
export default config;
