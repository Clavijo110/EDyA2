import React from 'react';

const UserItem = ({ user, updateUser, deleteUser }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={() => updateUser(user.id, prompt("Enter new name", user.name))}>Update</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;