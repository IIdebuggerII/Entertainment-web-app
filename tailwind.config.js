/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      darkblue: "rgb(22,29,47)",
      dark: "rgb(16,20,31)",
    },}
  },
  plugins: [],
};
