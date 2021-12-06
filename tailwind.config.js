// tailwind.config.js
module.exports = {
  future: {},
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  experimental: {
    darkModeVariant: true
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },

      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        oren: '#FC4A1A',
        orenn: '#F5AF19'
      },

      fontFamily: {
        body: ['Nunito'],
        title: ['"DINPro-Bold"']
      },

      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

      },

      fontFamily: {
        roboto: ['Roboto'],
        // displayHead: ['AdulsaScript']
        nunito: ['Nunito'],
        adulsa: ['AdulsaScript']
      },

    },



  },
  variants: {},
  plugins: [
    require('tailwindcss-border-gradients')({
      variants: ['responsive'],
      directions: {
        't': 'to top',
        'r': 'to right',
        'b': 'to bottom',
        'l': 'to left',
      },
      gradients: {
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
      },
    }),
  ],
}