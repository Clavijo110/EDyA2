import React from 'react';
import { MultipleCustomHooks } from './components/MultipleCustomHooks';
import { TodoApp } from './components/TodoApp';

function App() {
    return (
        <div className="App">
            <TodoApp/>
            <MultipleCustomHooks/>
        </div>
    );
}

export default App;