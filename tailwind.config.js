/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#00b3b3', // Dynamic Teal
        purple: '#6f42c1', // Purposeful Purple
      },
    },
  },
  plugins: [],
}

