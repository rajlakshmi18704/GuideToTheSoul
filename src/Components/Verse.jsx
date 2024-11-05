import { Box, Typography } from '@mui/material'
import React from 'react'

function Verse({verse}) {
  const englishTranslation = verse.translations.find(translation => translation.language === 'english');
  return (
   <Box sx={{display:"flex",
    flexDirection:"row",width:"100%",width:{lg:"60vmax"}
  }}>
    <Typography variant='h4' >
     Verse  {verse.verse_number
      }
    </Typography>
    <Typography variant='h4' sx={{ marginLeft: 2 }}>
        {englishTranslation ? englishTranslation.description : 'English translation not available'}
      </Typography>
   </Box>
  )
}

export default Verse
