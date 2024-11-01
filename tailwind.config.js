/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
      },
      fontFamily: {
        pthin: ["Poppins-Thin","sans-serif"],
        pregular: ["Poppins-Regular","sans-serif"],
        pmedium: ["Poppins-Medium","sans-serif"],
        psemibold: ["Poppins-SemiBold","sans-serif"],
        pbold: ["Poppins-Bold","sans-serif"],
        pblack: ["Poppins-Black","sans-serif"],
        pextrabold: ["Poppins-ExtraBold","sans-serif"],
        pextralight: ["Poppins-ExtraLight","sans-serif"],
        plight: ["Poppins-Light","sans-serif"],
      },
    },
  },
  plugins: [],
};
