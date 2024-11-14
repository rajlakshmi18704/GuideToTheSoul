import React from 'react'
import styles from  "./Home.module.css"

import VerseOfTheDay from '../Components/VerseOfTheDay'
import ChapterCard from '../Components/ChapterCard'
import { Box } from '@mui/material'
import AllChapters from '../Components/AllChapters'
import {ThemeContext} from '../context/themeContext'
import { useContext } from 'react';
function Home() {
  const {theme}=useContext(ThemeContext)
  return (
    <>

     
      <div>

</div>
<Box sx={{ display: "flex",
        flexDirection: "row", // Display cards in a row
        flexWrap: "wrap", // Allow wrapping to next line
        gap: "1vmax", // Space between cards
        backgroundColor:theme==="dark"?"black":"white"
        }}
        className={`mainhome`}
        >
          
<VerseOfTheDay/>
<AllChapters/>
</Box>

    </>
  
  )
}

export default Home
