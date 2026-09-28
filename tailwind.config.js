/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['"SF Mono"', '"Menlo"', '"Monaco"', '"Courier New"', 'monospace'],
    },
    borderRadius: {
      none: '0px',
      sm: '0px',
      DEFAULT: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '0px',
    },
    extend: {
      spacing: {
        'gutter': '1px',
      },
      colors: {
        sbb: {
          red: {
            DEFAULT: '#EB0000',
            100: '#C60018',
            125: '#A20013',
          },
          gray: {
            light: '#E5E5E5',
            DEFAULT: '#8D8D8D',
            dark: '#686868',
            darker: '#5A5A5A',
          },
          black: {
            DEFAULT: '#000000',
            light: '#212121',
          },
          white: '#FFFFFF',
          anthracite: '#222222',
          stone: '#666666',
          aluminum: '#E5E5E5',
          cloud: '#F5F5F7',
        },
        brand: {
          red: {
            DEFAULT: 'var(--brand-red)',
            125: 'var(--brand-red-dark)',
          },
          gray: {
            light: 'var(--brand-aluminum)',
            DEFAULT: 'var(--brand-stone)',
          },
          black: {
            DEFAULT: 'var(--brand-black)',
            light: 'var(--brand-anthracite)',
          },
          white: 'var(--brand-white)',
          anthracite: 'var(--brand-anthracite)',
          stone: 'var(--brand-stone)',
          aluminum: 'var(--brand-aluminum)',
          cloud: 'var(--brand-cloud)',
        }
      }
    },
  },
  plugins: [],
}
