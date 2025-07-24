/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // A shade of blue
        secondary: '#60a5fa', // A lighter blue
        accent: '#10b981', // A green accent
        neutral: '#f3f4f6', // A light gray for backgrounds
        'neutral-dark': '#d1d5db', // A slightly darker gray
      },
    },
  },
  plugins: [],
}