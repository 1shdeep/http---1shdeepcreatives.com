// Sidebar.jsx
import React from "react";
import "./Sidebar.css"; // Import the CSS for styling
import {
  FaHome,
  FaServicestack,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa"; // Example icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">1shdeep Creatives</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#home">
            <FaHome className="sidebar-icon" />
            <span className="menu-text">Home</span>
          </a>
        </li>
        <li>
          <a href="#services">
            <FaServicestack className="sidebar-icon" />
            <span className="menu-text">Services</span>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FaBriefcase className="sidebar-icon" />
            <span className="menu-text">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope className="sidebar-icon" />
            <span className="menu-text">Contact</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>© 2024 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;
