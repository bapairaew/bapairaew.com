import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter"],
      },
    },
  },
  plugins: [typography],
};
