// src/App.jsx
import React from 'react';
import { Login } from './pages/Login';
import {Registro} from './pages/Registro.jsx'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
const App = () => {

    return (
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path={'/' || '/login'} element={<Login></Login>}/>
            <Route path='/registro' element={<Registro></Registro>}/>
        </Routes>
    </BrowserRouter>
    </Provider>
    );
};

export default App;