/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Use for Main Hero Titles and Branding
        heading: ['Geist', 'Inter', 'sans-serif'],
        
        // Use for Body Text and Descriptions
        sans: ['Inter', 'system-ui', 'sans-serif'],
        
        // Use for Section Headers (RECENT PROJECTS) and UI Labels
        display: ['Space Grotesk', 'sans-serif'],
        
        // Use for Career Timeline dates or Tech Tags
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-.075em',
        widest: '.25em',
      },
       screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
        '10xl': '1920px',
      }
    },
  },
  plugins: [],
}