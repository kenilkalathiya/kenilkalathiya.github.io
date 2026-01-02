import Health from "../src/Assets/Projects/Home.png";
import Movie from "../src/Assets/Projects/Movie.png";
import Spam from "../src/Assets/Projects/Spam1.png";
import adas from "../src/Assets/Projects/adas.png";
import isaVideo1 from "../src/Assets/Projects/CarlaUE4.mp4";
import isaVideo2 from "../src/Assets/Projects/Front Camera.mp4";

export const aboutMe = {
  title: "WHAT I DO",
  subtitle: "My Services",
  services: [
    {
      title: "FULL STACK DEVELOPMENT",
      stack: "MERN / MEAN Stack",
      description:
        "I create seamless, end-to-end web applications by combining front-end flair with back-end robustness. From crafting dynamic user interfaces to managing databases and servers, I bring your digital vision to life.",
      link: "/#contact",
    },
    {
      title: "FRONTEND DEVELOPMENT",
      stack: "React / Angular",
      description:
        "I design engaging, user-friendly interfaces that enhance user experience through interactive and responsive designs. By utilizing the latest technologies and best practices, I bring your ideas to the screen with creativity and precision.",
      link: "/#contact",
    },
    {
      title: "BACKEND DEVELOPMENT",
      stack: "Node ( JS / TS )",
      description:
        "I build and maintain the server-side logic that powers your applications, ensuring robust, scalable, and secure solutions. From managing databases to implementing APIs, I create the backbone that supports seamless user interactions.",
      link: "/#contact",
    },
  ],
};

export const resume = {
  education: [
    {
      university: "Technical University of Chemnitz, Germany",
      degree: "Master of Science, Automotive Software Engineering",
      duration: "Apr 2024 - Present",
      courses: [
        "Automotive Software Engineering (AUTOSAR)",
        "Design of Software for Embedded System, Media Encoding",
        "Formal Specification and Verification",
        "Security of Distributed System",
      ],
    },
    {
      university: "Gujarat Technological University, India",
      degree: "Bachelor of Technology, Information Technology",
      duration: "Jun 2019 - Jul 2023",
      courses: [
        "Object Oriented Programming With C, Java, Python",
        "Web Designing, Software Engineering development",
        "Networking and Security of system",
      ],
    },
  ],
  experience: [
    {
      company: "Bigscal Technologies Pvt. Ltd. - India",
      duration: "Oct 2022 - Apr 2023",
      role: "Web Developer (Intern)",
      tasks: [
        "Spearheaded the development of web applications, to demonstrating expertise in both front-end (ReactJs) and back-end (Python) web technologies.",
        "Implemented new components or functionalities using Flask and ReactJs as per User Requirements.",
        "Successfully delivered projects within tight deadlines, receiving positive feedback for quality and innovation.",
      ],
    },
  ],
  projects: [
    {
      id: "isa-cruise-control",
      title: "Intelligent Speed Adaptation (ISA) with Cruise Control",
      description:
        "Designed and implemented an Intelligent Speed Adaptation (ISA) system in the CARLA simulator featuring state-based cruise control, waypoint-based steering, and real-time camera visualization. The system dynamically adapts vehicle speed using zone-based speed limits to ensure stable operation under simulator and hardware constraints, with a perception pipeline prepared for future vision-based speed sign detection.",
      tech: [
        "Python",
        "CARLA Simulator",
        "OpenCV",
        "NumPy",
        "PID Control",
        "ADAS",
      ],
      github: "https://github.com/kenilkalathiya/isa-cruise-control",
      videoUrls: [isaVideo1, isaVideo2],
    },
    {
      id: "vision-based-adas",
      title: "Vision-Based ADAS System",
      description:
        "Developed a vision-based Advanced Driver Assistance System (ADAS) prototype featuring lane detection, vehicle detection, distance estimation, and forward collision warning. The system combines classical computer vision techniques with deep-learning-based object detection to enable real-time perception and safety logic.",
      tech: [
        "Python",
        "OpenCV",
        "YOLOv8",
        "NumPy",
        "Computer Vision",
        "ADAS",
      ],
      github: "https://github.com/kenilkalathiya/vision-based-adas",
      imageUrl: adas,
    },

    {
      id: "real-time-workspace",
      title: "Real-Time Collaborative Workspace",
      description:
        "Developed a full-stack collaborative workspace application enabling users to draw on a shared whiteboard and edit code in real-time, utilizing the MERN stack and WebSockets for a dynamic, multi-user experience.",
      tech: ["MERN Stack", "JWT", "RESTful APIs", "WebSockets"],
      github: "https://github.com/kenilkalathiya/collab-sphere",
      imageUrl: "../public/Projects/", // Add image path
    },
    {
      id: "health-scal",
      title: "Health Scal - Health Care Application",
      description:
        "Developed a user-friendly application to predict various diseases based on patient medical reports, utilizing machine learning models for accurate decision-making.",
      tech: ["React.js", "Flask", "Machine Learning"],
      github: "https://github.com/kenilkalathiya/Health-Scal",
      imageUrl: Health, // Add image path
    },
    {
      id: "movie-series-info",
      title: "Movie/Series Information System",
      description:
        "Created a comprehensive information system for movies and series, allowing users to track watched content and discover new titles through a responsive interface built with the MERN stack.",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/kenilkalathiya/GMTV_Project",
      imageUrl: Movie, // Add image path
    },
    {
      id: "spam-predictor",
      title: "Spam Predictor",
      description:
        "Designed a web application for real-time content analysis to detect spam emails and identify fake news, leveraging a machine learning backend.",
      tech: ["HTML/CSS", "JavaScript", "ML"],
      github:
        "https://github.com/kenilkalathiya/Spam-Prediction-Using-Machine-Learning-Model",
      imageUrl: Spam, // Add image path
    },
    {
      isGithubLink: true,
      github: "https://github.com/kenilkalathiya/",
    },
  ],
  skills: {
    "Frontend Development": [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
    ],
    "Backend Development": [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 80 },
      { name: "Django/Flask", level: 75 },
    ],
    "Databases & Tools": [
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
      { name: "GitHub", level: 85 },
      { name: "JSON/JWT", level: 90 },
    ],
  },
  interests: [
    {
      title: "Music",
      details: [
        "Listening to a diverse range of music is my go-to for relaxation and focus.",
      ],
    },
    {
      title: "Travelling",
      details: [
        "I'm passionate about exploring new places, as each journey adds a new perspective and story to my life.",
      ],
    },
    {
      title: "Gaming",
      details: [
        "I enjoy challenging my reflexes and strategic thinking in competitive online games.",
      ],
    },
  ],
};
