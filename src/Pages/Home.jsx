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
    <>

     
      <div>

</div>
<Box sx={{ display: "flex",
        flexDirection: "row", 
        flexWrap: "wrap", 
        gap: "1vmax",
        }}
        className={`mainhome`}
        >
          <Box   sx={{
            margin:"3vmax",
            padding:"2vmax",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        width: '95rem',
        height: '451px',
        backgroundImage: `url(${img})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        border: "2px solid #ccc", 
        borderRadius: "8px", 
      }}>
        <Typography variant='body1'sx={{
       color:"white"  ,fontSize:{xs:"30px",lg:"60px"}
        }}>
        Experience the Gita
        
          <span style={{color:"#FEDF89",display:"block"}}>
          Anywhere, Anytime
          </span>
        </Typography>
        <button onClick={()=>{
          chapter('1')
        }} style={{padding:"12px 24px",backgroundColor:"white",marginTop:"40px",borderRadius:"2px",outline:"none",border:"none",fontSize:"16px"}}>Read now</button>
          </Box>
    
<VerseOfTheDay/>
<AllChapters/>
</Box>

    </>
  
  )
}

export default Home
