import { Box, Typography } from '@mui/material'
import React from 'react'
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
function Verse({verse}) {
  const {theme}=useContext(ThemeContext)
  const englishTranslation = verse.translations.find(translation => translation.language === 'english');
  return (
   <Box sx={{display:"flex",
    flexDirection:{lg:"row",xs:"column"},width:"100%",width:{lg:"60vmax",xs:"40vmax"}
  }}>
    <Typography variant='h6'sx={{color:"orange",width:{xs:"17vmax",lg:"23vmax"},fontSize:{xs:"15px",lg:"24px"}, margin:"3vmax 1vmax"}} >
     Verse  {verse.verse_number
      }
    </Typography>
    <Typography variant='h4' sx={{ margin:{xs:"3vmax 0"},color:theme==="dark"?"white":"black" ,width:{xs:"90vmax",lg:"100vmax"},fontSize:{xs:"15px",lg:"24px"}}}>
        {englishTranslation ? englishTranslation.description : 'English translation not available'}
      </Typography>
   </Box>
  )
}

export default Verse
