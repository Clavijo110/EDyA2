import React, { useEffect, useState } from 'react';
import { db } from './firebase/config';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const createUser = async (name) => {
    await addDoc(usersCollectionRef, { name });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const updateUser = async (id, newName) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { name: newName });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="App">
      <UserForm createUser={createUser} />
      <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;