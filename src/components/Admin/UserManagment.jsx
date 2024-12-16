import React, { useState } from 'react';
import '../shared.css'; 

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '', role: '' });

  const handleAddUser = () => {
    if (!newUser.username || !newUser.email || !newUser.role) {
      alert('All fields are required!');
      return;
    }
    setUsers([...users, { ...newUser, status: 'Pending' }]);
    setNewUser({ username: '', email: '', role: '' });
  };

  const updateUserStatus = (index, status) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = status;
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h2>User Management</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
      <h3>Pending Approvals</h3>
      <ul>
        {users.map((user, index) =>
          user.status === 'Pending' ? (
            <li key={index}>
              {user.username} ({user.email}) - Role: {user.role}
              <button onClick={() => updateUserStatus(index, 'Approved')}>Approve</button>
              <button onClick={() => updateUserStatus(index, 'Rejected')}>Reject</button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default UserManagement;
