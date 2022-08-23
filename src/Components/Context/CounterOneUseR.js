import React, { useReducer } from 'react';

let initialState = 0;

const reducer = (state, action) => {

  switch(action){

    case "Increment": 
      return state+1;
    
    case "Decrement":
      return state-1;

    case "Reset":
      return initialState;

    default:
      return state
  }
}

function CounterOneUseReducer() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Counter One UseReducer</p>
      <div>Counter in User Reducer : <strong>{count}</strong></div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default CounterOneUseReducer;