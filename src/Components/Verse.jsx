import { Box, Typography } from '@mui/material'
import React from 'react'
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
function Verse({verse}) {
  const {theme}=useContext(ThemeContext)
  const englishTranslation = verse.translations.find(translation => translation.language === 'english');
  return (
   <Box sx={{display:"flex",
    flexDirection:{lg:"row",xs:"column"},maxHeight:"30vmax"
  }}>
    <Typography variant='h6'sx={{color:"orange",width:{xs:"17vmax",lg:"20vmax"},
    fontSize:{xs:"15px",lg:"24px"}, margin:"1vmax 0",paddingBottom:{xs:"18px"}}} >
     Verse  {verse.verse_number
      }
    </Typography>
    <Typography variant='h4' sx={{ margin:{xs:"3vmax 1vmax"},color:theme==="dark"?"white":"black" ,width:{xs:"50vmax",lg:"100vmax"},
    fontSize:{xs:"15px",lg:"24px"},height:{lg:"3vmax",xs:"34vmax"}}}>
        {englishTranslation ? englishTranslation.description : 'English translation not available'}
      </Typography>
   </Box>
  )
}

export default Verse
