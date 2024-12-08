import React from 'react'
import { useContext} from "react"
import { Box ,Typography} from '@mui/material'
import image from '../../src/assets/about.webp'
import { ThemeContext } from '../context/themeContext';
function About() {
  const {theme}=useContext(ThemeContext)
  return (
    <Box sx={{  display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2vmax",
      overflow: "hidden",
      display: "flex",
      width:{lg:"100vmax",xs:"100%"},
      backgroundColor: theme === "dark" ? "#1A1A1A" : "white",
      padding: { lg: "4vmax 2vmax", xs: "6vmax 4vmax" },
      
      }}
      className={`mainhome`}
      >
          <Box   sx={{
           margin:{lg:"2vmax auto"},
           display:"flex",
           flexDirection:"column",
           justifyContent:"center",
           alignItems:"center",
       width: {lg:'100%',xs:"70%"},
       height: {lg:'30vmax',xs:"50vmax"},
       backgroundImage: `url(${image})`, 
       backgroundSize: "cover", 
       backgroundPosition: "center", 
       padding:{xs:"2vmax",lg:"0"},
       backgroundRepeat: "no-repeat", 
       border: "2px solid #ccc", 
       borderRadius: "8px", 
     }}>
      <Typography variant='body1' sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",
       color:"white",textAlign:"center"  ,fontSize:{xs:"5vmax",lg:"4vmax",justifyContent:"center"},
       paddingTop:{xs:"3vmax"}}}>
        ABOUT THE BHAGWATGITA
      </Typography>
      </Box>
      
    <Box sx={{ width: "80%", textAlign: "center", display: "flex", flexDirection: "column", gap: "1.5vmax" ,

color:theme==="dark"?"white":"black",
    }}>
      <Typography
        variant="body1"
        sx={{
          fontSize: { lg: "2vmax", xs: "2.2vmax" },
          color: "inherit",
          lineHeight: 1.8,
        }}
      >
        Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a practical guide to one's life
        that guides one to reorganize their life, achieve inner peace, and approach the Supreme Lord (the
        Ultimate Reality). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in
        the Bhishma-Parva section of the Mahabharata.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { lg: "2vmax", xs: "2.2vmax" },
          color: "inherit",
          lineHeight: 1.8,
        }}
      >
        The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior, and his guide and
        charioteer, Lord Krishna, on the battlefield of Kurukshetra. As both armies stand ready for the
        battle, the mighty warrior Arjuna, on observing the warriors on both sides, becomes overwhelmed
        with grief and compassion due to the fear of losing his relatives and friends and the consequent
        sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a
        solution. Thus, follows the wisdom of the Bhagavad Gita.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { lg: "2vmax", xs: "2.2vmax" },
          color: "inherit",
          lineHeight: 1.8,
        }}
      >
        Over 18 chapters, Gita packs an intense analysis of life, emotions, and ambitions, discussion of
        various types of yoga, including Jnana, Bhakti, Karma, and Raja, the difference between Self and
        the material body as well as the revelation of the Ultimate Purpose of Life.
      </Typography>
    </Box>
      </Box>
  )
}

export default About
