import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage  from './pages/HomePage';  // Importa tus páginas
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NavComponent from './components/NavComponent';  // Importa tu componente de navegación
import { AuthContext } from './context/authContext';  // Importa el contexto de autenticación

const App = () => {
    const { isAuthenticated, setLastVisitedPage } = useContext(AuthContext);

    useEffect(() => {
        const lastPage = localStorage.getItem('lastVisitedPage');
        if (lastPage) {
            setLastVisitedPage(lastPage);
        }
    }, [setLastVisitedPage]);

    return (
        <>
            <NavComponent />  {/* Barra de navegación */}
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Rutas privadas */}
                {isAuthenticated ? (
                    <>
                        <Route path="/profile" element={<ProfilePage />} />
                    </>
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