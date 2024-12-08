import React, { useContext, useEffect, useState } from 'react'
import {options} from '../utils/fetchData'
import ChapterCard from './ChapterCard';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../context/themeContext';
function AllChapters() {
  const {theme}=useContext(ThemeContext)
 const  maxlength=200
const [data,SetData]=useState([])
  useEffect(()=>{
const fetchData=async  ()=>{
  const response = await fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18', options);
	const  chapters = await response.json();
  console.log(chapters)
SetData(chapters)
}
fetchData()
  },[])
  

  return (
    <>
    
    <Box sx={{margin:"20px 40px",backgroundColor:theme==="dark"?"#1A1A1A":"white",height:"60%",
      width:{lg:"8vmax"}
    }}>
    <Typography sx={{color:theme==="dark"?"white":"black", height:"20%", margin: "10px 80px",fontSize:{lg:"3vmax",xs:"4vmax"},
    fontWeight:"700",textAlign:"start",marginBottom:"1vmax"}}>
      Chapters</Typography>
    </Box>
  
    <Box sx={{display:"flex",flexWrap:"wrap",backgroundColor:theme==="dark"?"#1A1A1A":"white",
    alignItems:"center",width:"100%",paddingBottom:"2rem"
     }}>
        
      {
data?.map((chapter)=>{
    return (

  <ChapterCard key={chapter.id} details={chapter} maxlength={maxlength} />
    )
       })
      }
 
    </Box>
    </>
   
  )
}

export default AllChapters
