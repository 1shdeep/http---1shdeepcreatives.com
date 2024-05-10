import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/loginService';

const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    try {

      if (!email) {
        alert('Email is required');
        return; 
      }

      if (!password) {
        alert('Password is required');
        return; 
      }
  
      const response = await loginAdmin({ email, password });
      console.log(response);

      if (response && response.data) {
        const { token } = response.data;
        localStorage.setItem('adminToken', token);
        navigate('/AdminPanel');
        window.location.reload();

      } else {
        alert('Email or Password is incorrect.'); 
      }

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='login-page'>
        <div className="wrapper">
  <div className="login_box">
    <div className="login-header">
      <span>Login</span>
    </div>

    <div className="input_box">
      <input type="text" id="user" className="input-field" value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
      <label for="user" className="label">Username</label>
      <i className="bx bx-user icon"></i>
    </div>

    <div className="input_box">
      <input type="password" id="pass" className="input-field" value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
      <label for="pass" className="label">Password</label>
      <i className="bx bx-lock-alt icon"></i>
    </div>

    <div className="input_box">
      <button type="submit" onClick={(e) => handleLogin(e)} className="input-submit">
        Login
      </button>
    </div>

  </div>
</div>
    </div>
  )
}

export default LoginPage