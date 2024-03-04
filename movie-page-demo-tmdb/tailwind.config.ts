import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'denim': {
          '50': '#f1f7fd',
          '100': '#e0edf9',
          '200': '#c9dff4',
          '300': '#a3cced',
          '400': '#78afe2',
          '500': '#5893d9',
          '600': '#4379cd',
          '700': '#3761b3',
          '800': '#345499',
          '900': '#2f4879',
          '950': '#202d4b',
        },
      }
    },
  },
  plugins: [],
};
export default config;
