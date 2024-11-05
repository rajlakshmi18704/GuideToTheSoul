import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/fetchData'
import { Box,Typography } from '@mui/material'

import Verse from '../Components/Verse'
import SearchVerses from '../Components/SearchVerses'
function CardDetails() {
  
  const [chapterDetails,setChapterDetails]=useState("")
  const[VersesDetails,setVersesDetails]=useState([])
  const [searchTerm, setSearchTerm] = useState(4);
  const {id}=useParams()

  useEffect(()=>{
const fetchDetails=async()=>{
	const ChapterResponse = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`, options);
	const chapter = await ChapterResponse.json();

  setChapterDetails(chapter)
  console.log(chapterDetails)
  const VersesResponse=await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`, options);
	const Verses= await VersesResponse.json();
setVersesDetails(Verses)
	console.log(Verses);
}
fetchDetails()

  },[])
  return (
    
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: { xs: "90%", lg: "30vmax" },
      padding: { xs: "  1vmax 1vmax", lg: "12vmax 5vmax" },
       // Adjusted width for small screens
    margin: {lg:"0 67%",xs:"28% 10%"} ,
  
      // Responsive padding
    }}>
      <Typography variant="h4" sx={{
        color: "orange",
        fontSize: { xs: "1.5rem", lg: "2rem" }, // Responsive font size
        fontWeight: "400",
        marginBottom:{sx:"1.4vmax",lg:"1vmax"}
      }}>
        Chapter {id}
      </Typography>
    
      <Typography variant="h3" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        flexWrap: "wrap",
        fontFamily: "inherit",
        fontSize: { xs: "2rem", lg: "3rem" },
        marginBottom:{xs:"2vmax",lg:"0.8vmax"} // Responsive font size
      }}>
        {chapterDetails.name_translated}
      </Typography>
    
      <Typography variant="body1" sx={{
        fontSize: { sx: "2vmax", lg: "1.4vmax" }, // Responsive font size
        fontFamily: "inherit",
        lineHeight: { sx: "1.9vmax", lg: "2.5vmax" }, // Responsive line height
        width: { xs: "90%", lg: "67vmax" }
        ,  padding: { xs: "5vmax", lg: "2vmax" },
        // Responsive width
      }}>
    {chapterDetails.chapter_summary}
      </Typography>
      <SearchVerses searchTerm={searchTerm} setsearchTerm={setSearchTerm} />
      {VersesDetails.map(verse=>(
    <Verse verse={verse}/>
      )

      )}
    
    </Box>
    
  )
}

export default CardDetails
