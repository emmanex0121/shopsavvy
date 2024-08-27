/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#7D54F3", // Custom purple color
        customGrey: "#CCCCCC",
        customGreyLight: "ECECEC",
        customOrange: "#EB7E80",
        customeWhite: "#FBFBFB",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
