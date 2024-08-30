import React from "react";
import "./Contact.css";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="ContactUs" className="contact-section container">
      <div className="contact-content">
        <h1 className="contact-heading">
          LET'S WORK <br /> TOGETHER
        </h1>
        <div className="contact-arrow">
          <HiOutlineArrowUpRight />
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-title">
            <a
              href="mailto:vanshdeepofficial@gmail.com"
              className="contact-link"
            >
              EMAIL{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </a>
          </h3>
          <p className="contact-details">
            <a href="mailto:vanshdeepofficial@gmail.com">
              vanshdeepofficial@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              PHONE{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">(+91) - 9876543210</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              SOCIAL LINKS{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">
            <a
              href="https://m.facebook.com/p/1shdeep-100069412633422/"
              className="si"
            >
              <FaFacebook />
            </a>{" "}
            <a href="https://twitter.com/1shdeep_?lang=en" className="si">
              <BsTwitterX />
            </a>{" "}
            <a href="https://www.instagram.com/1shdeep/?hl=en" className="si">
              <FaInstagram />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
