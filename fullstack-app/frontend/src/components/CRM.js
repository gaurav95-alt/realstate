import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CRM() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leads').then(res => setLeads(res.data));
  }, []);

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:5000/api/leads/${id}`, { status }).then(() => {
      setLeads(leads.map(lead => lead._id === id ? { ...lead, status } : lead));
    });
  };

  return (
    <div>
      <h1>CRM Dashboard</h1>
      {leads.map(lead => (
        <div key={lead._id}>
          <p>{lead.name} - {lead.status}</p>
          <button onClick={() => updateStatus(lead._id, 'Contacted')}>Mark Contacted</button>
        </div>
      ))}
    </div>
  );
}

export default CRM;