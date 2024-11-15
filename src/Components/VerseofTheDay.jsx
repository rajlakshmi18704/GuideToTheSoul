import React from 'react'
import {Box, Typography} from '@mui/material'
import {ThemeContext} from '../context/themeContext'
import { useContext } from 'react'
function VerseOfTheDay() {
  const {theme}=useContext(ThemeContext)
  return (
 <Box sx={{height:{xs:"38vmax",lg:"202px"},width:{xs:"90%",lg:"100%"},backgroundColor:theme==="dark"?"rgb(37, 37, 37)":"white",margin:"1vmax 2vmax"
 ,padding:{lg:"20px 40px ",xs:"20px 2rem"},display:"flex",flexWrap:"wrap",borderRadius:"1.5vmax",boxShadow:"5px 10px 15px rgba(1, 0, 0, 0.3)",


 }} >
<Typography variant='h2'component="h2" sx={{color:'#F57903',fontSize:{lg:"1.7vmax",xs:"40px"},paddingTop:"1vmax"}}>Verse Of The Day</Typography>
<Typography variant="body1" sx={{color:"grey",marginTop:"1.4vmax",fontSize:{lg:"1.7vmax",xs:"1rem",display:"block",flexWrap:"wrap"}}}>
And among all the Yogis, he who, full of faith and with his inner self merged in Me, worships Me is deemed by Me to be the most devoted.
    </Typography>
    <Typography sx={{color:theme==="dark"?"white":"black",display:"flex",paddingTop:"1vmax",fontSize:"18px",fontSize:"28px",fontWeight:"700"}}>
      See More
    </Typography>
 </Box>
  )
}

export default VerseOfTheDay;
