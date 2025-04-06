import React from "react";
import "../assets/styles/Internship.scss";

// Placeholder images (Replace later)
import xmachines from '../assets/images/xmachines.jpg';

function Internship() {
  return (
    <div className="internship-container" id="internships">
      <h1>Internship</h1>
      <div className="internship-grid">

        {/* 1) Xmachines – Agricultural Robotics Startup */}
        <div className="internship">
          <img src={xmachines} className="zoom" alt="Xmachines" width="50%" />
          <h2>Xmachines – Agricultural Robotics Startup</h2>
          <p>
            At <strong>Xmachines</strong>, I contributed to the development of <strong>autonomous agricultural systems</strong>, 
            focusing on real-time automation, sensor integration, and ROS-based control. My work involved 
            optimizing sensor performance, ensuring precise environmental perception, and improving 
            the decision-making process in robotic operations.
          </p>
          <p>
            I worked extensively with <strong>MPU-6050</strong> (motion tracking) and <strong>Arducam IMX219</strong> (image processing), 
            refining their integration on <strong>Ubuntu 22.04</strong>. Additionally, I implemented <strong>Jetson Orin Nano, Arduino, 
            and ESP32</strong> for embedded automation, enhancing robotic perception and control. 
          </p>
          <p>
            A key challenge was optimizing real-time motion planning in dynamic farm environments. 
            Through <strong>ROS-based solutions</strong>, I contributed to testing and improving autonomous navigation, 
            refining robotic behavior to enhance crop monitoring and harvesting processes.
          </p>
          <p>
            This experience reinforced my skills in <strong>sensor fusion, real-time control, and embedded systems</strong>. 
            I’m eager to continue exploring AI-driven automation and multi-sensor fusion techniques 
            to advance agricultural robotics.
          </p>
          <p><strong>Technologies:</strong> ROS, C++, Python, Embedded Systems, Jetson Orin Nano, Ubuntu 22.04</p>
        </div>

      </div>
    </div>
  );
}

// ✅ Ensure only one default export
export default Internship;
