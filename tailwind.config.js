/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF444A',
        secoundary: '#0B0B0B',
        tertiary: '#009444',
        quaternary: '#00C49F',
        gray: '#0B0B0BB2',
        overlay: '#0B0B0B80',
        line: '#DEDEDE',
      },
    },
  },
  plugins: [],
};
