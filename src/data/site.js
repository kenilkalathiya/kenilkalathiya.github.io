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
    category: "automotive",
    },
    {
      title: "DRONE SYSTEMS DEVELOPMENT",
      stack: "ROS2 / PX4 / Gazebo",
      description:
        "I build structural health monitoring and flight-control systems for UAVs, simulating rotor-arm sensing and flight behavior in PX4 SITL and Gazebo. From ROS2 sensor pipelines to MAVSDK-scripted flight maneuvers, I develop the software that keeps drones flying safely and intelligently.",
      link: "/#contact",
      category: "automotive",
    },
    {
      title: "FULL STACK DEVELOPMENT",
      stack: "MERN / MEAN Stack",
      description:
        "I create seamless, end-to-end web applications by combining front-end flair with back-end robustness. From crafting dynamic user interfaces to managing databases and servers, I bring your digital vision to life.",
      link: "/#contact",
      category: "software",
    },
    {
      title: "FRONTEND DEVELOPMENT",
      stack: "React / Angular",
      description:
        "I design engaging, user-friendly interfaces that enhance user experience through interactive and responsive designs. By utilizing the latest technologies and best practices, I bring your ideas to the screen with creativity and precision.",
      link: "/#contact",
      category: "software",
    },
    {
      title: "BACKEND DEVELOPMENT",
      stack: "Node ( JS / TS )",
      description:
        "I build and maintain the server-side logic that powers your applications, ensuring robust, scalable, and secure solutions. From managing databases to implementing APIs, I create the backbone that supports seamless user interactions.",
      link: "/#contact",
      category: "software",
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
      category: "automotive",
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
      category: "automotive",
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
      category: "automotive",
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
      id: "health-scal",
      category: "software",
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
      category: "software",
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
      id: "real-time-workspace",
      category: "software",
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
      id: "spam-predictor",
      category: "software",
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
    "Autonomous Systems & Robotics": [
      { name: "ROS2", level: 75 },
      { name: "PX4 / MAVSDK", level: 75 },
      { name: "Gazebo Simulation", level: 75 },
      { name: "Force-Torque Sensing", level: 70 },
      { name: "UAV Systems", level: 75 },
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

// Short field-notes/commentary, not project write-ups — general observations
// on where each area is heading, filtered onto the matching track page.
export const blog = [
  {
    id: "ai-pair-programming",
    category: "software",
    date: "2026",
    title: "AI Pair-Programming Is Now Part of the Workflow, Not a Novelty",
    excerpt:
      "AI coding assistants have moved from an experimental novelty to a default part of how I write and review code day-to-day. The bigger shift isn't the autocomplete itself — it's that the bottleneck in software work is quietly moving from typing code to reviewing and reasoning about it, which puts more weight on strong fundamentals, not less.",
  },
  {
    id: "return-of-the-server",
    category: "software",
    date: "2026",
    title: "Server Components and the Return of the Server",
    excerpt:
      "After a decade of pushing everything to the client, the ecosystem is swinging back toward server-rendered UI — React Server Components, streaming, and frameworks built around them. For end-to-end apps like the ones I build, it's a good reminder that picking the right place to run logic matters more than defaulting to \"do it all in the browser.\"",
  },
  {
    id: "adas-becoming-default",
    category: "automotive",
    date: "2026",
    title: "ADAS Is Becoming the Default, Not the Option",
    excerpt:
      "Features like adaptive cruise control, lane-keeping, and automatic emergency braking are shifting from premium add-ons to expected, often regulation-driven, baseline features across new vehicles. That raises the bar for validation — it's exactly why simulation environments like CARLA matter: you can't road-test every edge case safely, so you have to be able to simulate it convincingly first.",
  },
  {
    id: "drone-regulation-catching-up",
    category: "automotive",
    date: "2026",
    title: "Drone Regulation Is Catching Up to the Technology",
    excerpt:
      "Beyond-visual-line-of-sight (BVLOS) rules are gradually loosening in several regions, which opens the door to more serious commercial and research UAV work. The trade-off is that regulators expect stronger guarantees of reliability in return — which is exactly the gap that onboard health-monitoring systems, like the rotor-arm structural sensing I've worked on, are meant to close.",
  },
];
