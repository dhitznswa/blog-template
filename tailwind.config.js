/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        arima: "Arima, cursive",
      },
      colors: {
        cblack: "#000000",
        cblue: "#5800FF",
        cpink: "#E900FF",
        cyellow: "#FFC600",
      },
      keyframes: {
        "sidebar-in": {
          "0%": { opacity: "0%", left: "-30%" },
          "50%": { opacity: "60%", left: "-10%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "sidebar-in": "sidebar-in 0.5s",
      },
    },
  },
  plugins: [],
};
