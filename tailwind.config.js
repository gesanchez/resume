/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: '"Raleway", sans-serif',
      serif: '"Poppings"'
    },
    extend: {
      colors: {
        primary: "#023047",
        secondary: '#FB8500',
        bodytext: '#023047'
,      },
    },
  },
  plugins: [],
}

