/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3efe6",
        ink: "#162019",
        moss: "#1b3126",
        moss2: "#274536",
        brass: "#74502c",
        line: "#e4ddd1",
        mute: "#5d675f",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};
