import React, { useContext } from 'react';
import { CounterContext } from "./Container";

function ComponentD() {
  const count = useContext(CounterContext);

  return (
    <div>
      <p> ComponentD : {count.counter} </p>
      <button onClick={() => count.dispatchCount("Increment")}>Increment</button>
      <button onClick={() => count.dispatchCount("Decrement")}>Decrement</button>
      <button onClick={() => count.dispatchCount("Reset")}>Reset</button>
    </div>
  )
}

export default ComponentD;