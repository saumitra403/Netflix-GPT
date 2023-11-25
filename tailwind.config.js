// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const scrollbarStyles = {
        '::-webkit-scrollbar': {
          width: '5px',
          height: '5px'
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'grey',
        },
      };

      addUtilities(scrollbarStyles, { variants: ['responsive', 'hover', 'focus'] });
    },
  ],
};
