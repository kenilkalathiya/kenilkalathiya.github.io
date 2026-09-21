import Health from "../assets/projects/health-scal.png";
import Movie from "../assets/projects/movie-series.png";
import Spam from "../assets/projects/spam-predictor.png";
import adas from "../assets/projects/adas.png";
import droneSecurity from "../assets/projects/drone-security-inspection.png";
import droneDetection from "../assets/projects/drone-detection.jpg";
import droneEvidenceVisual from "../assets/projects/drone-evidence-visual.jpg";
import droneEvidenceThermal from "../assets/projects/drone-evidence-thermal.jpg";
import droneEvidenceCropVisual from "../assets/projects/drone-evidence-crop-visual.jpg";
import droneEvidenceCropThermal from "../assets/projects/drone-evidence-crop-thermal.jpg";
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
      grade: "2.3",
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
      grade: "1.5",
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
        "Designed a real-time structural health monitoring pipeline for UAV rotor arms (PX4 SITL, Gazebo Harmonic).",
        "Fixed a sensor design issue by relocating strain gauges to arm root joints, decoupling bending and torsion signals.",
        "Built a 100 Hz ROS2 node logging bending, torsion and thrust data for ML training.",
        "Scripted MAVSDK flight maneuvers and a fault-injection dataset plan for CNN/LSTM classification.",
      ],
    },
    {
      company: "Bigscal Technologies Pvt. Ltd. - India",
      duration: "Oct 2022 - Apr 2023",
      role: "Software Developer (Intern)",
      tasks: [
        "Built frontend features and reusable UI components in React.js.",
        "Integrated the frontend with Flask-based REST APIs.",
        "Analyzed requirements, optimized features and ran unit/integration tests.",
      ],
    },
  ],
  certifications: [
    {
      title: "Drone Systems Engineering for Safety-Critical Systems",
      issuer: "Microcredential — Dept. of Computer Engineering, TU Chemnitz",
      date: "Aug - Sep 2026",
    },
    {
      title: "System Architecture",
      issuer: "Coursera Certificate",
      date: "2022",
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
      details: [
        {
          heading: "Overview",
          text: "A real-time structural health monitoring pipeline for UAV rotor arms, simulated in PX4 SITL and Gazebo Harmonic with force-torque sensing.",
        },
        {
          heading: "Key Work",
          items: [
            {
              label: "Sensor layout",
              text: "Resolved a non-functional strain gauge layout by relocating sensors to the arm root joints, achieving physically independent bending and torsion signals (correlation −0.17).",
            },
            {
              label: "Real-time pipeline",
              text: "A ROS2 node computes bending, torsion, and thrust at 100Hz with filtering.",
            },
            {
              label: "Dataset logging",
              text: "Signals are logged to an 18-column self-labeled CSV dataset for ML training.",
            },
            {
              label: "Flight scripting",
              text: "MAVSDK-scripted flight maneuvers exercise the system under controlled conditions.",
            },
          ],
        },
        {
          heading: "Next Step",
          text: "A damage dataset plan — motor and mass degradation across 4 arms × 3 severities — for 1D-CNN/LSTM fault classification.",
        },
      ],
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
      id: "drone-security-inspection",
      category: "automotive",
      status: "In Development",
      title: "Autonomous Drone Security-Inspection System (ArduPilot SITL + YOLOv8)",
      description:
        "Autonomous drone security-inspection system — detects intruding drones via a fine-tuned YOLOv8 model, auto-launches an interceptor, and captures visual + thermal evidence for human review, built end-to-end with ArduPilot SITL and Gazebo.",
      longDescription:
        "An unarmed, human-in-the-loop inspect-and-report drone system, inspired by the August 2026 Leipzig/Halle airport drone incidents. A stationary sentry drone continuously scans for intruders using a fine-tuned YOLOv8 detection model; on detection, the system autonomously launches an interceptor drone, navigates to the intrusion site, uses live gimbal control to center the target in frame, and captures close-up visual and thermal-style evidence photos before landing and handing the evidence off to a human operator for the final decision — no target is ever engaged autonomously. The pipeline connects ArduPilot SITL for flight control with Gazebo Harmonic for physics and camera simulation, streaming live frames through gz-transport into an OpenCV/YOLOv8 detection stage, with the full mission (arm, takeoff, navigate, center, land) automated via pymavlink. A key technical challenge was self-false-positive filtering: the interceptor's own camera-mounted propellers and ground shadow were repeatedly misclassified as intruder drones. Solved with a layered filter — edge-touch rejection, bounding-box aspect-ratio filtering, and a fixed propeller-exclusion mask — since confidence-threshold tuning alone couldn't separate genuine detections from the aircraft seeing itself. Also demonstrated the gap between general-purpose and domain-specific models: stock YOLOv8 (COCO-trained) misclassified drone shapes as \"bench\" or \"airplane,\" while a fine-tuned drone-detection model correctly identified them, though detection reliability still degrades sharply with distance — a known small-object-detection limitation that motivates future architecture work. Every mission stage is logged to a timestamped JSONL event log, and each detection produces four evidence artifacts: a full-frame photo, a full-frame simulated thermal overlay, and zoomed/sharpened crops of both, isolating the target for close inspection. The project remains in active development: the core pipeline is functional, and headless rendering is being refined for continuous integration (CI).",
      details: [
        {
          heading: "Overview",
          text: "An unarmed, human-in-the-loop inspect-and-report drone system, inspired by the August 2026 Leipzig/Halle airport drone incidents. A sentry drone scans for intruders; on detection, an interceptor drone is launched to capture evidence, which is handed to a human operator for the final decision — no target is ever engaged autonomously.",
        },
        {
          heading: "Project Status",
          highlight: true,
          text: "In active development (since Sep 2026). The core pipeline is functional in simulation; current work focuses on refining headless rendering for continuous integration (CI).",
        },
        {
          heading: "Mission Flow",
          items: [
            {
              label: "1. Scan & detect",
              text: "A stationary sentry drone continuously scans for intruders using a fine-tuned YOLOv8 detection model.",
            },
            {
              label: "2. Launch & navigate",
              text: "On detection, the system autonomously launches an interceptor drone and navigates it to the intrusion site.",
            },
            {
              label: "3. Center & capture",
              text: "Live gimbal control centers the target in frame, and close-up visual and thermal-style evidence photos are captured.",
            },
            {
              label: "4. Land & hand off",
              text: "The interceptor lands and hands the evidence to a human operator for the final decision.",
            },
          ],
        },
        {
          heading: "How It Works",
          items: [
            {
              label: "Flight & simulation",
              text: "ArduPilot SITL handles flight control, while Gazebo Harmonic provides physics and camera simulation.",
            },
            {
              label: "Vision pipeline",
              text: "Live frames stream through gz-transport into an OpenCV/YOLOv8 detection stage.",
            },
            {
              label: "Mission automation",
              text: "The full mission — arm, takeoff, navigate, center, land — is automated via pymavlink.",
            },
            {
              label: "Event logging",
              text: "Every mission stage is logged to a timestamped JSONL event log.",
            },
          ],
        },
        {
          heading: "Evidence Output (4 Artifacts per Detection)",
          bullets: [
            "Full-frame photo",
            "Full-frame simulated thermal overlay",
            "Zoomed and sharpened crop of the photo, isolating the target",
            "Zoomed and sharpened crop of the thermal overlay, isolating the target",
          ],
        },
        {
          heading: "Technical Challenges",
          items: [
            {
              label: "Self-false-positives",
              text: "The interceptor's own camera-mounted propellers and ground shadow were repeatedly misclassified as intruder drones. Solved with a layered filter — edge-touch rejection, bounding-box aspect-ratio filtering, and a fixed propeller-exclusion mask — since confidence-threshold tuning alone couldn't separate genuine detections from the aircraft seeing itself.",
            },
            {
              label: "General vs. domain-specific model",
              text: "Stock YOLOv8 (COCO-trained) misclassified drone shapes as \"bench\" or \"airplane,\" while a fine-tuned drone-detection model correctly identified them.",
            },
            {
              label: "Detection range",
              text: "Reliability still degrades sharply with distance — a known small-object-detection limitation that motivates future architecture work.",
            },
            {
              label: "Simulation environment",
              text: "VirtualBox 3D-acceleration conflicts with Gazebo's rendering (fixed for reliable GUI and headless operation), protobuf version mismatches between ML and simulation libraries, and NED/ENU frame translation between ArduPilot and Gazebo.",
            },
          ],
        },
      ],
      tech: [
        "Python",
        "ArduPilot SITL",
        "Gazebo Harmonic",
        "YOLOv8 (Ultralytics)",
        "OpenCV",
        "pymavlink",
        "MAVSDK",
        "gz-transport",
        "Computer Vision",
        "UAV Simulation",
      ],
      github: "https://github.com/kenilkalathiya/drone-security-inspection",
      coverImage: droneEvidenceThermal,
      imageUrls: [
        droneDetection,
        droneEvidenceVisual,
        droneEvidenceThermal,
        droneEvidenceCropVisual,
        droneEvidenceCropThermal,
        droneSecurity,
      ],
      imageCaptions: [
        "Live YOLOv8 detection in Gazebo",
        "Evidence: full-frame visual capture",
        "Evidence: simulated thermal overlay",
        "Evidence: zoomed & sharpened visual crop",
        "Evidence: zoomed & sharpened thermal crop",
        "Pipeline architecture",
      ],
    },
    {
      id: "isa-cruise-control",
      category: "automotive",
      title: "Intelligent Speed Assistance & Adaptive Cruise Control (CARLA Simulation)",
      description:
        "ADAS prototype combining Intelligent Speed Assistance and Adaptive Cruise Control, simulated end-to-end in CARLA.",
      longDescription:
        "Designed and implemented an ADAS prototype featuring Intelligent Speed Assistance (ISA) and Adaptive Cruise Control (ACC) in CARLA, with state-based cruise control, PID-based speed control, zone-based speed limits, RGB camera traffic sign recognition, driver override logic, safe-distance control, and realistic lead-vehicle interaction.",
      details: [
        {
          heading: "Overview",
          text: "An ADAS prototype featuring Intelligent Speed Assistance (ISA) and Adaptive Cruise Control (ACC), simulated end-to-end in CARLA.",
        },
        {
          heading: "Key Features",
          items: [
            {
              label: "Intelligent Speed Assistance",
              text: "Zone-based speed limits, validated under simulator and hardware constraints.",
            },
            {
              label: "Traffic sign recognition",
              text: "RGB camera perception for real-time traffic sign recognition.",
            },
            {
              label: "Adaptive Cruise Control",
              text: "State-based cruise control with PID-based speed control and safe-distance control relative to the vehicle ahead.",
            },
            {
              label: "Driver override",
              text: "Override logic so the driver can take control back.",
            },
            {
              label: "Lead-vehicle interaction",
              text: "Realistic lead-vehicle behavior to exercise the control logic.",
            },
          ],
        },
      ],
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
        "Developed a vision-based Advanced Driver Assistance System (ADAS) prototype featuring lane detection, vehicle detection, distance estimation, and forward collision warning. The system combines classical computer vision techniques with deep-learning-based object detection to enable real-time perception and safety logic, computes Time-To-Collision (TTC), and is extended with ROS2 nodes and basic camera–radar sensor fusion in simulation.",
      details: [
        {
          heading: "Overview",
          text: "A vision-based Advanced Driver Assistance System (ADAS) prototype for real-time perception and safety logic.",
        },
        {
          heading: "Approach",
          text: "Combines classical computer vision techniques with deep-learning-based object detection.",
        },
        {
          heading: "Capabilities",
          bullets: [
            "Lane detection",
            "Vehicle detection",
            "Distance estimation",
            "Time-To-Collision (TTC) computation",
            "Forward collision warning",
            "ROS2 nodes with basic camera–radar sensor fusion (simulation)",
          ],
        },
      ],
      tech: [
        "Python",
        "OpenCV",
        "YOLOv8",
        "ROS2",
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
      details: [
        {
          heading: "Overview",
          text: "A user-friendly application that predicts various diseases from patient medical reports.",
        },
        {
          heading: "Highlights",
          bullets: [
            "Predicts disease risk from patient medical reports",
            "Machine learning models drive the predictions for accurate decision-making",
            "React.js front end with a Flask backend",
          ],
        },
      ],
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
      details: [
        {
          heading: "Overview",
          text: "A comprehensive information system for movies and series, built with the MERN stack.",
        },
        {
          heading: "Highlights",
          bullets: [
            "Track the movies and series you've watched",
            "Discover new titles",
            "Responsive interface across screen sizes",
          ],
        },
      ],
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
      details: [
        {
          heading: "Overview",
          text: "A full-stack collaborative workspace where multiple users work together in real time, built with the MERN stack and WebSockets.",
        },
        {
          heading: "Highlights",
          bullets: [
            "Shared whiteboard for drawing together",
            "Real-time, multi-user code editing",
            "WebSockets for live updates, with JWT auth and RESTful APIs",
          ],
        },
      ],
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
      details: [
        {
          heading: "Overview",
          text: "A web application for real-time content analysis, backed by a machine learning model.",
        },
        {
          heading: "Highlights",
          bullets: [
            "Detects spam emails",
            "Identifies fake news",
            "Machine learning backend with an HTML/CSS/JavaScript front end",
          ],
        },
      ],
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
  {
    id: "generic-models-dont-know-your-domain",
    category: "automotive",
    date: "2026",
    title: "Generic Pretrained Models Don't Know Your Domain",
    excerpt:
      "When I first pointed stock YOLOv8 at a drone in my Gazebo airport simulation, it confidently called it a \"bench\" or an \"airplane\" — not because the model is bad, but because COCO has no drone class to begin with. Swapping in a fine-tuned drone detector fixed it immediately. The lesson I keep coming back to: a strong pretrained backbone is a starting point, and the last mile of accuracy comes from data that matches the thing you actually need to detect.",
  },
  {
    id: "the-unglamorous-part-of-simulation",
    category: "automotive",
    date: "2026",
    title: "The Unglamorous Part of Simulation Is the Integration",
    excerpt:
      "Getting ArduPilot, Gazebo, and a vision model to run as one system took less effort in the algorithms than in the seams between them: NED versus ENU coordinate frames, protobuf version clashes between ML and simulation libraries, and VirtualBox 3D acceleration fighting Gazebo's camera rendering. None of it is glamorous, but a simulation you can't reproduce isn't evidence of anything — so making it stable and repeatable is real engineering work, not overhead.",
  },
];
