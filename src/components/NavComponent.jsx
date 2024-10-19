import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

export const NavComponent = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        exact
                        className="nav-link"
                        activeClassName="active-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/about"
                        className="nav-link"
                        activeClassName="active-link"
                    >
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/contact"
                        className="nav-link"
                        activeClassName="active-link"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};