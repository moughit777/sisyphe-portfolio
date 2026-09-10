import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:   '#15111F',
        gray:  '#6b6b76',
        bg:    '#FCFCFC',
        'bg-soft': '#F5F5F7',
        border: '#EDEDF2',
        brand: {
          purple:      '#874AF8',
          'purple-dark': '#4E2A8C',
          pink:        '#DB8DFF',
          magenta:     '#941C66',
          orange:      '#F17422',
          gold:        '#F7B14E',
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
