/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-1" : "#f9845d",
        "color-2" : "#FE9A78",
      "color-3" : "#EEE5DC",
      "color-4" : "#f4eee8",
      }
    },
  },
  plugins: [],
}

