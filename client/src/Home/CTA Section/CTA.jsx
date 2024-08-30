import React from 'react'
import "./CTA.css"
import { Link } from 'react-router-dom';

import { HiOutlineArrowUpRight } from "react-icons/hi2";

const CTA = () => {
  return (
    <div className="CTA-section container">
      <div className="about-columns">
        <div className="about-column">
          <h3 className="column-heading">
            <Link to="/Projects" className="contact-link">
                OUR PROJECTS
                <span className="arrow">
                  <HiOutlineArrowUpRight />
                </span>
            </Link>
          </h3>
          <p className="column-description">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="about-column">
          <h3 className="column-heading">
            <a href="#ContactUs" className="contact-link">
              CONTACT US{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </a>
          </h3>
          <p className="column-description">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="about-column">
          <h3 className="column-heading">
            <a href="#Blogs" className="contact-link">
              BLOGS
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </a>
          </h3>
          <p className="column-description">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CTA