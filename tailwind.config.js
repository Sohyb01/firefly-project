/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: ".688rem",
        sm: ".812rem",
        md: "1rem",
        lg: "1.188rem",
        xl: "1.438rem",
        "2xl": "1.75rem",
        "3xl": "2.062rem",
        "4xl": "2.5rem",
        "5xl": "3.562rem",
        "6xl": "4.312rem",
      },
    },
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
  },
  plugins: [],
};
