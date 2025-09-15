import React, { useState } from "react";
import { FaUserGraduate, FaLaptopCode, FaPalette } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import Education from "./Education";
import Experience from "./Experience";
import ProgrammingSkill from "./ProgrammingSkill";
import Intrest from "./Intrest";
import "./resume.css";

export default function Resume() {
  const sections = [
    { name: "Education", icon: <FaUserGraduate />, component: <Education /> },
    { name: "Experience", icon: <MdWorkOutline />, component: <Experience /> },
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
    <div className="title-main section-container" id="resume" style={{ '--bg-text': '"History"' }}>
      <div className="title">
        <h1>RESUME</h1>
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