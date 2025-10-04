import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      colors: {
        brand: {
          DEFAULT: '#6366f1',
          fg: '#0b1220'
        },
        card: '#0f172a'
      }
    }
  },
  plugins: []
}
export default config