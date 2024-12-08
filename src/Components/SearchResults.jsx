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
     

    } catch (error) {
      console.error("Error fetching verses:", error);
    }
    finally{
      setIsLoading(false)
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
      paddingTop: "4vmax", marginTop: "0",justifyContent:"center",height:{xs:"100%"},minHeight:"100vh"
,      backgroundColor: theme === "dark" ? "#252525" : "white", color: theme === "dark" ? "white" : "black",
     width:{lg:"100vmax",xs:"100vmax"} ,paddingLeft:{xs:"4vmax",lg:"1vmax"},paddingRight:{xs:"4vmax",lg:"2vmax"},
    }}>

      <Typography variant='h2' sx={{
        paddingTop: {xs:"12vmax",lg:"3vmax"},fontSize:{lg:"3vmax",xs:"4vmax"},
        justifyContent: "center", alignItems: "center",fontWeight:"700"
      }}>RESULTS</Typography>
      <Typography  variant="h4"sx={{color:"orange",fontWeight:"Bold",paddingBottom:"2vmax ",
      fontSize:{xs:"3vmax"},
        borderBottom:"2px solid grey"}}>Search Results for :{query}</Typography>
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((verse) => (
          <Box key={verse.id}   sx={{
            margin:{lg:"4vmax",xs:"2vmax"}
          }}>
            <SeacrhCard  verse={verse} 
             
              />

          </Box>
        ))
      ) : (
        <div></div>
      )}
     {isLoading ? (
        <Box
          sx={{
            paddingBottom: '40vmax',
            paddingLeft: '3vmax',
            paddingTop: '3vmax',
            color: 'orange',
          }}
        >
          Loading...
        </Box>
      ) : filteredData.length === 0 ? (
        <Typography
          variant="h4"
          sx={{
            padding: '0 4vmax',
            color: 'orange',
          }}
        >
          NO Results
        </Typography>
      ) : (
        filteredData.map((verse) => (
          <Box key={verse.id} sx={{ margin: { lg: '4vmax', xs: '2vmax',display:"flex",justifyContent:"center" } }}>
            <SeacrhCard verse={verse} />
          </Box>
        ))
      )}
    </Box>
  )
}

export default SearchResults



