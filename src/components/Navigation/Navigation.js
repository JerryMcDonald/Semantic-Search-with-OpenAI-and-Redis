import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/queries">Queries</NavLink>
        </li>
        <li>
          <NavLink to="/add-document">Add Document</NavLink>
        </li>
        <li>
          <NavLink to="/document-viewer">Document Viewer</NavLink>
        </li>
        <li>
          <NavLink to="/index-management">Index Management</NavLink>
        </li>
        <li>
          <NavLink to="/sandbox">Sandbox</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;