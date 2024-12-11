import React from 'react'
import { useState,useEffect,useContext } from 'react'
import {useFireStore} from "../utils/fireStore";
import { Box,Typography,CircularProgress } from '@mui/material';
import { ThemeContext } from '../context/themeContext';
import { UserAuth } from '../context/AuthContext';
import SavedSlokaCard from '../Components/SavedSlokaCard';

function SavedSlokas() {
  const {user}=UserAuth()
  const {theme}=useContext(ThemeContext)
  const { getSavedSlokas } = useFireStore();
  const [slokaList,setsavedSlokaList]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (user?.uid) {
   getSavedSlokas(user?.uid)
        .then((data) => {
          setsavedSlokaList(data);
          console.log(data, "data");
        })
        .catch((err) => {
          console.log(err, "error");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user?.uid, getSavedSlokas]);
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          padding: { xs: "8vmax 0", lg: "4vmax 0" },
          paddingTop: { lg: "3%", xs: "20%" },
          backgroundColor: theme === "dark" ? "#1A1A1A" : "white",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "2rem", 
        color: theme === "dark" ? "white" : "black" ,fontSize:{xs:"4vmax"

        }}}>
     SavedSlokas
        </Typography>
  
        {isLoading ? (
          <Typography
            variant="h4"
            sx={{
              color: "orange",
              fontSize: { xs: "1.5rem", lg: "2rem" },
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "1.5rem",

            }}
          >
            Loading your slokas...
          </Typography>
        ) : (
          slokaList.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: { xs: "80%", lg: "100vmax" },
                alignItems: "center",
                justifyContent:"center",flexDirection:"column",
               
              }}
            >
              {slokaList.map((sloka, index) => (
           <SavedSlokaCard key={index} sloka={sloka}
           setsavedSlokaList={setsavedSlokaList}
           />
               
                
              ))}
            </Box>
          ) : (
            <Box sx={{ width: {lg:"100vmax",xs:"100%"},
            minHeight:{xs:"100vh",
              display:"flex",justifyContent:"center",textAlign:"center",
            }}}>

            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: theme === "dark" ? "white" : "black",
              }}
            >
              No saved slokas found.
            </Typography>
            </Box>
          )
        )}
      </Box>
    );
  
}

export default SavedSlokas
