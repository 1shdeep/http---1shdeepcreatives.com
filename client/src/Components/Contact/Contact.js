import React, { useEffect, useState } from 'react';
import "./Contact.css";
import { createContact } from '../../services/portfolioService';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError("All fields are required");
      alert("All fields are required");
      return;
    }

    try {
      const contactData = {
        name,
        email,
        phone,
        message
      };

      await createContact(contactData);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      alert("Message send successfully!");
    } catch (error) {
      console.error("Error uploading testimonial:", error);
      alert("Error uploading testimonial");
    }
  };

  return (
    
   <>
     <div className="md:w-3/4 w-full max-w-[400px] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Form
            </h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                name="message"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Submit
              </button>
            </form>
          </div>
   </>
  );
};

export default Contact;
