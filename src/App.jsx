import React from "react";
import Home from "./Portfolio/Home/Home";
import AboutMe from "./Portfolio/AboutMe/AboutMe";
import Navbar from "./Portfolio/Navbar/Navbar";
import Resume from "./Portfolio/Resume/Resume";
import Projects from "./Portfolio/Projects/Projects";
import CursorShadow from "./Portfolio/CursorShadow/CursorShadow";
// import Contact from "./Contact";
// import{ Routes, Route } from "react-router-dom";
import "../src/App.css";



const App =() => {
    return (
        <>
        <CursorShadow />
        <Navbar />
        <Home />
        <AboutMe />
        <Resume/>
        <Projects />
        {/* <Home /> */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />}/>
            </Routes> */}
        </>
    );
};

export default App;