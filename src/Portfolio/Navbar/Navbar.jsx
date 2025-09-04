// import React from "react";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <>
//       <div className="navbar">
//         <div className="portfolio">
//           <h2>Portfolio</h2>
//         </div>
//         <div className="links">
//           <ul className="navigation">
//             <a href="#"><li>Home</li></a>
//             <a href="#about-me"><li>About Me</li></a>
//             <a href="#resume"><li>Resume</li></a>
//             <a href="#"><li>Project</li></a>
//             <a href="#"><li>Contact Me</li></a>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🚀 Disable scroll when menu is open
useEffect(() => {
  if (isOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}, [isOpen]);


  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when link is clicked
  };

  return (
    <div className="navbar">
      <div className="portfolio">
        <h2>Portfolio</h2>
      </div>

      {/* Navigation links (desktop + mobile sliding menu) */}
      <div className={`links ${isOpen ? "active" : ""}`}>
        <ul className="navigation">
          <a href="#home" onClick={handleLinkClick}>
            <li>Home</li>
          </a>
          <a href="#about-me" onClick={handleLinkClick}>
            <li>About Me</li>
          </a>
          <a href="#resume" onClick={handleLinkClick}>
            <li>Resume</li>
          </a>
          <a href="#project" onClick={handleLinkClick}>
            <li>Project</li>
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            <li>Contact Me</li>
          </a>
        </ul>
      </div>

      {/* Hamburger icon (always on far right) */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}


