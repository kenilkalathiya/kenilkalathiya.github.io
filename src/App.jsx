import React from "react";
import Home from "./Portfolio/Home/Home";
import AboutMe from "./Portfolio/AboutMe/AboutMe";
import Navbar from "./Portfolio/Navbar/Navbar";
import Resume from "./Portfolio/Resume/Resume";
import Projects from "./Portfolio/Projects/Projects";
import ContactMe from "./Portfolio/ContactMe/ContactMe";
import ProjectPage from "./Portfolio/ProjectPage/ProjectPage";
import{ Routes, Route } from "react-router-dom";
import "../src/App.css";

const MainPage = () => (
  <>
    <Home />
    <AboutMe />
    <Resume />
    <Projects />
    <ContactMe />
  </>
);

const App = () => {
  return (
    <>
      {/* <CursorShadow /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

export default App;
