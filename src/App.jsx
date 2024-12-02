import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Donate from './Pages/Donate'
import Quotes from './Pages/Quotes'
import Navbar from './Components/Navbar'
import CardDetails from './Pages/CardDetails'
import {ThemeContext,themes} from './context/themeContext'
import Footer from './Components/Footer'
import SearchResults from './Components/SearchResults'
import VerseDetail from './Components/VerseDetail'
import SignIn from './Pages/SignIn'
import LogIn from './Pages/LogIn'
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute'
import SavedSlokas from './Pages/SavedSlokas'

function App() {

  const [theme,setTheme] = useState(themes.light)
  const handleOnclick=()=>{
    console.log("clicked")
    theme==themes.light?setTheme(themes.dark):setTheme(themes.light)
    console.log(theme)
  }
  return (
    <>
    
    <ThemeContext.Provider value={{theme,handleOnclick}}>
      <AuthContextProvider>
      <Router>
      <Navbar/>
        <Routes>
   <Route path='/' element={<Home/>}/>
        <Route
            path='/savedSlokas'
            element={
              <ProtectedRoute>
            <SavedSlokas/>
              </ProtectedRoute>
            }
          />
           
       
        <Route path="/chapter/:id" element={<CardDetails/> }/>
       
       <Route path="/chapter/:id/verse/:verseNo" element={<VerseDetail/>}/>
        <Route path="/quotes"element={<Quotes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/searchResults" element ={<SearchResults/>}/>
        </Routes>
        <Footer/>
      </Router>
      </AuthContextProvider>
    </ThemeContext.Provider>
 
   
    
   
     
    </>
  )
}

export default App
