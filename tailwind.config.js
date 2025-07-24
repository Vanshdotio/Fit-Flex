module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // make sure correct path is here
  ],
  // Optionally safelist:
  safelist: [
    'opacity-100',
    'block',
    'visible',
    'pointer-events-auto'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
