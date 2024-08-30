import React, { useState, useEffect } from "react";
import "./Hero.css";
// import { TypeAnimation } from "react-type-animation";

import BG from "../../Assets/Hero/Hero-BG.mp4";

const HeroSection = () => {
  const words = ["Create", "Innovate", "Inspire"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container" id="home">
      <video className="hero-video" playsInline autoPlay loop muted>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h5 className="hero-title">
          <section className="flip-section">
            <div className="flip-container">
              <div className="flip-text">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`flip-word ${
                      index === currentWordIndex ? "active" : ""
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </h5>
        <p className="tagline"></p>
      </div>
    </div>
  );
};

export default HeroSection;
