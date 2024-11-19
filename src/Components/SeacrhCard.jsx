import React from 'react'
import { Box, Typography } from '@mui/material'
import { BorderBottom } from '@mui/icons-material'
function SeacrhCard() {
  return (
   <Box sx={{backgroundColor:"lightOrange",border:"2px solid grey",height:"2vmax",
    justifyContent:"center",margin:"0 2vmax",padding:"2vmax",
   display:"flex",flexDirection:"column"}}>
<Typography sx={{color:"orange"}}>
    Chapter 8-Verse 1
</Typography>
<Typography variant='body1'>arjuna uvācha kair liṅgais trīn guṇān etān atīto bhavati prabho kim āchāraḥ kathaṁ chaitāns trīn guṇān</Typography>
   </Box>
  )
}

export default SeacrhCard
