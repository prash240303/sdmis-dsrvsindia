const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'white-15': 'rgba(255, 255, 255, 0.15)',
        sdmis: {
          primary: {
            100: '#f8eddb',
            300: '#e2b468',
            600: '#AD4800',
          },
          neutral: {
            0: '#ffffff',
            100: '#f0f0f0',
            200: '#e0e1e1',
            300: '#c1c3c3',
            400: '#828787',
            500: '#434b4b',
            900: '#040f0f',
          },
          semantic: {
            info: '#6554c0',
            warning: '#ffab00',
            success: '#36b37e',
            error: '#ef233c',
          },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
});
