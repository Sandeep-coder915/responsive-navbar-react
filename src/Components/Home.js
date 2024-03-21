import React  from "react";
import Navbar from "./Navbar";
import Poster from "./Poster";
import Contact from "./Contact";
import About from "./About";
import OurMenu from "./OurMenu";



function Home(){
    return (
        <>
        <Navbar/>
        <Poster/>
        <About/>
        <OurMenu/>
        <Contact/>
        
        </>
        
     
        
        )
}


export  default Home;