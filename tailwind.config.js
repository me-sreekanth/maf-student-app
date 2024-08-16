/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-g50": "#f7f7f7",
        crimson: "#eb2726",
        "text-normal": "#252525",
        "grey-g400": "#b1b1b1",
        "text-secondary": "#717171",
        "project-colours-white": "#fff",
        "grey-g100": "#dedede",
        "project-colours-d300": "#b24025",
        "project-colours-po300": "#3c8826",
        "text-light": "#b0b0b0",
        "grey-g500": "#727272",
        "project-colours-s300": "#fa413f",
        darkslategray: "#333",
        gold: "rgba(244, 196, 5, 0.12)",
        gray: "rgba(255, 255, 255, 0.4)",
        black: "#000",
        whitesmoke: {
          100: "#f2f2f2",
          200: "rgba(247, 247, 247, 0.68)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-medium-small": "Manrope",
        "slant-large": "'Cooper Hewitt'",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      base: "16px",
      "2xs": "11px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
