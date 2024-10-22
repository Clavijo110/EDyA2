import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export const LogoutButton = () => {
    const { logout, username } = useContext(AuthContext);

    return (
        <div>
            <p>Welcome, {username}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};