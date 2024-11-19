import { Typography } from '@mui/material'
import {useState, useEffect } from 'react';
import React from 'react'
import { options } from '../utils/fetchData'
import SeacrhCard from './SeacrhCard';
import { useSearchParams } from 'react-router-dom'

function SearchResults() {
    const [searchParams]=useSearchParams();
    const [matchedVerses,setMatchedVerses]=useState([])
    const query=searchParams.get('query')
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const allVerses = [];
    const fetchVerses = async () => {
    try {
      for (let chapter = 1; chapter <= 18; chapter++) {
        const response = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/`, options)
        const chapterVerses = await response.json();
        allVerses.push(...chapterVerses); 
      
      }
      setData(allVerses); 
      
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
    <div>
   
   
  {filteredData && filteredData.length > 0 ? (
        filteredData.map((verse) => (
          <div key={verse.id}>
            <h3>{verse.slug}</h3>
            <h2>{verse.translations[4].description}</h2>
            <p>{verse.transliteration}</p>
          </div>
        ))
      ) : (
        <>
          <Typography variant="h2" sx={{ margin: "0 2vmax" }}>
            Searching Results for: {query || 'No query provided'}
          </Typography>
          <Typography variant="h4" sx={{ color: "orange" }}>
            NO Results
          </Typography>
        </>
      )}

  


  {/* <SeacrhCard/> */}
    
  </div>
  )
}

export default SearchResults



