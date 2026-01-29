import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/properties?location=${search}`).then(res => setProperties(res.data));
  }, [search]);

  return (
    <div>
      <h1>Property Listings</h1>
      <input type="text" placeholder="Search by location" onChange={e => setSearch(e.target.value)} />
      {properties.map(prop => (
        <div key={prop._id}>
          <h3>{prop.title}</h3>
          <p>{prop.location} - ${prop.price}</p>
          <Link to={`/properties/${prop._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Properties;