import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/components/Navigation.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Admin from './pages/Admin/Admin.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
