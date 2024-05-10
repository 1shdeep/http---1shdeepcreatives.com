import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { createClient } from '../services/clientService';


const ClientsAdmin = () => {

  const [clientLink, setClientLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!clientLink.trim()) {
      setError("Client link cannot be empty");
      alert("Client link cannot be empty");
      return;
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!urlPattern.test(clientLink.trim())) {
      setError("Please enter a valid URL");
      alert("Please enter a valid URL");
      return;
    }

    try {
      await createClient({ logoUrl: clientLink }); 
      alert("Client link uploaded successfully!");
      setClientLink("");
      setError("");
    } catch (error) {
      console.error("Error uploading client link:", error);
      alert("Error uploading client link");
    }
  };

  const handleChange = (event) => {
    setClientLink(event.target.value);
    setError(""); 
  };

  return (
    <div className="flex items-center h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl color-black font-bold mb-4">Clientele Section</h2>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="form-control">
              <textarea
                className="input input-alt border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Your Client's Link Here!"
                required=""
                type="text"
                value={clientLink}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientsAdmin;
