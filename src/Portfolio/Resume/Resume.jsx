import React from "react";
import { FaUserGraduate, FaLaptopCode, FaPalette } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import ProgrammingSkill from "./ProgrammingSkill";
import Intrest from "./Intrest";
import "./resume.css";
import { useState } from "react";

export default function Resume() {
  const [activeComponent, setActiveComponent] = useState("Education");
  const [isActive, setIsActive] = useState("edu");

  return (
    <>
      <div className="title-main" id="resume">
        <div className="title2 title">
          <h1>Resume</h1>
          <p>My formal Bio details</p>
        </div>

        <div className="resume-main">
          <div className="r-box">
            <div className="side-bar">
              <div className={`side1 ${
                      isActive === "edu" ? "active" : ""
                    }`} onClick={() => {
                      setActiveComponent("Education");
                      setIsActive("edu");
                    }}>
                <div className="side-icon">
                  <FaUserGraduate />
                </div>
                <div className="side-main">
                  <li
                    className="side-main-content"  
                  >
                    Education
                  </li>
                </div>
              </div>

              <div className={`side1 ${
                      isActive === "exp" ? "active" : ""
                    }`} onClick={() => {
                      setActiveComponent("Experience");
                      setIsActive("exp");
                    }}>
                <div className="side-icon">
                <MdWorkOutline />
                </div>
                <div className="side-main">
                  <li
                    className="side-main-content"  
                  >
                    Experience
                  </li>
                </div>
              </div>

              <div className={`side1 ${
                      isActive === "pro" ? "active" : ""
                    }`} onClick={() => {
                      setActiveComponent("Project");
                      setIsActive("pro");
                    }}>
                <div className="side-icon">
                  <IoBarChart />
                </div>
                <div className="side-main">
                  <li
                    className="side-main-content"  
                  >
                    Project
                  </li>
                </div>
              </div>

              <div className={`side1 ${
                      isActive === "proS" ? "active" : ""
                    }`} onClick={() => {
                      setActiveComponent("ProgrammingSkill");
                      setIsActive("proS");
                    }}>
                <div className="side-icon">
                  <FaLaptopCode />
                </div>
                <div className="side-main">
                  <li
                    className="side-main-content"  
                  >
                    Programming Skill
                  </li>
                </div>
              </div>

              <div className={`side1 ${
                      isActive === "int" ? "active" : ""
                    }`} onClick={() => {
                      setActiveComponent("Intrest");
                      setIsActive("int");
                    }}>
                <div className="side-icon">
                  <FaPalette />
                </div>
                <div className="side-main">
                  <li
                    className="side-main-content"  
                  >
                    Intrest
                  </li>
                </div>
              </div>

              {/* <div className="side-bar-part"> <FaUserGraduate />
                 </div> */}
            </div>
            <div className="side-content">
              {activeComponent === "Education" && <Education />}
              {activeComponent === "Experience" && <Experience />}
              {activeComponent === "Project" && <Project />}
              {activeComponent === "ProgrammingSkill" && <ProgrammingSkill />}
              {activeComponent === "Intrest" && <Intrest />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
