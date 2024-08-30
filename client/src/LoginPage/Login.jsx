import React, { useState } from "react";
import "./LoginPage.css";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Icons for email and password

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: formData.email === "" ? "Email is required" : "",
      password: formData.password === "" ? "Password is required" : "",
    };

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="form-icon" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="form-icon" /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          <div className="additional-links">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
