import React from "react";
import Chip from '@mui/material/Chip';
import "../assets/styles/Expertise.scss";

function Expertise() {
  return (
    <div className="skills-container" id="expertise">
      <h1>Expertise</h1>
      <div className="skills-grid">
        <div className="skill">
          <div className="flex-chips">
            <span className="chip-title">Languages:</span>
            <Chip label="Python" variant="outlined" />
            <Chip label="C++" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="TypeScript" variant="outlined" />
            <Chip label="MATLAB" variant="outlined" />
          </div>
        </div>
        <div className="skill">
          <div className="flex-chips">
            <span className="chip-title">Frameworks & Tools:</span>
            <Chip label="ROS" variant="outlined" />
            <Chip label="ROS 2" variant="outlined" />
            <Chip label="React" variant="outlined" />
            <Chip label="OpenCV" variant="outlined" />
            <Chip label="TensorFlow" variant="outlined" />
          </div>
        </div>
        <div className="skill">
          <div className="flex-chips">
            <span className="chip-title">Hardware & Systems:</span>
            <Chip label="Arduino" variant="outlined" />
            <Chip label="ESP32" variant="outlined" />
            <Chip label="Jetson Orin Nano" variant="outlined" />
            <Chip label="Embedded Systems" variant="outlined" />
            <Chip label="SLAM" variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

