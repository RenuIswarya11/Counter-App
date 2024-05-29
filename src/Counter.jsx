import React, { useState } from 'react';
import './Counter.css'; // Optional: include if you have this file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className="increment" onClick={increment}>Increment</button>
      <button className="decrement" onClick={decrement}>Decrement</button>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;