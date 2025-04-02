/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [daisyui],
};