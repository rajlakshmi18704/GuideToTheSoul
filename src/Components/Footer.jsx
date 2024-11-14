// import React, { useContext } from 'react'
// import { Box ,Stack, Typography} from '@mui/material'
// import { ThemeContext } from '../context/themeContext'
// import { IconButton } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { useNavigate } from 'react-router-dom';
// import TwitterIcon from '@mui/icons-material/Twitter';
// function Footer() {
//     const {theme}=useContext(ThemeContext)
//     const navigate=useNavigate()
//   function  NavigateTo(link){
//       navigate(link)
//     }
//   return (
//     <>


   
//    <Box sx={{backgroundColor:theme==="dark"?"#1A1A1A":"white",display:"flex",flexDirection:"column",borderTop:"2px solid grey",borderBottom:"2px solid grey", padding: '4rem 2rem',display:{lg:"flex",xs:"none",md:"flex"},justifyContent:"center",alignItems:"center",marginLeft:"0"}} >
  
//   <Stack
//       direction="row"
//       spacing={6} 
//       sx={{
//         justifyContent: 'center',
//         alignItems: 'center', 
     
//         width: '100%',
//       }}
//     >
//       <Typography variant="body1" sx={{color:theme==="dark"?"#9CA3AF":"black"}} onClick={()=>{
//         NavigateTo('/about')
//       }}>About Us</Typography>
//       <Typography variant="body1"  sx={{color:theme==="dark"?"#9CA3AF":"black"}}>App</Typography>
//       <Typography variant="body1"  sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Bhagavad Gita AI</Typography>
//       <Typography variant='body1'  sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Acknowledgements</Typography>
//       <Typography variant="body1"  sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Privacy</Typography>
//       <Typography variant="body1" sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Terms</Typography>
//       <Typography variant="body1"  sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Blog</Typography>
//       <Typography variant="body1"  sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Donate</Typography>
//       <Typography variant="body1" sx={{color:theme==="dark"?"#9CA3AF":"black"}}>API</Typography>
//       <Typography variant="body1" sx={{color:theme==="dark"?"#9CA3AF":"black"}}>Contact Us</Typography>
  
//     </Stack>
//     <Stack  direction="row" 
//     spacing={7}
    
//     sx={{
//         justifyContent: 'center', 
//         alignItems: 'center', 
//      margin:"3rem ",
//         width: '100%',
//       }}>
//     {/* Facebook Icon */}
//   <IconButton sx={{color:"#9CA3AF"}} aria-label="facebook">
//         <FacebookIcon />
//       </IconButton>
//       <IconButton sx={{color:"#9CA3AF"}}
// aria-label="github" href="https://github.com" target="_blank">
//         <GitHubIcon />
//       </IconButton>
//       <IconButton sx={{color:"#9CA3AF"}} aria-label="twitter" href="https://twitter.com" target="_blank">
//         <TwitterIcon />
//       </IconButton>
//   </Stack>
//     </Box >
//     <Box sx={{backgroundColor:theme==="dark"?"#1A1A1A":"white",marginTop:"0",color:theme==="dark"?"white":"black"}}>
//  <p >© 2024 Copyright: <span>Rajlakshmi</span>. All rights reserved.</p> 
//    </Box>
  
//     </>

//   )
// }

// export default Footer






import React, { useContext } from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { ThemeContext } from '../context/themeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    function navigateTo(link) {
        navigate(link);
    }

    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme === "dark" ? "#1A1A1A" : "white",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: "2px solid grey",
                    borderBottom: "2px solid grey",
                    padding: '4rem 2rem',
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "0",
                }}
            >
                <Stack
                    direction="row"
                    spacing={6}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/about')}>About Us</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/app')}>App</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/bhagavad-gita')}>Bhagavad Gita AI</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/acknowledgements')}>Acknowledgements</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/privacy')}>Privacy</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/terms')}>Terms</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/blog')}>Blog</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/donate')}>Donate</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/api')}>API</Typography>
                    <Typography variant="body1" sx={{ color: theme === "dark" ? "#9CA3AF" : "black" }} onClick={() => navigateTo('/contact')}>Contact Us</Typography>
                </Stack>
                
                <Stack
                    direction="row"
                    spacing={7}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: "3rem",
                        width: '100%',
                    }}
                >
                    <IconButton sx={{ color: "#9CA3AF" }} aria-label="facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#9CA3AF" }} aria-label="github" href="https://github.com" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#9CA3AF" }} aria-label="twitter" href="https://twitter.com" target="_blank">
                        <TwitterIcon />
                    </IconButton>
                </Stack>
            </Box>
            
            <Box
    sx={{
        backgroundColor: theme === "dark" ? "#1A1A1A" : "white",
        marginTop: "0",
        padding: "1rem 0", 
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
    }}
>
    <Typography
        variant="body1"
        sx={{
            color: "#9CA3AF", 
            textAlign: "center",
        }}
    >
        © 2024 Copyright: <span style={{ color: "orange" }}>Rajlakshmi</span>. All rights reserved.
    </Typography>
</Box>

        </>
    );
}

export default Footer;
