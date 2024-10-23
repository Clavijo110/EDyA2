import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NavComponent from './components/NavComponent';
import { AuthContext } from './context/authContext';

const App = () => {
    const { isAuthenticated, setLastVisitedPage } = useContext(AuthContext);
    const location = useLocation();

    // Guardar la última página visitada cada vez que la ubicación cambia
    useEffect(() => {
        if (location.pathname !== '/login') {
            setLastVisitedPage(location.pathname);
        }
    }, [location, setLastVisitedPage]);

    return (
        <>
            <NavComponent />
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Rutas privadas */}
                {isAuthenticated ? (
                    <Route path="/profile" element={<ProfilePage />} />
                ) : (
                    <Route path="/profile" element={<Navigate to="/login" />} />
                )}

                {/* Redirigir rutas no encontradas */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default App;