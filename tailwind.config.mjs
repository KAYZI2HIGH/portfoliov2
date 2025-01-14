/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(150px, 1fr))",
        "auto-lg": "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
  },
  plugins: [],
};
