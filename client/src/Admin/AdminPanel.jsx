import React from 'react'
import Sidebar from './Sidebar/Sidebar'

const AdminPanel = () => {
  return (
    <div>
      <header className="dashboard-header">
        <h1 style={{ color: "white" }}>Welcome, Admin!</h1>
      </header>
      <iframe
        title="Hello"
        src="https://lottie.host/embed/b199d3a3-893b-459d-901e-9995ef70db8e/5WJbaVDPjD.json"
        width="500"
        height="500"
      ></iframe>
      <Sidebar />
    </div>
  );
}

export default AdminPanel