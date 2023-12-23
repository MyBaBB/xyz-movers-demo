/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* varDARKBEAKTOP: "#785001",
        varMEDBEAKTOP: "#b67902",
        varLIGHTBEAKTOP: "#fca802",
        varDARKDUCKHEAD: "#1e3b28",
        varMEDDUCKHEAD: "#284f35",
        varLIGHTDUCKHEAD: "#528f85",
        varDARKBLUEFEATHER: "#24558d",
        varMEDBLUEFEATHER: "#2a61a1",
        varLIGHTBLUEFEATHER: "#419aff",
        varDARKDUCKCHEEKS: "#362e47",
        varMEDDUCKCHEEKS: "#6b5b8d",
        varLIGHTDUCKCHEEKS: "#a088d2",
        varDARKNECK: "#412a32",
        varMEDNECK: "#98648d",
        varLIGHTNECK: "#c68199",
        varDARKWING: "#3c302e",
        varMEDWING: "#806661",
        varLIGHTWING: "#cfa69d",
        varDARKBEAK: "#70181a",
        varMEDBEAK: "#962023",
        varLIGHTBEAK: "#d72d32",
        varDARKSPACE: "#08121c",
        varMEDSPACE: "#1b3854",
        varLIGHTSPACE: "#264d73", */
        varTEAL: '#008080',
        varDarkGreek: '#052e16',
        varDarkTeal: '#006766',
        varLightTeal: '#4dc4c5',

        varDarkBrown:'#61472a',
        varBROWN: '#91785d',
        /* As for the accent colors for borders, you can use any of the following: */
        
        varCrimson: '#dc143c',
        varGold: '#ffd700',
        varLime: '#00ff00',
        varIndigo: '#4b0082',
        
        varBlue: '#008080',
          
      },




      screens: {
        'xxxs': '280px',
       'xxs': '320px',
       'xs': '420px',
       'sm': '460px',
       'md': '685px',
       'lg': '1024px',
       'xl': '1280px',
     },

    },
  },
  plugins: [],
}

