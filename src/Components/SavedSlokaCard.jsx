import React from 'react'
import { Box,Typography } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
function SavedSlokaCard({sloka,setsavedSlokaList}) {
    const {theme}=useContext(ThemeContext)
  return (
    <div>
         <Typography
             
                  variant="h6"
                  sx={{
                    backgroundColor: theme === "dark" ? "#2E2E2E" : "#F5F5F5",
                    color: theme === "dark" ? "white" : "black",
                    padding: "1rem",
                    borderRadius: "8px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {sloka.slug}
                </Typography>    
                <Typography
               
                  variant="h6"
                  sx={{
                    backgroundColor: theme === "dark" ? "#2E2E2E" : "#F5F5F5",
                    color: theme === "dark" ? "white" : "black",
                    padding: "1rem",
                    borderRadius: "8px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {sloka.translation}
                </Typography> 
    </div>
  )
}

export default SavedSlokaCard
