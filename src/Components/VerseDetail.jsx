import React, { useEffect, useState,useContext } from 'react'
import {Button, Box, Typography ,Stack,CircularProgress,} from '@mui/material'
import { options } from '../utils/fetchData'
import { Navigate, useNavigate, useParams } from 'react-router'
import { ThemeContext } from '../context/themeContext';
import forwardArrow from'../assets/forwrdArrow.png'
import backArrow from '../assets/backArrow.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UserAuth } from '../context/AuthContext';
// import { useSloka } from '../context/SlokaContext';
import { useFireStore } from '../utils/fireStore';
function VerseDetail() {
  const {user}=UserAuth()
  // const { savedSlokas, addSloka, removeSloka } = useSloka();
  // console.log(user)
  const {addToSaveSlokas,RemoveSlokas,checkIfSlokaSaved}=useFireStore()
    const {id,verseNo}=useParams()
    const navigate=useNavigate()
    const {theme}=useContext(ThemeContext)
    const[isSavedSloka,setIsSaveedSlokas]=useState(false)
    const [detail,setDetail]=useState([])
    const [loading, setLoading] = useState(true);
    const fetchDetail=async()=>{
      const data=  await  fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${verseNo}/`,options)
      const res= await data.json()
      setDetail(res)
      console.log(res)
      setLoading(false);
    }
  const handleSavedSlokas= async ()=>{
    if(!user){
      navigate('/LogIn')
      return;
    }
      const data={
        id:detail?.id,
        translation:detail?.translations[0].description,
        slug:detail?.slug
      }
     
      const dataId = detail?.id?.toString();
      console.log(dataId)
await addToSaveSlokas(user?.uid,dataId,data);
 const isSavedSlokaList =await checkIfSlokaSaved(user?.uid,dataId)
 setIsSaveedSlokas(isSavedSlokaList
 )     

 console.log(isSavedSlokaList)
 console.log("User ID:", user?.uid);
console.log("Data ID:", dataId);

    };
    useEffect(()=>{
if(!user){
  setIsSaveedSlokas(false)
  return;
}

const fetchSlokaStatus = async () => {
  try {
    const isSaved = await checkIfSlokaSaved(user?.uid, detail?.id?.toString());
    setIsSaveedSlokas(isSaved);
  } catch (error) {
    console.error("Error checking if sloka is saved:", error);
  }
};
fetchSlokaStatus();
    },[id,user,checkIfSlokaSaved]);
    const handleRemoveSloka=async()=>{
      const dataId = detail?.id?.toString();
      console.log("User ID:", user?.uid);
console.log("Data ID:", dataId);

await RemoveSlokas(user?.uid,dataId
     );
     const isSettoSaved=await checkIfSlokaSaved(user?.uid,dataId);
 setIsSaveedSlokas(isSettoSaved)

     console.log(isSettoSaved)
     
    };
    useEffect(()=>{
fetchDetail()
    },[id,verseNo])
    if (loading) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      );
    }
  return (
    <Box sx={{display:"flex",color:theme==="dark"?"white":"black",
    backgroundColor:theme==="dark"?"#1A1A1A":"white",width:{lg:"100%",xs:"100%"},
    alignItems:"center",hieght:"100vmax",paddingLeft:{lg:"4vmax"}}} >
        <Box sx={{
cursor: "pointer",
backgroundColor: "black",
position:"fixed",
padding: "15px",


left: "1rem",
top: "50%",
transform: "translateY(-50%)",
borderRadius: "  50%",
        }} onClick={()=>{
          console.log("clicked")
          const previousVerseNo = parseInt(verseNo) - 1; 
    if (previousVerseNo > 0) {
      navigate(`/chapter/${id}/verse/${previousVerseNo}`);
    } 
    else {
      console.log("No previous verse available");
    }
        }}>
        <img src={backArrow}  />
        </Box>
       
  
    <Box  sx= {{width:{lg:"100%",xs:"100%"},
      
paddingTop:{lg:"12%",xs:"35%"},
     paddingBottom:{xs:"12%",lg:"6%"},
    
    }}>
     
     

    
     
      <Box sx={{Width:"100%",display:"flex",flexDirection:"column",textAlign:"center",
      justifyContent:"center"
        ,padding:{lg:"4vmax"}, 
      }}>


  


        <Typography variant="h4" align="center" gutterBottom>
    BG {detail.chapter_number}.{detail.verse_number}
    </Typography>
    <Typography sx={{borderBottom:"2px solid grey",paddingBottom :"2%",fontSize:{lg:"2rem",xs:"3vmax" },
    display:"flex",textAlign:"center",
      flexWrap:"wrap",padding:{lg:" 0 12vmax",xs:"0 9vmax"},
   

  }}>
      {
 detail.transliteration
}
    </Typography>
    <Typography variant="body1" sx={{fontWieght:"bold", fontSize:{lg:"5vmax",xs:"7vmax"},
  }}>
      Translation
    </Typography>
    <Typography variant="body1" sx={{borderBottom:"2px solid grey",margin :"1%",
      fontSize:{lg:"2vmax",xs:"3vmax"},
      lineHeight:{lg:"4vmax",xs:"12vmax"},padding:{lg:" 0 12vmax",xs:"0 9vmax"}}}>
   
      {
      detail?.translations?.filter(
        (translation) => translation.author_name === "Swami Sivananda"
      ).map((translation) => translation.description).join(", ") || "No description available"
    }
    </Typography>
    <Typography variant="h6" sx={{fontWieght:"bold", fontSize:{lg:"5vmax",xs:"7vmax"},}}>
     Commentary
    </Typography >
    <Typography variant="body" sx={{margin :"1%",
      fontSize:{lg:"2vmax",xs:"3vmax"},
      lineHeight:{lg:"4vmax",xs:"12vmax"},padding:{lg:" 0 12vmax",xs:"0 9vmax"}}}>
      
      {
      detail?.commentaries?.filter(
        (translation) => translation.author_name === "Sri Purushottamji"
      ).map((translation) => translation.description).join(", ") || "No description available"
    }
    </Typography>
   
    <Box display="flex" justifyContent="center" padding={2} sx={{borderBottom:"2px solid grey"}}>
          <Button
            variant="contained"
          sx={{   backgroundColor: isSavedSloka ? "red" : "orange",}}
            startIcon={isSavedSloka ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={isSavedSloka ? handleRemoveSloka : handleSavedSlokas}
          >
            {isSavedSloka ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </Box>
    </Box>
    </Box>
    <Box sx={{
cursor: "pointer",
position:"fixed",

width:"2rem",
right: "1rem",
top: "50%",
transform: "translateY(-50%)",
backgroundColor: "black",
padding: "15px",
borderRadius: " 50% ",
        }}
        onClick={
          ()=>{
            const NextVerseNo = parseInt(verseNo) +1; 
            if (NextVerseNo > 0) {
              navigate(`/chapter/${id}/verse/${NextVerseNo}`);
            } 
            else {
              console.log("No previous verse available");
            }
          }
        }>
       <img src={forwardArrow} alt=""  sx={{display:"flexEnd"}}/>
       </Box>
    </Box>
  )

}

export default VerseDetail
