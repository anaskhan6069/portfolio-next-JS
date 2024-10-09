import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myCustomColor: "#59B2F4",
        primaryColor: "#000021",
        secondaryColor: "#262840",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Add Nunito font here
      },
      translate: {
        full: '100%',
        '0': '0',
      },
    },
  },
  plugins: [],
};

export default config;
