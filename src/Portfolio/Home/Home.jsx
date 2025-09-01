import React from "react";
import { SiInstagram, SiLinkedin, SiX,SiGithub } from 'react-icons/si';
import Typical from "react-typical";
import "./home.css";

export default function Home() {
  return (
    <>
        <div className="main-profile">
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-detail">
                            <div className="social-media">
                                <a href="https://www.instagram.com/kenil_kalathiya_007">
                                    <SiInstagram />
                                </a>
                                <a href="https://github.com/kenilkalathiya">
                                    <SiGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/kenil-kalathiya-9422021b6/">
                                    <SiLinkedin />
                                </a>
                                <a href="https://twitter.com/KenilKalathiya1">
                                <SiX />
                                </a>
                            </div>

                                <span className="profile-name">
                                Hi, I'm <span className="name">Kenil Kalathiya</span>
                                </span>

                                <h1 className="profile-role">
                                    {""}
                                    <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Front-end Developer 💻",
                                        1500,
                                        "Freelancer " ,
                                        1500,
                                        "React.Js Developer ",
                                        1500,
                                    ]}
                                    />
                                </h1>

                                <span className="profile-role-tagline">
                                    Developer and problem solver for front end development.
                                </span>
                            <div className="profile-button">
                                <button className="hire-me button">
                                    Hire Me
                                </button>
                                <a href="/Kenil-Kalathiya.pdf" download="Kenil-Kalathiya.pdf">
                                    <button className="resume button">Get Resume</button>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="profile-img">
                    <div className="picture-background">
                        
                    </div>
                </div>
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f2233" 
            fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,154.7C480,139,600,85,720,58.7C840
            ,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,
            0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

        </div>
    </>
  );
}
