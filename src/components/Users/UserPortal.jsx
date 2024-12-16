import React from 'react';
import '../shared.css'; 

function UserPortal() {
  const userDocuments = [
    { name: 'Document 1', status: 'Approved' },
    { name: 'Document 2', status: 'Pending' },
  ];

  return (
    <div className="container">
      <h2>User Portal</h2>
      <h3>Your Documents</h3>
      <ul>
        {userDocuments.map((doc, index) => (
          <li key={index}>
            {doc.name} - Status: {doc.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPortal;
