/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'liberty': '#4357adff',
      'verdigris': '#48a9a6ff',
      'timberwolf': '#e4dfdaff',
      'tan': '#d4b483ff',
      'fuzzy-wuzzy': '#c1666bff'
    }
  },
  plugins: [],
}
