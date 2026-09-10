import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:   '#070B1A',
          dark:    '#0A0D1F',
          card:    '#0E1230',
          card2:   '#111535',
          border:  '#1E2550',
          green:   '#5DD62C',
          'green-light': '#7EE84E',
          'green-dim':   'rgba(93,214,44,0.14)',
          gray:    '#8AB88A',
          muted:   '#4A7A4A',
          white:   '#EEF8EE',
        },
      },
      fontFamily: {
        arabic: ['var(--font-ibm)', 'sans-serif'],
        sans:   ['var(--font-ibm)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
