
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#1e293b"
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.6)"
      }
    },
  },
  plugins: [],
}
