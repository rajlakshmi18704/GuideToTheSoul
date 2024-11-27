import React, { useEffect, useState,useContext } from 'react'
import { Box, Typography ,Stack} from '@mui/material'
import { options } from '../utils/fetchData'
import { useNavigate, useParams } from 'react-router'
import { ThemeContext } from '../context/themeContext';
import forwardArrow from'../assets/forwrdArrow.png'
import backArrow from '../assets/backArrow.png'
function VerseDetail() {
    const {id,verseNo}=useParams()
    const navigate=useNavigate()
    const {theme}=useContext(ThemeContext)
    const [detail,setDetail]=useState([])
    const fetchDetail=async()=>{
      const data=  await  fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${verseNo}/`,options)
      const res= await data.json()
      setDetail(res)
      console.log(res)
    }
    useEffect(()=>{
fetchDetail()
    },[id,verseNo])
  return (
    <Box sx={{display:"flex",color:theme==="dark"?"white":"black",
    backgroundColor:theme==="dark"?"#1A1A1A":"white",
    alignItems:"center",hieght:"9vmax",paddingLeft:"4vmax"}} >
        <Box sx={{
cursor: "pointer",
backgroundColor: "black",
position:"fixed",

width:"2rem",
padding:"15px",
left: "1rem",
top: "50%",
transform: "translateY(-50%)",
borderRadius: "  50%",
        }} onClick={()=>{
          console.log("clicked")
          const previousVerseNo = parseInt(verseNo) - 1; 
    if (previousVerseNo > 0) {
      navigate(`/chapter/${id}/verse/${previousVerseNo}`);
    } 
    else {
      console.log("No previous verse available");
    }
        }}>
        <img src={backArrow} sx={{
     
  
      }} />
        </Box>
       
  
    <Box  sx= {{width:"100%",
      
paddingTop:{lg:"12%",xs:"35%"},
     paddingBottom:{xs:"12%",lg:"6%"},
    
    }}>
     
     

    
     
      <Box sx={{Width:"60%",display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center"
        ,padding:{lg:"4vmax"}
      }}>

      
    <Typography variant='h2' sx= {{color:theme==="dark"?"white":"black",fontSize:{xs:"2rem",}}}>
    BG {detail.chapter_number}.{detail.verse_number}
    </Typography>
    <Typography sx={{borderBottom:"2px solid grey",paddingBottom :"2%",fontSize:{lg:"2rem",xs:"2rem"},}}>
      {
 detail.transliteration
}
    </Typography>
    <Typography variant="h2" sx={{fontWieght:"bold",fontSize:{xs:"4vmax"}}}>
      Translation
    </Typography>
    <Typography variant="h4" sx={{margin :"2%",
        lineHeight:{lg:"4vmax",xs:"12vmax"},
      fontSize:{xs:"1.5rem",lg:"2rem",lineHeight:{lg:"4vmax",xs:"3vmax"},padding:{lg:" 0 18vmax",xs:"0 18vmax"}}}}>
   
      {
      detail?.translations?.filter(
        (translation) => translation.author_name === "Swami Sivananda"
      ).map((translation) => translation.description).join(", ") || "No description available"
    }
    </Typography>
    <Typography variant="h2" sx={{fontWieght:"bold", fontSize:{lg:"5vmax",xs:"12vmax"},}}>
     Commentary
    </Typography>
    <Typography variant="h4" sx={{borderBottom:"2px solid grey",margin :"2%",
      fontSize:{lg:"2vmax",xs:"3vmax"},
      lineHeight:{lg:"4vmax",xs:"12vmax"},padding:{lg:" 0 12vmax",xs:"0 9vmax"}}}>
      
      {
      detail?.commentaries?.filter(
        (translation) => translation.author_name === "Sri Purushottamji"
      ).map((translation) => translation.description).join(", ") || "No description available"
    }
    </Typography>
    </Box>
    </Box>
    <Box sx={{
cursor: "pointer",
position:"fixed",

width:"2rem",
right: "1rem",
top: "50%",
transform: "translateY(-50%)",
backgroundColor: "black",
padding: "15px",
borderRadius: " 50% ",
        }}
        onClick={
          ()=>{
            const NextVerseNo = parseInt(verseNo) +1; 
            if (NextVerseNo > 0) {
              navigate(`/chapter/${id}/verse/${NextVerseNo}`);
            } 
            else {
              console.log("No previous verse available");
            }
          }
        }>
       <img src={forwardArrow} alt=""  sx={{display:"flexEnd"}}/>
       </Box>
    </Box>
  )
}

export default VerseDetail
