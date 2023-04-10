import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';

import Queries from './components/Queries';
import Navigation from './components/Navigation';
import AddDocument from './components/AddDocument';
import DocumentViewer from './components/DocumentViewer';
import IndexManagement from './components/IndexManagement';
import Sandbox from './components/Sandbox';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
          {/* <Route path="/">
            <Navigate to="/queries" />
          </Route> */}
        <Routes>
          <Route path="/queries" element={<Queries />} />
          <Route path="/add-document" element={<AddDocument />} />
          <Route path="/document-viewer" element={<DocumentViewer />} />
          <Route path="/index-management" element={<IndexManagement />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;