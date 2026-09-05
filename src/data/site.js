import Health from "../assets/projects/health-scal.png";
import Movie from "../assets/projects/movie-series.png";
import Spam from "../assets/projects/spam-predictor.png";
import adas from "../assets/projects/adas.png";
import isaVideo1 from "../assets/projects/carla-ue4.mp4";
import isaVideo2 from "../assets/projects/front-camera.mp4";
import uavDemo from "../assets/projects/UAV1.mp4";

export const aboutMe = {
  title: "WHAT I DO",
  subtitle: "Services",
  services: [
    {
    title: "AUTOMOTIVE & ADAS SOLUTIONS",
    stack: "Python / C++ / CARLA",
    description:
      "I design and simulate Advanced Driver Assistance Systems (ADAS) and autonomous driving features. Utilizing CARLA, OpenCV, and PID control logic, I build intelligent safety systems like Adaptive Cruise Control and Lane Detection.",
    link: "/#contact",
    },
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
      company: "Technische Universität Chemnitz - Germany",
      duration: "Apr 2026 - Present",
      role: "Research Intern",
      tasks: [
        "Designed a real-time ROS2 sensor pipeline for a UAV rotor-arm structural health monitoring system, integrated with PX4 SITL and Gazebo Harmonic.",
        "Communicated with and commanded the UAV platform using MAVLink messages via MAVSDK-scripted flight maneuvers to exercise the system under controlled conditions.",
        "Worked in a Linux (Ubuntu) environment throughout, using Python and structured, self-documented tooling and Git-based version control.",
      ],
    },
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
      id: "structure-sensitive-flight-control",
      title: "Structure-Sensitive Adaptive Flight Control for UAV Rotor Arms",
      description:
        "Built a real-time structural health monitoring pipeline for UAV rotor arms in PX4 SITL and Gazebo Harmonic, using force-torque sensing and a 100Hz ROS2 node to log a labeled dataset for ML-based fault classification.",
      longDescription:
        "Designed a real-time structural health monitoring pipeline for UAV rotor arms, simulated in PX4 SITL and Gazebo Harmonic with force-torque sensing. Resolved a non-functional strain gauge layout by relocating sensors to the arm root joints, achieving physically independent bending and torsion signals (correlation −0.17). Built a ROS2 node computing bending, torsion, and thrust at 100Hz with filtering, logging to an 18-column self-labeled CSV dataset for ML training, alongside MAVSDK-scripted flight maneuvers and a damage dataset plan (motor and mass degradation across 4 arms × 3 severities) for 1D-CNN/LSTM fault classification.",
      tech: [
        "Python",
        "PX4 SITL",
        "Gazebo Harmonic",
        "ROS2",
        "MAVSDK",
        "QGroundControl",
        "Force-Torque Sensing",
        "Machine Learning",
        "UAV Simulation",
      ],
      github:
        "https://gitlab.hrz.tu-chemnitz.de/t2-structure-sensitive-flight-control-and-condition-monitoring/kenil-kalathiya/structure-sensitive-adaptive-flight-control",
      videoUrls: [uavDemo],
    },
    {
      id: "isa-cruise-control",
      title: "Intelligent Speed Assistance & Adaptive Cruise Control (CARLA Simulation)",
      description:
        "ADAS prototype combining Intelligent Speed Assistance and Adaptive Cruise Control, simulated end-to-end in CARLA.",
      longDescription:
        "Designed and implemented an ADAS prototype featuring Intelligent Speed Assistance (ISA) and Adaptive Cruise Control (ACC) in CARLA, including driver override logic, safe-distance control, and realistic lead-vehicle interaction.",
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
        "Vision-based ADAS prototype for lane detection, vehicle detection, distance estimation, and forward collision warning.",
      longDescription:
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
        "Full-stack collaborative workspace with a shared whiteboard and live, multi-user code editing.",
      longDescription:
        "Developed a full-stack collaborative workspace application enabling users to draw on a shared whiteboard and edit code in real-time, utilizing the MERN stack and WebSockets for a dynamic, multi-user experience.",
      tech: ["MERN Stack", "JWT", "RESTful APIs", "WebSockets"],
      github: "https://github.com/kenilkalathiya/collab-sphere",
      imageUrl: "../public/Projects/", // Add image path
    },
    {
      id: "health-scal",
      title: "Health Scal - Health Care Application",
      description:
        "ML-powered app that predicts disease risk from patient medical reports.",
      longDescription:
        "Developed a user-friendly application to predict various diseases based on patient medical reports, utilizing machine learning models for accurate decision-making.",
      tech: ["React.js", "Flask", "Machine Learning"],
      github: "https://github.com/kenilkalathiya/Health-Scal",
      imageUrl: Health, // Add image path
    },
    {
      id: "movie-series-info",
      title: "Movie/Series Information System",
      description:
        "MERN app for tracking watched movies/series and discovering new titles.",
      longDescription:
        "Created a comprehensive information system for movies and series, allowing users to track watched content and discover new titles through a responsive interface built with the MERN stack.",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/kenilkalathiya/GMTV_Project",
      imageUrl: Movie, // Add image path
    },
    {
      id: "spam-predictor",
      title: "Spam Predictor",
      description:
        "Web app that detects spam emails and fake news via a machine learning backend.",
      longDescription:
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
    "Automotive & Computer Vision": [
    { name: "CARLA Simulator", level: 80 },
    { name: "OpenCV / Vision", level: 80 },
    { name: "YOLOv8 / Deep Learning", level: 75 },
    { name: "ADAS / PID Control", level: 75 },
    { name: "ISO 26262", level: 70 },
    ],
    "Databases & Tools": [
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
      { name: "JSON/JWT", level: 90 },
      { name: "Git & GitHub", level: 85 },
      { name: "Jira", level: 80 },
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
