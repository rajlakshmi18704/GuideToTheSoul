import { Typography } from '@mui/material'
import {Box} from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
function ChapterCard({details,maxlength}) {
  const {theme}=useContext(ThemeContext)
  const Navigate=useNavigate()
  const showDetails=(id)=>{
Navigate(`/chapter/${id}`)
  }
  return (
    <Box
    sx={{
      
      height: { xs: "auto", md: "15vmax" }, // Responsive height
      width: { xs: "90vw", sm: "80vw", md: "40vmax" }, // Responsive width
      padding: { xs: "2vmax 3vmax", md: "1vmax 2vmax" }, // Responsive padding
      borderRadius: "1vmax",
      backgroundColor:theme==="dark"?"#242424":"#FBFCFC",
      margin: "10px 20px",
      transition: "background-color 0.3s ease",
      '&:hover': {
        backgroundColor: theme === "dark" ? "#252525" : "#f5f5dc", // Conditional hover background color
        border: "2px solid orange",
      },
    }}
    onClick={
      ()=>{
        showDetails(details.id)
      }
    }
  >
    <Typography variant="h4" sx={{ color: "#F57903" ,fontWeight:"bold", fontSize: { xs: "20px", md: "28px" } }}>
      Chapter {details.
chapter_number
}
    </Typography>
    <Typography sx={{ fontWeight: "bold", color: theme === "dark" ?  "white":"#242424" , fontSize: { xs: "18px", md: "24px" } }}>
      {details.name_translated
      }
    </Typography>
    <Typography sx={{ color: theme === "dark" ?  "white":"#242424" , marginTop:"19px",fontSize: { xs: "14px", md: "16px" ,lg:"20px"} }}>
    {details.chapter_summary.length > maxlength
        ? `${details.chapter_summary.substring(0, maxlength)}...` // Truncate and add ellipsis
        : details.chapter_summary} // Display full summary if it's short enough
    </Typography>
    <Box sx={{display:"flex", color: theme === "dark" ?  "white":"#242424" }}>
      <FormatListBulletedIcon/>
      <Typography sx={{marginLeft:"15px"}}>{details.verses_count} verses</Typography>
    </Box>
  </Box>
  )
}

export default ChapterCard
