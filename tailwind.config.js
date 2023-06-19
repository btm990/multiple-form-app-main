/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-mb': "url('./assets/images/bg-sidebar-mobile.svg')",
        'sidebar-dt': "url('./assets/images/bg-sidebar-desktop.svg')"
      },
      colors: {
        MarineBlue: 'hsl(213, 96%, 18%)',
        PurplishBlue: 'hsl(243, 100%, 62%)',
        PastelBlue: 'hsla(228, 100%, 84%)',
        LightBlue: 'hsl(206, 94%, 87%)',
        StrawberryRed: 'hsl(354, 84%, 57%)',
        CoolGray: 'hsl(231, 11%, 63%)',
        LightGray: 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        White: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        body: ['Ubuntu']
      }
    },
  },
  plugins: [],
}