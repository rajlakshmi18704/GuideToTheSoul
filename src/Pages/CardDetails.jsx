import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/fetchData'
import { Box,Typography } from '@mui/material'
import { useNavigate} from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import Verse from '../Components/Verse'
import SearchVerses from '../Components/SearchVerses'
function CardDetails() {
  const {verseNo,id}=useParams()
  const {theme}=useContext(ThemeContext)
  const [chapterDetails,setChapterDetails]=useState("")
  const[VersesDetails,setVersesDetails]=useState([])
const [searchedVerse,setSearchedVerse]=useState("")
  const [searchTerm,setSearchTerm]=useState("")
const nav=useNavigate()
  

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
      console.log("Searched Verse:", Verse);
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
      width:  {lg:"100vmax" ,xs:"60vmax"},
      padding: { xs: "  2vmax 2vmax", lg: "1vmax 0" },
     
   paddingTop:{lg:"1%",xs:"20%"},
  backgroundColor:theme==="dark"?"#1A1A1A":"white",
      // Responsive padding
    }}>
      <Typography variant="h4" sx={{
        color: "orange",
        fontSize: { xs: "1.5rem", lg: "2rem" }, 
        fontWeight: "400",
       marginTop:"4vmax", 
        marginBottom:{sx:"1vmax",lg:"0.5vmax"}
      }}>
        Chapter {id}
      </Typography>
    
      <Typography variant="h3" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",textAlign:"center",
        flexWrap: "wrap",
        width:{xs:"80%",lg:"76%"},
        fontFamily: "inherit",
        fontSize: { xs: "4vmax", lg: "3rem" },
        marginRight:{xs:"2.1rem"},
        marginTop:{xs:"4%"},
        color:theme==="dark"?"white":"black",
        marginBottom:{xs:"2vmax",lg:"0.1vmax"}
        ,padding:{xs:"2vmax"},
        paddingTop:{xs:"1%"},
      }}>
        {chapterDetails.name_translated}
      </Typography>
    
      <Typography variant="body1" sx={{
        fontSize: { sx: "2vmax", lg: "1.4vmax" }, 
        fontFamily: "inherit",
        lineHeight: { sx: "1.9vmax", lg: "2.5vmax" }, // Responsive line height
        width: {  lg: "67vmax",xs:"60%" }
        ,  padding: { xs: "1vmax 2vmax", lg: "1vmax" },
       color:theme==="dark"?"white":"#1A1A1A",
        
      }}>
    {chapterDetails.chapter_summary}
      </Typography>
      <SearchVerses  sx={{
        margin:{xs:"1vmax"}
      }} setsearchTerm={setSearchTerm} />
      {searchTerm && searchedVerse ? (
        <Verse verse={searchedVerse} />
      ) : (
        <Box sx={{
          display:"flex",
       justifyContent:"center",alignItems:"center",
       margin:{lg:" 0vmax 3vmax"},
          flexDirection:"column",
          padding:"10px 0",
         
        }}>
{VersesDetails.map((verse) => {
  return (
    <Verse 
      key={verse.id} 
      verse={verse} 
     
    />
  );
})}

        </Box>
       
      )}
    
    </Box>
    
  )
}

export default CardDetails
