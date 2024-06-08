import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../../Assets/logo/WHITE 1S.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);

    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className="p-4"
      style={{
        background: scrollPosition > 0 ? "rgba(0, 0, 0, 0.25)" : "transparent",
        backdropFilter: scrollPosition > 0 ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrollPosition > 0 ? "blur(4px)" : "none",
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center ml-54 justify-between">
          <div className="text-white font-bold text-lg">
            <Fade>
              <img src={Logo} alt="Logo" className="logo h-16 w-auto" />
            </Fade>
          </div>
          <Fade>
            <ul className="social-Container flex space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/1shdeep/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram className="social-icon text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2F1shdeep_%3Fs%3D09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className="social-icon text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC4Gq8wXTfasUGRezdXbKz7w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="social-icon text-white" />
                </a>
              </li>
            </ul>
          </Fade>
          <div className="flex items-center">
            <a
              className="lg:inline-block sm:hidden"
              href="mailto:vanshdeepofficial@gmail.com"
            >
              <button
                className="contact cursor-pointer inline-flex items-center rounded-full px-7 py-2 text-l text-white-200 hover:text-white border-2 border-white-600 hover:bg-green-600 transition ease-in-out delay-150  hover:bg-green-600 duration-300  focus:bg-transparent mr-5"
                style={{ color: "white" }}
              >
                Contact Us
              </button>
            </a>
            <div>
              {isOpen ? (
                <FaTimes
                  className="text-white cursor-pointer close-icon"
                  size={24}
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-white cursor-pointer"
                  size={24}
                  onClick={toggleMenu}
                />
              )}
            </div>
            <div className={`dropDownMenu ${isOpen ? "open" : ""}`}>
              <ul className="btnContainer text-white text-lg text-center">
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Home
                    </a>
                  ) : (
                    <a href="/#home" onClick={closeMenu}>
                      Home
                    </a>
                  )}
                </li>
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      About
                    </a>
                  ) : (
                    <a href="/#about" onClick={closeMenu}>
                      About
                    </a>
                  )}
                </li>
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Work
                    </a>
                  ) : (
                    <a href="/#work" onClick={closeMenu}>
                      Work
                    </a>
                  )}
                </li>
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Clients
                    </a>
                  ) : (
                    <a href="/#clients" onClick={closeMenu}>
                      Clients
                    </a>
                  )}
                </li>
                <li className="text-white sm:inline-block lg:hidden">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Contact Us
                    </a>
                  ) : (
                    <a href="/#clients" onClick={closeMenu}>
                      Contact Us
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
