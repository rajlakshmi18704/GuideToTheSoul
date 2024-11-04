import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Donate from './Pages/Donate'
import Quotes from './Pages/Quotes'
import Navbar from './Components/Navbar'
import CardDetails from './Pages/CardDetails'



function App() {


  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>
     
        <Route path="/" element={<Home/>}/>
       
        <Route path="/chapter/:id" element={<CardDetails/> }/>
        <Route path="/quotes"element={<Quotes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/donate" element={<Donate/>}/>
        </Routes>
      </Router>
   
     
    </>
  )
}

export default App
