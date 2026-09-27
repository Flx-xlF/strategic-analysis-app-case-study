/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#EB0000',
        'brand-red-dark': '#A20013',
        'brand-black': '#000000',
        'brand-anthracite': '#222222',
        'brand-stone': '#666666',
        'brand-aluminum': '#E5E5E5',
        'brand-cloud': '#F5F5F7',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        full: '0px',
      }
    },
  },
  plugins: [],
}
