/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#be185d",
        deep: "#0a0a0a",
        soft: "#f9fafb",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        "pink-gradient": "linear-gradient(135deg, #be185d 0%, #ec4899 100%)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
