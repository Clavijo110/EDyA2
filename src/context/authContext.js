import { createContext, useReducer } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, user: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null };
        case 'SET_LAST_PAGE':
            return { ...state, lastVisitedPage: action.payload };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
        lastVisitedPage: '/'
    });

    const login = (user) => {
        dispatch({ type: 'LOGIN', payload: user });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const setLastVisitedPage = (page) => {
        localStorage.setItem('lastVisitedPage', page);
        dispatch({ type: 'SET_LAST_PAGE', payload: page });
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout, setLastVisitedPage }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };