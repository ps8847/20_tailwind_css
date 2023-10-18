/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing:{
        13:'13px'
      }
    },
  },
  plugins: [],
}

// you can update ,  delete , add any feature of the tailwinds class prperties with ythis file

// suppose you want to add "spaceing whch is inside theme , where 13 = 13px"  -> you can add it like this  : 
/*
content: ["*"],
  theme: {
    extend: {
      spacing:{
        13:'13px'
      }
    },
  }

  and same for others also   ->

  content: ["*"],
  theme: {
    extend: {
      spacing:{
        13:'13px'
      },
      screens:{
        xsm:'500px'
      }
      fontSize:{
        '10xl':['9rem' , {lineHeight: '1.2'}]
      }
    },
  }

*/