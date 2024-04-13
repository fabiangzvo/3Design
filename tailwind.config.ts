import type { Config } from "tailwindcss";
import { nextui, NextUIPluginConfig } from "@nextui-org/react";

const themeConfig: NextUIPluginConfig = {
  themes: {
    light: {
      colors: {
        primary: "red",
      },
    },
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(themeConfig)],
};
export default config;
