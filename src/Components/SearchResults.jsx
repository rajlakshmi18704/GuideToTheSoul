import { Typography, Box } from '@mui/material'
import { useState, useEffect, useContext } from 'react';
import React from 'react'
import { options } from '../utils/fetchData'
import { ThemeContext } from '../context/themeContext';
import SeacrhCard from './SeacrhCard';
import { useSearchParams } from 'react-router-dom'

function SearchResults() {
  const { theme } = useContext(ThemeContext)
  const [searchParams] = useSearchParams();
  const [matchedVerses, setMatchedVerses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const query = searchParams.get('query')
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const allVerses = [];
  const fetchVerses = async () => {
    try {
      setIsLoading(true)
      for (let chapter = 1; chapter <= 18; chapter++) {
        const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`, options)
        const chapterVerses = await response.json();
        allVerses.push(...chapterVerses);

      }

      setData(allVerses);
      if (allVerses.length>0) setIsLoading(false)

    } catch (error) {
      console.error("Error fetching verses:", error);
    }
  };

  useEffect(() => {
    fetchVerses();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredData(data);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const results = data.filter((verse) =>
        verse.translations.some((translation) =>
          translation.description.toLowerCase().includes(lowerCaseQuery)

        )

      );

      setFilteredData(results);
      console.log(results)
    }
  }, [query, data]);

  return (
    <Box sx={{
      paddingTop: "4vmax", marginTop: "0",justifyContent:"center"
,      backgroundColor: theme === "dark" ? "#252525" : "white", color: theme === "dark" ? "white" : "black",
      minHeight: "50vh", width: "100vw",paddingLeft:{xs:"4vmax",lg:"8vmax"},paddingRight:{xs:"4vmax",lg:"4vmax"},
    }}>

      <Typography variant='h2' sx={{
        paddingTop: {xs:"14vmax",lg:"3vmax"},fontSize:{lg:"3vmax",xs:"8vmax"},
        justifyContent: "center", alignItems: "center",fontWeight:"700"
      }}>RESULTS</Typography>
      <Typography  variant="h4"sx={{color:"orange",fontWeight:"Bold",paddingBottom:"2vmax ",borderBottom:"2px solid grey"}}>Search Results for :{query}</Typography>
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((verse) => (
          <div key={verse.id} style={{ margin: "4vmax" }}>
            <SeacrhCard slug={verse.slug} transliteration={verse.transliteration}
              description={verse.translations[4].description

              } />

          </div>
        ))
      ) : (
        <div></div>
      )}
      {isLoading ? (
        <Box sx={{
          paddingBottom: "40vmax",paddingLeft:"3vmax",paddingTop:"3vmax",color:"orange"
        }}>Loading...</Box>
      ) : (
        <Typography variant='h4' sx={{padding:"0 4vmax",color:"orange",}}>NO Results</Typography>
      )
      }



      {/* <SeacrhCard/> */}

    </Box>
  )
}

export default SearchResults



