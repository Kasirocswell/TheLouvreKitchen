/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { "josefin-slab": "'Josefin Slab'" } },
    colors: { white: "#fff", black: "#000" },
    fontSize: { base: "64px" },
    screens: { lg: { max: "1200px" }, sm: { max: "428px" } },
  },
  corePlugins: { preflight: false },
};
