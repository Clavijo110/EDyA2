import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login, lastVisitedPage } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username);
        navigate(lastVisitedPage || '/');
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;