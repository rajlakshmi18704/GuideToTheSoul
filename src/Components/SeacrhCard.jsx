import {useEffect,React,useContext} from 'react'
import { Box, Typography } from '@mui/material'
import { BorderBottom } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router'
import { ThemeContext } from '../context/themeContext';
import { options } from '../utils/fetchData'
function SeacrhCard({transliteration,slug,  description}) {
 const  {id,verseNo}=useParams()
   const nav=useNavigate()
   const {theme}=useContext(ThemeContext)
   const fetchDetail=async()=>{
      const data=  await  fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${verseNo}/`,options)
      const res= await data.json()
      setDetail(res)
      console.log(res)
    }

  return (
   <Box sx={{border:"2px solid grey",height:"2vmax" , backgroundColor: theme === "dark" ? "#252525" : "white",
    justifyContent:"center",margin:"0 2vmax",padding:"2vmax",height:{xs:"6vmax"},
   display:"flex",flexDirection:"column",color: theme === "dark" ? "white" : "#252525"}} >
<Typography sx={{color:"orange",fontWeight:"Bold",fontSize:"1.7vmax"}}>
   {slug}
</Typography>
<Typography variant='body1'>{transliteration}</Typography>
{/* <Typography variant='h4'>{  description}</Typography> */}
   </Box>
  )
}

export default SeacrhCard
