/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'primary': '#786347',
            'primary-light': '#ffe3b6',
            'primary-dark': '#d7cdba',
            'gray-100': '#888',
            'white': '#fff',
            'black': '#222',
            'green': '#7cff01',
            'yellow': '#fdff52',
        }
      }
    },
    plugins: [],
  }
