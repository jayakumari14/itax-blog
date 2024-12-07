/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Including src directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
        primary: "#1D4ED8", // Add your primary color
      },
    },
  },
  plugins: [],
};
