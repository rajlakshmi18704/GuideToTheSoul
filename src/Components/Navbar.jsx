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
    justifyContent:"space-between",}}>
    <Typography variant='h4'sx={{ color:theme==='dark'?"white":"black", fontWeight: 
      '700',fontSize:'2rem',  display: 'inline-block',   padding: '12px 10px',   }} >
      Bhagwad Gita</Typography>
    </Stack>
  
<Stack  sx={{   display: { xs: 'none',md: 'none' , sm: 'none',lg: 'flex' },width:{lg:"40%",xs:"0"},flexDirection:
 'row',marginLeft:"23px",justifyContent:"space-between" ,  marginRight: { xs: '10px', sm: '0' }, }}>
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
          <Typography sx={{color:theme==='dark'?"white":"black",fontSize:'1.5rem',display:"flex",}} >
          Quotes
          </Typography>
        </NavLink>
        </Stack  >
        <Stack sx={{display:{lg:"flex"},flexDirection: 'row',width: "400px",}}>

       
        {/* Search Input */}
        <Stack   sx={{
 display: { xs: 'none', sm: 'flex', }
   
  }}>
         
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{ marginLeft: 'auto', backgroundColor:theme==='dark'?"black":"white",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'gray', // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'gray', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange', // Border color when focused
            },color:theme==='dark'?"white":"black"
          }, }}  onChange={(e)=>{
            setSearchedValue(e.target.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon onClick={()=>{
                  console.log(searchedValue)
 handleNavigation(`/SearchResults?query=${searchedValue}`);
}
                }
 
                
                sx={{color:theme==="dark"?"white":"black"}}/>
              </InputAdornment>
            ),
          }}
    
        />
    
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
          marginLeft: '5px'
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
            width: '200px',
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black', 
          
          }
        }}
       
      >
       <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigation('/about')}>About</MenuItem>
        <MenuItem onClick={() => handleNavigation('/donate')}>Donate</MenuItem>
        <MenuItem onClick={() => handleNavigation('/quotes')}>Quotes</MenuItem>
      </Menu>
        </Stack>
       

        </Stack>
      </Toolbar>
 </AppBar>
  )
}

export default Navbar
