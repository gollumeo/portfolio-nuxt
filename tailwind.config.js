/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/presentation/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat Alternates', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

