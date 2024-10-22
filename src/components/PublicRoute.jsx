import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return !isAuthenticated ? children : <Navigate to="/" />;
};