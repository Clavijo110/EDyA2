import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Welcome, {user}!</p>
        </div>
    );
};

export default ProfilePage;