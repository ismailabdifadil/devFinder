/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141D2F",
        "primary-800": "#1E2A47",
        "blue-900": "#0079FF",
        "primary-400": "#4B6A9B",
        "primary-700": "#1E2A47",
        "primary-200": "#697C9A",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".h1": {
          fontFamily: "Space Mono, monospace",
          fontSize: "26px",
          lineHeight: "38px",
          fontWeight: "700",
        },
        ".h2": {
          fontFamily: "Space Mono, monospace",
          fontSize: "22px",
          lineHeight: "33px",
          fontWeight: "700",
        },
        ".h3": {
          fontFamily: "Space Mono, monospace",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
        },
        ".h4": {
          fontFamily: "Space Mono, monospace",
          fontSize: "13px",
          lineHeight: "20px",
          fontWeight: "400",
        },
      });
    },
  ],
};
