import {useState,React} from 'react'
import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router';
function LogIn() {
 const {user,logIn} =UserAuth()
    const [formData,setFormData]=useState({
        "email":"",
        "password":""
      })
      const navigate=useNavigate()
      const [errors, setErrors] = useState({})
     
      const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData( (prev)=>({
          ...prev,
          [name]: value,
          
        }
          
         
        ));
        setErrors({})
      
      }
      const validate = (formData) => {
        const errorsData = {}
    
        if (!formData.email) {
          errorsData.email = 'Email is required'
          console.log("Email Error")
        }
    
        if (!formData.password) {
          errorsData.password = 'Password is Required'
          console.log("password Error")
        }
        if ( formData.password.length!=0 &&formData.password.length<6) {
          errorsData.password = 'Enter a valid password (length greater than 6)'
          console.log("password Error")
        }
        if ( formData.email &&!/\S+@\S+\.\S+/.test(formData.email)) {
         errorsData.email = 'Enter a valid email address';
         console.log("Not a valid Email addressr")
        }
       
        
        setErrors(errorsData)
        return errorsData
      }
     const handleSubmit=   async(e)=>{
       
    e.preventDefault()
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully');
    }
    else {
      
      console.log('Validation failed');
    }
 try{
  await    logIn(formData.email,formData.password)
    navigate('/')
    }
    catch(error){
    console.log(error)
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: 'Wrong password',
    }));
    }
    
      }
      const Navigate=useNavigate()
      return (
      <Box sx={{backgroundImage:
        `url("https://media.istockphoto.com/id/1221853131/photo/opened-bhagavad-gita-and-rosary-lying-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=x6X6pHOMfZ7UnO-8VHWurdFcdKBn2XMXQeqHO8OyHjM=")`,
    height:"100%",width:"100vmax",
    backgroundSize: "cover",height: "100vh", backgroundPosition: "center",
    display: "flex",
    justifyContent:"center",alignItems:"center"
    
      }}>
<Box sx={{display:"flex",justifyContent:"center",
    padding:"3vmax 0",borderRadius:"0.4vmax",opacity:"0.8",
    alignItems:"center",hieght:"25vmax",width:"25vmax",backgroundColor:"paleturquoise"}}>
<form > 
              <Box  sx={{display:"flex",   
          justifyContent:"center",alignItems:"center",flexDirection:"column", padding:"0vmax 0"
          }}>
       <TextField
          label=" Enter Your Email"             
          variant="outlined"       
          type="email"   name="email" value={formData.email}
           
                           
          margin="normal"     onChange={handleChange}    
        
        />
        <Typography sx={{color:"red"}}>{errors.email}</Typography>
       
     <TextField
          label="Enter Your Password"             
          variant="outlined"       
          type="password"                              
          margin="normal" 
           name="password" value={formData.password}
        
          
          onChange={handleChange}        
        />
          <Typography sx={{color:"red"}}>{errors.password}</Typography>
        <Button sx={{backgroundColor:"blue",hieght:"3vmax",width:"12vmax"}} onClick={handleSubmit}>
            LogIn </Button> <Button sx={{color:"blue"}} onClick={()=>{
                Navigate("/SignIn")
            }}>
           create an account
            </Button>
            </Box>
            </form>
            
</Box>
        
         
          
    
     
        </Box>
    
      
      )
  
}

export default LogIn
