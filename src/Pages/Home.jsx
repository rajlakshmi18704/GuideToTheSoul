import React from 'react'
import styles from  "./Home.module.css"

import VerseOfTheDay from '../Components/VerseOfTheDay'
import ChapterCard from '../Components/ChapterCard'
import { Box, Typography } from '@mui/material'
import img from '../assets/HomeImg.webp'
import AllChapters from '../Components/AllChapters'
import {ThemeContext} from '../context/themeContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router'
function Home() {
  const {theme}=useContext(ThemeContext)
  const navigate=useNavigate()
 
  const chapter=(id)=>{
    navigate(`/chapter/${id}`)
      }
  
  return (
    <Box sx={{backgroundColor:theme==="dark"?"#1A1A1A":"white"}}>
   

     
  
<Box sx={{ display: "flex",
        flexDirection: "row", 
        flexWrap: "wrap", 
        gap: "1vmax",
        margin:{lg:"3vmax",xs:"1vmax"},
        padding:" 0 1vmax",
       
        }}
        className={`mainhome`}
        >
          <Box   sx={{
           
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        width: {lg:'95%',xs:"80%"},
        height: {lg:'30vmax',xs:"50vmax"},
        backgroundImage: `url(${img})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        padding:{xs:"6vmax 3vmax",lg:"0"},
        backgroundRepeat: "no-repeat", 
        border: "2px solid #ccc", 
        borderRadius: "8px", 
      }}>
        <Box sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",}}>
        <Typography variant='body1'sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",
       color:"white",textAlign:"center"  ,fontSize:{xs:"5vmax",lg:"4vmax",justifyContent:"center"},paddingTop:{xs:"3vmax"}
        }}> 
        Experience the Gita
        <span style={{color:"#FEDF89",display:"block"}}>
          Anywhere, Anytime
          </span>
        </Typography>
        
        
         
        </Box>
       
       
        <button onClick={()=>{
          chapter('1')
        }} style={{padding:"12px 20px",backgroundColor:"white",marginTop:"40px",borderRadius:"2px",outline:"none",


        border:"none",fontSize:"16px"}}>Read now</button>
          </Box>
    
<VerseOfTheDay/>
<AllChapters/>
</Box>

</Box>
  
  )
}

export default Home
