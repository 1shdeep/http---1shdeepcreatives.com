import React from 'react';
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logos/white-small.png"

import { GrProjects } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/#Clients" >
        <button className="menu-icon">
          <TbUsers /> {/* Users Icon */}
        </button>
        </a>

        <a href="/#Blogs">
        <button className="search-icon">
          <FaBookOpen /> {/* Blogs Icon */}
        </button>
        </a>
      </div>

      <div className="navbar-center">
        <a href="/#" className="logo">
          <img src={Logo} alt="Logo" /> {/* Replace with your logo */}
        </a>
      </div>

      <div className="navbar-right">
        <Link to="/Projects">
        <button className="profile-icon">
          <GrProjects /> {/* Projects Icon */}
        </button>
        </Link>

        <a href="mailto:vanshdeepofficial@gmail.com">
        <button className="cart-icon">
          <FaMessage /> {/* Contact Icon */}
        </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;