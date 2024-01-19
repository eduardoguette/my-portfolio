/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          ' Noto Sans',
          'sans-serif',
          ' Apple Color Emoji',
          'Segoe UI Emoji',
          ' Segoe UI Symbol',
          ' Noto Color Emoji'
        ]
      },
      colors: {
        primary: {
          50: '#E5EBF1',
          100: '#CDD9E4',
          200: '#9CB3C9',
          300: '#678AAC',
          400: '#466381',
          500: '#2B3D4F',
          600: '#22303F',
          700: '#19242E',
          800: '#121A21',
          900: '#090D11',
          950: '#040507'
        },
        secondary: {
          50: '#E9F4FB',
          100: '#D8EBF8',
          200: '#ADD5F0',
          300: '#86C2EA',
          400: '#5AACE2',
          500: '#3398DB',
          600: '#207AB6',
          700: '#185D8B',
          800: '#103D5B',
          900: '#082030',
          950: '#040F16'
        },
        twilight: {
          primary: '#222233',
          secondary: '#444465'
        }
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        "border-width": "border-width 6s both infinite "
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        "border-width": {
          "from": {
            "width": "100px",
            "opacity": "0"
          },
          "to": {
            "width": "100px",
            "opacity": "1"
          }
        }
      }
    }
  },
  plugins: []
}
