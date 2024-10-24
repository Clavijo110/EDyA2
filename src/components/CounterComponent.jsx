import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy, selectCount } from '../store/counterSlice';

const CounterComponent = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      {/* Botón para incrementar */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* Botón para decrementar */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* Campo para ingresar el valor de incremento */}
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />

      {/* Botón para incrementar por un valor */}
      <button onClick={() => dispatch(incrementBy(incrementAmount))}>
        Increment by {incrementAmount}
      </button>
    </div>
  );
};

export default CounterComponent;