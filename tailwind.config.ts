import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist-sans': 'var(--font-geist-sans)',
        'geist-mono': 'var(--font-geist-mono)',
        'br-sonoma': 'var(--font-br-sonoma)',
      },
      colors: {
        accent: '#FFE7C8',
        primary: '#FFF4D7',
        lightBlue: '#C5E1FF',
        projectBg: '#80808033',
        projectShadow: '#C8F9FF',
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;
