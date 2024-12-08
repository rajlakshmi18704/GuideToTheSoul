import {React , useState }from 'react'
import styles from './Navbar.module.css'
import { AppBar, Toolbar, Button, TextField, Typography,Stack,InputAdornment, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserAuth } from '../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@mui/material';
import {Box} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {NavLink} from 'react-router-dom';
import {ThemeContext} from '../context/themeContext'
import { useContext } from 'react';
function Navbar() {
  const {user,logOut}=UserAuth()
  
  // console.log(user.email)
  const [anchorEl, setAnchorEl] = useState(null);
  const {theme,handleOnclick}=useContext(ThemeContext)
  const [avatarMenuAnchor, setAvatarMenuAnchor] = useState(null);
const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null); 
  const [searchedValue,setSearchedValue]=useState("")
  const navigate=useNavigate()
  const handleAvtaarMenuOpen = (event) => {
    setAvatarMenuAnchor(event.currentTarget); 
  };
 

  const handleAvtaarMenuClose = () => {
    setAvatarMenuAnchor(null); 
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget); 
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null); 
  };
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected route
    // handleMenuClose(); // Close the menu after navigating
  };
  const handleLogout=()=>{
    try{
      console.log("logOut")
logOut()
navigate("/LogIn")
    }
    catch(error){
console.log(error)
    }
  }
 
  
 
  return (
 <AppBar  
 sx={{   backgroundColor: theme === 'dark' ? '#252525' : 'white', height: { xs: "14vmax", lg: "6vmax" },  
 width: {lg:'100%',xs:"100%"} ,textAlign:"center",justifyContent:"center"
  // width:{lg:"25%",xs:"100vmin"}
  }}>
   <Toolbar >
    <Stack  sx={{ width: { lg: '25vmax', xs: '150px' }, marginRight: '0.3rem',display:"flex",
    justifyContent:"space-between",alignItems:"center"}}>
    <Typography variant='h4'sx={{ color:theme==='dark'?"white":"black", fontWeight: 
      '700',fontSize:'2rem',  display: 'inline-block',   padding: '12px 8px',   }} >
      Bhagwad Gita</Typography>
    </Stack>
  
<Stack  sx={{   display: { xs: 'none',md: 'none' , sm: 'none',lg: 'flex' },width:{lg:"40%",xs:"60%%"},
flexDirection:
 'row',marginLeft:{lg:"23px",xs:"18px"},justifyContent:{lg:"space-around",xs:"flexEnd"} ,padding:"1rem 0", 
  marginRight: { xs: '4px', sm: '0' },textAlign:"center" }}>
<NavLink to="/" style={{textDecoration: 'none' ,}}>
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem'}} >
            Home
          </Typography>
        </NavLink>

        
        <NavLink to="/about" style={{ textDecoration: 'none',fontSize:'2vmax' }}>
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem', border: 'none',   outline: 'none','&:hover': {
       
        },}} >
            About
          </Typography>
        </NavLink>
        <NavLink to="/gallery"  style={{ textDecoration: 'none', color: '#000000',fontSize:'2rem',fontWeight:"700" }}>
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem'}} >
         Gallery
          </Typography>
        </NavLink>
        {/* <NavLink to="/donate"  style={{ textDecoration: 'none',fontSize:'16px' }}>
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem',display:"flex",marginRight:"2vmax"}} >
          Quotes
          </Typography>
        </NavLink> */}
        </Stack  >
        <Stack sx={{display:{lg:"flex"},flexDirection: 'row',width: "400px",}}>

       
        {/* Search Input */}
        <Stack   sx={{
 display: { xs: 'none', sm: 'flex', }
   
  }}>
         
        
        <Box sx={{color:theme==='dark'?"white":"black"
,height:"2vmax",display:"flex",justifyContent:"center",alignItems:"center",padding:"0 2vmax",
border:"2px solid grey",borderRadius:"3px",padding:" 0 2rem",
"&:hover": {
      borderColor: "orange", 
    },
        }}>
          <SearchIcon  sx={{color:theme==='dark'?"white":"black"}}onClick={()=>{
                  console.log(searchedValue)
 handleNavigation(`/SearchResults?query=${searchedValue}`); 
}}/>
          <input placeholder='Search...' 
          style={{border:"none",backgroundColor:theme==='dark'?"#252525":"white",height:"60%",

outline:"none",

          }} onChange={(e)=>{
            setSearchedValue(e.target.value)}}
          />
        </Box>
    
        </Stack>
        <Stack sx={{  marginLeft: { 
      xs: "5%",  // Small devices
      sm: "8rem",  // Medium devices
      md: "12rem",  // Larger devices (Tablet and Desktop)
      lg: "4rem"  // Large devices (e.g., Large Desktop)
    },   display:"flex",flexDirection:"row" ,alignItems:"center",marginRight:{lg:"6vmax",xs:"2vmax"}}} >
      {theme === 'dark' ? (
            < LightModeIcon  onClick={handleOnclick} sx={{ fontSize: "2rem",color: 'yellow' }} />
         ) : (
            <DarkModeIcon   onClick={handleOnclick}sx={{ fontSize: "2rem",color:"black"  }} />
         )}
       
 
 {user?.email?(
  <div>
  {/* Avatar Button */}
  <Button
    sx={{
      color: theme === 'dark' ? 'white' : 'black',
      fontSize: '1.5rem',
      display: 'flex',
    }}
    onClick={handleAvtaarMenuOpen}
  >
    <Avatar sx={{ backgroundColor: 'red' }}>
      {user?.email?.charAt(0).toUpperCase() || '?'}
    </Avatar>
  </Button>


  <Menu
    anchorEl={avatarMenuAnchor}
    open={Boolean(avatarMenuAnchor)} 
    onClose={handleAvtaarMenuClose }
    PaperProps={{
      style: {
       
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black', 
        
      }
    }}
  >
 
    <MenuItem onClick={handleAvtaarMenuClose }>
      <NavLink
        to="/savedSlokas"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        Saved Slokas
      </NavLink>
    </MenuItem>

    <MenuItem
      onClick={() => {
        handleLogout();
        handleAvtaarMenuClose ();
      }}
    >
      Logout
    </MenuItem>
  </Menu>
</div>)
         :(
          <Box sx>
          <NavLink to="/LogIn"  style={{ textDecoration: 'none',fontSize:'16px' }}>
                    {/* <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem',display:"flex",}} > */}
           <Avatar/>
                    {/* </Typography> */}
                  </NavLink>
                   </Box> 
         )
           
         }
  
      <IconButton 
         onClick={handleMobileMenuOpen}
        sx={{ 
          display: { xs: 'flex', md: 'none' },  
          marginLeft: '0'
        }}
      >
        <MenuIcon sx={{ fontSize: '2rem' ,}} />
      </IconButton>

    
      <Menu sx={{  display:{lg:"none"}}}
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        PaperProps={{
          style: {
            width: '70vmax',
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black', 
            
          }
        }}
       
      >
         <MenuItem>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid grey",
                  borderRadius: "3px",
                 width:"100%",
                  "&:hover": {
                    borderColor: "orange",
                  },
                }}
              >
                <SearchIcon
                  sx={{ color: theme === "dark" ? "white" : "black" }}
                  onClick={() =>{
                    handleNavigation(`/SearchResults?query=${searchedValue}`); handleMobileMenuClose();
                  }
                   
                  }
                  
                />
                <input
                  placeholder="Search..."
                  style={{
                    border: "none",
                    backgroundColor: theme === "dark" ? "#252525" : "white",
                    outline: "none",width:"80%",height:"100%",
                    color: theme === "dark" ? "white" : "black",
                  }}
                  onChange={(e) => setSearchedValue(e.target.value)}
                />
              </Box>
            </MenuItem>
       <MenuItem onClick={() => {handleNavigation('/')
        handleMobileMenuClose(); 
       }}>Home</MenuItem>
        <MenuItem onClick={() => {handleNavigation('/about')
          handleMobileMenuClose();
        } }>About</MenuItem>
        <MenuItem onClick={() =>{handleNavigation('/gallery') 
          handleMobileMenuClose();} }>Gallery</MenuItem>
        {/* <MenuItem onClick={() => {handleNavigation('/quotes')
          handleNavigation('/donate')
        }}>Quotes</MenuItem> */}
      </Menu>
        </Stack>
       

        </Stack>
      </Toolbar>
 </AppBar>
  )
}

export default Navbar
