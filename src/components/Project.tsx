import React from "react";
import "../assets/styles/Project.scss";

// Use existing mock images to avoid file-not-found errors
import datacenter from '../assets/images/datacenter.jpg';
import esvc from '../assets/images/esvc.jpg';
import portfolio from '../assets/images/portfolio.jpg';
import vip from '../assets/images/vip.jpg';


function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* 1) HSRN Robot – Data Center Robot */}
        <div className="project">
          <img src={datacenter} className="zoom" alt="HSRN Robot" width="100%" />
          <h2>HSRN Robot – Data Center Robot</h2>
          <p>
            The HSRN Robot Project at NYU focuses on developing a joystick-driven robotic system 
            for data center automation, enabling precise navigation and real-time task execution. 
            My role as a Developer involves designing robotic perception models and multi-agent 
            coordination strategies to improve efficiency and reliability in structured environments.
          </p>
          <p>
            Currently, I am working on sensor fusion techniques to enhance robotic perception, 
            allowing the system to process and interpret data more accurately in real time. 
            Additionally, I am developing multi-agent control algorithms, ensuring multiple robots 
            can coordinate tasks effectively without conflicts or inefficiencies.
          </p>
          <p>
            To achieve seamless integration, I am implementing Corelink C++ client with ROS, 
            allowing for efficient communication between the robotic system and the central 
            control network. The joystick-based interface ensures precise manual control while 
            maintaining the flexibility for future autonomous operations.
          </p>
          <p><strong>Technologies:</strong> ROS, C++, Python, Corelink, Sensor Fusion</p>
        </div>

        {/* 2) NYU VIP Self-Drive – Autonomous Navigation & Visual SLAM */}
        <div className="project">
          <img src={vip} className="zoom" alt="NYU Self-Drive" width="100%" />
          <h2>NYU VIP Self-Drive – Autonomous Navigation & Visual SLAM</h2>
          <p>
            The NYU VIP Self-Drive project is a research initiative focused on developing 
            autonomous navigation and mapping capabilities for small-scale indoor robotic vehicles. 
            Our goal is to achieve efficient self-driving behavior in unknown environments 
            using Visual SLAM, feature-based navigation, and real-time motion planning.
          </p>
          <p>
            I’m currently working on path planning, SLAM integration, and robot localization, 
            using A* search for optimal pathfinding and ORB feature matching for vision-based 
            landmark recognition. The system operates on ROS 2 Humble, utilizing a monocular camera 
            for mapping and a TurtleBot3 platform for real-time testing.
          </p>
          <p>
            A key challenge is ensuring accurate navigation with minimal sensor data, requiring 
            advanced graph-based planning and efficient exploration strategies. The final stage 
            of development will focus on competing in the Self-Drive Exploration & Navigation Challenge.
          </p>
          <p><strong>Technologies:</strong> ROS 2 Humble, A*, ORB SLAM, TurtleBot3, OpenCV, C++</p>
        </div>

        {/* 3) The S.L.A.P. Hand – Evolving My Animatronic Hand Project */}
        <div className="project">
          <img src={vip} className="zoom" alt="S.L.A.P. Hand" width="100%" />
          <h2>The S.L.A.P. Hand – Evolving My Animatronic Hand Project</h2>
          <p>
            The S.L.A.P. Hand (Simultaneous Linked Articulation Project) is an advanced version 
            of my undergraduate Animatronic Hand project, designed for remote operation and 
            hazardous material handling. I’m currently focused on improving control accuracy, 
            articulation, and response time by integrating Wi-Fi-based communication, gesture 
            tracking, and haptic feedback.
          </p>
          <p>
            This project is still in progress, and the next steps involve transitioning from 
            Bluetooth to a more stable wired communication system, improving motor response times, 
            and fine-tuning gesture-based articulation. Future plans include integrating cameras on 
            the fingers for real-time object detection and exploring AI-driven grasp optimization.
          </p>
          <p><strong>Technologies:</strong> ESP8266, MPU6050, Haptic Feedback, Wi-Fi Communication</p>
        </div>

        {/* 4) B.A.R.K. Door – Smart Pet Access System */}
        <div className="project">
          <img src={portfolio} className="zoom" alt="B.A.R.K. Door" width="100%" />
          <h2>B.A.R.K. Door – Smart Pet Access System</h2>
          <p>
            B.A.R.K. (Bluetooth Actuated Remote Key) Door is a smart pet-access system I developed to 
            enable secure, automated pet entry while preventing unauthorized access. The system 
            uses RFID authentication, Bluetooth connectivity, and IoT-based monitoring.
          </p>
          <p>
            I designed and implemented the system with BS2-controlled servo mechanisms, 
            an RFID-based locking system, and Bluetooth-based manual override via a mobile app. 
            Currently, I’m exploring Wi-Fi integration and AI-driven behavioral tracking to enhance 
            access security and adaptability.
          </p>
          <p><strong>Technologies:</strong> BS2, RFID, Bluetooth, IoT, Servo Mechanisms</p>
        </div>

        {/* 5) E.S.V.C. – Solar-Powered Electric Vehicle for Sustainable Mobility */}
        <div className="project">
          <img src={esvc} className="zoom" alt="E.S.V.C. Project" width="100%" />
          <h2>E.S.V.C. – Solar-Powered Electric Vehicle</h2>
          <p>
            The E.S.V.C. (Electric Solar Vehicle Championship) project focused on developing 
            an electric solar vehicle designed for sustainability and efficient mobility. 
            As part of Team Solarians 4.0 (ESVC-22-1498), I was responsible for designing 
            and structurally analyzing a lightweight tubular chassis using CATIA V5 and 
            ANSYS R16.2 software.
          </p>
          <p>
            The chassis, engineered from AISI 4130 steel, ensured robustness under dynamic 
            and impact loads. The design adhered to E.S.V.C. rulebook guidelines, emphasizing 
            safety, vehicle stability, and optimal performance in competition conditions.
          </p>
          
          <p><strong>Technologies:</strong> CATIA V5, ANSYS R16.2.</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
