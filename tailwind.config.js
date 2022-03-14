const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./index.html", "./index-menu.html", "./index-menu-sub1.html", "index-home.html", "./index-home2.html", "./index-home3.html", "./index-home4.html"],
  theme: {
    extend: {
      colors: {
        'lightbrown' : '#64574b',
        'darkbrown' : '#3b3534',
        'darkorange' : '#be6254',
        'darkblue' : '#27455f',
        'brown' : '#988c81',
        'gray' : '#767776',
      
      }
    },
  },
  plugins: [],
}
