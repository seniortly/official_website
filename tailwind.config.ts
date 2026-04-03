import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "PingFang SC", "Microsoft YaHei", "sans-serif"],
      },
      colors: {
        brand: {
          500: "#0d8ea3",
          600: "#0a7282",
          700: "#075a67",
        },
      },
    },
  },
  plugins: [],
};

export default config;
