import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CRM from './components/CRM';
import Properties from './components/Properties';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/crm" element={<CRM />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;