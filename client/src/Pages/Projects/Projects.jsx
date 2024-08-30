import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const companyNames = ["SAMSUNG", "APPLE", "GOOGLE", "REDMI"];

  return (
    <div className="projects-section">
      <div className="projects-heading">
        <h1>PORTFOLIO</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="projects-images">
        {companyNames.map((name, index) => (
            <Link to="/Details">
          <div key={index} className="projects-image">
            <div className="projects-image-overlay"></div>
              <img
                src={`https://as2.ftcdn.net/v2/jpg/05/21/18/03/1000_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg`}
                alt={`${name} project`}
              />
          </div>
            </Link>
        ))}
      </div>

      <div className="company-names-bar">
        {companyNames.map((name, index) => (
          <div key={index} className="company-name">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
