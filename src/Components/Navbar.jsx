import {React , useState }from 'react'
import styles from './Navbar.module.css'
import { AppBar, Toolbar, Button, TextField, Typography,Stack,InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {NavLink,useNavigate} from 'react-router-dom';
import {ThemeContext} from '../context/themeContext'
import { useContext } from 'react';
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const {theme,handleOnclick}=useContext(ThemeContext)
  const open = Boolean(anchorEl);
  const navigate=useNavigate()
 
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected route
    // handleMenuClose(); // Close the menu after navigating
  };
  // Handle menu close
 
  
 
  return (
 <AppBar  b
 sx={{   backgroundColor: theme === 'dark' ? '#252525' : 'white', height: { xs: "14vmax", lg: "6vmax" } }}>
   <Toolbar >
    <Stack  sx={{width:"25%", marginRight: '1.5rem',display:"flex",justifyContent:"center",}}>
    <Typography variant='h4'sx={{ color:theme==='dark'?"white":"black", fontWeight: '700',fontSize:'2rem',  display: 'inline-block',   padding: '12px 20px',   }} >Bhagwad Gita</Typography>
    </Stack>
  
<Stack  sx={{   display: { xs: 'none',md: 'none' , sm: 'none',lg: 'flex' },width:"40%",flexDirection: 'row',marginLeft:"0",justifyContent:"space-evenly" ,  marginRight: { xs: '40px', sm: '0' }, }}>
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
        <Stack sx={{display:"flex",flexDirection: 'row',width: "50%",}}>

       
        {/* Search Input */}
        <Stack   sx={{
 display: { xs: 'none', sm: 'flex', }
    // Combine properties in a single object
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
          }, }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon  sx={{color:theme==="dark"?"white":"black"}}/>  {/* Add the Search icon */}
              </InputAdornment>
            ),
          }}
    
        />
    
        </Stack>
        <Stack sx={{ justifyContent: "space-between",   marginLeft: { 
      xs: "8rem",  // Small devices
      sm: "8rem",  // Medium devices
      md: "12rem",  // Larger devices (Tablet and Desktop)
      lg: "4rem"  // Large devices (e.g., Large Desktop)
    },   display:"flex",flexDirection:"row" ,alignItems:"center"}}  onClick={handleOnclick}>
      {theme === 'dark' ? (
            < LightModeIcon  sx={{ fontSize: "2rem",color: 'yellow' }} />
         ) : (
            <DarkModeIcon sx={{ fontSize: "2rem",color:"black"  }} />
         )}

      <IconButton 
        
        sx={{ 
          display: { xs: 'flex', md: 'none' },  // Only show on small devices
          marginLeft: '10px'
        }}
      >
        <MenuIcon sx={{ fontSize: '2rem' }} />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
     
        PaperProps={{
          style: {
            width: '200px',
          },
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
