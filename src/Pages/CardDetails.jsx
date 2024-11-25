import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/fetchData'
import { Box,Typography } from '@mui/material'
import { useNavigate,Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import Verse from '../Components/Verse'
import SearchVerses from '../Components/SearchVerses'
function CardDetails() {
  const {theme}=useContext(ThemeContext)
  const [chapterDetails,setChapterDetails]=useState("")
  const[VersesDetails,setVersesDetails]=useState([])
const [searchedVerse,setSearchedVerse]=useState("")
  const [searchTerm,setSearchTerm]=useState("")
 
  const {id}=useParams()

  useEffect(()=>{
const fetchDetails=async()=>{
   
	const ChapterResponse = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`, options);
	const chapter = await ChapterResponse.json();

  setChapterDetails(chapter)
  console.log(chapterDetails)

}
fetchDetails()

  },[])
  useEffect(()=>{
    const getverses=async()=>{
     if(!searchTerm){
      const VersesResponse=await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`, options);
      const Verses= await VersesResponse.json();
    setVersesDetails(Verses)
      console.log(Verses);
      setSearchedVerse(null);
     }
    else{
      const VersesResponse=await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${searchTerm}/`, options);
      const Verse= await VersesResponse.json();
  setSearchedVerse(Verse)
      console.log(searchedVerse);
      console.log("Searched Verse:", verse);
     }
    }
  getverses()
  },[searchTerm])
 
  return (
    
    <Box sx={{
      display: "flex",
      height:"100%",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width:  {lg:"100vmax" ,xs:"80vmax"},
      padding: { xs: "  1vmax 0.2vmax", lg: "12vmax 0" },
       // Adjusted width for small screens
    margin: {lg:"0 12px",xs:"28% 2%"} ,
  backgroundColor:theme==="dark"?"#1A1A1A":"white",
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
        width:{xs:"90vmax",lg:"30vmax"},
        fontFamily: "inherit",
        fontSize: { xs: "2rem", lg: "3rem" },
        marginRight:{xs:"2rem"},
        marginTop:{xs:"2rem"},
        color:theme==="dark"?"white":"black",
        marginBottom:{xs:"2vmax",lg:"0.8vmax"} // Responsive font size
        ,
      }}>
        {chapterDetails.name_translated}
      </Typography>
    
      <Typography variant="body1" sx={{
        fontSize: { sx: "2vmax", lg: "1.4vmax" }, // Responsive font size
        fontFamily: "inherit",
        lineHeight: { sx: "1.9vmax", lg: "2.5vmax" }, // Responsive line height
        width: { xs: "90%", lg: "67vmax" }
        ,  padding: { xs: "1vmax", lg: "2vmax" },
       color:theme==="dark"?"white":"#1A1A1A",
        
      }}>
    {chapterDetails.chapter_summary}
      </Typography>
      <SearchVerses  setsearchTerm={setSearchTerm} />
      {searchTerm && searchedVerse ? (
        <Verse verse={searchedVerse} />
      ) : (
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          padding:"10px 0",
         
        }}>
 {VersesDetails.map((verse) => <Verse key={verse.id} verse={verse} />)}
        </Box>
       
      )}
    
    </Box>
    
  )
}

export default CardDetails
