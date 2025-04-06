import React from "react";
import "../assets/styles/Project.scss";

// Use existing mock images to avoid file-not-found errors
import datacenter from '../assets/images/datacenter.jpg';
import esvc from '../assets/images/esvc.jpg';
import vip from '../assets/images/vip.jpg';
import bark from '../assets/images/bark.jpg';


function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* 1) HSRN Robot – Data Center Robot */}
        <div className="project">
          <img src={datacenter} className="zoom" alt="HSRN Robot" width="50%" />
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
          <img src={vip} className="zoom" alt="NYU Self-Drive" width="50%" />
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
          <img src={vip} className="zoom" alt="S.L.A.P. Hand" width="50%" />
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
        {/* 4) Foundations of Robotics – SCARA Manipulator Control & Planning */}
        <div className="project">
        <h2>Foundations of Robotics – SCARA Manipulator Control & Planning</h2>
         <p>
          This project was a three-phase exploration into robotic motion control, completed during my first semester at NYU 
          as part of the "Foundations of Robotics" course. Using a 4-DOF SCARA manipulator, I progressively built systems for 
          kinematic control, real-time error correction, obstacle avoidance, and dynamic trajectory execution in simulated environments. 
          The project was developed entirely in MATLAB and Simulink, with each phase building on the last to reflect increasingly realistic robotic behaviors.
          </p>
          <p>
            In the first phase, I implemented basic inverse kinematics algorithms using both the Jacobian Inverse and Jacobian Transpose methods. 
            These were applied to track a predefined Cartesian trajectory by translating end-effector positions into joint-level motions. 
            This initial setup helped me understand the mathematical foundations of robot control and how Euler integration (1 ms timestep) 
            can be used to simulate smooth joint movements.
          </p>
          <p>
          The second phase introduced real-time adaptability. I implemented second-order inverse kinematics to improve tracking accuracy 
          and extended the system to avoid dynamic obstacles in the workspace. By using a Jacobian Pseudo-Inverse with Null-Space Projection, 
          I enabled the manipulator to prioritize trajectory tracking in the x-y plane while dynamically adjusting in the z-direction to avoid collisions. 
          This approach helped me experiment with redundancy resolution and secondary task execution, which are essential in complex robotic systems.
          </p>
          <p>
          The final phase combined trajectory planning with inverse dynamic control. I designed a smooth, multi-waypoint Cartesian trajectory 
          using trapezoidal velocity profiles and anticipation timing to ensure continuity. Then, I implemented a control system that accounted 
          for the robot’s dynamic behavior under varying load conditions. The SCARA manipulator was simulated using a second-order inverse 
          kinematics model that generated torque commands for precise execution. This phase gave me hands-on insight into how real robots operate 
          under physical constraints like inertia and external forces.
          </p>
          
          <p>
            <strong>Tools & Frameworks:</strong> MATLAB, Simulink, SCARA Simulation, VR Visualization<br/>
            <strong>Key Concepts:</strong> Inverse Kinematics, Null-Space Control, Trajectory Planning, Inverse Dynamics, Redundancy Resolution, Real-Time Motion Correction
          </p>
        </div>

        {/* 5) B.A.R.K. Door – Smart Pet Access System */}
        <div className="project">
          <img src={bark} className="zoom" alt="B.A.R.K. Door" width="50%" />
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

        {/* 6) E.S.V.C. – Solar-Powered Electric Vehicle for Sustainable Mobility */}
        <div className="project">
          <img src={esvc} className="zoom" alt="E.S.V.C. Project" width="50%" />
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
