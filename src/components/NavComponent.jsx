import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './NavComponent.css';  // Importa tu archivo CSS

const NavComponent = () => {
    const { isAuthenticated, user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Home
                    </NavLink>
                </li>

                {isAuthenticated ? (
                    <>
                        <li className="nav-item">
                            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Hello, {user}</span>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={logout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <li className="nav-item">
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                            Login
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavComponent;