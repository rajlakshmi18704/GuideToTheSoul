import { Button,Box, Typography } from '@mui/material'
import React from 'react'
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
import VerseDetail from './VerseDetail';
import { useNavigate, useParams } from 'react-router-dom';
function Verse({verse}) {
const nav=useNavigate()
const {id,verseNo}=useParams()
  const {theme}=useContext(ThemeContext)
  const englishTranslation = verse.translations.find(translation => translation.language === 'english');
  return (
   <Box sx={{display:"flex",
    flexDirection:{xs:"column",lg:"row"},marginRight:{lg:"2vmax"}
    ,padding:{lg:"1vmax 0"},justifyContent:{lg:"center"},alignItems:"center"
  ,'&:hover': {
          backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
          borderRadius: '8px', 
        },
      }} 
      onClick={() => {
    
        nav(`/chapter/${id}/verse/${verse.verse_number}`); 
        console.log("fetched") 
      }} 
      >
    <Typography variant='h6'sx={{color:"orange",width:{xs:"17vmax",lg:"10vmax"},
    fontSize:{xs:"15px",lg:"24px"}, margin:"1vmax 0",paddingBottom:{xs:"18px"},
    paddingLeft:{lg:"  10rem"}}} >
     Verse  {verse.verse_number
      }
    </Typography>
    <Typography variant='h4' sx={{ margin:{xs:"3vmax 0"},color:theme==="dark"?"white":"black" ,width:{xs:"60%"
    ,lg:"90%"},
    fontSize:{xs:"15px",lg:"24px"},height:{lg:"3vmax",xs:"34vmax"},padding:{lg:"0.4vmax 0.3rem"},}}>
        {englishTranslation ? englishTranslation.description : 'English translation not available'}
      </Typography>
      
   </Box>
  )
}

export default Verse
