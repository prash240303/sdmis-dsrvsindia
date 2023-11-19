import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        'white-15': 'rgba(255, 255, 255, 0.15)',
        sdmis: {
          primary: {
            100: '#F8EDDB',
            300: '#F8EDDB',
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
     
    },
  },
  plugins: [],
};

export default config;
