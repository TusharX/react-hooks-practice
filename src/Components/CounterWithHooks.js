import React, { useState } from 'react';

function CounterWithHooks() {

  const [ count, setCount ] = useState(0);

  const increaseCount = () => {

    // for(let i = 1; i < 5; i++){
    //   // setCount(count+1);
    //   // setCount(prevCount => {
    //   //   return prevCount + 1;
    //   // });
    // }

    // setCount(count+1);
    setCount(prevCount => {
      return prevCount + 1;
    });
  }

  const decreaseCount = () => {
    // setCount(count-1);
    setCount(preCount => {
      return preCount - 1;
    });
  }

  return (
    <div>
      <p>CounterWithHooks</p>
      <h3>Count : {count}</h3>

      <button onClick={increaseCount}>
        Increment
      </button>

      <button onClick={decreaseCount}>
        Decrement
      </button>
    </div>
  )
}

export default CounterWithHooks;