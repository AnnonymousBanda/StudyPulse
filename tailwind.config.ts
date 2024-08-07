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
        "dark-primary" : "#B2B1B9",
        "dark-secondary" : "#272829",
        "dark-bg" : "#181818",
      },
      screens: {
        wide: "1440px",
        ultra: "1500px",
      },
    },
  },
  plugins: [],
};
export default config;
