import {useEffect,React,useContext} from 'react'
import { Box, Typography } from '@mui/material'
import { BorderBottom } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router'
import { ThemeContext } from '../context/themeContext';
import { options } from '../utils/fetchData'
function SeacrhCard({verse}) {
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
   <Box sx={{border:"2px solid grey",height:{lg:"5vmax",xs:"13vmax"} , 
   backgroundColor: theme === "dark" ? "#252525" : "white",alignItems:"center",
    justifyContent:"center",margin:"0 1vmax",padding:"2vmax",width:{xs:"40vmax"},
   display:"flex",flexDirection:"column",color: theme === "dark" ? "white" : "#252525"}} onClick={()=>{
      nav(`/chapter/${verse.id}/verse/${verse.verse_number}`)
   }} >
<Typography sx={{color:"orange",fontWeight:"Bold",fontSize:"1.9vmax"}}>
   {verse.slug}
</Typography>
<Typography variant='body1'>{verse.transliteration}</Typography>
{/* <Typography variant='h4'>{  description}</Typography> */}
   </Box>
  )
}

export default SeacrhCard
