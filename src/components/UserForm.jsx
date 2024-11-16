import React, { useState } from 'react';

const UserForm = ({ createUser }) => {
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newUser);
    setNewUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;