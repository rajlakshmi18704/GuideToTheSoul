
import React, { useState } from 'react';
import { Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function SearchVerses() {
const [searchTerm,setSearchTerm]=useState("")

  


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '2px solid grey',
        borderBottom: '2px solid grey',
        padding: '1rem',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {/* Left Side: Verses Label */}
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        23 Verses
      </Typography>

      {/* Right Side: Search Bar and Sorting */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Number Input Search */}
        <TextField
          type="number"
          variant="outlined"
          placeholder="Enter a number"
          size="small"
          value={searchTerm}
    
          InputProps={{
            inputProps: { min: 1, max: 18 }, // Limit input between 1 and 18
            endAdornment: (
              <InputAdornment position="end">
                <IconButton >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Sort Button with Ascending/Descending Arrow */}
        <IconButton>

        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchVerses;

