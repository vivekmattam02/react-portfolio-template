import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portfolio from '../assets/images/portfolio.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={portfolio} alt="Vivekananda Swamy Mattam" />
        </div>
        <div className="content">
          <div className="social_icons">
          <a href="https://github.com/vivekmattam02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/vivek-mattam-a8590b23a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vivekananda Swamy Mattam</h1>
          <p>Masters Student in Mechatronics and Robotics at NYU</p>
          <div className="about-me">
  <h2>About Me</h2>
  <p>
    Hi, I’m <strong>Vivekananda Swamy Mattam</strong>, a Master’s student in Mechatronics and Robotics at NYU Tandon, 
    specializing in autonomous navigation, SLAM, and real-time robotic systems. Growing up around agriculture, 
    I witnessed firsthand how technology can transform industries, inspiring me to pursue robotics—not just as a field of study, 
    but as a means to drive real-world impact.
  </p>
  <p>
    My work spans self-driving technologies, industrial automation, and embedded systems. I am currently part of the 
    <strong>NYU Self-Drive VIP</strong> project, focusing on SLAM-based navigation for autonomous robots. Previously, I interned at 
    <strong>Xmachines</strong>, an agricultural robotics startup, where I contributed to sensor-driven automation, embedded systems, 
    and robotic component design. Additionally, I have experience in energy-efficient vehicle design, having competed in the 
    <strong>ESVC Solar Car National Championship</strong> against 60+ teams in a high-pressure engineering environment.
  </p>
  <p>
    I am particularly excited about blending AI, automation, and perception systems to develop intelligent, adaptable robotic solutions. 
    I am actively seeking <strong>Summer 2025 internship opportunities</strong> in robotics, automation, and embedded systems, where 
    I can apply my expertise and contribute to cutting-edge innovations.
  </p>
</div>

          <div className="mobile_social_icons">
            <a href="https://github.com/vivekmattam02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/vivek-mattam-a8590b23a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;