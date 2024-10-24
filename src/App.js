import React from 'react';
import CounterComponent from './components/CounterComponent'; // Importa el componente del contador

const App = () => {
  return (
    <div>
      <h1>My Redux Counter App</h1>
      <CounterComponent />
    </div>
  );
};

export default App;