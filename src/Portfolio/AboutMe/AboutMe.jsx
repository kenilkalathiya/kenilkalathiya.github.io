// import React from "react";
// import "./AboutMe.css";
// import profile from "../../Assets/Home/profile-pic.jpg";

// export default function AboutMe() {
//   return (
//     <>
//     <div className="title-main" id='about-me'>
//       <div className="title1 title" >
//         <h1>About Me</h1>
//         <p>Why Choose Me?</p>
//       </div>
//       <div className="about-me">
//         <div className="extra">
//           <div className="photo">
//             <img src={profile} alt="Profile" />
//           </div>
//           <div className="detail">
//             <p>
//               I describe my self as competent and positive person who wants to
//               have long and successful carrier in these field.
//             </p>
//             <br />

//             <div className="list">
//               <h3>Few Highlight Abou Me:</h3>
//               <ul>
//                 <li> Web Developer with good knowledge</li>
//                 <li> Front end developer as per design</li>
//                 <li> HTML, CSS, JavaScript, ReactJs</li>
//                 <li> API Integration & Managing Database</li>
//                 <li> Emdedded System</li>
//               </ul>
//             </div>
//             <div className="profile-buttons">
//               <button className="hire-me-btn buttons">Hire Me</button>
//               <a href="/Kenil-Kalathiya.pdf" download="Kenil-Kalathiya.pdf">
//                 <button className="resume-btn buttons">Get Resume</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-section" id="about-me">
      <div className="title1 title">
        <h1>WHAT I DO</h1>
        <p><span className="highlight">My</span> Services</p>
      </div>

      <div className="about-grid">
        {/* Full Stack */}
        <div className="about-card">
          <h4>FULL STACK DEVELOPMENT</h4>
          <h2>MERN / MEAN Stack</h2>
          <p>
            I create seamless, end-to-end web applications by combining
            front-end flair with back-end robustness. From crafting dynamic
            user interfaces to managing databases and servers, I bring your
            digital vision to life.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div>

        {/* Frontend */}
        <div className="about-card">
          <h4>FRONTEND DEVELOPMENT</h4>
          <h2>React / Angular</h2>
          <p>
            I design engaging, user-friendly interfaces that enhance user
            experience through interactive and responsive designs. By utilizing
            the latest technologies and best practices, I bring your ideas to
            the screen with creativity and precision.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div>

        {/* Backend */}
        <div className="about-card">
          <h4>BACKEND DEVELOPMENT</h4>
          <h2>Node ( JS / TS )</h2>
          <p>
            I build and maintain the server-side logic that powers your
            applications, ensuring robust, scalable, and secure solutions.
            From managing databases to implementing APIs, I create the
            backbone that supports seamless user interactions.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div>

        <div className="about-card">
          <h4>BACKEND DEVELOPMENT</h4>
          <h2>Node ( JS / TS )</h2>
          <p>
            I build and maintain the server-side logic that powers your
            applications, ensuring robust, scalable, and secure solutions.
            From managing databases to implementing APIs, I create the
            backbone that supports seamless user interactions.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div>

        <div className="about-card">
          <h4>BACKEND DEVELOPMENT</h4>
          <h2>Node ( JS / TS )</h2>
          <p>
            I build and maintain the server-side logic that powers your
            applications, ensuring robust, scalable, and secure solutions.
            From managing databases to implementing APIs, I create the
            backbone that supports seamless user interactions.
          </p>
          <a href="#contact" className="contact-link">Contact me →</a>
        </div>
      </div>
    </div>
  );
}

