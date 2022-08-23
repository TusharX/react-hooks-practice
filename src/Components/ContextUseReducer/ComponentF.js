import React, { useContext } from 'react';
import { CounterContext } from "./Container";

function ComponentF() {

  const count = useContext(CounterContext);
  return (
    <div>
      <p> ComponentF : {count.counter} </p>
      <button onClick={() => count.dispatchCount("Increment")}>Increment</button>
      <button onClick={() => count.dispatchCount("Decrement")}>Decrement</button>
      <button onClick={() => count.dispatchCount("Reset")}>Reset</button>
    </div>
  )
}

export default ComponentF;