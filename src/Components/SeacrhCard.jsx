import React from 'react'
import { Box, Typography } from '@mui/material'
import { BorderBottom } from '@mui/icons-material'
function SeacrhCard({transliteration,slug,  description}) {
  return (
   <Box sx={{backgroundColor:"lightOrange",border:"2px solid grey",height:"2vmax",
    justifyContent:"center",margin:"0 2vmax",padding:"2vmax",
   display:"flex",flexDirection:"column"}}>
<Typography sx={{color:"orange",fontWeight:"Bold",fontSize:"1.7vmax"}}>
   {slug}
</Typography>
<Typography variant='body1'>{transliteration}</Typography>
{/* <Typography variant='h4'>{  description}</Typography> */}
   </Box>
  )
}

export default SeacrhCard
