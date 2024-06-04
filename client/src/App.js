import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
import Uploads from "./AdminPanel/Uploads.jsx";
import Data from "./AdminPanel/Data.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import WorkAdmin from "./AdminPanel/Work-Admin.jsx";
import ClientAdmin from "./AdminPanel/Clients-Admin.jsx";
import TestimonialAdmin from "./AdminPanel/Testimonials-Admin.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import WorkList from "./AdminPanel/WorkList.jsx";
import ClientList from "./AdminPanel/ClientList.jsx";
import TestimonialsList from "./AdminPanel/TestimonialsList.jsx";
import ContactList from "./AdminPanel/ContactList.jsx";
import PrivateRouteAdmin from './utilities/Authorize/PrivateRouteAdmin';


  function App() {
    return (
      <Router>
        <AppContent />
      </Router>
    );
  }

      function AppContent() {
  
        return (
  
          <>
            <Routes>
           
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Projects/:projectId" element={<Projects />} />

              <Route path="/admin/login" element={< LoginPage />} />
       
              <Route path="/" element={<PrivateRouteAdmin />} >
                <Route exact path="/Work" element={<WorkAdmin />} />
                <Route exact path="/Clients" element={<ClientAdmin />} />
                <Route exact path="/ContactList" element={<ContactList />} />
                <Route exact path="/AdminPanel" element={<AdminPanel />} />
                <Route exact path="/WorkList" element={<WorkList />} />
                <Route exact path="/ClientList" element={<ClientList />} />
                <Route exact path="/Testimonials" element={<TestimonialAdmin />} />
                <Route exact path="/TestimonialsList" element={<TestimonialsList />} />
                <Route exact path="/Uploads" element={<Uploads />} />
                <Route exact path="/Data" element={<Data />} />
              </Route>
      
            </Routes>
          </>
      
        )
      }


export default App;
