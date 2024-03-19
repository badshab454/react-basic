import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
    <div>
        <h2 className="number">{count}</h2>
        <button onClick={increment} className="increment">+</button>
        <button onClick={decrement} className='decrement'>-</button>
    </div>
  )
}

export default Counter