import React from 'react';
import {GifGrid} from './components/GifGrid';

function App() {
    return (
        <div className="App">
            <GifGrid category="Funny" />  {/* Ejemplo de categoría */}
            <GifGrid category="Animals" />  {/* Otra categoría */}
        </div>
    );
}

export default App;