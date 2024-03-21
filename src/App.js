// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import OurMenu from './Components/OurMenu';

function App() {
  return (
    
  

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="/OurMenu" element ={<OurMenu/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
 
}

export default App;
