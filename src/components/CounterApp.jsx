import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterApp = () => {

    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterApp;