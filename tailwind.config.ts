import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        semibold: '599',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        success: {
          DEFAULT: '#446443',
        },
        error: {
          DEFAULT: '#6F3331',
          dark: '#B50909',
        },
        'violet-warm': {
          50: '#b04abd',
          60: '#864381',
          70: '#5c395a',
        },
        'blue-cool': {
          5: '#E7F2F5',
          20: '#c2d6de',
          30: '#9cbcc8',
          50: '#3A7D95',
          60: '#2E6276',
          70: '#224a58',
          80: '#14333d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
