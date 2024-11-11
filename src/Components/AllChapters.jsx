import React, { useContext, useEffect, useState } from 'react'
import {options} from '../utils/fetchData'
import ChapterCard from './ChapterCard';
import { Box } from '@mui/material';
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
    <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"0 20px",backgroundColor:theme==="dark"?"black":"white"}}>
      
      {
data.map((chapter)=>{
    return (

  <ChapterCard key={chapter.id} details={chapter} maxlength={maxlength} />
    )
       })
      }
 
    </Box>
  )
}

export default AllChapters
