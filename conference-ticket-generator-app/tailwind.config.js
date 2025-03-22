/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This makes sure Tailwind scans all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
