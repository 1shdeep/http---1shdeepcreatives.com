import React from "react";
import "./About.css"; 
import shdeep from "../../Assets/About/1shdeep.jpg"

import { HiOutlineArrowUpRight } from "react-icons/hi2";

const AboutSection = () => {
  return (
    <section className="about-section container">
      <div className="content">
        <h1 className="title">
          THE ART <br /> INNOVATION HUB
        </h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <a
          href="mailto:vanshdeepofficial@gmail.com"
          className="about-contact contact-link"
        >
          CONTACT US{" "}
          <span className="arrow">
            <HiOutlineArrowUpRight />
          </span>
        </a>
      </div>
      <div className="image-container">
        <img src={shdeep} alt="Agency Story" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;
