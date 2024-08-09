import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

import BG from "../../Assets/Hero-Video/slider-video.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <video className="hero-video" playsInline autoPlay loop muted>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h5 className="hero-title">
          <TypeAnimation
            sequence={["Innovate", 1000, "Create", 1000, "Inspire", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h5>
        <p className="tagline">Creativity is contagious, pass it on.</p>
      </div>
    </div>
  );
};

export default HeroSection;
