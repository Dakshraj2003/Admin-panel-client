import React, { useState } from 'react';
import '../shared.css'; 

function DocumentManagement() {
  const [documentName, setDocumentName] = useState('');
  const [users] = useState(['User 1', 'User 2', 'User 3']); 
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCreateDocument = () => {
    if (!documentName || selectedUsers.length === 0) {
      alert('Document name and approved users are required!');
      return;
    }
    alert(`Document "${documentName}" created for users: ${selectedUsers.join(', ')}`);
    setDocumentName('');
    setSelectedUsers([]);
  };

  return (
    <div className="container">
      <h2>Document Management</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateDocument();
        }}
      >
        <input
          type="text"
          placeholder="Document Name"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />
        <select
          multiple
          value={selectedUsers}
          onChange={(e) =>
            setSelectedUsers(Array.from(e.target.selectedOptions, (option) => option.value))
          }
        >
          {users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button type="submit">Create Document</button>
      </form>
    </div>
  );
}

export default DocumentManagement;
