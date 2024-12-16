import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Admin/LoginPage';
import Dashboard from './components/Admin/Dashboard';
import UserManagement from './components/Admin/UserManagement';
import DocumentManagement from './components/Admin/DocumentManagement';
import UserPortal from './components/User/UserPortal';
import './components/shared.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/document-management" element={<DocumentManagement />} />
        <Route path="/user-portal" element={<UserPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
