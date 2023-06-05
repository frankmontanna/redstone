/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    
    ],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundImage: { 
        app: 'url(/app-bg.png)',
        grayapp: 'url(/bg-gray.jpg)',
      },
      colors: { 
        main: { 
          'gray-main':'#3A3A3C',
          'gray-light': '#DEDEDE',
          'gray-text':'#393939',
          'gray-text-seconday': '#BBBBBB',
          'acordion-gray' :'#eeeeee',
          'red': '#ff0000',
          'green': '#00B259',
          'pay': '#00B000',
          'pay-text':'#48465B',
          'pay-header' : '#EEF2F4',
          'btn-buy': '#71C358',
          'btn-buy-stroke' : '#50B232' ,
          'text-buy' : '#258819',
          'ligth-violet' : '#646C9A',
          'ligth-blue' : '#639BD0',
          'outline-gray' : '#ccc',
        },
      },
      fontFamily: { 
        sans: 'Maven Pro, sans-serif'
      }
    },
  },
  plugins: [],
}
