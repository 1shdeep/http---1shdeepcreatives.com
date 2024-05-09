import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-white text-sm mb-2">
          © 2024 1shdeep Creatives.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/channel/UC4Gq8wXTfasUGRezdXbKz7w"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} className="text-white" />
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2F1shdeep_%3Fs%3D09"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX size={20} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/1shdeep/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={20} className="text-white" />
          </a>
        </div>
        <p className="text-center text-white text-sm mt-4">
          Made with ❤️ by
          <Link
            to="https://in.linkedin.com/company/agilesupport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="AgileSupport"> Agile Support</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
