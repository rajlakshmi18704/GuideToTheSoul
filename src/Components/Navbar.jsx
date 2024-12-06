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
  const open = Boolean(anchorEl);
  const [searchedValue,setSearchedValue]=useState("")
  const navigate=useNavigate()
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); 
  };
 

  const handleMenuClose = () => {
    setAnchorEl(null); 
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
 width: {lg:'100%',xs:"100%"} 
  // width:{lg:"25%",xs:"100vmin"}
  }}>
   <Toolbar >
    <Stack  sx={{ width: { lg: '25vmax', xs: '150px' }, marginRight: '1.5rem',display:"flex",
    justifyContent:"space-between",alignItems:"center"}}>
    <Typography variant='h4'sx={{ color:theme==='dark'?"white":"black", fontWeight: 
      '700',fontSize:'2rem',  display: 'inline-block',   padding: '12px 10px',   }} >
      Bhagwad Gita</Typography>
    </Stack>
  
<Stack  sx={{   display: { xs: 'none',md: 'none' , sm: 'none',lg: 'flex' },width:{lg:"40%",xs:"0"},flexDirection:
 'row',marginLeft:"23px",justifyContent:"space-between" ,padding:"2rem 0",  marginRight: { xs: '10px', sm: '0' },textAlign:"center" }}>
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
        <NavLink to="/donate"  style={{ textDecoration: 'none', color: '#000000',fontSize:'2rem',fontWeight:"700" }}>
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem'}} >
            Donate 
          </Typography>
        </NavLink>
        <NavLink to="/donate"  style={{ textDecoration: 'none',fontSize:'16px' }}>
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem',display:"flex",marginRight:"2vmax"}} >
          Quotes
          </Typography>
        </NavLink>
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
      xs: "20%",  // Small devices
      sm: "8rem",  // Medium devices
      md: "12rem",  // Larger devices (Tablet and Desktop)
      lg: "4rem"  // Large devices (e.g., Large Desktop)
    },   display:"flex",flexDirection:"row" ,alignItems:"center"}} >
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
    onClick={handleMenuOpen}
  >
    <Avatar sx={{ backgroundColor: 'red' }}>
      {user?.email?.charAt(0).toUpperCase() || '?'}
    </Avatar>
  </Button>


  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleMenuClose }
    sx={{
      mt: 1, 
    }}
  >
 
    <MenuItem onClick={handleMenuClose }>
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
        handleMenuClose ();
      }}
    >
      Logout
    </MenuItem>
  </Menu>
</div>)
         :(
          <Box>
          <NavLink to="/LogIn"  style={{ textDecoration: 'none',fontSize:'16px' }}>
                    {/* <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem',display:"flex",}} > */}
           <Avatar/>
                    {/* </Typography> */}
                  </NavLink>
                   </Box> 
         )
           
         }
  
      <IconButton 
         onClick={handleMenuOpen}
        sx={{ 
          display: { xs: 'flex', md: 'none' },  
          marginLeft: '2px'
        }}
      >
        <MenuIcon sx={{ fontSize: '2rem' ,}} />
      </IconButton>

    
      <Menu sx={{  display:{lg:"none"}}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            width: '100vmax',
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
                    handleNavigation(`/SearchResults?query=${searchedValue}`); handleMenuClose();
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
        handleMenuClose(); 
       }}>Home</MenuItem>
        <MenuItem onClick={() => {handleNavigation('/about')
          handleMenuClose();
        } }>About</MenuItem>
        <MenuItem onClick={() =>{handleNavigation('/donate') 
          handleMenuClose();} }>Donate</MenuItem>
        <MenuItem onClick={() => {handleNavigation('/quotes')
          handleNavigation('/donate')
        }}>Quotes</MenuItem>
      </Menu>
        </Stack>
       

        </Stack>
      </Toolbar>
 </AppBar>
  )
}

export default Navbar
