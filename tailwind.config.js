/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // add this line
      textColor: ['active'], // add this line
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'base-100': '#F8FBFB',
          'base-200': '#F0F5FF',
          'base-600': '#324996',
          secondary: '#324996',
          accent: '#1FA3DD',
          neutral: '#14294C',
          info: '#FFFFFF',
        },
      },
      'winter',
    ],
  },
  plugins: [require('daisyui')],
};
