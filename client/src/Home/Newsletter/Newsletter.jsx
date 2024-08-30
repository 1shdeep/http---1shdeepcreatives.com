import React from "react";
import "./Newsletter.css";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <Link to="/Form">
      <div className="Newsletter container">
        <h2>SUBSCRIBE TO OUR NEWSLETTER NOW!</h2>
      </div>
    </Link>
  );
};

export default Newsletter;
