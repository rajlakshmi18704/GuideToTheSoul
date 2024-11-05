import React from 'react'
import styles from  "./Home.module.css"

import VerseOfTheDay from '../Components/VerseOfTheDay'
import ChapterCard from '../Components/ChapterCard'
import { Box } from '@mui/material'
import AllChapters from '../Components/AllChapters'
function Home() {
  return (
    <>
      <div className={styles.mainhome}>

</div>
<Box sx={{ display: "flex",
        flexDirection: "row", // Display cards in a row
        flexWrap: "wrap", // Allow wrapping to next line
        gap: "1vmax", // Space between cards
        }}>
          
<VerseOfTheDay/>
<AllChapters/>
</Box>

    </>
  
  )
}

export default Home
