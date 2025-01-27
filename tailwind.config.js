/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/presentation/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        primary: '#bfadb5',
        secondary: '#925e85',
        dark: '#191717',
        light: '#dae4ed',
      },
    },
  },
  plugins: [],
};
