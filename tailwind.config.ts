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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-primary" : "#343C6A",
        "light-secondary" : "#BDBDD7",
        "light-bg" : "#D6DAE1",
        "dark-primary" : "#006ABC",
        "dark-bg" : "#191919",
      }
    },
  },
  plugins: [],
};
export default config;
