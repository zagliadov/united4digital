import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#404970",
          100: "#E8E9ED",
        },
      },
      fontSize: {
        "heading-xl": "2.5rem",
      },
      lineHeight: {
        "heading-xl": "3.404rem",
      },
      boxShadow: {
        "heading-xl": "0px 4px 4px 0px #00000040",
      },
      height: {
        "86": "5.375rem",
      },
      spacing: {
        '15': '3.75rem', // 60px
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      borderRadius: {
        custom: "2.78px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        "@media (hover: hover)": {
          ".hover\\:text-shadow:hover": {
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
  daisyui: {
    themes: [
      {
        united4digital: {
          primary: "#151F4F",
          secondary: "#FF6839",
          "base-100": "F2F2F2",
        },
      },
    ],
  },
};
export default config;
