/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Include all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',  // Enable JIT mode for development
  purge: false,  // Disable purging temporarily
};
