import { Typography } from '@mui/material'
import {Box} from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

function ChapterCard({details,maxlength}) {
  const Navigate=useNavigate()
  const showDetails=(id)=>{
Navigate(`/chapter/${id}`)
  }
  return (
    <Box
    sx={{
      backgroundColor: "white",
      height: { xs: "auto", md: "15vmax" }, // Responsive height
      width: { xs: "90vw", sm: "80vw", md: "40vmax" }, // Responsive width
      padding: { xs: "2vmax 3vmax", md: "1vmax 2vmax" }, // Responsive padding
      borderRadius: "1vmax",
      transition: "background-color 0.3s ease",
      '&:hover': {
        backgroundColor: "#FFF5E1", // Light creme background on hover
        border: "2px solid orange",
      }, 
    }}
    onClick={
      ()=>{
        showDetails(details.id)
      }
    }
  >
    <Typography variant="h4" sx={{ color: '#D44025',fontWeight:"bold", fontSize: { xs: "20px", md: "28px" } }}>
      Chapter {details.
chapter_number
}
    </Typography>
    <Typography sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "24px" } }}>
      {details.name_translated
      }
    </Typography>
    <Typography sx={{ color: "#C4C0B5", marginTop:"19px",fontSize: { xs: "14px", md: "16px" ,lg:"20px"} }}>
    {details.chapter_summary.length > maxlength
        ? `${details.chapter_summary.substring(0, maxlength)}...` // Truncate and add ellipsis
        : details.chapter_summary} // Display full summary if it's short enough
    </Typography>
    <Box sx={{display:"flex"}}>
      <FormatListBulletedIcon/>
      <Typography sx={{marginLeft:"15px"}}>{details.verses_count} verses</Typography>
    </Box>
  </Box>
  )
}

export default ChapterCard
