// import React from "react";
// import { FaUserGraduate, FaLaptopCode, FaPalette } from "react-icons/fa";
// import { IoBarChart } from "react-icons/io5";
// import { MdWorkOutline } from "react-icons/md";
// import Education from "./Education";
// import Experience from "./Experience";
// import Project from "./Project";
// import ProgrammingSkill from "./ProgrammingSkill";
// import Intrest from "./Intrest";
// import "./resume.css";
// import { useState } from "react";

// export default function Resume() {
//   const [activeComponent, setActiveComponent] = useState("Education");
//   const [isActive, setIsActive] = useState("edu");

//   const [isLeaving, setIsLeaving] = useState(false);

//   const handleSectionChange = (section, key) => {
//     setIsLeaving(true);
//     setTimeout(() => {
//       setActiveComponent(section);
//       setIsLeaving(false);
//     }, 400);
//   };

//   return (
//     <>
//       <div className="title-main" id="resume">
//         <div className="title2 title">
//           <h1>Resume</h1>
//           <p>My formal Bio details</p>
//         </div>

//         <div className="resume-main">
//           <div className="r-box">
//             <div className="side-bar">
//               <div
//                 className={`side1 ${isActive === "edu" ? "active" : ""}`}
//                 onClick={() => {
//                   handleSectionChange("Education");
//                   setIsActive("edu");
//                 }}
//               >
//                 <div className="side-icon">
//                   <FaUserGraduate />
//                 </div>
//                 <div className="side-main">
//                   <li className="side-main-content">Education</li>
//                 </div>
//               </div>

//               <div
//                 className={`side1 ${isActive === "exp" ? "active" : ""}`}
//                 onClick={() => {
//                   handleSectionChange("Experience");
//                   setIsActive("exp");
//                 }}
//               >
//                 <div className="side-icon">
//                   <MdWorkOutline />
//                 </div>
//                 <div className="side-main">
//                   <li className="side-main-content">Experience</li>
//                 </div>
//               </div>

//               <div
//                 className={`side1 ${isActive === "pro" ? "active" : ""}`}
//                 onClick={() => {
//                   handleSectionChange("Project");
//                   setIsActive("pro");
//                 }}
//               >
//                 <div className="side-icon">
//                   <IoBarChart />
//                 </div>
//                 <div className="side-main">
//                   <li className="side-main-content">Project</li>
//                 </div>
//               </div>

//               <div
//                 className={`side1 ${isActive === "proS" ? "active" : ""}`}
//                 onClick={() => {
//                   handleSectionChange("ProgrammingSkill");
//                   setIsActive("proS");
//                 }}
//               >
//                 <div className="side-icon">
//                   <FaLaptopCode />
//                 </div>
//                 <div className="side-main">
//                   <li className="side-main-content">Programming Skill</li>
//                 </div>
//               </div>

//               <div
//                 className={`side1 ${isActive === "int" ? "active" : ""}`}
//                 onClick={() => {
//                   handleSectionChange("Intrest");
//                   setIsActive("int");
//                 }}
//               >
//                 <div className="side-icon">
//                   <FaPalette />
//                 </div>
//                 <div className="side-main">
//                   <li className="side-main-content">Intrest</li>
//                 </div>
//               </div>

//               {/* <div className="side-bar-part"> <FaUserGraduate />
//                  </div> */}
//             </div>
//             <div className="side-content">
//               <div
//                 key={activeComponent}
//                 className={`side-content-animate${isLeaving ? " leave" : ""}`}
//               >
//                 {activeComponent === "Education" && <Education />}
//                 {activeComponent === "Experience" && <Experience />}
//                 {activeComponent === "Project" && <Project />}
//                 {activeComponent === "ProgrammingSkill" && <ProgrammingSkill />}
//                 {activeComponent === "Intrest" && <Intrest />}
//               </div>
//               {/* {activeComponent === "Education" && <Education />}
//               {activeComponent === "Experience" && <Experience />}
//               {activeComponent === "Project" && <Project />}
//               {activeComponent === "ProgrammingSkill" && <ProgrammingSkill />}
//               {activeComponent === "Intrest" && <Intrest />} */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { FaUserGraduate, FaLaptopCode, FaPalette } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import ProgrammingSkill from "./ProgrammingSkill";
import Intrest from "./Intrest";
import "./resume.css";

export default function Resume() {
  const sections = [
    { name: "Education", icon: <FaUserGraduate />, component: <Education /> },
    { name: "Experience", icon: <MdWorkOutline />, component: <Experience /> },
    { name: "Project", icon: <IoBarChart />, component: <Project /> },
    { name: "ProgrammingSkill", icon: <FaLaptopCode />, component: <ProgrammingSkill /> },
    { name: "Intrest", icon: <FaPalette />, component: <Intrest /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [direction, setDirection] = useState("down");

  const handleSectionChange = (index) => {
    if (index !== activeIndex) {
      setDirection(index > activeIndex ? "down" : "up");
      setIsLeaving(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsLeaving(false);
      }, 400);
    }
  };

  const getAnimationClass = () => {
    if (isLeaving) {
      return direction === 'down' ? 'slide-fade-out-down' : 'slide-fade-out-up';
    }
    return direction === 'down' ? 'slide-fade-in-down' : 'slide-fade-in-up';
  };

  return (
    <div className="title-main" id="resume">
      <div className="title2 title">
        <h1>Resume</h1>
        <p>My formal Bio details</p>
      </div>

      <div className="resume-main">
        <div className="r-box">
          <div className="side-bar">
            {sections.map((section, index) => (
              <div
                key={section.name}
                className={`side1 ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleSectionChange(index)}
              >
                <div className="side-icon">{section.icon}</div>
                <div className="side-main">
                  <li className="side-main-content">{section.name.replace(/([A-Z])/g, ' $1').trim()}</li>
                </div>
              </div>
            ))}
          </div>
          <div className="side-content">
            <div
              key={activeIndex}
              className={`side-content-animate ${getAnimationClass()}`}
            >
              {sections[activeIndex].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}