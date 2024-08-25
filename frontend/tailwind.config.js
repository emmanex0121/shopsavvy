/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#7D54F3", // Custom blue color
        customGreen: "#10B981", // Custom green color
        customRed: "#EF4444", // Custom red color
        customGrey: "#CCCCCC",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
