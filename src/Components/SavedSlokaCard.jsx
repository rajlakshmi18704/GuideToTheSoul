import{ React ,useState}from 'react'
import { Box,Typography,Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UserAuth } from '../context/AuthContext';
import { useFireStore } from '../utils/fireStore.js';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

function SavedSlokaCard({sloka,setsavedSlokaList}) {
  const {RemoveSlokas,checkIfSlokaSaved}=useFireStore()
  // const {RemoveSlokas}=useFireStore()
  const {user}=UserAuth()
  const {theme}=useContext(ThemeContext)
  const[isSavedSloka,setIsSaveedSlokas]=useState(true)
//  const handleRemoveSloka=async()=>{
//   await RemoveSlokas(user?.uid,sloka.id)
  
//   // const isSettoSaved=await checkIfSlokaSaved(user?.uid,dataId);
//   setsavedSlokaList((prevList) => prevList.filter((item) => item.id !== sloka.id));
//   console.log("Sloka removed:", sloka.id);
//   console.log(isSavedSloka)
//  }
// const handleRemoveSloka = async () => {
//   try {
//     await RemoveSlokas(user?.uid, sloka.id);
//     setsavedSlokaList((prevList) => prevList.filter((item) => item.id !== sloka.id));
//     console.log("Sloka removed:", sloka.id);
//   } catch (error) {
//     console.error("Failed to remove sloka:", error);
//   }
// };
const handleRemoveSloka=async()=>{
  const dataId = sloka?.id?.toString();
  console.log("User ID:", user?.uid);
console.log("Data ID:", dataId);

await RemoveSlokas(user?.uid,dataId
 );
 setsavedSlokaList((prevList) => prevList.filter((item) => item.id !== sloka.id));
 const isSettoSaved=await checkIfSlokaSaved(user?.uid,dataId);
setIsSaveedSlokas(isSettoSaved)

 console.log(isSettoSaved)
 
};
 

  return (
  
  
   <Box sx={{width:{lg:"60%",xs:"100%"},display:"flex",justifyContent:"center",flexDirection:"column",
    backgroundColor: theme === "dark" ? "#2E2E2E" : "#F5F5F5",
   }}>

<Typography
  variant="h6"
  sx={{
   
    color: theme === "dark" ? "white" : "black",
    padding: { xs: "0.5rem", sm: " 0 1rem" },
    borderRadius: "8px",
    width: "100%",
    textAlign: "center",
    fontSize: { xs: "4vmax", lg: "3vmax" },
    marginBottom: "0.5rem",
  }}
>
  {sloka.slug}
</Typography>

<Typography
  variant="h6"
  sx={{
    backgroundColor: theme === "dark" ? "#2E2E2E" : "#F5F5F5",
    color: theme === "dark" ? "white" : "black",
    padding: { xs: "0.5rem", sm: "1rem" },
    borderRadius: "8px",
    textAlign: "center",
    fontSize: { xs: "1rem", sm: "1.25rem" },
    marginBottom: "1rem",
  }}
>
  {sloka.translation}
</Typography>

<Box
  display="flex"
  justifyContent="center"
  padding={{ xs: "1rem", sm: "2rem" }}
  sx={{
    borderBottom: "2px solid grey",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "orange",
      padding: { xs: "0.5rem 1rem", sm: "0.75rem 1.5rem" },
      fontSize: { xs: "0.8rem", sm: "1rem" },
    }}
    startIcon={<FavoriteBorderIcon />}
    onClick={handleRemoveSloka}
  >
    Remove from Favorites
  </Button>
</Box>
</Box>
  )}

export default SavedSlokaCard


