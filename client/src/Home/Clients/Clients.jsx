import React, { useEffect, useState } from 'react';
import { getClient } from '../../services/clientService';
import "./Clients.css";

const ClientsSection = () => {

  const [client, setClient] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchClient();
    }
  }, [isDataFetched]);

  const fetchClient = async () => {
    try {
      const clientData = await getClient();
      setClient(clientData.data);
      setIsDataFetched(true);
      console.log(clientData.data, "clients");
    } catch (error) {
      console.error('Error fetching client:', error);
    }
  };

  return (
    <section id="Clients" className="clients-section container">
      <h2>OUR CLIENTS</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
      <div className="clients-grid">
      {client.map((clientItem, index) => (
        <div key={clientItem._id} className="client-card">{clientItem.clientName} alt={`Client Logo ${index}`} </div>
      ))}
      </div>
    </section>
  );
};

export default ClientsSection;
