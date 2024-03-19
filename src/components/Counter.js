import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h2>{count}</h2>
      <div className="button">
        <button onClick={increment} className="btun">
          +
        </button>
        <button onClick={decrement} className="btun">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
