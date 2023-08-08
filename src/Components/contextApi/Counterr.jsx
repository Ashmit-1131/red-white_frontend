
import React, {useState, useContext } from 'react'
import {CounterContext} from "./CounterProvider"

const Counter3 = () => {
    const {count,increment,decrement}=useContext(CounterContext)
    const [displayCounter, setDisplayCounter] = useState(count);

    const handleIncrement = () => {
      increment();
      setDisplayCounter(displayCounter + 1);
    };
  
    const handleDecrement = () => {
      decrement();
      setDisplayCounter(displayCounter - 1);
    };
    
  return (
    <div>
          <h1>{displayCounter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter3